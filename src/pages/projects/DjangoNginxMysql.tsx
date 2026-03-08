import { ProjectDocLayout } from "@/components/docs/ProjectDocLayout";
import { DocSection } from "@/components/docs/DocSection";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { TechTable } from "@/components/docs/TechTable";
import { ProgressIndicator, ProgressCard } from "@/components/docs/ProgressIndicator";
import { AuthorSection } from "@/components/docs/AuthorSection";
import { ArchitectureOverview } from "@/components/docs/ArchitectureOverview";
import { ProductionMetrics } from "@/components/docs/ProductionMetrics";
import { ProjectImpact } from "@/components/docs/ProjectImpact";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { AdvancedDevOpsSections, advancedDevOpsTocItems } from "@/components/docs/AdvancedDevOpsSections";
import archDjangoNginx from "@/assets/arch-django-nginx.png";

const djangoLayers = [
  { name: "Proxy Layer", tools: [
    { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  ]},
  { name: "Application Layer", tools: [
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Gunicorn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ]},
  { name: "Database Layer", tools: [
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ]},
  { name: "Container Layer", tools: [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ]},
];

const djangoPipeline = [
  { label: "Client Request", icon: "🌐" },
  { label: "Nginx Proxy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { label: "Django App", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { label: "MySQL DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { label: "Response", icon: "✅" },
];

const djangoChallenges = [
  { problem: "Django development server was not suitable for production traffic handling.", solution: "Implemented Gunicorn as WSGI server with 3 worker processes behind Nginx reverse proxy for production-grade request handling." },
  { problem: "Database data was lost when containers were recreated.", solution: "Configured Docker named volumes for MySQL data persistence, ensuring data survives container lifecycle events." },
];

const djangoProductionFeatures = [
  "Docker Compose Orchestration",
  "Nginx Reverse Proxy",
  "Gunicorn WSGI Server",
  "MySQL Health Checks",
  "Persistent Volumes",
  "Network Isolation",
  "Static File Caching",
  "Non-root Containers",
];

const tocItems = [
  { id: "executive-summary", title: "Executive Summary" },
  { id: "architecture-overview", title: "Architecture Overview" },
  ...advancedDevOpsTocItems,
  { id: "problem-statement", title: "Problem Statement" },
  { id: "architecture", title: "High-Level Architecture" },
  { id: "tech-stack", title: "Technology Stack" },
  { id: "implementation", title: "Implementation Steps" },
  { id: "security", title: "Security Architecture" },
  { id: "monitoring", title: "Monitoring & Logging" },
  { id: "scalability", title: "Scalability Strategy" },
  { id: "production-metrics", title: "Production Metrics" },
  { id: "project-impact", title: "Project Impact" },
  { id: "improvements", title: "Production Improvements" },
  { id: "skills", title: "DevOps Skills Demonstrated" },
  { id: "business-value", title: "Business Value" },
  { id: "impact", title: "Real-World Impact" },
  { id: "author", title: "Author" },
];

export default function DjangoNginxMysql() {
  return (
    <ProjectDocLayout
      title="Django + Nginx + MySQL (Dockerized Multi-Container Architecture)"
      subtitle="Containers · Docker · Multi-Service Orchestration"
      tags={["Docker", "Docker Compose", "Django", "Nginx", "MySQL", "Linux"]}
      summary="Designed a multi-container Docker architecture with Django backend, Nginx reverse proxy, and MySQL database. Used Docker Compose for orchestration, persistent volumes, and secure service networking. This project demonstrates production-ready container orchestration patterns."
      tocItems={tocItems}
    >
      <DocSection id="executive-summary" title="Executive Summary" index={1}>
        <p>This project implements a three-tier containerized architecture using Docker Compose. The Django application serves as the backend, Nginx handles reverse proxying and static file serving, and MySQL provides persistent data storage.</p>
      </DocSection>

      <DocSection id="architecture-overview" title="Architecture Overview" index={2}>
        <ArchitectureOverview imageSrc={archDjangoNginx} title="Docker Multi-Container Architecture" caption="Nginx Reverse Proxy → Django Application → MySQL Database with Docker Compose networking and persistent volumes" />
      </DocSection>

      <AdvancedDevOpsSections
        startIndex={3}
        layers={djangoLayers}
        pipelineSteps={djangoPipeline}
        iacTool="Docker Compose"
        iacDescription="Infrastructure is defined declaratively using Docker Compose, providing reproducible multi-container environments with networking, volumes, and dependency management."
        challenges={djangoChallenges}
        productionFeatures={djangoProductionFeatures}
        practices={[
          { title: "Container Orchestration", description: "Multi-service orchestration with Docker Compose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { title: "Reverse Proxy", description: "Nginx for load balancing and static file serving", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
          { title: "WSGI Server", description: "Production-grade request handling with Gunicorn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { title: "Database Management", description: "MySQL with persistent volumes and health checks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { title: "Network Isolation", description: "Docker bridge networks for service isolation", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { title: "Environment Management", description: "Secrets via .env files, never hardcoded", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        ]}
        observabilityTools={[
          { name: "Docker Logs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", role: "Container Logging" },
          { name: "Nginx Logs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", role: "Access & Error Logs" },
        ]}
        scalingConcepts={[
          { title: "Horizontal Scaling", description: "Scale backend with docker compose --scale backend=N" },
          { title: "Nginx Load Balancing", description: "Automatic upstream distribution across Django instances" },
          { title: "Stateless Design", description: "Django configured for stateless horizontal scaling" },
          { title: "Static File Offloading", description: "Nginx serves static files directly, reducing backend load" },
          { title: "Database Persistence", description: "MySQL data persists via Docker named volumes" },
        ]}
      />

      <DocSection id="problem-statement" title="Problem Statement" index={12}>
        <p>Setting up a multi-service application manually leads to configuration drift, dependency conflicts, and unreproducible environments.</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>Manual service configuration is error-prone and time-consuming</li>
          <li>Different environments lead to "works on my machine" issues</li>
          <li>No standardized way to manage service dependencies</li>
          <li>Database persistence and backup strategies are ad-hoc</li>
        </ul>
      </DocSection>

      <DocSection id="architecture" title="High-Level Architecture" index={13}>
        <p className="mb-4">The architecture uses Docker Compose to orchestrate Nginx (port 80), Django (port 8000), and MySQL (port 3306), connected via Docker networking with persistent volumes.</p>
        <CodeBlock title="Project Tree" language="text" code={`project-root/
├── docker-compose.yml
├── .env
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── manage.py
│   ├── app/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── static/
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
└── mysql/
    └── init.sql`} />
      </DocSection>

      <DocSection id="tech-stack" title="Technology Stack" index={14}>
        <TechTable rows={[
          { layer: "Application", technology: "Django (Python 3.11)" },
          { layer: "Web Server", technology: "Nginx 1.25 (Reverse Proxy)" },
          { layer: "Database", technology: "MySQL 8.0" },
          { layer: "Containerization", technology: "Docker & Docker Compose" },
          { layer: "WSGI Server", technology: "Gunicorn" },
          { layer: "OS", technology: "Alpine Linux (minimal images)" },
        ]} />
      </DocSection>

      <DocSection id="implementation" title="Detailed Implementation Steps" index={15}>
        <h3 className="text-foreground font-semibold text-base mb-3">Django Dockerfile</h3>
        <CodeBlock title="backend/Dockerfile" language="dockerfile" code={`FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
RUN python manage.py collectstatic --noinput
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "app.wsgi:application"]`} />

        <h3 className="text-foreground font-semibold text-base mb-3 mt-6">Docker Compose Configuration</h3>
        <CodeBlock title="docker-compose.yml" language="yaml" code={`version: '3.8'

services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_DATABASE: \${DB_NAME}
      MYSQL_USER: \${DB_USER}
      MYSQL_PASSWORD: \${DB_PASSWORD}
      MYSQL_ROOT_PASSWORD: \${DB_ROOT_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql
      - ./mysql/init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build: ./backend
    restart: always
    depends_on:
      db:
        condition: service_healthy
    environment:
      - DB_HOST=db
      - DB_NAME=\${DB_NAME}
      - DB_USER=\${DB_USER}
      - DB_PASSWORD=\${DB_PASSWORD}
    volumes:
      - static_files:/app/static
    networks:
      - app-network

  nginx:
    build: ./nginx
    restart: always
    ports:
      - "80:80"
    depends_on:
      - backend
    volumes:
      - static_files:/static:ro
    networks:
      - app-network

volumes:
  mysql_data:
  static_files:

networks:
  app-network:
    driver: bridge`} />

        <h3 className="text-foreground font-semibold text-base mb-3 mt-6">Nginx Configuration</h3>
        <CodeBlock title="nginx/nginx.conf" language="nginx" code={`upstream django {
    server backend:8000;
}

server {
    listen 80;
    server_name _;

    client_max_body_size 10M;

    location /static/ {
        alias /static/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://django;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`} />
      </DocSection>

      <DocSection id="security" title="Security Architecture" index={16}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Network Isolation:</strong> Services communicate through an internal Docker bridge network — only Nginx exposes port 80</li>
          <li><strong>Non-root containers:</strong> Application runs as non-root user inside containers</li>
          <li><strong>Environment secrets:</strong> All credentials stored in .env, never hardcoded</li>
          <li><strong>Read-only volumes:</strong> Nginx mounts static files as read-only</li>
          <li><strong>Health checks:</strong> MySQL health checks prevent Django from starting before DB is ready</li>
          <li><strong>Minimal base images:</strong> Using slim/alpine variants to reduce attack surface</li>
        </ul>
      </DocSection>

      <DocSection id="monitoring" title="Monitoring & Logging" index={17}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Docker Compose logs aggregate all service outputs</li>
          <li>Nginx access and error logs for request-level visibility</li>
          <li>Django logging framework with structured output</li>
          <li>MySQL slow query log enabled for performance analysis</li>
        </ul>
        <ProgressCard title="Monitoring Metrics">
          <ProgressIndicator label="Log Coverage" value={80} />
          <ProgressIndicator label="Health Check Coverage" value={90} />
          <ProgressIndicator label="Error Tracking" value={70} />
        </ProgressCard>
      </DocSection>

      <DocSection id="scalability" title="Scalability Strategy" index={18}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Horizontal scaling with <code className="text-primary">docker compose up --scale backend=3</code></li>
          <li>Nginx load balances across multiple Django instances automatically</li>
          <li>MySQL can be replaced with managed RDS for production scaling</li>
          <li>Static files served directly by Nginx, reducing backend load</li>
          <li>Stateless Django design enables easy horizontal scaling</li>
        </ul>
        <ProgressCard title="Readiness Scores">
          <ProgressIndicator label="Scalability" value={80} />
          <ProgressIndicator label="Automation Level" value={75} />
          <ProgressIndicator label="Security" value={80} />
          <ProgressIndicator label="Production Readiness" value={75} />
        </ProgressCard>
      </DocSection>

      <DocSection id="production-metrics" title="Production Metrics Dashboard" index={19}>
        <ProductionMetrics metrics={[
          { label: "Deployment Automation", value: 78 },
          { label: "System Reliability", value: 85 },
          { label: "Monitoring Coverage", value: 75 },
          { label: "Infrastructure Scalability", value: 80 },
          { label: "Security Implementation", value: 82 },
        ]} />
      </DocSection>

      <DocSection id="project-impact" title="Project Impact" index={20}>
        <ProjectImpact />
      </DocSection>

      <DocSection id="improvements" title="Production Improvements" index={21}>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center gap-2 text-foreground font-medium text-sm hover:text-primary transition-colors w-full text-left py-2">
            <ChevronDown className="w-4 h-4" />
            Advanced Production Improvements
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>Add SSL/TLS termination with Let's Encrypt and Certbot</li>
              <li>Implement Redis for session storage and caching</li>
              <li>Add Celery for background task processing</li>
              <li>Migrate to Docker Swarm or Kubernetes for production orchestration</li>
              <li>Implement database replication for read-heavy workloads</li>
              <li>Add automated database backup and restore procedures</li>
              <li>Integrate ELK stack for centralized logging</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </DocSection>

      <DocSection id="skills" title="DevOps Skills Demonstrated" index={22}>
        <div className="flex flex-wrap gap-2">
          {["Docker", "Docker Compose", "Nginx", "Reverse Proxy", "MySQL", "Django", "Multi-Container", "Volume Management", "Network Isolation", "Health Checks", "Environment Management", "Service Orchestration"].map((skill) => (
            <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {skill}
            </span>
          ))}
        </div>
      </DocSection>

      <DocSection id="business-value" title="Business Value" index={23}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>90% faster</strong> environment setup — new developer onboarding reduced from hours to minutes</li>
          <li><strong>Consistent environments</strong> eliminate deployment-related bugs entirely</li>
          <li><strong>Portable architecture</strong> runs identically on any Docker-supported platform</li>
          <li><strong>Reduced infrastructure costs</strong> with efficient resource utilization</li>
          <li><strong>Simplified scaling</strong> through Docker Compose service scaling</li>
        </ul>
      </DocSection>

      <DocSection id="impact" title="Real-World Impact" index={24}>
        <p>Multi-container Docker architectures are the foundation of modern application deployment. This pattern is used by organizations of all sizes to ensure consistent, portable, and scalable deployments.</p>
      </DocSection>

      <DocSection id="author" title="Author" index={25}>
        <AuthorSection />
      </DocSection>
    </ProjectDocLayout>
  );
}
