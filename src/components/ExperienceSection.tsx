import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Project Intern – DevOps Engineer",
    company: "Do Incredible Pvt. Ltd.",
    period: "Jul 2024 – Mar 2025",
    location: "Remote",
    points: [
      "Implemented CI/CD pipelines using Jenkins and GitHub Actions for automated builds and deployments.",
      "Collaborated with the team using Git/GitHub for version control and code reviews.",
      "Dockerized backend services to ensure consistent deployment environments across staging and production.",
      "Gained hands-on experience with cloud infrastructure, monitoring, and DevOps best practices."
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
            Experience & <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on experience building real products with modern technologies.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 last:mb-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Timeline node */}
              <div className="absolute -left-8 md:-left-12 top-1 w-6 h-6 md:w-10 md:h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-3 h-3 md:w-5 md:h-5 text-primary" />
              </div>

              {/* Content card */}
              <div className="glass-card p-6 md:p-8 ml-2">
                <h3 className="text-xl font-display font-semibold mb-1 text-foreground">
                  {exp.title}
                </h3>
                <p className="text-primary font-medium mb-3">{exp.company}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
