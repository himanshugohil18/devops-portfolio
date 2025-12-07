import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Music, Cloud, GitBranch, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Music,
    tag: "Full-Stack · MERN",
    title: "Spotify Clone – MERN Stack",
    description: "A Spotify-style music streaming app built with the MERN stack. Implemented auth, playlists and audio player UI. Dockerized the backend and used GitHub Actions for deployment.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker", "GitHub Actions"],
    link: "#"
  },
  {
    icon: Cloud,
    tag: "Cloud · AWS",
    title: "AWS VPC + EC2 Deployment",
    description: "Designed a complete VPC with public/private subnets, route tables, IGW and NAT. Launched EC2 instances, configured security groups and deployed a web app via Nginx.",
    stack: ["AWS VPC", "EC2", "Subnets", "NAT", "IGW", "IAM", "Security Groups", "Linux", "Nginx"],
    link: "#"
  },
  {
    icon: GitBranch,
    tag: "DevOps · GitOps",
    title: "Cloud-Native CI/CD with Kubernetes & ArgoCD",
    description: "End-to-end CI/CD pipeline: Jenkins for build and test, Docker for images, Kubernetes + ArgoCD for GitOps deployments. Integrated Prometheus & Grafana for observability.",
    stack: ["Jenkins", "Docker", "Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana", "Git"],
    link: "#"
  },
  {
    icon: Shield,
    tag: "Security · DevSecOps",
    title: "DevSecOps Pipeline",
    description: "Pipeline with SonarQube, OWASP Dependency-Check and Trivy to scan code and container images, blocking unsafe builds from progressing to production.",
    stack: ["Jenkins", "SonarQube", "OWASP Dependency-Check", "Trivy", "Docker"],
    link: "#"
  }
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-blob-bottom pointer-events-none" />
      
      <div className="container-wide relative">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Highlighted <span className="italic">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world DevOps and MERN projects focusing on automation, reliability and scalability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-elevated p-6 md:p-8 group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="pill text-xs">{project.tag}</span>
                <project.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary">
                View Case Study
                <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
