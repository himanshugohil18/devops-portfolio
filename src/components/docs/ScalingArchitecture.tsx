import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ScalingConcept {
  title: string;
  description: string;
}

const defaultConcepts: ScalingConcept[] = [
  { title: "Load Balancing", description: "Ingress controller distributes traffic across healthy pods" },
  { title: "Horizontal Pod Autoscaler", description: "Auto-scales pods based on CPU/memory thresholds" },
  { title: "Stateless Containers", description: "No local state enables seamless horizontal scaling" },
  { title: "Distributed Services", description: "Microservices architecture for independent scaling" },
  { title: "Persistent Volumes", description: "Database persistence decoupled from compute lifecycle" },
];

interface Props {
  concepts?: ScalingConcept[];
}

export function ScalingArchitecture({ concepts = defaultConcepts }: Props) {
  return (
    <div className="grid gap-3 md:grid-cols-2 max-w-[900px] mx-auto">
      {concepts.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-muted/10 hover:border-primary/30 transition-colors"
        >
          <ArrowUpRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
