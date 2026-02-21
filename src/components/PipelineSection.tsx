import { motion } from "framer-motion";
import { Code, GitBranch, Box, Database, Cloud, Activity, ArrowRight } from "lucide-react";

const pipelineSteps = [
  { icon: Code, label: "Code", description: "Push to Git" },
  { icon: GitBranch, label: "CI/CD", description: "Jenkins Build" },
  { icon: Box, label: "Docker", description: "Build Image" },
  { icon: Database, label: "Registry", description: "Push to ECR" },
  { icon: Cloud, label: "Deploy", description: "Kubernetes" },
  { icon: Activity, label: "Monitor", description: "Prometheus" },
];

export function PipelineSection() {
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
            <GitBranch className="w-4 h-4" />
            DevOps Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My CI/CD <span className="gradient-text">Pipeline</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end automation from code commit to production deployment with monitoring.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative text-center">
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="font-display font-semibold text-foreground mb-1">{step.label}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {index < pipelineSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block z-10">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated pulse */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-1 hidden md:block"
          style={{ transform: 'translateY(-50%)' }}
        >
          <motion.div
            className="h-full w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ marginLeft: '-8rem' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
