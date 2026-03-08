import { motion } from "framer-motion";

export interface PipelineStep {
  label: string;
  icon?: string;
}

const defaultSteps: PipelineStep[] = [
  { label: "Developer", icon: "👨‍💻" },
  { label: "GitHub Push", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { label: "Jenkins Pipeline", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { label: "Security Scanning", icon: "🔒" },
  { label: "Docker Build", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "Container Registry", icon: "📦" },
  { label: "ArgoCD Deploy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
  { label: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { label: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { label: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
];

interface Props {
  steps?: PipelineStep[];
}

export function DevOpsPipelineFlow({ steps = defaultSteps }: Props) {
  const isUrl = (s?: string) => s?.startsWith("http");

  return (
    <div className="max-w-[900px] mx-auto overflow-x-auto">
      <div className="flex items-center gap-1 min-w-max py-4 px-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 px-3 py-3 rounded-lg border border-border/40 bg-muted/10 hover:border-primary/40 transition-colors min-w-[80px]"
            >
              {isUrl(step.icon) ? (
                <img src={step.icon} alt={step.label} className="w-7 h-7" loading="lazy" />
              ) : (
                <span className="text-xl">{step.icon}</span>
              )}
              <span className="text-[10px] text-muted-foreground text-center leading-tight font-medium">{step.label}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <span className="text-primary/60 text-sm mx-1 flex-shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
