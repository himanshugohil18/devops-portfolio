import { Button } from "@/components/ui/button";
import { ArrowRight, Download, GitBranch, Cloud, Container } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0 bg-blob pointer-events-none" />
      
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="pill pill-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                Open to DevOps & MERN Roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight">
                I build{" "}
                <span className="italic">fast, reliable</span>
                <br />
                <span className="gradient-text font-semibold">DevOps pipelines</span> & full-stack apps.
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              DevOps & MERN developer focused on automated CI/CD, cloud-native deployments, 
              and modern web apps. I combine Docker, Kubernetes, Jenkins and the MERN stack 
              to ship production-ready systems.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MagneticButton>
                <Button variant="hero" size="lg" onClick={scrollToProjects} className="relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-secondary" size="lg" asChild className="group">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-1 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: GitBranch, text: "MERN + DevOps Projects" },
                { icon: Container, text: "CI/CD · Docker · Kubernetes" },
                { icon: Cloud, text: "AWS Cloud Deployments" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-4 h-4 text-primary" />
                  <span>{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Demo Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-3xl blur-2xl"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Card */}
              <motion.div 
                className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-6 md:p-8 space-y-6 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                
                <div className="relative grid md:grid-cols-2 gap-6">
                  {/* Manual Workflow */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60 animate-pulse" />
                      <h3 className="font-semibold text-foreground">Manual Workflow</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {["SSH into server", "Run build manually", "Restart application", "Check logs for errors"].map((step, i) => (
                        <motion.div 
                          key={step}
                          className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg border border-border/30"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <span className="text-destructive">→</span>
                          {step}
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
                      <h3 className="font-semibold text-foreground">Automated CI/CD</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      {["Git push", "Jenkins build", "Docker image", "K8s deploy + metrics"].map((step, i) => (
                        <motion.div 
                          key={step}
                          className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg text-foreground border border-primary/20"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          whileHover={{ x: 5, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                        >
                          <span className="text-primary">✓</span>
                          {step}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stack caption */}
                <div className="relative pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center">
                    <span className="font-medium text-foreground">Stack:</span> Jenkins · Docker · Kubernetes · ArgoCD · AWS
                  </p>
                </div>

                {/* Decorative corner glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}