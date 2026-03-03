import { motion } from "framer-motion";
import { Target, Zap, Layers, DollarSign, Shield } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Production-Focused Mindset",
    description: "Every solution I build is designed for production from day one — reliable, observable, and battle-tested under real workloads.",
  },
  {
    icon: Zap,
    title: "Automation-First Philosophy",
    description: "I eliminate manual toil systematically. If a process runs twice, it gets automated — CI/CD, IaC, config management, everything.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture Design",
    description: "Infrastructure that grows with demand. I design systems with horizontal scaling, load balancing, and graceful degradation built in.",
  },
  {
    icon: DollarSign,
    title: "Cost-Optimized Cloud Deployments",
    description: "Right-sizing resources, leveraging spot instances, and implementing auto-scaling to keep cloud spend lean without sacrificing performance.",
  },
  {
    icon: Shield,
    title: "Security-First Infrastructure",
    description: "IAM least-privilege, network segmentation, secrets management, and compliance-ready configurations from the ground up.",
  },
];

export function WhyHireMeSection() {
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
            Why Work With Me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Engineering for <span className="gradient-text">Production Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A senior-level approach to infrastructure — focused on reliability, scalability, and measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group relative p-7 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsla(250,80%,65%,0.1)] hover:-translate-y-1 ${index === 4 ? "md:col-start-2 lg:col-start-auto" : ""}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
