import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const toolchain = [
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
];

function ArrowConnector({ index }: { index: number }) {
  return (
    <motion.div
      className="hidden md:flex items-center justify-center"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.12 }}
      viewport={{ once: true }}
    >
      <div className="relative w-10 h-[2px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(250 80% 65%), hsl(220 80% 60%))",
            boxShadow: "0 0 8px hsla(250, 80%, 65%, 0.4)",
          }}
        />
        <div
          className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderLeft: "6px solid hsl(220 80% 60%)",
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
            filter: "drop-shadow(0 0 4px hsla(220, 80%, 60%, 0.5))",
          }}
        />
      </div>
    </motion.div>
  );
}

export function DevOpsToolchainFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            DevOps Toolchain
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            End-to-End <span className="gradient-text">Pipeline Flow</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From code commit to production monitoring — a fully automated delivery pipeline.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-0">
          {toolchain.map((tool, index) => (
            <div key={tool.name} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-5 md:p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsla(250,80%,65%,0.15)] hover:-translate-y-2 flex flex-col items-center gap-3 min-w-[100px]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className={`w-10 h-10 md:w-12 md:h-12 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 ${tool.invert ? 'invert' : ''}`}
                  />
                  <span className="text-xs font-semibold text-foreground relative z-10">{tool.name}</span>
                </div>
              </motion.div>
              {index < toolchain.length - 1 && <ArrowConnector index={index} />}
            </div>
          ))}
        </div>

        {/* Labels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between max-w-2xl mx-auto mt-8 px-4"
        >
          <span className="text-xs text-muted-foreground font-medium">Code Commit</span>
          <span className="text-xs text-primary font-medium">→ Build → Deploy → Monitor</span>
          <span className="text-xs text-muted-foreground font-medium">Production</span>
        </motion.div>
      </div>
    </section>
  );
}
