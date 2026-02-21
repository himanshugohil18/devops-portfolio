import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { motion } from "framer-motion";
import { Code, Rocket, Cloud, GitBranch } from "lucide-react";

const stats = [
  { icon: Code, label: "Skills Mastered", value: 25, suffix: "+" },
  { icon: Rocket, label: "Projects Deployed", value: 12, suffix: "+" },
  { icon: Cloud, label: "Cloud Deployments", value: 8, suffix: "+" },
  { icon: GitBranch, label: "CI/CD Pipelines", value: 15, suffix: "+" },
];

function StatCard({ icon: Icon, label, value, suffix, index }: { 
  icon: typeof Code; label: string; value: number; suffix: string; index: number;
}) {
  const { count, ref } = useAnimatedCounter(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          
          <div className="text-4xl md:text-5xl font-bold font-display text-foreground mb-2">
            {count}{suffix}
          </div>
          
          <div className="text-muted-foreground text-sm font-medium">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-wide relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
