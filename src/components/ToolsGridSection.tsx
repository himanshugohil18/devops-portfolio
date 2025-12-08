import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const tools = [
  { name: "Docker", color: "#2496ED", icon: "🐳" },
  { name: "Kubernetes", color: "#326CE5", icon: "☸️" },
  { name: "Jenkins", color: "#D24939", icon: "🔧" },
  { name: "AWS", color: "#FF9900", icon: "☁️" },
  { name: "GitHub Actions", color: "#2088FF", icon: "⚡" },
  { name: "Terraform", color: "#7B42BC", icon: "🏗️" },
  { name: "Prometheus", color: "#E6522C", icon: "📊" },
  { name: "Grafana", color: "#F46800", icon: "📈" },
  { name: "Linux", color: "#FCC624", icon: "🐧" },
  { name: "Nginx", color: "#009639", icon: "🌐" },
  { name: "ArgoCD", color: "#EF7B4D", icon: "🔄" },
  { name: "Helm", color: "#0F1689", icon: "⛵" },
];

export function ToolsGridSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Wrench className="w-4 h-4 mr-2" />
            Automation Arsenal
          </span>
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            Tools I <span className="italic text-primary">Automate</span> With
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-standard DevOps tools for building reliable, scalable infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div 
                className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                style={{ 
                  boxShadow: `0 0 0 0 ${tool.color}00`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${tool.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${tool.color}00`;
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <div className="text-sm font-medium text-foreground">{tool.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}