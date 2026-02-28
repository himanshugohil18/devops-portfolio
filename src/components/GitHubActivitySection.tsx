import { motion } from "framer-motion";
import { Github, GitBranch, Star, ExternalLink } from "lucide-react";

const stats = [
  { icon: Github, label: "GitHub Profile", value: "himanshugohil18", href: "https://github.com/himanshugohil18", isLink: true },
  { icon: GitBranch, label: "Public Repositories", value: "15+" },
  { icon: Star, label: "DevOps Projects", value: "5+" },
];

export function GitHubActivitySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Github className="w-4 h-4" />
            Open Source
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building and contributing to DevOps & Cloud infrastructure projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {stat.isLink ? (
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsla(250,80%,65%,0.12)] hover:-translate-y-1 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-lg font-bold font-display text-primary flex items-center justify-center gap-1">
                    {stat.value}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-muted-foreground text-xs font-medium mt-1">{stat.label}</div>
                </a>
              ) : (
                <div className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsla(250,80%,65%,0.12)] hover:-translate-y-1 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold font-display text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-xs font-medium mt-1">{stat.label}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
