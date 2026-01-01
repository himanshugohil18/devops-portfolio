import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="section-padding">
      <div className="container-tight">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Work <span className="italic">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on experience building real products with modern technologies.
          </p>
        </div>

        {/* Experience Card */}
        <div className={`card-elevated p-6 md:p-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              {/* Header */}
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Project Intern – DevOps Engineer
                </h3>
                <p className="text-primary font-medium">
                  Do Incredible Pvt. Ltd.
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Jul 2024 – Mar 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 pt-2">
                {[
                  "Implemented CI/CD pipelines using Jenkins and GitHub Actions for automated builds and deployments.",
                  "Collaborated with the team using Git/GitHub for version control and code reviews.",
                  "Dockerized backend services to ensure consistent deployment environments across staging and production.",
                  "Gained hands-on experience with cloud infrastructure, monitoring, and DevOps best practices."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
