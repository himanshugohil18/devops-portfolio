import { motion } from "framer-motion";
import { Rocket, Shield, TrendingUp, Activity, Lock } from "lucide-react";

interface ImpactItem {
  icon: typeof Rocket;
  label: string;
  value: string;
  color: string;
}

interface ProjectImpactProps {
  items?: ImpactItem[];
}

const defaultItems: ImpactItem[] = [
  { icon: Rocket, label: "Deployment Automation", value: "Fully Automated", color: "from-primary to-blue-500" },
  { icon: Shield, label: "Production Readiness", value: "Enterprise Grade", color: "from-emerald-500 to-green-400" },
  { icon: TrendingUp, label: "Infrastructure Scalability", value: "Auto-Scaling", color: "from-amber-500 to-orange-400" },
  { icon: Activity, label: "Monitoring Integration", value: "Full Coverage", color: "from-cyan-500 to-blue-400" },
  { icon: Lock, label: "Security Best Practices", value: "Implemented", color: "from-purple-500 to-pink-400" },
];

export function ProjectImpact({ items = defaultItems }: ProjectImpactProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative p-4 rounded-xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-400 hover:shadow-[0_0_20px_hsla(250,80%,65%,0.1)] hover:-translate-y-1 text-center">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 opacity-90 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-bold text-foreground mb-0.5">{item.value}</div>
            <div className="text-[10px] text-muted-foreground font-medium">{item.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
