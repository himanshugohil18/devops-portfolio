import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export interface Challenge {
  problem: string;
  solution: string;
}

const defaultChallenges: Challenge[] = [
  { problem: "CI pipeline builds were slow, taking 15+ minutes per run.", solution: "Implemented Docker layer caching and parallel stages, reducing build time by 40%." },
  { problem: "Application scaling caused latency spikes during traffic surges.", solution: "Implemented Kubernetes Horizontal Pod Autoscaler with pre-warming strategies." },
];

interface Props {
  challenges?: Challenge[];
}

export function ChallengesSolutions({ challenges = defaultChallenges }: Props) {
  return (
    <div className="space-y-4 max-w-[900px] mx-auto">
      {challenges.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/50 overflow-hidden"
        >
          <div className="flex items-start gap-3 p-4 bg-destructive/5 border-b border-border/30">
            <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-destructive mb-1">Problem</p>
              <p className="text-sm text-foreground">{c.problem}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-green-500/5">
            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-green-500 mb-1">Solution</p>
              <p className="text-sm text-foreground">{c.solution}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
