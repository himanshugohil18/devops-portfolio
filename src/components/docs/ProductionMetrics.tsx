import { ProgressIndicator, ProgressCard } from "./ProgressIndicator";

interface ProductionMetricsProps {
  metrics?: { label: string; value: number }[];
}

const defaultMetrics = [
  { label: "Deployment Automation", value: 90 },
  { label: "System Reliability", value: 95 },
  { label: "Monitoring Coverage", value: 85 },
  { label: "Infrastructure Scalability", value: 88 },
  { label: "Security Implementation", value: 82 },
];

export function ProductionMetrics({ metrics = defaultMetrics }: ProductionMetricsProps) {
  return (
    <ProgressCard title="Production Metrics Dashboard">
      {metrics.map((metric) => (
        <ProgressIndicator key={metric.label} label={metric.label} value={metric.value} />
      ))}
    </ProgressCard>
  );
}
