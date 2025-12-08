import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const comparisons = [
  {
    before: { icon: Clock, text: "2+ hours manual deployment", color: "text-orange-500" },
    after: { icon: Zap, text: "< 5 min automated deploy", color: "text-emerald-500" },
  },
  {
    before: { icon: AlertTriangle, text: "Frequent human errors", color: "text-orange-500" },
    after: { icon: CheckCircle, text: "Consistent, error-free builds", color: "text-emerald-500" },
  },
  {
    before: { icon: Clock, text: "No visibility into issues", color: "text-orange-500" },
    after: { icon: TrendingUp, text: "Real-time monitoring & alerts", color: "text-emerald-500" },
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Impact & Results
          </span>
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            Before vs <span className="italic text-primary">After</span> Automation
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
              className="relative"
            >
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                {/* Before */}
                <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <comparison.before.icon className={`w-6 h-6 ${comparison.before.color}`} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-orange-500 mb-1">BEFORE</div>
                      <div className="font-medium text-foreground">{comparison.before.text}</div>
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
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <comparison.after.icon className={`w-6 h-6 ${comparison.after.color}`} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-emerald-500 mb-1">AFTER</div>
                      <div className="font-medium text-foreground">{comparison.after.text}</div>
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