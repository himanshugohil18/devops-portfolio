import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface ProgressIndicatorProps {
  label: string;
  value: number;
}

export function ProgressIndicator({ label, value }: ProgressIndicatorProps) {
  const { count, ref } = useAnimatedCounter(value, 1200);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-bold text-primary tabular-nums">{count}%</span>
      </div>
      <div className="relative w-full h-3 rounded-full bg-secondary/60 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: "linear-gradient(90deg, #7C5CFF, #5AA9FF)",
            boxShadow: "0 0 12px rgba(124, 92, 255, 0.4), 0 0 24px rgba(90, 169, 255, 0.2)",
          }}
        />
      </div>
    </div>
  );
}

interface ProgressCardProps {
  children: React.ReactNode;
  title?: string;
}

export function ProgressCard({ children, title }: ProgressCardProps) {
  return (
    <div
      className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 md:p-8 mt-6"
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      {title && (
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5">{title}</h4>
      )}
      <div className="space-y-5">
        {children}
      </div>
    </div>
  );
}
