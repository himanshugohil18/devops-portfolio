import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { StickyTOC } from "./StickyTOC";

interface TOCItem {
  id: string;
  title: string;
}

interface ProjectDocLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  tocItems: TOCItem[];
  children: ReactNode;
}

export function ProjectDocLayout({ title, subtitle, tags, summary, tocItems, children }: ProjectDocLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-border/30 bg-background/80 backdrop-blur-xl sticky top-0 z-40">
          <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-4 flex items-center gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 pt-[120px] pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-primary font-medium mb-4">{subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-10 gradient-text leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="glass-card rounded-2xl border border-border/50 p-8 md:p-10 max-w-3xl hover:translate-y-0 hover:scale-100">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Executive Summary</h3>
              <p className="text-foreground leading-[1.8] text-sm md:text-base">{summary}</p>
            </div>
          </motion.div>
        </div>

        {/* Content with TOC */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 pb-32 flex gap-10">
          <StickyTOC items={tocItems} />
          <div className="flex-1 min-w-0 space-y-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
