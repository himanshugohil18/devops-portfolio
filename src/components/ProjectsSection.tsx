import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Music, Cloud, GitBranch, Shield, Sparkles } from "lucide-react";

const projects = [
  {
    icon: Music,
    tag: "Full-Stack · MERN",
    title: "Spotify Clone – MERN Stack",
    description: "A Spotify-style music streaming app built with the MERN stack. Implemented auth, playlists and audio player UI. Dockerized the backend and used GitHub Actions for deployment.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker", "GitHub Actions"],
    link: "#",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "emerald"
  },
  {
    icon: Cloud,
    tag: "Cloud · AWS",
    title: "AWS VPC + EC2 Deployment",
    description: "Designed a complete VPC with public/private subnets, route tables, IGW and NAT. Launched EC2 instances, configured security groups and deployed a web app via Nginx.",
    stack: ["AWS VPC", "EC2", "Subnets", "NAT", "IGW", "IAM", "Security Groups", "Linux", "Nginx"],
    link: "#",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "orange"
  },
  {
    icon: GitBranch,
    tag: "DevOps · GitOps",
    title: "Cloud-Native CI/CD with Kubernetes & ArgoCD",
    description: "End-to-end CI/CD pipeline: Jenkins for build and test, Docker for images, Kubernetes + ArgoCD for GitOps deployments. Integrated Prometheus & Grafana for observability.",
    stack: ["Jenkins", "Docker", "Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana", "Git"],
    link: "#",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "violet"
  },
  {
    icon: Shield,
    tag: "Security · DevSecOps",
    title: "DevSecOps Pipeline",
    description: "Pipeline with SonarQube, OWASP Dependency-Check and Trivy to scan code and container images, blocking unsafe builds from progressing to production.",
    stack: ["Jenkins", "SonarQube", "OWASP Dependency-Check", "Trivy", "Docker"],
    link: "#",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "rose"
  }
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section ref={sectionRef} id="projects" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-blob-bottom pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card container with glassmorphism */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
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
                    {project.stack.map((tech, techIndex) => (
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
                  </div>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-primary font-medium group/link cursor-pointer">
                    <span className="relative">
                      View Case Study
                      <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover/link:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
