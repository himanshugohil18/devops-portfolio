import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Container, Layers, GitBranch, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    icon: Container,
    tag: "Cloud · AWS",
    title: "Real-World Containerized Application Deployment using AWS ECS & ECR",
    description: "Built and deployed a production-ready containerized application using Docker, Amazon ECR, and ECS Fargate. Implemented CI/CD-based image builds, automated deployments, load balancing, and centralized logging using CloudWatch.",
    stack: ["AWS ECS (Fargate)", "Amazon ECR", "Docker", "IAM", "ALB", "CloudWatch", "CI/CD"],
    link: "#",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "orange"
  },
  {
    icon: Layers,
    tag: "Containers · Docker",
    title: "Django + Nginx + MySQL (Dockerized Multi-Container Architecture)",
    description: "Designed a multi-container Docker architecture with Django backend, Nginx reverse proxy, and MySQL database. Used Docker Compose for orchestration, persistent volumes, and secure service networking.",
    stack: ["Docker", "Docker Compose", "Django", "Nginx", "MySQL", "Linux"],
    link: "#",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    accentColor: "sky"
  },
  {
    icon: GitBranch,
    tag: "DevOps · CI/CD",
    title: "Enterprise Git Workflow Automation with CI Pipeline",
    description: "Implemented an enterprise-grade Git workflow with feature branches, pull requests, and CI validation. Automated build and test stages to ensure code quality and safe merges.",
    stack: ["Git", "GitHub", "CI Pipelines", "GitHub Actions", "Jenkins", "Linux"],
    link: "#",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "violet"
  },
  {
    icon: Zap,
    tag: "Serverless · AWS",
    title: "Serverless Application Deployment on AWS",
    description: "Developed and deployed a serverless application using AWS Lambda and API Gateway. Configured IAM roles and CloudWatch monitoring to deliver a scalable, cost-efficient backend without managing servers.",
    stack: ["AWS Lambda", "API Gateway", "IAM", "CloudWatch", "Serverless Architecture"],
    link: "#",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "emerald"
  }
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section ref={sectionRef} id="projects" className="section-padding relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-blob-bottom pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Featured Work
            </div>
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              Highlighted <span className="italic text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real-world DevOps and MERN projects focusing on automation, reliability and scalability.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal(project)}
              >
                {/* Card container with glassmorphism */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                  
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Neon glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                    <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${project.gradient} rotate-45 opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150`} />
                  </div>
                  
                  {/* Floating number indicator */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted/50 backdrop-blur-sm flex items-center justify-center border border-border/50 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative p-8 md:p-10">
                    {/* Icon with animated background */}
                    <div className="relative mb-6 inline-block">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <project.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    {/* Tag pill */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-muted/80 text-muted-foreground border border-border/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                        {project.tag}
                      </span>
                    </div>

                    {/* Title with underline animation */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 relative inline-block">
                      {project.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack with stagger animation */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-muted/60 rounded-lg text-muted-foreground border border-transparent group-hover:border-border/50 group-hover:bg-background/80 transition-all duration-300"
                          style={{ 
                            transitionDelay: hoveredIndex === index ? `${techIndex * 30}ms` : '0ms'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
                          +{project.stack.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center gap-2 text-primary font-medium group/link">
                      <span className="relative">
                        View Case Study
                        <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}