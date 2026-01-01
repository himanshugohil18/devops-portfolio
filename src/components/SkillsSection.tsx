import { useEffect, useRef, useState } from "react";
import { Wrench } from "lucide-react";

const skills = [
  // Row 1
  "Linux", "Git", "GitHub", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "Helm",
  // Row 2
  "Prometheus", "Grafana", "Nginx", "AWS (EC2, S3, IAM, VPC)", "CloudWatch", "ECS Fargate", "Terraform",
  // Row 3
  "Ansible", "Bash", "Shell Scripting", "JavaScript", "Python", "YAML", "MongoDB", "MySQL",
  // Row 4
  "REST APIs", "CI/CD Pipelines", "Postman", "Serverless Architecture"
];

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Technical <span className="italic">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive DevOps toolkit for building, deploying, and scaling modern infrastructure.
          </p>
        </div>

        {/* Skills Card */}
        <div className={`max-w-4xl mx-auto card-elevated p-6 md:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">DevOps & Tools</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-full border border-border transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:scale-105 cursor-default ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 30}ms`,
                  transitionDelay: `${index * 20}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
