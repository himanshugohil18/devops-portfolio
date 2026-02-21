import { useEffect, useRef, useState } from "react";
import { Cloud, Container, GitBranch, Activity, Server, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    label: "Cloud",
    skills: ["AWS (EC2, S3, IAM, VPC)", "CloudWatch", "ECS Fargate", "Serverless Architecture"],
  },
  {
    icon: Container,
    label: "Containers",
    skills: ["Docker", "Kubernetes", "Helm", "ArgoCD"],
  },
  {
    icon: GitBranch,
    label: "CI/CD",
    skills: ["Jenkins", "GitHub Actions", "Git", "GitHub", "GitLab"],
  },
  {
    icon: Activity,
    label: "Monitoring",
    skills: ["Prometheus", "Grafana", "CloudWatch"],
  },
  {
    icon: Server,
    label: "Backend",
    skills: ["Python", "Django", "REST APIs", "MongoDB", "MySQL", "Nginx"],
  },
  {
    icon: Code,
    label: "Tools & Scripting",
    skills: ["Linux", "Bash", "Shell Scripting", "Terraform", "Ansible", "YAML", "Postman"],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} id="skills" className="section-padding relative">
      <div className="container-wide">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="pill pill-primary text-xs font-semibold uppercase tracking-wider mb-6 inline-flex">Technical Skills</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            A comprehensive DevOps toolkit organized by category.
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.label}
              className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold">{category.label}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-muted/80 text-muted-foreground rounded-full border border-border/50 transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
