import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Rocket, Wrench, TrendingUp, Cloud, CheckCircle } from "lucide-react";

const metrics = [
  { icon: Rocket, label: "Production Projects", value: 12, suffix: "+", color: "from-primary to-blue-500" },
  { icon: Wrench, label: "DevOps Tools Used", value: 25, suffix: "+", color: "from-blue-500 to-cyan-400" },
  { icon: TrendingUp, label: "Deployment Success", value: 99, suffix: ".9%", color: "from-emerald-500 to-green-400" },
  { icon: Cloud, label: "Cloud Platform", value: 0, suffix: "AWS", color: "from-amber-500 to-orange-400", isText: true },
  { icon: CheckCircle, label: "Status", value: 0, suffix: "", color: "from-primary to-purple-400", isStatus: true },
];

function MetricCard({ icon: Icon, label, value, suffix, color, index, isText, isStatus }: {
  icon: typeof Rocket; label: string; value: number; suffix: string; color: string; index: number; isText?: boolean; isStatus?: boolean;
}) {
  const { count, ref } = useAnimatedCounter(value, 1500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsla(250,80%,65%,0.12)] hover:-translate-y-1 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold font-display text-foreground">
              {isText ? (
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">AWS</span>
              ) : isStatus ? (
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400 text-lg md:text-xl">Available</span>
              ) : (
                <>{count}{suffix}</>
              )}
            </div>
            <div className="text-muted-foreground text-xs font-medium mt-0.5">{label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroMetricsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Production <span className="text-primary">Metrics</span>
          </h3>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
