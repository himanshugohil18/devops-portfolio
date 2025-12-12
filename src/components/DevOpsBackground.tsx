import { motion } from "framer-motion";

const PipelinePath = ({ delay = 0, duration = 8, color = "primary" }: { delay?: number; duration?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id={`pipelineGrad-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor={`hsl(var(--${color}))`} stopOpacity="0.6" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <motion.path
      d="M-100,540 Q400,300 600,540 T1000,540 T1400,540 T1800,540 T2200,540"
      fill="none"
      stroke={`url(#pipelineGrad-${delay})`}
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 1, 0],
        opacity: [0, 0.8, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </svg>
);

const DataPacket = ({ startX, startY, endX, endY, delay = 0, duration = 3 }: { 
  startX: number; startY: number; endX: number; endY: number; delay?: number; duration?: number 
}) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
    initial={{ x: startX, y: startY, opacity: 0, scale: 0 }}
    animate={{
      x: [startX, endX],
      y: [startY, endY],
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const PulsingNode = ({ x, y, size = 40, delay = 0, label }: { 
  x: string; y: string; size?: number; delay?: number; label: string 
}) => (
  <motion.div
    className="absolute flex items-center justify-center"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
  >
    <motion.div
      className="absolute rounded-full bg-primary/10 border border-primary/20"
      style={{ width: size * 2, height: size * 2 }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.1, 0.3]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="rounded-xl bg-card/40 backdrop-blur-sm border border-primary/20 px-3 py-2 flex items-center gap-2"
      animate={{
        boxShadow: [
          "0 0 20px hsl(var(--primary) / 0.1)",
          "0 0 40px hsl(var(--primary) / 0.2)",
          "0 0 20px hsl(var(--primary) / 0.1)"
        ]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-emerald-400"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </motion.div>
  </motion.div>
);

const SpinningContainer = ({ x, y, delay = 0 }: { x: string; y: string; delay?: number }) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
  >
    <motion.div
      className="w-12 h-12 rounded-lg border-2 border-primary/30 bg-primary/5 backdrop-blur-sm flex items-center justify-center"
      animate={{
        borderColor: ["hsl(var(--primary) / 0.2)", "hsl(var(--primary) / 0.5)", "hsl(var(--primary) / 0.2)"]
      }}
      transition={{ duration: 3, repeat: Infinity, delay }}
    >
      <svg className="w-6 h-6 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186zm2.93 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.929 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.887c0 .102.083.185.186.185zm5.859 2.715h2.118a.186.186 0 00.186-.186v-1.887a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.185.185 0 00.184-.186v-1.887a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.929 0h2.119a.186.186 0 00.185-.186v-1.887a.186.186 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.887c0 .102.083.186.186.186zm8.764-5.43h2.12a.186.186 0 00.185-.186V6.29a.185.185 0 00-.186-.185h-2.119a.185.185 0 00-.184.185v1.887c0 .102.083.185.184.186zm0 2.715h2.12a.186.186 0 00.185-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.184.185v1.888c0 .102.083.185.184.185zm2.927 2.714h2.12a.186.186 0 00.185-.186v-1.887a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.887c0 .102.083.186.185.186zm0-5.429h2.12a.186.186 0 00.185-.186V6.29a.186.186 0 00-.186-.185h-2.119a.186.186 0 00-.185.185v1.887c0 .102.083.185.185.186zm0-2.715h2.12a.186.186 0 00.185-.186V3.574a.186.186 0 00-.186-.185h-2.119a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.186zm-5.857 0h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186zm-5.857 0h2.119a.185.185 0 00.185-.186V3.574a.186.186 0 00-.185-.185h-2.12a.186.186 0 00-.185.186v1.887c0 .102.083.185.186.186zm2.928 0h2.12a.185.185 0 00.184-.186V3.574a.185.185 0 00-.184-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.186zm-5.857 5.43h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.887c0 .102.083.185.186.185zm0-2.715h2.119a.185.185 0 00.185-.186V6.29a.185.185 0 00-.185-.185h-2.12a.186.186 0 00-.185.185v1.887c0 .102.083.185.186.186zm0 5.43h2.119a.185.185 0 00.185-.186v-1.887a.186.186 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.887c0 .102.083.186.186.186zm0 2.714h2.119a.186.186 0 00.185-.186v-1.886a.186.186 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.886c0 .102.083.186.186.186zm2.928 0h2.12a.185.185 0 00.184-.186v-1.886a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.886c0 .102.083.186.185.186zm2.929 0h2.118a.185.185 0 00.186-.186v-1.886a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.886c0 .102.082.186.185.186zm5.857 0h2.12a.186.186 0 00.185-.186v-1.886a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.886c0 .102.083.186.185.186zm-2.929 0h2.119a.186.186 0 00.185-.186v-1.886a.186.186 0 00-.185-.186h-2.119a.185.185 0 00-.184.186v1.886c0 .102.083.186.184.186zm5.858 0h2.119a.186.186 0 00.185-.186v-1.886a.186.186 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.886c0 .102.083.186.186.186z"/>
      </svg>
    </motion.div>
  </motion.div>
);

const CircuitLine = ({ path, delay = 0, duration = 4 }: { path: string; delay?: number; duration?: number }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <motion.path
      d={path}
      fill="none"
      stroke="hsl(var(--primary) / 0.15)"
      strokeWidth="1"
      strokeDasharray="5 5"
    />
    <motion.circle
      r="4"
      fill="hsl(var(--primary))"
      filter="url(#glow)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity }}
    >
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`}>
        <mpath href={`#circuit-${delay}`} />
      </animateMotion>
    </motion.circle>
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <path id={`circuit-${delay}`} d={path} />
    </defs>
  </svg>
);

const MonitoringGraph = ({ x, y, delay = 0 }: { x: string; y: string; delay?: number }) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: delay + 1 }}
  >
    <div className="w-24 h-16 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10 p-2 overflow-hidden">
      <div className="flex items-end justify-between h-full gap-0.5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 bg-gradient-to-t from-primary/40 to-primary/80 rounded-t"
            animate={{
              height: [`${20 + Math.random() * 30}%`, `${40 + Math.random() * 50}%`, `${20 + Math.random() * 30}%`]
            }}
            transition={{
              duration: 2 + Math.random(),
              delay: delay + i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const PipelineStage = ({ x, y, label, delay = 0, isActive = false }: { 
  x: string; y: string; label: string; delay?: number; isActive?: boolean 
}) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
  >
    <motion.div
      className="px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-primary/20 text-xs font-medium text-muted-foreground"
      animate={{
        borderColor: isActive 
          ? ["hsl(var(--primary) / 0.2)", "hsl(var(--primary) / 0.6)", "hsl(var(--primary) / 0.2)"]
          : "hsl(var(--primary) / 0.2)",
        boxShadow: isActive
          ? ["0 0 0px hsl(var(--primary) / 0)", "0 0 20px hsl(var(--primary) / 0.3)", "0 0 0px hsl(var(--primary) / 0)"]
          : "none"
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {label}
    </motion.div>
  </motion.div>
);

const HexGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
        <polygon 
          points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" 
          fill="none" 
          stroke="hsl(var(--primary))" 
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
);

export function DevOpsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Hex grid pattern */}
      <HexGrid />
      
      {/* Flowing pipeline lines */}
      <PipelinePath delay={0} duration={10} />
      <PipelinePath delay={3} duration={12} />
      <PipelinePath delay={6} duration={8} />
      
      {/* Circuit lines with moving dots */}
      <CircuitLine path="M100,200 L400,200 L400,400 L700,400 L700,300" delay={0} duration={6} />
      <CircuitLine path="M1820,300 L1500,300 L1500,500 L1200,500 L1200,400" delay={2} duration={8} />
      <CircuitLine path="M960,100 L960,300 L1100,300 L1100,500" delay={4} duration={5} />
      
      {/* Pipeline stages */}
      <PipelineStage x="15%" y="25%" label="Build" delay={0} isActive />
      <PipelineStage x="30%" y="25%" label="Test" delay={0.5} isActive />
      <PipelineStage x="45%" y="25%" label="Deploy" delay={1} isActive />
      
      {/* Spinning containers */}
      <SpinningContainer x="75%" y="20%" delay={0} />
      <SpinningContainer x="85%" y="35%" delay={2} />
      <SpinningContainer x="80%" y="50%" delay={4} />
      
      {/* Pulsing nodes (Kubernetes style) */}
      <PulsingNode x="20%" y="60%" label="Node 1" delay={0} />
      <PulsingNode x="35%" y="70%" label="Node 2" delay={1} />
      <PulsingNode x="50%" y="65%" label="Node 3" delay={2} />
      
      {/* Monitoring graphs */}
      <MonitoringGraph x="85%" y="75%" delay={0} />
      <MonitoringGraph x="70%" y="85%" delay={1} />
      
      {/* Data packets flowing */}
      <DataPacket startX={200} startY={400} endX={600} endY={400} delay={0} duration={4} />
      <DataPacket startX={800} startY={300} endX={1200} endY={500} delay={1} duration={5} />
      <DataPacket startX={1400} startY={200} endX={1000} endY={400} delay={2} duration={4} />
      <DataPacket startX={300} startY={600} endX={700} endY={500} delay={3} duration={3} />
      <DataPacket startX={1600} startY={400} endX={1200} endY={300} delay={4} duration={5} />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)',
          left: '60%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(180 70% 50% / 0.05) 0%, transparent 60%)',
          left: '20%',
          top: '60%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
