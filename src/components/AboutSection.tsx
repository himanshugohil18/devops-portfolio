import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Server, Cloud, GitBranch } from "lucide-react";

const focusAreas = [
  "Designing CI/CD pipelines with Jenkins and GitHub Actions.",
  "Containerizing services with Docker and orchestrating with Kubernetes.",
  "Deploying to AWS with secure, production-style networking.",
  "Infrastructure automation and monitoring with Prometheus & Grafana."
];

const featureCards = [
  {
    icon: Server,
    title: "Infrastructure",
    description: "Building scalable, resilient cloud infrastructure with best practices."
  },
  {
    icon: GitBranch,
    title: "Automation",
    description: "End-to-end CI/CD pipelines for faster, safer deployments."
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Kubernetes-first approach to container orchestration at scale."
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding relative">
      <div className="container-wide">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="pill pill-primary text-xs font-semibold uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              DevOps & Cloud Engineer building for <span className="gradient-text">scale</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a DevOps & Cloud Engineer based in Ahmedabad, Gujarat. 
                I specialize in building scalable infrastructure, automating CI/CD workflows, 
                and delivering cloud-native solutions on AWS.
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
            <h3 className="text-xl font-semibold font-display">What I Focus On</h3>
            
            <div className="space-y-3">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 glass-card rounded-xl"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {featureCards.map((card, index) => (
            <div key={index} className="glass-card p-6 text-center group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">{card.title}</h4>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
