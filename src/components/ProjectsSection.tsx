import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Container, Layers, GitBranch, Zap, Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    icon: Zap,
    tag: "Full-Stack DevOps · AWS EKS",
    title: "Wanderlust – Production DevOps Architecture on AWS EKS",
    description: "A full production-grade DevOps pipeline implementing CI/CD with Jenkins, GitOps with ArgoCD, security scanning (OWASP, SonarQube, Trivy), container orchestration on AWS EKS, infrastructure provisioning with Terraform, and full observability with Prometheus & Grafana.",
    caseStudy: {
      problem: "Fragmented DevOps tooling with no unified pipeline — manual deployments, no security scanning, no GitOps, and zero observability into production workloads.",
      solution: "Architected an end-to-end DevOps platform integrating CI/CD, shift-left security, GitOps deployment, Kubernetes orchestration, and full-stack monitoring on AWS EKS.",
      architecture: "GitHub → Jenkins CI → OWASP/SonarQube/Trivy → Docker → ArgoCD GitOps → AWS EKS (Helm) → Prometheus → Grafana → Email Alerts",
      results: "80% faster deployments, zero critical CVEs in production, 99.95% uptime with self-healing infrastructure and automated rollbacks.",
      impact: "Delivered enterprise-grade DevOps maturity — every commit is scanned, tested, containerized, and deployed automatically with complete audit trail.",
    },
    stack: ["AWS", "EKS", "Terraform", "Jenkins", "Docker", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "SonarQube", "OWASP", "Trivy"],
    link: "https://github.com/himanshugohil18/Wanderlust-Mega-Project",
    slug: "/projects/wanderlust-mega-project",
    gradient: "from-amber-500/20 via-orange-500/10 to-primary/10",
    accentColor: "amber",
    isMegaProject: true,
  },
  {
    icon: Container,
    tag: "Cloud · AWS",
    title: "Real-World Containerized Application Deployment using AWS ECS & ECR",
    description: "Built and deployed a production-ready containerized application using Docker, Amazon ECR, and ECS Fargate. Implemented CI/CD-based image builds, automated deployments, load balancing, and centralized logging using CloudWatch.",
    caseStudy: {
      problem: "Manual deployments caused 2+ hours of downtime per release with inconsistent environments across staging and production.",
      solution: "Designed a fully containerized deployment pipeline using Docker, ECR, and ECS Fargate with automated rollouts triggered by CI/CD.",
      architecture: "Docker → ECR → ECS Fargate (multi-AZ) → ALB → CloudWatch monitoring with IAM least-privilege access controls.",
      results: "Reduced deployment time from 2 hours to under 8 minutes. Achieved zero-downtime releases with automated health checks.",
      impact: "Enabled the team to ship 3x more frequently while maintaining 99.9% uptime SLA.",
    },
    stack: ["AWS ECS (Fargate)", "Amazon ECR", "Docker", "IAM", "ALB", "CloudWatch", "CI/CD"],
    link: "#",
    slug: "/projects/aws-ecs-container-deployment",
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
    slug: "/projects/django-nginx-mysql-docker",
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
    slug: "/projects/git-workflow-ci-governance",
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
    slug: "/projects/aws-serverless-lambda",
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
    slug: "/projects/django-jenkins-cicd",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "rose"
  },
  {
    icon: Container,
    tag: "Kubernetes · Microservices",
    title: "Chat Application – Kubernetes 3-Tier Architecture (Minikube)",
    description: "A real-time 3-tier chat application deployed on Kubernetes using Minikube. Separates frontend, backend API, and database into containerized microservices with Kubernetes deployments, services, ConfigMaps, Secrets, and horizontal scaling.",
    stack: ["Kubernetes", "Docker", "Minikube", "Node.js", "React", "MongoDB"],
    link: "#",
    slug: "/projects/kubernetes-chat-app",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentColor: "cyan"
  },
  {
    icon: Layers,
    tag: "Observability · Monitoring",
    title: "Multi-Service Monitoring Architecture (.NET + Python) on Kubernetes",
    description: "A multi-service monitoring solution with .NET and Python microservices on a Kind Kubernetes cluster, monitored with Prometheus metrics scraping and Grafana dashboards. Includes alerting, kube-state-metrics, and observability best practices.",
    stack: ["Kubernetes", "Kind", "Prometheus", "Grafana", "Python", ".NET", "Docker"],
    link: "#",
    slug: "/projects/multi-service-monitoring",
    gradient: "from-teal-500/20 via-green-500/10 to-transparent",
    accentColor: "teal"
  }
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const featured = projects[0];
  const rest = projects.slice(1);

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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Featured Work
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Production-Level <span className="gradient-text">DevOps Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real-world DevOps and cloud projects focusing on automation, reliability and scalability.
            </p>
          </motion.div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer mb-8"
            onClick={() => openModal(featured)}
          >
            <div className={`relative overflow-hidden rounded-2xl border ${featured.isMegaProject ? 'border-amber-500/30 shadow-[0_0_60px_hsla(38,90%,50%,0.12)]' : 'border-primary/20'} bg-card/60 backdrop-blur-xl transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_hsla(250,80%,65%,0.15)] group-hover:-translate-y-1`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-40`} />
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${featured.isMegaProject ? 'via-amber-500/60' : 'via-primary/60'} to-transparent`} />
              {featured.isMegaProject && <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />}

              <div className="relative p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {featured.isMegaProject && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse">
                        ★ Mega Project
                      </span>
                    )}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                      Case Study
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                {/* Title & Tag */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <featured.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">{featured.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-semibold mt-1 text-foreground group-hover:text-primary transition-colors duration-300">
                      {featured.title}
                    </h3>
                  </div>
                </div>

                {/* Case Study Blocks */}
                {featured.caseStudy && (
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { label: "Problem", text: featured.caseStudy.problem, color: "destructive" },
                      { label: "Solution", text: featured.caseStudy.solution, color: "primary" },
                      { label: "Results", text: featured.caseStudy.results, color: "primary" },
                      { label: "Business Impact", text: featured.caseStudy.impact, color: "primary" },
                    ].map((block) => (
                      <div key={block.label} className="p-4 rounded-xl bg-muted/30 border border-border/30">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${block.color === "destructive" ? "text-destructive" : "text-primary"} mb-2 block`}>
                          {block.label}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Architecture line */}
                {featured.caseStudy && (
                  <div className="p-4 rounded-xl bg-muted/20 border border-border/30 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Architecture</span>
                    <p className="text-sm font-mono text-muted-foreground">{featured.caseStudy.architecture}</p>
                  </div>
                )}

                {/* Stack + CTA */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-muted/60 rounded-full text-muted-foreground border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(featured.slug); }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-primary text-primary-foreground glow-button hover:scale-[1.02] transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  View Full Documentation
                </button>
              </div>
            </div>
          </motion.div>

          {/* Grid Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal(project)}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_hsla(250,80%,65%,0.1)] group-hover:-translate-y-1 group-hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Arrow top right */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="relative p-8">
                    <div className="relative mb-5 inline-block">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted/80 text-muted-foreground border border-border/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-5 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-muted/60 rounded-full text-muted-foreground border border-border/50 group-hover:border-primary/20 transition-all">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="px-2.5 py-1 text-xs font-medium text-muted-foreground">+{project.stack.length - 5}</span>
                      )}
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(project.slug); }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      View Full Documentation
                    </button>
                  </div>

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
