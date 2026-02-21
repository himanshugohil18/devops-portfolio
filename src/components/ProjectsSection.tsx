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
    gradient: "from-primary/20 via-blue-500/10 to-transparent",
    accentColor: "primary"
  },
  {
    icon: Layers,
    tag: "Containers · Docker",
    title: "Django + Nginx + MySQL (Dockerized Multi-Container Architecture)",
    description: "Designed a multi-container Docker architecture with Django backend, Nginx reverse proxy, and MySQL database. Used Docker Compose for orchestration, persistent volumes, and secure service networking.",
    stack: ["Docker", "Docker Compose", "Django", "Nginx", "MySQL", "Linux"],
    link: "#",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "blue"
  },
  {
    icon: GitBranch,
    tag: "DevOps · CI/CD",
    title: "Enterprise Git Workflow Automation with CI Pipeline",
    description: "Implemented an enterprise-grade Git workflow with feature branches, pull requests, and CI validation. Automated build and test stages to ensure code quality and safe merges.",
    stack: ["Git", "GitHub", "CI Pipelines", "GitHub Actions", "Jenkins", "Linux"],
    link: "#",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "purple"
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
  },
  {
    icon: GitBranch,
    tag: "CI/CD · Jenkins",
    title: "Django Notes App – CI/CD Automation with Jenkins",
    description: "Built a Django-based Notes application and implemented a complete CI/CD pipeline using Jenkins to automate build, test, and deployment workflows. The pipeline triggers on GitHub commits, installs dependencies, runs application checks, and prepares the application for deployment.",
    stack: ["Jenkins", "GitHub", "Django", "Python", "CI/CD Pipelines", "Linux", "Shell Scripting"],
    link: "https://github.com/himanshugohil18/django-notes-app",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "rose"
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section ref={sectionRef} id="projects" className="section-padding relative overflow-hidden">
        <div className="container-wide relative">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Featured Work
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Highlighted <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real-world DevOps and cloud projects focusing on automation, reliability and scalability.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
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
                <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2 group-hover:scale-[1.01]">
                  
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Top glow line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted/50 backdrop-blur-sm flex items-center justify-center border border-border/50 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="relative mb-6 inline-block">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <project.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    {/* Tag */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-muted/80 text-muted-foreground border border-border/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                        {project.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-muted/60 rounded-md text-muted-foreground border border-transparent group-hover:border-border/50 transition-all duration-300"
                          style={{ 
                            transitionDelay: hoveredIndex === index ? `${techIndex * 30}ms` : '0ms'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="px-2.5 py-1 text-xs font-medium text-muted-foreground">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <span>View Details</span>
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
