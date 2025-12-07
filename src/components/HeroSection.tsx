import { Button } from "@/components/ui/button";
import { ArrowRight, Download, GitBranch, Cloud, Container } from "lucide-react";

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
            <div className="animate-fade-up">
              <span className="pill pill-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                Open to DevOps & MERN Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 animate-fade-up-delay-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight">
                I build{" "}
                <span className="italic">fast, reliable</span>
                <br />
                <span className="gradient-text font-semibold">DevOps pipelines</span> & full-stack apps.
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-up-delay-2">
              DevOps & MERN developer focused on automated CI/CD, cloud-native deployments, 
              and modern web apps. I combine Docker, Kubernetes, Jenkins and the MERN stack 
              to ship production-ready systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Button variant="hero" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowRight className="ml-1" />
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-1" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up-delay-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GitBranch className="w-4 h-4 text-primary" />
                <span>MERN + DevOps Projects</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Container className="w-4 h-4 text-primary" />
                <span>CI/CD · Docker · Kubernetes</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cloud className="w-4 h-4 text-primary" />
                <span>AWS Cloud Deployments</span>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Card */}
          <div className="animate-fade-up-delay-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 rounded-3xl blur-2xl opacity-60" />
              
              {/* Main Card */}
              <div className="relative card-elevated p-6 md:p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Manual Workflow */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <h3 className="font-semibold text-foreground">Manual Workflow</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                        <span className="text-destructive">→</span>
                        SSH into server
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                        <span className="text-destructive">→</span>
                        Run build manually
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                        <span className="text-destructive">→</span>
                        Restart application
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                        <span className="text-destructive">→</span>
                        Check logs for errors
                      </div>
                    </div>
                  </div>

                  {/* Automated CI/CD */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <h3 className="font-semibold text-foreground">Automated CI/CD</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 p-2 bg-accent rounded-lg text-accent-foreground">
                        <span className="text-primary">✓</span>
                        Git push
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-accent rounded-lg text-accent-foreground">
                        <span className="text-primary">✓</span>
                        Jenkins build
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-accent rounded-lg text-accent-foreground">
                        <span className="text-primary">✓</span>
                        Docker image
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-accent rounded-lg text-accent-foreground">
                        <span className="text-primary">✓</span>
                        K8s deploy + metrics
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stack caption */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    <span className="font-medium">Stack:</span> Jenkins · Docker · Kubernetes · ArgoCD · AWS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
