import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
  gradient: string;
  accentColor: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const Icon = project.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 overflow-auto"
          >
            <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Icon */}
                <div className="absolute -bottom-8 left-8">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-12">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                  {project.tag}
                </span>

                <h2 className="text-2xl md:text-3xl font-display mb-4">{project.title}</h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Extended description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Fully automated CI/CD pipeline with zero-downtime deployments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Containerized architecture for consistent environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Comprehensive monitoring and alerting setup</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium bg-muted/60 rounded-lg text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button className="flex-1" variant="hero">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}