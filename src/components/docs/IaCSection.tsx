import { motion } from "framer-motion";
import { Cloud, Network, Shield, Server, Database, Users, Layers, Globe } from "lucide-react";

export interface IaCResource {
  name: string;
  icon?: React.ReactNode;
}

const defaultResources: IaCResource[] = [
  { name: "VPC", icon: <Network className="w-4 h-4" /> },
  { name: "Subnets", icon: <Layers className="w-4 h-4" /> },
  { name: "Internet Gateway", icon: <Globe className="w-4 h-4" /> },
  { name: "Security Groups", icon: <Shield className="w-4 h-4" /> },
  { name: "EKS / ECS Cluster", icon: <Cloud className="w-4 h-4" /> },
  { name: "Worker Nodes", icon: <Server className="w-4 h-4" /> },
  { name: "IAM Roles", icon: <Users className="w-4 h-4" /> },
  { name: "Load Balancer", icon: <Database className="w-4 h-4" /> },
];

interface Props {
  resources?: IaCResource[];
  tool?: string;
  description?: string;
}

export function IaCSection({
  resources = defaultResources,
  tool = "Terraform",
  description = "All infrastructure is provisioned using Terraform with modular, version-controlled configurations. Every resource is declaratively defined, enabling repeatable and auditable infrastructure deployments.",
}: Props) {
  return (
    <div className="space-y-4">
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[900px] mx-auto">
        {resources.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 p-3 rounded-lg border border-border/40 bg-muted/10 hover:border-primary/30 transition-colors"
          >
            <span className="text-primary">{r.icon}</span>
            <span className="text-xs font-medium text-foreground">{r.name}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
          alt={tool}
          className="w-5 h-5"
          loading="lazy"
        />
        <span className="text-xs text-muted-foreground">Provisioned with {tool}</span>
      </div>
    </div>
  );
}
