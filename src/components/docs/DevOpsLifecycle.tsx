import { motion } from "framer-motion";

const stages = [
  { label: "Plan", color: "hsl(var(--primary))" },
  { label: "Code", color: "hsl(var(--primary))" },
  { label: "Build", color: "hsl(var(--primary))" },
  { label: "Test", color: "hsl(var(--primary))" },
  { label: "Secure", color: "hsl(var(--primary))" },
  { label: "Release", color: "hsl(var(--primary))" },
  { label: "Deploy", color: "hsl(var(--primary))" },
  { label: "Monitor", color: "hsl(var(--primary))" },
  { label: "Improve", color: "hsl(var(--primary))" },
];

export function DevOpsLifecycle() {
  return (
    <div className="max-w-[900px] mx-auto overflow-x-auto">
      <div className="flex items-center gap-1 min-w-max py-4 px-2 justify-center">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="flex items-center justify-center px-4 py-2.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <span className="text-xs font-bold text-primary whitespace-nowrap">{stage.label}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <span className="text-primary/50 text-sm mx-1 flex-shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-2">Continuous DevOps Lifecycle — Each stage feeds back into continuous improvement</p>
    </div>
  );
}
