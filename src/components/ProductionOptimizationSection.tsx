import { motion } from "framer-motion";
import { Activity, DollarSign, Server, RefreshCw } from "lucide-react";

const strategies = [
  {
    icon: Activity,
    title: "Auto-Scaling Architecture",
    description: "Horizontal pod autoscaling, EC2 auto-scaling groups, and serverless compute that dynamically adapts to traffic patterns — zero manual intervention.",
    metric: "Scale to 10x traffic",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization Strategy",
    description: "Right-sized instances, reserved capacity planning, spot fleet strategies, and resource tagging for granular cost attribution across teams.",
    metric: "Up to 40% cost reduction",
  },
  {
    icon: Server,
    title: "High Availability Setup",
    description: "Multi-AZ deployments, automated failover, health-checked load balancing, and disaster recovery runbooks for 99.9%+ uptime targets.",
    metric: "99.9% uptime SLA",
  },
  {
    icon: RefreshCw,
    title: "Zero-Downtime Deployments",
    description: "Rolling updates, blue-green deployments, and canary releases with automated rollback — users never experience an outage during releases.",
    metric: "0s deployment downtime",
  },
];

export function ProductionOptimizationSection() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="pill pill-primary text-xs font-semibold uppercase tracking-wider mb-6 inline-flex">
            Production Strategy
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Production <span className="gradient-text">Optimization Strategy</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade practices for running infrastructure that scales efficiently and never goes down.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-7 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsla(250,80%,65%,0.1)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <strategy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {strategy.metric}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {strategy.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
