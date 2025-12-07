import { useEffect, useRef, useState } from "react";

const devopsTools = [
  "Linux", "Git", "GitHub", "Jenkins", "GitHub Actions", "Docker", 
  "Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana", "Nginx", 
  "AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "Networking", "Shell Scripting"
];

const webDevTools = [
  "HTML", "CSS", "JavaScript (ES6+)", "React.js", "Tailwind CSS", 
  "Node.js", "Express.js", "REST API", "MongoDB", "Mongoose", "Postman",
  "Java", "C", "C++", "SQL", "Python"
];

export function TechStackSection() {
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
    <section ref={sectionRef} className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container-wide">
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* DevOps Row */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
              DevOps & Cloud
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {devopsTools.map((tool, index) => (
                <span
                  key={tool}
                  className="tech-pill"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Web Dev Row */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
              Web Development
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {webDevTools.map((tool, index) => (
                <span
                  key={tool}
                  className="tech-pill"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
