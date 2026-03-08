import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const defaultFeatures = [
  "Horizontal Pod Autoscaler",
  "Rolling Deployments",
  "Health Checks",
  "Liveness Probes",
  "Readiness Probes",
  "Centralized Logging",
  "Automated Alerting",
  "High Availability Architecture",
];

interface Props {
  features?: string[];
}

export function ProductionReadiness({ features = defaultFeatures }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[900px] mx-auto">
      {features.map((f, i) => (
        <motion.div
          key={f}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: i * 0.04 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 p-3 rounded-lg border border-border/40 bg-muted/10 hover:border-primary/30 transition-colors"
        >
          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span className="text-xs font-medium text-foreground">{f}</span>
        </motion.div>
      ))}
    </div>
  );
}
