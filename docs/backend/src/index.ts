/**
 * =============================================================================
 * Node.js + Express + MongoDB Backend Server
 * =============================================================================
 * 
 * Production-ready backend demonstrating:
 * - Secure MongoDB connection handling
 * - Environment-based configuration
 * - Graceful error handling and shutdown
 * - Health check endpoints for container orchestration
 * - Structured logging (CloudWatch compatible)
 * 
 * =============================================================================
 */

import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// =============================================================================
// Configuration
// =============================================================================

const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI,
  logLevel: process.env.LOG_LEVEL || 'info',
};

// =============================================================================
// Structured Logger (CloudWatch Compatible)
// =============================================================================

const logger = {
  info: (message: string, meta?: object) => {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'info',
      message,
      service: 'backend-api',
      environment: config.nodeEnv,
      ...meta,
    }));
  },
  error: (message: string, error?: Error, meta?: object) => {
    console.error(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'error',
      message,
      service: 'backend-api',
      environment: config.nodeEnv,
      // Never log sensitive data like connection strings
      error: error?.message,
      stack: config.nodeEnv === 'development' ? error?.stack : undefined,
      ...meta,
    }));
  },
  warn: (message: string, meta?: object) => {
    console.warn(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'warn',
      message,
      service: 'backend-api',
      environment: config.nodeEnv,
      ...meta,
    }));
  },
};

// =============================================================================
// MongoDB Connection with Retry Logic
// =============================================================================

const connectToMongoDB = async (maxRetries = 5, retryDelay = 5000): Promise<void> => {
  // Validate MONGODB_URI is present
  if (!config.mongoUri) {
    logger.error('MONGODB_URI environment variable is not set');
    throw new Error('Database configuration missing');
  }

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      logger.info(`MongoDB connection attempt ${attempt}/${maxRetries}`);
      
      await mongoose.connect(config.mongoUri, {
        // Connection options for production
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        minPoolSize: 2,
      });

      logger.info('MongoDB connected successfully', {
        readyState: mongoose.connection.readyState,
        host: mongoose.connection.host,
        name: mongoose.connection.name,
      });

      // Set up connection event handlers
      mongoose.connection.on('disconnected', () => {
        logger.warn('MongoDB disconnected');
      });

      mongoose.connection.on('reconnected', () => {
        logger.info('MongoDB reconnected');
      });

      mongoose.connection.on('error', (err) => {
        logger.error('MongoDB connection error', err);
      });

      return;
    } catch (error) {
      logger.error(`MongoDB connection attempt ${attempt} failed`, error as Error);
      
      if (attempt === maxRetries) {
        throw new Error(`Failed to connect to MongoDB after ${maxRetries} attempts`);
      }
      
      // Exponential backoff
      const delay = retryDelay * Math.pow(2, attempt - 1);
      logger.info(`Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

// =============================================================================
// Express Application Setup
// =============================================================================

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    logger.info('Request completed', {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration: Date.now() - start,
    });
  });
  next();
});

// =============================================================================
// Health Check Endpoints
// =============================================================================

// Liveness probe - is the application running?
app.get('/health', (req: Request, res: Response) => {
  const mongoStatus = mongoose.connection.readyState;
  const statusMap: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const isHealthy = mongoStatus === 1;

  res.status(isHealthy ? 200 : 503).json({
    status: isHealthy ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: {
      status: statusMap[mongoStatus] || 'unknown',
      connected: isHealthy,
    },
    environment: config.nodeEnv,
  });
});

// Readiness probe - is the application ready to receive traffic?
app.get('/ready', (req: Request, res: Response) => {
  const isReady = mongoose.connection.readyState === 1;
  
  res.status(isReady ? 200 : 503).json({
    ready: isReady,
    timestamp: new Date().toISOString(),
  });
});

// =============================================================================
// API Routes
// =============================================================================

app.get('/api/v1/status', (req: Request, res: Response) => {
  res.json({
    service: 'DevOps Portfolio Backend',
    version: process.env.npm_package_version || '1.0.0',
    environment: config.nodeEnv,
    timestamp: new Date().toISOString(),
  });
});

// Example protected route (add your business logic here)
app.get('/api/v1/data', async (req: Request, res: Response) => {
  try {
    // Check database connection before proceeding
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        error: 'Service temporarily unavailable',
        message: 'Database connection not available',
      });
    }

    // Your database operations here
    res.json({
      message: 'Data retrieved successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error('Error fetching data', error as Error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});

// =============================================================================
// Error Handling
// =============================================================================

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not found',
    path: req.path,
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Unhandled error', err);
  res.status(500).json({
    error: 'Internal server error',
    message: config.nodeEnv === 'development' ? err.message : undefined,
  });
});

// =============================================================================
// Graceful Shutdown
// =============================================================================

const gracefulShutdown = async (signal: string) => {
  logger.info(`${signal} received, starting graceful shutdown`);
  
  try {
    // Close MongoDB connection
    await mongoose.connection.close();
    logger.info('MongoDB connection closed');
    
    process.exit(0);
  } catch (error) {
    logger.error('Error during graceful shutdown', error as Error);
    process.exit(1);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// =============================================================================
// Application Startup
// =============================================================================

const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectToMongoDB();
    
    // Start Express server
    app.listen(config.port, () => {
      logger.info(`Server started`, {
        port: config.port,
        environment: config.nodeEnv,
      });
    });
  } catch (error) {
    logger.error('Failed to start server', error as Error);
    process.exit(1);
  }
};

startServer();

export default app;
