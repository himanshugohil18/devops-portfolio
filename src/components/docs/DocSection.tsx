import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DocSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  index: number;
}

export function DocSection({ id, title, children, index }: DocSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="scroll-mt-24"
    >
      <div className="glass-card rounded-2xl border border-border/50 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-display font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
            {index}
          </span>
          {title}
        </h2>
        <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
