import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

interface ArchitectureOverviewProps {
  diagram: string;
  title?: string;
}

export function ArchitectureOverview({ diagram, title = "Architecture Diagram" }: ArchitectureOverviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl overflow-hidden transition-all duration-400 hover:border-primary/30 cursor-pointer"
        style={{ boxShadow: "var(--card-shadow)" }}
        onClick={() => setIsFullscreen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Maximize2 className="w-4 h-4 text-primary" />
        </div>
        <div className="p-6 md:p-8 group-hover:scale-[1.01] transition-transform duration-500 origin-center">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">{title}</h4>
          <div className="flex justify-center overflow-x-auto bg-muted/30 rounded-xl border border-border/30 p-6 md:p-8">
            <pre className="text-xs md:text-sm text-muted-foreground font-mono leading-[1.4] whitespace-pre flex-shrink-0" style={{ minWidth: 'fit-content' }}>{diagram}</pre>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreen(false)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-8 z-50 flex items-center justify-center"
            >
              <div className="relative w-full max-w-5xl max-h-full overflow-auto rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl p-8 md:p-12" style={{ boxShadow: "0 0 80px hsla(250, 80%, 65%, 0.15)" }}>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
                <h3 className="text-xl font-display font-bold mb-6 gradient-text">{title}</h3>
                <pre className="text-sm md:text-base text-muted-foreground font-mono leading-relaxed whitespace-pre overflow-x-auto">{diagram}</pre>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
