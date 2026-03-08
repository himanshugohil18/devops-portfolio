import { motion } from "framer-motion";

export interface ArchLayer {
  name: string;
  tools: { name: string; logo: string }[];
}

const defaultLayers: ArchLayer[] = [
  {
    name: "CI/CD Layer",
    tools: [
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
    ],
  },
  {
    name: "Container Layer",
    tools: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
  {
    name: "Deployment Layer",
    tools: [
      { name: "ArgoCD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ],
  },
  {
    name: "Infrastructure Layer",
    tools: [
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    ],
  },
  {
    name: "Observability Layer",
    tools: [
      { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
    ],
  },
];

interface Props {
  layers?: ArchLayer[];
}

export function ArchitectureLayers({ layers = defaultLayers }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[900px] mx-auto">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/50 bg-muted/10 p-5 hover:border-primary/30 transition-colors"
        >
          <h4 className="text-sm font-semibold text-foreground mb-3">{layer.name}</h4>
          <div className="flex items-center gap-3 flex-wrap">
            {layer.tools.map((tool, ti) => (
              <div key={tool.name} className="flex items-center gap-1.5">
                {ti > 0 && <span className="text-muted-foreground text-xs">→</span>}
                <img src={tool.logo} alt={tool.name} className="w-6 h-6" loading="lazy" />
                <span className="text-xs text-muted-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
