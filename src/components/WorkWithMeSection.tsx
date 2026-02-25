import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    title: "Fiverr",
    description: "DevOps automation, CI/CD setup, AWS deployment, Docker & Kubernetes infrastructure services.",
    buttonText: "View Fiverr Profile",
    href: "https://www.fiverr.com/himanshugohil18",
    accentColor: "#1DBF73",
    logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
  },
  {
    title: "Upwork",
    description: "Cloud architecture design, CI/CD pipeline automation, containerized deployments, and infrastructure consulting.",
    buttonText: "View Upwork Profile",
    href: "https://www.upwork.com/freelancers/~0125176514d4108f51",
    accentColor: "#14A800",
    logo: "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
  },
];

export function WorkWithMeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="container-wide">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">With Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Available for DevOps & Cloud consulting through trusted freelance platforms.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="group glass-card p-8 flex flex-col items-start gap-5 transition-all duration-400 hover:scale-[1.02]"
              style={{
                borderColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${platform.accentColor}33`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${platform.accentColor}15, 0 20px 60px -12px ${platform.accentColor}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {/* Platform logo */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${platform.accentColor}12`,
                  border: `1px solid ${platform.accentColor}25`,
                  boxShadow: `0 0 20px ${platform.accentColor}10`,
                }}
              >
                <img
                  src={platform.logo}
                  alt={`${platform.title} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {platform.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {platform.description}
                </p>
              </div>

              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:brightness-110"
                style={{
                  backgroundColor: `${platform.accentColor}18`,
                  color: platform.accentColor,
                  border: `1px solid ${platform.accentColor}30`,
                }}
              >
                {platform.buttonText}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
