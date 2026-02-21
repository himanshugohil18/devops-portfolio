import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "ArgoCD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
  { name: "Helm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
];

const row1Tools = [...tools, ...tools, ...tools];
const row2Tools = [...tools.slice().reverse(), ...tools.slice().reverse(), ...tools.slice().reverse()];

export function AnimatedToolsSlider() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="py-16 overflow-hidden">
      <div className="container-wide mb-10">
        <p className={`text-sm font-semibold text-primary uppercase tracking-widest text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Technologies & Tools
        </p>
        <p className={`text-center text-muted-foreground mt-2 text-sm transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Expertise across DevOps, Cloud & Infrastructure Automation
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className={`relative h-20 mb-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-4 absolute animate-curve-slide-left">
            {row1Tools.map((tool, index) => (
              <div key={`r1-${tool.name}-${index}`} className="flex-shrink-0 group">
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-card/60 backdrop-blur-sm rounded-xl border border-border/30 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:scale-105">
                  <img src={tool.logo} alt={tool.name} className="w-6 h-6 object-contain" />
                  <span className="font-medium text-foreground whitespace-nowrap text-sm">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className={`relative h-20 transition-opacity duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-4 absolute animate-curve-slide-right">
            {row2Tools.map((tool, index) => (
              <div key={`r2-${tool.name}-${index}`} className="flex-shrink-0 group">
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-card/60 backdrop-blur-sm rounded-xl border border-border/30 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:scale-105">
                  <img src={tool.logo} alt={tool.name} className="w-6 h-6 object-contain" />
                  <span className="font-medium text-foreground whitespace-nowrap text-sm">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes curve-slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes curve-slide-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-curve-slide-left {
          animation: curve-slide-left 35s linear infinite;
        }
        .animate-curve-slide-right {
          animation: curve-slide-right 35s linear infinite;
        }
        .animate-curve-slide-left:hover,
        .animate-curve-slide-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
