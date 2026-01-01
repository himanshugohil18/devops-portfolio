import { useEffect, useRef, useState } from "react";

// Tool data with official logos from devicons CDN
const tools = [
  { name: "Docker", color: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", color: "#326CE5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", color: "#FF9900", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "React", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", color: "#339933", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", color: "#47A248", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", color: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Jenkins", color: "#D24939", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Git", color: "#F05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", color: "#FCC624", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Python", color: "#3776AB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Nginx", color: "#009639", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Tailwind", color: "#06B6D4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Grafana", color: "#F46800", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Prometheus", color: "#E6522C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "ArgoCD", color: "#EF7B4D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
  { name: "Helm", color: "#0F1689", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
  { name: "Terraform", color: "#7B42BC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
];

// Duplicate tools for seamless infinite scroll
const row1Tools = [...tools, ...tools, ...tools];
const row2Tools = [...tools.slice().reverse(), ...tools.slice().reverse(), ...tools.slice().reverse()];

export function AnimatedToolsSlider() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Calculate position on curve for each item
  const getCurveTransform = (index: number, total: number, offset: number = 0) => {
    const normalizedPos = ((index + offset) % total) / total;
    const angle = normalizedPos * Math.PI * 2;
    const curveHeight = 40; // Height of the curve arc
    const translateY = Math.sin(angle) * curveHeight;
    const scale = 0.85 + (Math.cos(angle) + 1) * 0.075; // Scale between 0.85 and 1
    const opacity = 0.5 + (Math.cos(angle) + 1) * 0.25; // Opacity between 0.5 and 1
    
    return { translateY, scale, opacity };
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container-wide mb-12">
        <h3 
          className={`text-sm font-semibold text-primary uppercase tracking-wider text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Technologies & Tools
        </h3>
        <p 
          className={`text-center text-muted-foreground mt-2 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Expertise across DevOps, Cloud & Infrastructure Automation
        </p>
      </div>

      {/* Curved slider container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - slides left with curve */}
        <div 
          className={`relative h-32 mb-6 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center center",
          }}
        >
          <div 
            className="flex items-center gap-6 absolute animate-curve-slide-left"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {row1Tools.map((tool, index) => {
              const { translateY, scale, opacity } = getCurveTransform(index, row1Tools.length);
              return (
                <div
                  key={`row1-${tool.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <div className="flex items-center gap-3 px-5 py-3 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:border-primary/50 hover:bg-card">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 object-contain"
                    />
                    <span className="font-medium text-foreground whitespace-nowrap text-sm">
                      {tool.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second row - slides right with opposite curve */}
        <div 
          className={`relative h-32 transition-opacity duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center center",
          }}
        >
          <div 
            className="flex items-center gap-6 absolute animate-curve-slide-right"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {row2Tools.map((tool, index) => {
              const { translateY, scale, opacity } = getCurveTransform(index, row2Tools.length, Math.PI);
              return (
                <div
                  key={`row2-${tool.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{
                    transform: `translateY(${-translateY}px) scale(${scale})`,
                    opacity,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <div className="flex items-center gap-3 px-5 py-3 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:border-primary/50 hover:bg-card">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 object-contain"
                    />
                    <span className="font-medium text-foreground whitespace-nowrap text-sm">
                      {tool.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes curve-slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes curve-slide-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
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
