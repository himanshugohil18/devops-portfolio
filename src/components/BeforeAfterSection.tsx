import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const comparisons = [
  {
    before: { icon: Clock, text: "2+ hours manual deployment" },
    after: { icon: Zap, text: "< 5 min automated deploy" },
  },
  {
    before: { icon: AlertTriangle, text: "Frequent human errors" },
    after: { icon: CheckCircle, text: "Consistent, error-free builds" },
  },
  {
    before: { icon: Clock, text: "No visibility into issues" },
    after: { icon: TrendingUp, text: "Real-time monitoring & alerts" },
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <TrendingUp className="w-4 h-4" />
            Impact & Results
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Before vs <span className="gradient-text">After</span> Automation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the transformation when DevOps best practices are implemented.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                {/* Before */}
                <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <comparison.before.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-destructive mb-1 uppercase tracking-wider">Before</div>
                      <div className="font-medium text-foreground text-sm">{comparison.before.text}</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>

                {/* After */}
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <comparison.after.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">After</div>
                      <div className="font-medium text-foreground text-sm">{comparison.after.text}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
