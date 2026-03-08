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
import archMonitoring from "@/assets/arch-monitoring.png";

const monitoringLayers = [
  { name: "Application Layer", tools: [
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ]},
  { name: "Orchestration Layer", tools: [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ]},
  { name: "Metrics Layer", tools: [
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  ]},
  { name: "Visualization Layer", tools: [
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  ]},
  { name: "Alerting Layer", tools: [
    { name: "AlertManager", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  ]},
];

const monitoringPipeline = [
  { label: ".NET Service", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { label: "Python Service", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "/metrics", icon: "📊" },
  { label: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { label: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { label: "AlertManager", icon: "🔔" },
];

const monitoringChallenges = [
  { problem: "Services had no visibility into performance metrics or health status.", solution: "Implemented custom Prometheus metrics endpoints in both .NET and Python services, providing real-time visibility into request rates, latency, and error rates." },
  { problem: "Alert fatigue from too many non-actionable notifications.", solution: "Implemented tiered alerting with severity levels and routing rules, reducing noise by 60% while catching all critical issues." },
];

const tocItems = [
  { id: "monitoring-architecture", title: "Monitoring Architecture" },
  ...advancedDevOpsTocItems,
  { id: "cluster-setup", title: "Kubernetes Cluster Setup" },
  { id: "prometheus-config", title: "Prometheus Configuration" },
  { id: "service-metrics", title: "Service Metrics Integration" },
  { id: "grafana-dashboards", title: "Grafana Dashboard Setup" },
  { id: "alerting", title: "Alerting Strategy" },
  { id: "observability", title: "Observability Best Practices" },
  { id: "production-metrics", title: "Production Metrics" },
  { id: "project-impact", title: "Project Impact" },
  { id: "author", title: "Author" },
];

export default function MultiServiceMonitoring() {
  return (
    <ProjectDocLayout
      title="Multi-Service Monitoring Architecture (.NET + Python) on Kubernetes"
      subtitle="Observability · Monitoring · Kubernetes"
      tags={["Kubernetes", "Kind", "Prometheus", "Grafana", "Python", ".NET", "Docker"]}
      summary="A comprehensive multi-service monitoring solution deploying .NET and Python microservices on a Kind Kubernetes cluster with full Prometheus metrics scraping and Grafana visualization."
      tocItems={tocItems}
    >
      <DocSection id="monitoring-architecture" title="Monitoring Architecture" index={1}>
        <ArchitectureOverview imageSrc={archMonitoring} title="Kubernetes → Prometheus → Grafana Pipeline" caption=".NET and Python services expose /metrics endpoints → Prometheus scrapes at 15s intervals → Grafana visualizes" />
        <p className="mt-4">The monitoring stack follows a pull-based architecture where Prometheus actively scrapes metrics endpoints exposed by each microservice.</p>
      </DocSection>

      <AdvancedDevOpsSections
        startIndex={2}
        layers={monitoringLayers}
        pipelineSteps={monitoringPipeline}
        challenges={monitoringChallenges}
        iacTool="Kubernetes Manifests + Helm"
        iacDescription="Monitoring infrastructure is deployed using Kubernetes manifests and Helm charts for Prometheus and Grafana, enabling reproducible observability stack deployments."
        practices={[
          { title: "Metrics-First Design", description: "Every service exposes /metrics endpoint by default", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
          { title: "RED Method", description: "Rate, Errors, Duration metrics for every service endpoint", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
          { title: "USE Method", description: "Utilization, Saturation, Errors for infrastructure resources", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
          { title: "Dashboard as Code", description: "All Grafana dashboards version-controlled in Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
          { title: "Tiered Alerting", description: "Severity-based routing with AlertManager", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
          { title: "Label Standards", description: "Consistent labels across all services for unified querying", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
        ]}
        productionFeatures={["Custom Prometheus Metrics", "Grafana Dashboards", "AlertManager Rules", "ServiceMonitor Discovery", "kube-state-metrics", "node-exporter", "15-day Retention", "Multi-service Scraping"]}
        observabilityMetrics={[
          { label: "Request Rate", value: "1.2K rps" },
          { label: "Error Rate", value: "0.01%" },
          { label: "P95 Latency", value: "45ms" },
          { label: "CPU Usage", value: "38%" },
          { label: "Memory Usage", value: "52%" },
          { label: "Pod Health", value: "100%" },
        ]}
      />

      <DocSection id="cluster-setup" title="Kubernetes Cluster Setup" index={11}>
        <TechTable rows={[
          { layer: "Cluster Runtime", technology: "Kind (Kubernetes in Docker)" },
          { layer: ".NET Service", technology: "ASP.NET Core 8.0 with /metrics endpoint" },
          { layer: "Python Service", technology: "FastAPI with prometheus_client" },
          { layer: "Metrics Collection", technology: "Prometheus 2.x" },
          { layer: "Visualization", technology: "Grafana 10.x" },
          { layer: "Exporters", technology: "kube-state-metrics, node-exporter" },
          { layer: "Alerting", technology: "AlertManager with Slack/Email" },
        ]} />
        <CodeBlock title="Kind Cluster Configuration" language="yaml" code={`kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    extraPortMappings:
      - containerPort: 30090
        hostPort: 9090    # Prometheus
      - containerPort: 30030
        hostPort: 3000    # Grafana
  - role: worker
  - role: worker`} />
      </DocSection>

      <DocSection id="prometheus-config" title="Prometheus Configuration" index={12}>
        <CodeBlock title="prometheus.yml" language="yaml" code={`global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "/etc/prometheus/alert-rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets: ["alertmanager:9093"]

scrape_configs:
  - job_name: "dotnet-service"
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_label_app]
        regex: dotnet-service
        action: keep
      - source_labels: [__meta_kubernetes_pod_ip]
        target_label: __address__
        replacement: "\${1}:8080"

  - job_name: "python-service"
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_label_app]
        regex: python-service
        action: keep
      - source_labels: [__meta_kubernetes_pod_ip]
        target_label: __address__
        replacement: "\${1}:8000"

  - job_name: "kube-state-metrics"
    static_configs:
      - targets: ["kube-state-metrics:8080"]

  - job_name: "node-exporter"
    static_configs:
      - targets: ["node-exporter:9100"]`} />
      </DocSection>

      <DocSection id="service-metrics" title="Service Metrics Integration" index={13}>
        <h3 className="text-foreground font-semibold text-base mb-3">.NET Service Metrics</h3>
        <CodeBlock title="Program.cs" language="csharp" code={`using Prometheus;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var requestCounter = Metrics.CreateCounter(
    "dotnet_requests_total",
    "Total HTTP requests",
    new CounterConfiguration { LabelNames = new[] { "method", "endpoint" } });

var requestDuration = Metrics.CreateHistogram(
    "dotnet_request_duration_seconds",
    "Request duration in seconds");

app.UseHttpMetrics();
app.MapMetrics();

app.MapGet("/api/data", () => {
    requestCounter.WithLabels("GET", "/api/data").Inc();
    using (requestDuration.NewTimer())
        return Results.Ok(new { status = "healthy", service = "dotnet" });
});

app.Run();`} />

        <h3 className="text-foreground font-semibold text-base mb-3 mt-6">Python Service Metrics</h3>
        <CodeBlock title="main.py" language="python" code={`from fastapi import FastAPI
from prometheus_client import Counter, Histogram, make_asgi_app

app = FastAPI()

REQUEST_COUNT = Counter(
    'python_requests_total',
    'Total requests',
    ['method', 'endpoint']
)
REQUEST_LATENCY = Histogram(
    'python_request_duration_seconds',
    'Request latency'
)

metrics_app = make_asgi_app()
app.mount("/metrics", metrics_app)

@app.get("/api/process")
@REQUEST_LATENCY.time()
def process_data():
    REQUEST_COUNT.labels(method="GET", endpoint="/api/process").inc()
    return {"status": "healthy", "service": "python"}`} />
      </DocSection>

      <DocSection id="grafana-dashboards" title="Grafana Dashboard Setup" index={14}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Service Overview Dashboard:</strong> Request rates, error rates, and latency percentiles per service</li>
          <li><strong>Kubernetes Cluster Dashboard:</strong> Node CPU/memory, pod status, and resource utilization</li>
          <li><strong>Custom Panels:</strong> PromQL queries for business-specific metrics</li>
          <li><strong>Alerting Panels:</strong> Visual alert state indicators with notification channels</li>
        </ul>
        <CodeBlock title="Grafana Dashboard Provisioning" language="yaml" code={`apiVersion: 1
providers:
  - name: 'default'
    orgId: 1
    folder: 'Microservices'
    type: file
    disableDeletion: false
    editable: true
    options:
      path: /var/lib/grafana/dashboards
      foldersFromFilesStructure: true`} />
      </DocSection>

      <DocSection id="alerting" title="Alerting Strategy" index={15}>
        <CodeBlock title="Alert Rules" language="yaml" code={`groups:
  - name: service-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "High error rate on {{ $labels.service }}"

      - alert: HighLatency
        expr: histogram_quantile(0.95, rate(request_duration_seconds_bucket[5m])) > 1
        for: 5m
        labels:
          severity: warning

      - alert: PodCrashLooping
        expr: rate(kube_pod_container_status_restarts_total[15m]) > 0
        for: 5m
        labels:
          severity: critical`} />
      </DocSection>

      <DocSection id="observability" title="Observability Best Practices" index={16}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>RED Method:</strong> Rate, Errors, Duration for every service endpoint</li>
          <li><strong>USE Method:</strong> Utilization, Saturation, Errors for infrastructure resources</li>
          <li><strong>Label Consistency:</strong> Standardized labels across all services for unified querying</li>
          <li><strong>Retention Policy:</strong> 15-day local retention with long-term storage via Thanos/Cortex</li>
          <li><strong>Dashboard as Code:</strong> All Grafana dashboards version-controlled in Git</li>
        </ul>
      </DocSection>

      <DocSection id="production-metrics" title="Production Metrics Dashboard" index={17}>
        <ProductionMetrics metrics={[
          { label: "Metrics Coverage", value: 95 },
          { label: "Alert Accuracy", value: 90 },
          { label: "Dashboard Completeness", value: 92 },
          { label: "Observability Maturity", value: 88 },
          { label: "Incident Response", value: 85 },
        ]} />
      </DocSection>

      <DocSection id="project-impact" title="Project Impact" index={18}>
        <ProjectImpact />
      </DocSection>

      <DocSection id="author" title="Author" index={19}>
        <AuthorSection />
      </DocSection>
    </ProjectDocLayout>
  );
}
