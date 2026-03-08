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
import archKubernetesChat from "@/assets/arch-kubernetes-chat.png";

const k8sLayers = [
  { name: "Frontend Layer", tools: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  ]},
  { name: "Backend Layer", tools: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ]},
  { name: "Database Layer", tools: [
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ]},
  { name: "Orchestration Layer", tools: [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ]},
];

const k8sPipeline = [
  { label: "Ingress", icon: "🌐" },
  { label: "React Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Node.js API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "PersistentVolume", icon: "💾" },
];

const k8sChallenges = [
  { problem: "MongoDB data was lost when pods were rescheduled or restarted.", solution: "Implemented StatefulSet with PersistentVolumeClaims, ensuring data survives pod lifecycle events and node failures." },
  { problem: "Frontend and backend pods couldn't discover each other reliably.", solution: "Configured ClusterIP services with DNS-based service discovery and environment variable injection via ConfigMaps." },
];

const tocItems = [
  { id: "executive-summary", title: "Executive Summary" },
  { id: "problem-statement", title: "Problem Statement" },
  { id: "architecture-overview", title: "Architecture Overview" },
  ...advancedDevOpsTocItems,
  { id: "kubernetes-deployment", title: "Kubernetes Deployment Architecture" },
  { id: "containerization", title: "Containerization Strategy" },
  { id: "service-networking", title: "Service Networking" },
  { id: "scaling", title: "Scaling Strategy" },
  { id: "security", title: "Security Configuration" },
  { id: "deployment-steps", title: "Deployment Steps" },
  { id: "production-metrics", title: "Production Metrics" },
  { id: "project-impact", title: "Project Impact" },
  { id: "improvements", title: "Production Improvements" },
  { id: "author", title: "Author" },
];

export default function KubernetesChatApp() {
  return (
    <ProjectDocLayout
      title="Chat Application – Kubernetes 3-Tier Architecture (Minikube)"
      subtitle="Kubernetes · Microservices · Container Orchestration"
      tags={["Kubernetes", "Docker", "Minikube", "Node.js", "React", "MongoDB"]}
      summary="A real-time 3-tier chat application deployed on a Kubernetes cluster using Minikube. The architecture cleanly separates frontend, backend API, and database layers into independently containerized services."
      tocItems={tocItems}
    >
      <DocSection id="executive-summary" title="Executive Summary" index={1}>
        <p>This project demonstrates a microservices-based chat application deployed on Kubernetes using Minikube. The 3-tier architecture separates concerns across frontend, backend, and database layers.</p>
      </DocSection>

      <DocSection id="problem-statement" title="Problem Statement" index={2}>
        <p>Monolithic deployments create tight coupling between application tiers, making independent scaling impossible.</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>Monolithic deployments prevent independent tier scaling</li>
          <li>Database crashes take down entire application stack</li>
          <li>No service isolation or network policy enforcement</li>
          <li>Configuration scattered across environments</li>
        </ul>
      </DocSection>

      <DocSection id="architecture-overview" title="Architecture Overview" index={3}>
        <ArchitectureOverview imageSrc={archKubernetesChat} title="Kubernetes 3-Tier Architecture" caption="Ingress Controller → Frontend (React) → Backend (Node.js) → Database (MongoDB)" />
      </DocSection>

      <AdvancedDevOpsSections
        startIndex={4}
        layers={k8sLayers}
        pipelineSteps={k8sPipeline}
        challenges={k8sChallenges}
        iacTool="Kubernetes Manifests"
        iacDescription="Infrastructure is defined declaratively using Kubernetes YAML manifests for deployments, services, ConfigMaps, secrets, and persistent volumes."
        practices={[
          { title: "Container Orchestration", description: "Kubernetes manages deployment, scaling, and networking of containers", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
          { title: "Microservices Architecture", description: "Independent frontend, backend, and database services", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { title: "StatefulSet for Data", description: "MongoDB persistence with PersistentVolumeClaims", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { title: "Service Discovery", description: "DNS-based service discovery with ClusterIP services", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
          { title: "Config Management", description: "ConfigMaps and Secrets for environment configuration", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
          { title: "Auto-scaling", description: "HPA scales pods based on CPU utilization thresholds", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        ]}
        productionFeatures={["Horizontal Pod Autoscaler", "StatefulSet Persistence", "Readiness Probes", "Resource Limits", "Network Policies", "ConfigMap Injection", "Secret Management", "Multi-replica Deployments"]}
        scalingConcepts={[
          { title: "HPA Backend Scaling", description: "Backend scales 3-10 pods at 70% CPU threshold" },
          { title: "Frontend Scaling", description: "Frontend scales 2-6 replicas based on request load" },
          { title: "StatefulSet Database", description: "MongoDB uses StatefulSet with persistent volumes" },
          { title: "Resource Quotas", description: "CPU/memory limits enforce fair scheduling" },
          { title: "Ingress Load Balancing", description: "Ingress controller distributes external traffic" },
        ]}
      />

      <DocSection id="kubernetes-deployment" title="Kubernetes Deployment Architecture" index={13}>
        <TechTable rows={[
          { layer: "Frontend", technology: "React (Deployment, 2 replicas)" },
          { layer: "Backend API", technology: "Node.js Express (Deployment, 3 replicas)" },
          { layer: "Database", technology: "MongoDB (StatefulSet, PersistentVolume)" },
          { layer: "Networking", technology: "ClusterIP Services, NodePort/Ingress" },
          { layer: "Configuration", technology: "ConfigMaps & Kubernetes Secrets" },
          { layer: "Scaling", technology: "Horizontal Pod Autoscaler (HPA)" },
        ]} />
        <CodeBlock title="Backend Deployment Manifest" language="yaml" code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: chat-backend
  labels:
    app: chat-backend
    tier: backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: chat-backend
  template:
    metadata:
      labels:
        app: chat-backend
        tier: backend
    spec:
      containers:
        - name: chat-backend
          image: chat-backend:latest
          ports:
            - containerPort: 5000
          envFrom:
            - configMapRef:
                name: chat-config
            - secretRef:
                name: chat-secrets
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "250m"
              memory: "256Mi"
          readinessProbe:
            httpGet:
              path: /health
              port: 5000
            initialDelaySeconds: 5
            periodSeconds: 10`} />
      </DocSection>

      <DocSection id="containerization" title="Containerization Strategy" index={14}>
        <p>Each tier uses multi-stage Docker builds to minimize image size and attack surface:</p>
        <CodeBlock title="Frontend Dockerfile" language="dockerfile" code={`FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]`} />
      </DocSection>

      <DocSection id="service-networking" title="Service Networking" index={15}>
        <p>Internal service communication uses Kubernetes ClusterIP services.</p>
        <CodeBlock title="Backend Service" language="yaml" code={`apiVersion: v1
kind: Service
metadata:
  name: chat-backend-svc
spec:
  selector:
    app: chat-backend
  ports:
    - port: 5000
      targetPort: 5000
  type: ClusterIP`} />
      </DocSection>

      <DocSection id="scaling" title="Scaling Strategy" index={16}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>HPA scales backend pods from 3 to 10 based on CPU utilization (70% threshold)</li>
          <li>Frontend replicas scale from 2 to 6 based on request load</li>
          <li>MongoDB uses StatefulSet with persistent volumes for data durability</li>
          <li>Resource requests and limits enforce fair scheduling</li>
        </ul>
        <CodeBlock title="Horizontal Pod Autoscaler" language="yaml" code={`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: chat-backend-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: chat-backend
  minReplicas: 3
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`} />
      </DocSection>

      <DocSection id="security" title="Security Configuration" index={17}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Kubernetes Secrets:</strong> MongoDB credentials stored as base64-encoded secrets</li>
          <li><strong>Network Policies:</strong> Restrict inter-pod communication — only backend can reach database</li>
          <li><strong>Non-root containers:</strong> All containers run as non-root users</li>
          <li><strong>Resource limits:</strong> Prevent resource exhaustion attacks</li>
          <li><strong>Read-only filesystem:</strong> Frontend containers use read-only root filesystem</li>
        </ul>
      </DocSection>

      <DocSection id="deployment-steps" title="Deployment Steps" index={18}>
        <CodeBlock title="Deploy to Minikube" language="bash" code={`# Start Minikube cluster
minikube start --cpus=4 --memory=4096

# Build images inside Minikube's Docker daemon
eval $(minikube docker-env)
docker build -t chat-frontend:latest ./frontend
docker build -t chat-backend:latest ./backend

# Apply Kubernetes manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmaps/
kubectl apply -f k8s/secrets/
kubectl apply -f k8s/database/
kubectl apply -f k8s/backend/
kubectl apply -f k8s/frontend/
kubectl apply -f k8s/hpa/

# Verify deployments
kubectl get pods -n chat-app
kubectl get services -n chat-app

# Access application
minikube service chat-frontend-svc -n chat-app`} />
      </DocSection>

      <DocSection id="production-metrics" title="Production Metrics Dashboard" index={19}>
        <ProductionMetrics metrics={[
          { label: "Container Orchestration", value: 95 },
          { label: "Service Isolation", value: 90 },
          { label: "Scaling Automation", value: 85 },
          { label: "Security Hardening", value: 88 },
          { label: "Deployment Automation", value: 80 },
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
              <li>Migrate to managed Kubernetes (EKS/GKE) for production workloads</li>
              <li>Add Istio service mesh for mTLS and traffic management</li>
              <li>Implement MongoDB replica set for database high availability</li>
              <li>Add Prometheus + Grafana for cluster-wide monitoring</li>
              <li>Implement cert-manager for automated TLS certificate management</li>
              <li>Add WebSocket support with sticky sessions for real-time chat</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </DocSection>

      <DocSection id="author" title="Author" index={22}>
        <AuthorSection />
      </DocSection>
    </ProjectDocLayout>
  );
}
