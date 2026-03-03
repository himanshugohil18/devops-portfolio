import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const commands = [
  { prompt: "$ ", text: "git clone git@github.com:org/microservice.git", output: "Cloning into 'microservice'... done.", delay: 45 },
  { prompt: "$ ", text: "cd microservice && git checkout -b release/v2.4.1", output: "Switched to new branch 'release/v2.4.1'", delay: 50 },
  { prompt: "$ ", text: "jenkins-cli trigger build microservice --branch release/v2.4.1", output: "[Jenkins] Pipeline started → Build #147\n[Stage 1/6] Checkout ✓\n[Stage 2/6] Install Dependencies ✓\n[Stage 3/6] Lint & Unit Tests ✓ (48 passed, 0 failed)\n[Stage 4/6] Integration Tests ✓", delay: 40 },
  { prompt: "$ ", text: "docker build -t microservice:v2.4.1 --target production .", output: "Step 1/12 : FROM node:18-alpine AS builder\nStep 12/12 : HEALTHCHECK --interval=30s CMD curl -f http://localhost:3000/health\nSuccessfully built a1b2c3d4e5f6\nSuccessfully tagged microservice:v2.4.1", delay: 45 },
  { prompt: "$ ", text: "docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/microservice:v2.4.1", output: "Pushing to Amazon ECR...\nv2.4.1: digest: sha256:9f86d081884c7d659a2feaa0c55ad015... size: 1572\nPush complete ✓", delay: 50 },
  { prompt: "$ ", text: "kubectl set image deploy/microservice app=microservice:v2.4.1 --record", output: "deployment.apps/microservice image updated", delay: 55 },
  { prompt: "$ ", text: "kubectl rollout status deploy/microservice --timeout=120s", output: "Waiting for rollout to finish: 1 old replicas pending termination...\nWaiting for rollout to finish: 2 of 3 updated replicas available...\ndeployment \"microservice\" successfully rolled out ✓", delay: 40 },
  { prompt: "$ ", text: "curl -s https://api.prod.example.com/health | jq .", output: '{\n  "status": "healthy",\n  "version": "v2.4.1",\n  "uptime": "99.99%",\n  "latency_p99": "42ms"\n}', delay: 45 },
];

export function TerminalSimulation() {
  const [lines, setLines] = useState<{ type: "command" | "output"; text: string }[]>([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) { setIsVisible(true); setHasStarted(true); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!isVisible || currentCmd >= commands.length) return;
    const cmd = commands[currentCmd];
    if (!isTyping) { setIsTyping(true); setCurrentChar(0); return; }
    if (currentChar < cmd.text.length) {
      const timeout = setTimeout(() => setCurrentChar((c) => c + 1), cmd.delay);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setLines((prev) => [
        ...prev,
        { type: "command", text: cmd.prompt + cmd.text },
        { type: "output", text: cmd.output },
      ]);
      setIsTyping(false);
      setCurrentCmd((c) => c + 1);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isVisible, currentCmd, currentChar, isTyping]);

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [lines, currentChar]);

  const currentCommand = currentCmd < commands.length ? commands[currentCmd] : null;

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Terminal className="w-4 h-4" />
            Live CI/CD Pipeline
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Production <span className="gradient-text">Deployment Pipeline</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch a full CI/CD pipeline execute — from git clone through Jenkins stages to Kubernetes rollout and health verification.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border/50 overflow-hidden" style={{ boxShadow: "0 0 60px hsla(250, 80%, 65%, 0.08)" }}>
            <div className="flex items-center gap-2 px-4 py-3 bg-card/80 border-b border-border/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">devops@production ~ ci-cd-pipeline</span>
            </div>

            <div
              ref={termRef}
              className="p-5 md:p-6 font-mono text-sm leading-relaxed min-h-[300px] max-h-[420px] overflow-y-auto"
              style={{ background: "hsl(225 30% 5%)" }}
            >
              {lines.map((line, i) => (
                <div key={i} className={`${line.type === "command" ? "text-emerald-400" : "text-muted-foreground"} mb-1 whitespace-pre-wrap`}>
                  {line.text}
                </div>
              ))}

              {currentCommand && isTyping && (
                <div className="text-emerald-400 mb-1">
                  {currentCommand.prompt}
                  <span>{currentCommand.text.slice(0, currentChar)}</span>
                  <span className="animate-pulse text-primary">▊</span>
                </div>
              )}

              {currentCmd >= commands.length && (
                <div className="text-emerald-400">
                  $ <span className="animate-pulse text-primary">▊</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
