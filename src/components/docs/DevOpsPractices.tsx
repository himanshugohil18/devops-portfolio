import { motion } from "framer-motion";

export interface Practice {
  title: string;
  description: string;
  logo?: string;
}

const defaultPractices: Practice[] = [
  { title: "GitOps Deployments", description: "Automated deployments using ArgoCD with Git as single source of truth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
  { title: "Infrastructure as Code", description: "Declarative infrastructure provisioning with Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { title: "CI/CD Automation", description: "Automated build, test, and deploy pipelines with Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { title: "Container Security", description: "Image vulnerability scanning with Trivy before deployment", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { title: "Code Quality", description: "Static analysis and quality gates using SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  { title: "Monitoring & Observability", description: "Full-stack monitoring with Prometheus and Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
];

interface Props {
  practices?: Practice[];
}

export function DevOpsPractices({ practices = defaultPractices }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[900px] mx-auto">
      {practices.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.07 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/50 bg-muted/10 p-5 hover:border-primary/30 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-3">
            {p.logo && <img src={p.logo} alt={p.title} className="w-7 h-7 group-hover:scale-110 transition-transform" loading="lazy" />}
            <h4 className="text-sm font-semibold text-foreground">{p.title}</h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
