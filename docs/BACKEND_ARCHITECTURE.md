# Backend Architecture Documentation

## Overview

This document describes the backend architecture for the DevOps portfolio project, demonstrating production-ready patterns for secure database handling, environment-based configuration, and containerized deployment.

## Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Runtime | Node.js 20 LTS | Server-side JavaScript execution |
| Framework | Express.js | RESTful API framework |
| Database | MongoDB (Atlas) | Document database for application data |
| Container | Docker | Application containerization |
| Orchestration | AWS ECS Fargate | Serverless container management |
| CI/CD | AWS CodePipeline | Automated deployment pipeline |

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              PRODUCTION ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────────────────────┐ │
│  │              │     │              │     │                              │ │
│  │   React      │────▶│   AWS ALB    │────▶│   ECS Fargate Cluster       │ │
│  │   Frontend   │     │   (HTTPS)    │     │                              │ │
│  │              │     │              │     │   ┌────────────────────────┐ │ │
│  └──────────────┘     └──────────────┘     │   │  Node.js + Express     │ │ │
│                                            │   │  Backend Service       │ │ │
│                                            │   │                        │ │ │
│                                            │   │  - REST API            │ │ │
│                                            │   │  - MongoDB Driver      │ │ │
│                                            │   │  - Health Checks       │ │ │
│                                            │   └───────────┬────────────┘ │ │
│                                            │               │              │ │
│                                            └───────────────┼──────────────┘ │
│                                                            │                │
│                                                            ▼                │
│                                            ┌──────────────────────────────┐ │
│                                            │                              │ │
│                                            │   MongoDB Atlas (Managed)   │ │
│                                            │                              │ │
│                                            │   - Replica Set             │ │
│                                            │   - Auto-scaling            │ │
│                                            │   - Automated Backups       │ │
│                                            │                              │ │
│                                            └──────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Environment Configuration

### Required Environment Variables

| Variable | Description | Source |
|----------|-------------|--------|
| `MONGODB_URI` | MongoDB connection string | AWS Secrets Manager |
| `NODE_ENV` | Environment (development/production) | ECS Task Definition |
| `PORT` | Application port (default: 3000) | ECS Task Definition |
| `LOG_LEVEL` | Logging verbosity | ECS Task Definition |

### Security Best Practices

- ✅ Never hardcode credentials in source code
- ✅ Use AWS Secrets Manager for sensitive values
- ✅ Rotate credentials regularly
- ✅ Use IAM roles with least-privilege access
- ✅ Enable MongoDB Atlas network restrictions
- ✅ Use TLS/SSL for all database connections

## Database Connection Strategy

### Connection Handling

```javascript
// Connection with retry logic and graceful error handling
const connectWithRetry = async (maxRetries = 5, delay = 5000) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      logger.info('MongoDB connected successfully');
      return;
    } catch (error) {
      logger.error(`MongoDB connection attempt ${attempt} failed`);
      if (attempt === maxRetries) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};
```

### Graceful Shutdown

```javascript
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, closing MongoDB connection');
  await mongoose.connection.close();
  process.exit(0);
});
```

## CI/CD Pipeline

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CI/CD PIPELINE                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌────────┐│
│  │          │    │          │    │          │    │          │    │        ││
│  │  GitHub  │───▶│ CodeBuild│───▶│   ECR    │───▶│CodeDeploy│───▶│  ECS   ││
│  │  Push    │    │  Build   │    │  Push    │    │  Deploy  │    │Fargate ││
│  │          │    │          │    │          │    │          │    │        ││
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘    └────────┘│
│                                                                              │
│  Stages:                                                                     │
│  1. Source    - Pull latest code from repository                            │
│  2. Build     - Run tests, build Docker image                               │
│  3. Push      - Tag and push image to ECR                                   │
│  4. Deploy    - Update ECS service with new task definition                 │
│  5. Verify    - Health check validation                                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Health Checks

### Application Health Endpoint

```javascript
app.get('/health', async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(dbStatus === 'connected' ? 200 : 503).json({
    status: dbStatus === 'connected' ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
    database: dbStatus,
    uptime: process.uptime()
  });
});
```

### ECS Health Check Configuration

```json
{
  "healthCheck": {
    "command": ["CMD-SHELL", "curl -f http://localhost:3000/health || exit 1"],
    "interval": 30,
    "timeout": 5,
    "retries": 3,
    "startPeriod": 60
  }
}
```

## Monitoring & Logging

### CloudWatch Integration

- Application logs streamed to CloudWatch Logs
- Custom metrics for database connection status
- Alarms for connection failures and high latency

### Log Format

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "level": "info",
  "message": "MongoDB connected successfully",
  "service": "backend-api",
  "environment": "production"
}
```

## Failure Handling

### Database Unavailable

When MongoDB is unavailable, the application:

1. Returns 503 Service Unavailable for database-dependent endpoints
2. Continues serving cached data if available
3. Logs connection failures without exposing credentials
4. Attempts automatic reconnection with exponential backoff

### Circuit Breaker Pattern

```javascript
// Circuit breaker prevents cascade failures
const breaker = new CircuitBreaker(dbOperation, {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000
});
```

## Security Considerations

### Network Security

- MongoDB Atlas configured with VPC peering
- Security groups restrict access to ECS tasks only
- All traffic encrypted with TLS 1.2+

### Credential Management

- MONGODB_URI stored in AWS Secrets Manager
- ECS task role has read-only access to specific secrets
- Credentials never logged or exposed in error messages

## Deployment Checklist

- [ ] MongoDB Atlas cluster created and configured
- [ ] VPC peering established (if applicable)
- [ ] MONGODB_URI stored in Secrets Manager
- [ ] ECS task definition updated with environment variables
- [ ] Health check endpoint verified
- [ ] CloudWatch log group created
- [ ] Alarms configured for critical metrics
