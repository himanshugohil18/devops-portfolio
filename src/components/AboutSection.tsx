import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const focusAreas = [
  "Designing CI/CD pipelines with Jenkins and GitHub Actions.",
  "Containerizing services with Docker and orchestrating with Kubernetes.",
  "Deploying to AWS with secure, production-style networking.",
  "Infrastructure automation and monitoring with Prometheus & Grafana."
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-display">
              About <span className="italic">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a DevOps Engineer based in Ahmedabad, Gujarat. 
                Currently pursuing my MCA with a focus on AI/ML, I'm passionate about building 
                scalable infrastructure and automating everything in between.
              </p>
              <p>
                My journey focuses on infrastructure automation and cloud-native technologies. 
                I believe in designing systems that are not just functional, but elegant in 
                their architecture and resilient in production.
              </p>
              <p>
                When I'm not configuring Kubernetes clusters or optimizing CI/CD pipelines, 
                I'm exploring new DevOps tools and contributing to making development workflows 
                more efficient for teams.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-semibold">What I Focus On</h3>
            
            <div className="space-y-4">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
