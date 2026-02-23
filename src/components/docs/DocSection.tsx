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
      className="scroll-mt-28"
    >
      <div className="glass-card rounded-2xl border border-border/50 p-8 md:p-10 transition-all duration-400 hover:border-primary/30 hover:translate-y-0 hover:scale-100"
        style={{ boxShadow: 'var(--card-shadow)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--card-shadow)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
            {index}
          </span>
          {title}
        </h2>
        <div className="text-muted-foreground leading-[1.8] space-y-4 text-sm md:text-base [&_ul]:space-y-4 [&_li]:leading-[1.8]">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
