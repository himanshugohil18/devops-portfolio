import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="pill pill-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                Open to DevOps Roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                I build{" "}
                <span className="gradient-text">fast, reliable</span>
                <br />
                DevOps pipelines.
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              DevOps Engineer focused on automated CI/CD, cloud-native deployments, 
              and scalable infrastructure. I combine Docker, Kubernetes, and Jenkins 
              to ship production-ready systems on AWS.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button 
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-base rounded-xl transition-all duration-300 glow-button group hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-card border border-border/50 text-foreground font-semibold text-base rounded-xl transition-all duration-300 hover:border-primary/30 hover:bg-card/80 group hover:scale-[1.02]"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </button>
            </motion.div>

            {/* Quick stats */}
            <motion.div 
              className="flex flex-wrap gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "12+", label: "Projects" },
                { value: "15+", label: "CI/CD Pipelines" },
                { value: "25+", label: "Tools Mastered" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold font-display text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-3xl animate-glow-pulse" />
              
              {/* Main Card */}
              <div className="relative glass-card p-6 md:p-8 space-y-6 overflow-hidden">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
                
                <div className="relative grid md:grid-cols-2 gap-6">
                  {/* Manual Workflow */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60 animate-pulse" />
                      <h3 className="font-semibold text-foreground text-sm">Manual Workflow</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {["SSH into server", "Run build manually", "Restart application", "Check logs for errors"].map((step, i) => (
                        <motion.div 
                          key={step}
                          className="flex items-center gap-2 p-2.5 bg-destructive/5 rounded-lg border border-destructive/10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <span className="text-destructive text-xs">✗</span>
                          <span className="text-xs">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Automated CI/CD */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-primary"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <h3 className="font-semibold text-foreground text-sm">Automated CI/CD</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      {["Git push", "Jenkins build", "Docker image", "K8s deploy + metrics"].map((step, i) => (
                        <motion.div 
                          key={step}
                          className="flex items-center gap-2 p-2.5 bg-primary/5 rounded-lg text-foreground border border-primary/10"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <span className="text-primary text-xs">✓</span>
                          <span className="text-xs">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stack caption */}
                <div className="relative pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground text-center">
                    <span className="font-medium text-foreground">Stack:</span> Jenkins · Docker · Kubernetes · ArgoCD · AWS
                  </p>
                </div>

                {/* Decorative glows */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
