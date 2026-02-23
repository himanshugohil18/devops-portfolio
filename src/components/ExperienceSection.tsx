import { useEffect, useRef, useState } from "react";
import { Rocket, BookOpen, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Rocket,
    title: "DevOps Self-Projects & Labs",
    points: [
      "Designed and deployed production-style AWS and Kubernetes environments.",
      "Built CI/CD pipelines using Jenkins and GitHub Actions.",
      "Implemented containerized deployments with Docker and ECS.",
      "Practiced infrastructure automation and monitoring setup.",
    ],
  },
  {
    icon: BookOpen,
    title: "Continuous Learning & Tool Mastery",
    points: [
      "Actively mastering cloud-native technologies and DevOps automation.",
      "Focused on infrastructure optimization and cost efficiency.",
      "Exploring advanced Kubernetes and serverless architectures.",
      "Practicing real-world deployment patterns.",
    ],
  },
  {
    icon: Globe,
    title: "Freelance & Production Ready",
    points: [
      "Ready to collaborate on DevOps and cloud infrastructure projects.",
      "Comfortable designing scalable and secure deployment pipelines.",
      "Strong understanding of CI/CD governance and automation.",
      "Prepared for remote and international cloud consulting work.",
    ],
  },
];

export function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="section-padding relative">
      <div className="container-tight">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="pill pill-primary text-xs font-semibold uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Experience & <span className="gradient-text">DevOps Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on DevOps implementation across real-world production-style projects.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 md:p-8 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
                      {cap.title}
                    </h3>
                    <ul className="space-y-3">
                      {cap.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
