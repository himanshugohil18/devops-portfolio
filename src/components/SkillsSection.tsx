import { useEffect, useRef, useState } from "react";
import { Server, Code2 } from "lucide-react";

const devopsSkills = [
  "Linux", "Git", "GitHub", "Jenkins", "GitHub Actions", "Docker", 
  "Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana", "Nginx",
  "AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "Terraform", "Shell Scripting"
];

const webDevSkills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", 
  "Tailwind CSS", "Node.js", "Express.js", "REST API", "MongoDB",
  "Mongoose", "Postman", "Java", "Python", "SQL"
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
            A comprehensive toolkit for building and deploying modern applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* DevOps Card */}
          <div className={`card-elevated p-6 md:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {devopsSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-lg border border-border transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Dev Card */}
          <div className={`card-elevated p-6 md:p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {webDevSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-lg border border-border transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
