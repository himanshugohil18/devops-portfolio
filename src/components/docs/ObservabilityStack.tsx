import { motion } from "framer-motion";
import { ProgressIndicator, ProgressCard } from "./ProgressIndicator";

export interface ObservabilityMetric {
  label: string;
  value: string;
  color?: string;
}

const defaultMetrics: ObservabilityMetric[] = [
  { label: "CPU Usage", value: "45%" },
  { label: "Memory Usage", value: "62%" },
  { label: "Pod Health", value: "100%" },
  { label: "Container Metrics", value: "Active" },
  { label: "API Latency", value: "< 200ms" },
  { label: "Error Rate", value: "0.02%" },
];

interface Props {
  metrics?: ObservabilityMetric[];
  tools?: { name: string; logo: string; role: string }[];
}

const defaultTools = [
  { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", role: "Metrics Collection" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", role: "Visualization" },
  { name: "AlertManager", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", role: "Alerting" },
];

export function ObservabilityStack({ metrics = defaultMetrics, tools = defaultTools }: Props) {
  return (
    <div className="space-y-6 max-w-[900px] mx-auto">
      <div className="flex flex-wrap gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border/50 bg-muted/10"
          >
            <img src={tool.logo} alt={tool.name} className="w-8 h-8" loading="lazy" />
            <div>
              <p className="text-sm font-semibold text-foreground">{tool.name}</p>
              <p className="text-[10px] text-muted-foreground">{tool.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-border/50 bg-background/50 p-5">
        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live Monitoring Dashboard
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-3 rounded-lg bg-muted/20 border border-border/30"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
              <p className="text-lg font-bold text-primary mt-1">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
