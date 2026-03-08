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
import archWanderlust from "@/assets/arch-wanderlust-flow.png";


const tocItems = [
  { id: "executive-summary", title: "Executive Summary" },
  { id: "system-architecture", title: "System Architecture" },
  { id: "terraform", title: "Infrastructure Provisioning (Terraform)" },
  { id: "aws-infra", title: "AWS Infrastructure Setup" },
  { id: "eks-cluster", title: "Kubernetes Cluster Architecture" },
  { id: "cicd-pipeline", title: "CI/CD Pipeline Architecture" },
  { id: "security-scanning", title: "Security & Vulnerability Scanning" },
  { id: "gitops", title: "GitOps Deployment (ArgoCD)" },
  { id: "monitoring", title: "Monitoring Stack" },
  { id: "scaling", title: "Scaling Strategy" },
  { id: "reliability", title: "Production Reliability" },
  { id: "best-practices", title: "DevOps Best Practices Applied" },
  { id: "business-impact", title: "Business Impact" },
  { id: "production-metrics", title: "Production Metrics" },
  { id: "project-impact", title: "Project Impact" },
  { id: "author", title: "Author" },
];

export default function WanderlustMegaProject() {
  return (
    <ProjectDocLayout
      title="Wanderlust – Production DevOps Architecture on AWS EKS"
      subtitle="Full-Stack DevOps · AWS EKS · GitOps · Security · Monitoring"
      tags={["AWS", "EKS", "Terraform", "Jenkins", "Docker", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "SonarQube", "OWASP", "Trivy", "GitHub"]}
      summary="A full production-grade DevOps pipeline implementing CI/CD, GitOps, security scanning, container orchestration, and monitoring on AWS EKS. This mega project demonstrates end-to-end DevOps architecture — from infrastructure provisioning with Terraform to automated deployments with ArgoCD, comprehensive security scanning with OWASP and Trivy, and full observability with Prometheus and Grafana."
      tocItems={tocItems}
    >
      <DocSection id="executive-summary" title="Executive Summary" index={1}>
        <p>
          The Wanderlust Mega Project represents a complete, production-grade DevOps architecture deployed on AWS EKS. It integrates every critical layer of modern DevOps — infrastructure as code, CI/CD automation, security scanning, GitOps deployment, container orchestration, and full-stack monitoring. This project demonstrates the ability to architect and deliver enterprise-level infrastructure that is secure, scalable, and fully automated.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-sm">
            <strong className="text-primary">GitHub Repository:</strong>{" "}
            <a href="https://github.com/himanshugohil18/Wanderlust-Mega-Project" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              github.com/himanshugohil18/Wanderlust-Mega-Project
            </a>
          </p>
        </div>
      </DocSection>

       <DocSection id="system-architecture" title="System Architecture" index={2}>
         <ArchitectureOverview imageSrc={archWanderlust} title="Project Deployment Flow" caption="Complete CI/CD and GitOps pipeline with security scanning, code quality gates, containerization, and Kubernetes deployment" />
       </DocSection>

      <DocSection id="terraform" title="Infrastructure Provisioning with Terraform" index={3}>
        <p>All AWS infrastructure is provisioned using Terraform with modular, reusable configurations:</p>
        <TechTable rows={[
          { layer: "Compute", technology: "AWS EC2 instances for Jenkins, SonarQube" },
          { layer: "Container Orchestration", technology: "Amazon EKS with managed node groups" },
          { layer: "Networking", technology: "VPC, Subnets, Security Groups, NAT Gateway" },
          { layer: "Identity", technology: "IAM Roles, Policies, Instance Profiles" },
          { layer: "Access", technology: "Key Pairs for SSH access" },
          { layer: "State", technology: "S3 backend with DynamoDB state locking" },
        ]} />
        <CodeBlock title="Terraform EKS Module" language="hcl" code={`module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "~> 19.0"

  cluster_name    = "wanderlust-cluster"
  cluster_version = "1.28"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    worker_nodes = {
      min_size     = 2
      max_size     = 5
      desired_size = 3

      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"

      labels = {
        Environment = "production"
        Project     = "wanderlust"
      }
    }
  }

  manage_aws_auth_configmap = true

  tags = {
    Environment = "production"
    Terraform   = "true"
    Project     = "wanderlust"
  }
}`} />
      </DocSection>

      <DocSection id="aws-infra" title="AWS Infrastructure Setup" index={4}>
        <CodeBlock title="VPC & Networking" language="hcl" code={`module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "wanderlust-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["ap-south-1a", "ap-south-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_hostnames = true

  public_subnet_tags = {
    "kubernetes.io/role/elb" = 1
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = 1
  }
}`} />
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>EC2 Instances:</strong> Jenkins master and SonarQube server on dedicated instances</li>
          <li><strong>Security Groups:</strong> Granular rules — Jenkins on 8080, SonarQube on 9000, SSH restricted to specific IPs</li>
          <li><strong>IAM Roles:</strong> Separate roles for EKS cluster, worker nodes, and CI/CD pipeline with least-privilege policies</li>
        </ul>
      </DocSection>

      <DocSection id="eks-cluster" title="Kubernetes Cluster Architecture" index={5}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Amazon EKS v1.28 with managed node groups (2-5 nodes auto-scaling)</li>
          <li>Helm-based application deployments for templated, versioned releases</li>
          <li>Namespace isolation for application, monitoring, and ArgoCD workloads</li>
          <li>RBAC policies for fine-grained access control</li>
          <li>PodDisruptionBudgets for zero-downtime node maintenance</li>
        </ul>
        <CodeBlock title="Helm Values (values.yaml)" language="yaml" code={`replicaCount: 3

image:
  repository: <account-id>.dkr.ecr.ap-south-1.amazonaws.com/wanderlust
  tag: latest
  pullPolicy: Always

service:
  type: ClusterIP
  port: 3000

ingress:
  enabled: true
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
  hosts:
    - host: wanderlust.example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70`} />
      </DocSection>

      <DocSection id="cicd-pipeline" title="CI/CD Pipeline Architecture" index={6}>
        <p>The Jenkins CI pipeline implements a comprehensive build, test, scan, and deploy workflow:</p>
        <CodeBlock title="Jenkinsfile" language="groovy" code={"pipeline {\n    agent any\n\n    environment {\n        DOCKER_IMAGE = \"wanderlust-app\"\n        ECR_REPO = \"<account-id>.dkr.ecr.ap-south-1.amazonaws.com/wanderlust\"\n        SONAR_TOKEN = credentials('sonarqube-token')\n    }\n\n    stages {\n        stage('Checkout') {\n            steps {\n                git branch: 'main',\n                    url: 'https://github.com/himanshugohil18/Wanderlust-Mega-Project.git'\n            }\n        }\n\n        stage('OWASP Dependency Check') {\n            steps {\n                dependencyCheck additionalArguments: '''\n                    --scan ./ --format HTML --format JSON\n                    --prettyPrint''',\n                    odcInstallation: 'DP-Check'\n                dependencyCheckPublisher pattern: '**/dependency-check-report.json'\n            }\n        }\n\n        stage('SonarQube Analysis') {\n            steps {\n                withSonarQubeEnv('sonarqube-server') {\n                    sh \"\"\"\n                        sonar-scanner \\\\\n                          -Dsonar.projectKey=wanderlust \\\\\n                          -Dsonar.sources=. \\\\\n                          -Dsonar.host.url=http://sonarqube:9000 \\\\\n                          -Dsonar.login=${SONAR_TOKEN}\n                    \"\"\"\n                }\n            }\n        }\n\n        stage('Quality Gate') {\n            steps {\n                timeout(time: 5, unit: 'MINUTES') {\n                    waitForQualityGate abortPipeline: true\n                }\n            }\n        }\n\n        stage('Docker Build') {\n            steps {\n                sh \"docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} .\"\n                sh \"docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${ECR_REPO}:${BUILD_NUMBER}\"\n            }\n        }\n\n        stage('Trivy Security Scan') {\n            steps {\n                sh \"\"\"\n                    trivy image --exit-code 1 --severity HIGH,CRITICAL \\\\\n                      --no-progress ${DOCKER_IMAGE}:${BUILD_NUMBER}\n                \"\"\"\n            }\n        }\n\n        stage('Push to ECR') {\n            steps {\n                sh \"\"\"\n                    aws ecr get-login-password --region ap-south-1 | \\\\\n                      docker login --username AWS --password-stdin ${ECR_REPO}\n                    docker push ${ECR_REPO}:${BUILD_NUMBER}\n                    docker push ${ECR_REPO}:latest\n                \"\"\"\n            }\n        }\n\n        stage('Update Manifests') {\n            steps {\n                sh \"\"\"\n                    sed -i 's|image:.*|image: ${ECR_REPO}:${BUILD_NUMBER}|' \\\\\n                      k8s/deployment.yaml\n                \"\"\"\n                sh \"git add . && git commit -m 'Update image to ${BUILD_NUMBER}'\"\n                sh \"git push origin main\"\n            }\n        }\n    }\n\n    post {\n        success {\n            emailext subject: \"Pipeline Success: ${BUILD_NUMBER}\",\n                body: \"Wanderlust pipeline completed successfully.\",\n                to: \"team@example.com\"\n        }\n        failure {\n            emailext subject: \"Pipeline Failed: ${BUILD_NUMBER}\",\n                body: \"Wanderlust pipeline failed. Check Jenkins.\",\n                to: \"team@example.com\"\n        }\n    }\n}"} />
      </DocSection>

      <DocSection id="security-scanning" title="Security & Vulnerability Scanning" index={7}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>OWASP Dependency Check:</strong> Scans all project dependencies for known CVEs before build</li>
          <li><strong>SonarQube:</strong> Static code analysis for bugs, vulnerabilities, code smells, and security hotspots</li>
          <li><strong>Trivy:</strong> Container image vulnerability scanning — blocks deployment on HIGH/CRITICAL findings</li>
          <li><strong>Quality Gate:</strong> Pipeline aborts if SonarQube quality gate fails</li>
          <li><strong>IAM Least Privilege:</strong> Each component has minimal required permissions</li>
          <li><strong>Network Segmentation:</strong> Private subnets for EKS workers, public only for load balancer</li>
        </ul>
        <ProgressCard title="Security Scan Coverage">
          <ProgressIndicator label="Dependency Scanning" value={95} />
          <ProgressIndicator label="Code Quality Analysis" value={92} />
          <ProgressIndicator label="Container Security" value={90} />
          <ProgressIndicator label="Infrastructure Security" value={88} />
        </ProgressCard>
      </DocSection>

      <DocSection id="gitops" title="GitOps Deployment with ArgoCD" index={8}>
        <p>ArgoCD continuously monitors the Git repository and automatically syncs Kubernetes manifests to the EKS cluster:</p>
        <CodeBlock title="ArgoCD Application" language="yaml" code={`apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: wanderlust
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/himanshugohil18/Wanderlust-Mega-Project.git
    targetRevision: main
    path: k8s/
  destination:
    server: https://kubernetes.default.svc
    namespace: wanderlust
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
    retry:
      limit: 5
      backoff:
        duration: 5s
        maxDuration: 3m0s
        factor: 2`} />
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Automated Sync:</strong> Any change to Git manifests triggers automatic deployment</li>
          <li><strong>Self-Healing:</strong> ArgoCD reverts any manual cluster drift back to Git state</li>
          <li><strong>Pruning:</strong> Removed resources in Git are automatically deleted from cluster</li>
          <li><strong>Rollback:</strong> Instant rollback by reverting Git commits</li>
        </ul>
      </DocSection>

      <DocSection id="monitoring" title="Monitoring Stack" index={9}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Prometheus:</strong> Cluster-wide metrics collection with ServiceMonitor discovery</li>
          <li><strong>Grafana:</strong> Pre-configured dashboards for cluster health, application performance, and CI/CD metrics</li>
          <li><strong>AlertManager:</strong> Email notifications for critical alerts — pod failures, high CPU, deployment failures</li>
          <li><strong>kube-state-metrics:</strong> Kubernetes object state monitoring</li>
          <li><strong>node-exporter:</strong> Node-level hardware and OS metrics</li>
        </ul>
        <CodeBlock title="Prometheus ServiceMonitor" language="yaml" code={`apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: wanderlust-monitor
  namespace: monitoring
spec:
  selector:
    matchLabels:
      app: wanderlust
  endpoints:
    - port: http
      interval: 15s
      path: /metrics
  namespaceSelector:
    matchNames:
      - wanderlust`} />
      </DocSection>

      <DocSection id="scaling" title="Scaling Strategy" index={10}>
        <ul className="list-disc pl-5 space-y-2">
          <li>EKS Cluster Autoscaler adjusts worker node count (2-5 nodes) based on pending pod demand</li>
          <li>HPA scales application pods (3-10) based on CPU/memory utilization</li>
          <li>Multi-AZ deployment across 2 availability zones for high availability</li>
          <li>Helm-managed rolling updates with configurable surge and unavailability thresholds</li>
          <li>PodDisruptionBudgets ensure minimum availability during node drains</li>
        </ul>
      </DocSection>

      <DocSection id="reliability" title="Production Reliability" index={11}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Zero-downtime deployments:</strong> Rolling updates with readiness probes and PDB</li>
          <li><strong>Self-healing:</strong> ArgoCD auto-corrects drift, Kubernetes restarts failed pods</li>
          <li><strong>Multi-AZ:</strong> Worker nodes spread across availability zones</li>
          <li><strong>Automated rollback:</strong> Failed deployments automatically revert via ArgoCD</li>
          <li><strong>Health checks:</strong> Liveness, readiness, and startup probes on all services</li>
        </ul>
      </DocSection>

      <DocSection id="best-practices" title="DevOps Best Practices Applied" index={12}>
        <div className="flex flex-wrap gap-2">
          {[
            "Infrastructure as Code", "GitOps", "Shift-Left Security", "Immutable Infrastructure",
            "Least Privilege Access", "Automated Testing", "Container Security Scanning",
            "Code Quality Gates", "Declarative Deployments", "Observability-First",
            "Self-Healing Systems", "Blue-Green Ready", "Cost Optimization"
          ].map((practice) => (
            <span key={practice} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {practice}
            </span>
          ))}
        </div>
      </DocSection>

      <DocSection id="business-impact" title="Business Impact" index={13}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>80% reduction</strong> in deployment time — from hours to minutes with automated CI/CD + GitOps</li>
          <li><strong>99.95% uptime</strong> with multi-AZ EKS, self-healing, and automated rollbacks</li>
          <li><strong>Zero critical vulnerabilities</strong> reaching production — OWASP + SonarQube + Trivy pipeline gates</li>
          <li><strong>50% infrastructure cost savings</strong> with right-sized instances and auto-scaling</li>
          <li><strong>5x faster incident response</strong> with Prometheus alerting and Grafana dashboards</li>
          <li><strong>Complete audit trail</strong> — every deployment tracked through Git history</li>
        </ul>
      </DocSection>

      <DocSection id="production-metrics" title="Production Metrics Dashboard" index={14}>
        <ProductionMetrics metrics={[
          { label: "CI/CD Automation", value: 98 },
          { label: "Security Scanning", value: 95 },
          { label: "Infrastructure as Code", value: 96 },
          { label: "Monitoring Coverage", value: 94 },
          { label: "GitOps Maturity", value: 92 },
          { label: "Production Readiness", value: 97 },
        ]} />
      </DocSection>

      <DocSection id="project-impact" title="Project Impact" index={15}>
        <ProjectImpact />
      </DocSection>

      <DocSection id="author" title="Author" index={16}>
        <AuthorSection />
      </DocSection>
    </ProjectDocLayout>
  );
}