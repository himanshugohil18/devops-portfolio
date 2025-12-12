import { motion } from "framer-motion";

// Diagonal flowing pipeline with glow
const GlowingPipeline = ({ 
  startX, startY, endX, endY, delay = 0, duration = 12, color = "cyan" 
}: { 
  startX: number; startY: number; endX: number; endY: number; 
  delay?: number; duration?: number; color?: string 
}) => {
  const colors = {
    cyan: "rgb(34, 211, 238)",
    blue: "rgb(59, 130, 246)",
    emerald: "rgb(52, 211, 153)"
  };
  const glowColor = colors[color as keyof typeof colors] || colors.cyan;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`pipeGrad-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor={glowColor} stopOpacity="0.4" />
          <stop offset="60%" stopColor={glowColor} stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <filter id={`pipeGlow-${delay}`}>
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Static path */}
      <path
        d={`M${startX},${startY} Q${(startX + endX) / 2},${startY - 100} ${endX},${endY}`}
        fill="none"
        stroke={glowColor}
        strokeWidth="1"
        opacity="0.1"
      />
      {/* Animated glow */}
      <motion.path
        d={`M${startX},${startY} Q${(startX + endX) / 2},${startY - 100} ${endX},${endY}`}
        fill="none"
        stroke={`url(#pipeGrad-${delay})`}
        strokeWidth="3"
        filter={`url(#pipeGlow-${delay})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: [0, 1],
          opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
};

// Data stream particles
const DataStream = ({ 
  path, delay = 0, duration = 8, color = "cyan" 
}: { 
  path: string; delay?: number; duration?: number; color?: string 
}) => {
  const colors = {
    cyan: "rgb(34, 211, 238)",
    blue: "rgb(59, 130, 246)",
    emerald: "rgb(52, 211, 153)"
  };
  const particleColor = colors[color as keyof typeof colors] || colors.cyan;
  const id = `stream-${delay}-${Math.random()}`;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
      <defs>
        <path id={id} d={path} />
        <filter id={`streamGlow-${id}`}>
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Base path */}
      <path d={path} fill="none" stroke={particleColor} strokeWidth="0.5" opacity="0.15" strokeDasharray="8 12" />
      {/* Moving particle */}
      <motion.circle
        r="6"
        fill={particleColor}
        filter={`url(#streamGlow-${id})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.7, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      >
        <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite">
          <mpath href={`#${id}`} />
        </animateMotion>
      </motion.circle>
      {/* Trailing particles */}
      {[0.3, 0.6, 0.9].map((offset, i) => (
        <motion.circle
          key={i}
          r={4 - i}
          fill={particleColor}
          opacity={0.3 - i * 0.1}
        >
          <animateMotion dur={`${duration}s`} begin={`${delay + offset}s`} repeatCount="indefinite">
            <mpath href={`#${id}`} />
          </animateMotion>
        </motion.circle>
      ))}
    </svg>
  );
};

// Kubernetes-style pulsing cluster node
const ClusterNode = ({ 
  x, y, size = 60, delay = 0, label, color = "cyan" 
}: { 
  x: string; y: string; size?: number; delay?: number; label?: string; color?: string 
}) => {
  const colors = {
    cyan: { ring: "border-cyan-400/30", dot: "bg-cyan-400", glow: "shadow-cyan-400/50" },
    blue: { ring: "border-blue-400/30", dot: "bg-blue-400", glow: "shadow-blue-400/50" },
    emerald: { ring: "border-emerald-400/30", dot: "bg-emerald-400", glow: "shadow-emerald-400/50" }
  };
  const colorSet = colors[color as keyof typeof colors] || colors.cyan;
  
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      {/* Outer pulse ring */}
      <motion.div
        className={`absolute rounded-full border ${colorSet.ring}`}
        style={{ width: size * 1.5, height: size * 1.5 }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{ duration: 4, delay, repeat: Infinity, ease: "easeOut" }}
      />
      {/* Inner ring */}
      <motion.div
        className={`absolute rounded-full border ${colorSet.ring}`}
        style={{ width: size, height: size }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ duration: 3, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Core node */}
      <motion.div
        className="rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 px-3 py-2 flex items-center gap-2"
        animate={{
          boxShadow: [
            `0 0 20px rgba(34, 211, 238, 0.1)`,
            `0 0 40px rgba(34, 211, 238, 0.25)`,
            `0 0 20px rgba(34, 211, 238, 0.1)`
          ]
        }}
        transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className={`w-2 h-2 rounded-full ${colorSet.dot}`}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {label && <span className="text-xs text-slate-400 font-medium">{label}</span>}
      </motion.div>
    </motion.div>
  );
};

// CI/CD Pipeline stages
const PipelineStages = () => (
  <div className="absolute top-[15%] left-[10%] flex items-center gap-4">
    {['Build', 'Test', 'Deploy'].map((stage, i) => (
      <motion.div key={stage} className="flex items-center">
        <motion.div
          className="px-4 py-2 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 text-xs font-medium text-cyan-300/80"
          animate={{
            borderColor: ["rgba(34, 211, 238, 0.2)", "rgba(34, 211, 238, 0.5)", "rgba(34, 211, 238, 0.2)"],
            boxShadow: [
              "0 0 10px rgba(34, 211, 238, 0)",
              "0 0 20px rgba(34, 211, 238, 0.2)",
              "0 0 10px rgba(34, 211, 238, 0)"
            ]
          }}
          transition={{ duration: 2, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {stage}
        </motion.div>
        {i < 2 && (
          <motion.div
            className="w-8 h-px bg-gradient-to-r from-cyan-500/40 to-cyan-500/10 mx-2"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
          />
        )}
      </motion.div>
    ))}
  </div>
);

// Scanning grid
const ScanningGrid = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}
    />
    {/* Horizontal scan line */}
    <motion.div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
      animate={{ top: ['-10%', '110%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    {/* Vertical scan line */}
    <motion.div
      className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent"
      animate={{ left: ['-5%', '105%'] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// Monitoring waveform
const MonitoringWave = ({ y, color = "cyan", delay = 0 }: { y: string; color?: string; delay?: number }) => {
  const colors = {
    cyan: "rgb(34, 211, 238)",
    emerald: "rgb(52, 211, 153)"
  };
  const waveColor = colors[color as keyof typeof colors] || colors.cyan;
  
  return (
    <svg 
      className="absolute w-full h-16 opacity-30" 
      style={{ top: y }} 
      viewBox="0 0 1920 64" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`waveGrad-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor={waveColor} stopOpacity="0.6" />
          <stop offset="80%" stopColor={waveColor} stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <motion.path
        fill="none"
        stroke={`url(#waveGrad-${delay})`}
        strokeWidth="2"
        animate={{
          d: [
            "M0,32 Q120,16 240,32 T480,32 T720,32 T960,32 T1200,32 T1440,32 T1680,32 T1920,32",
            "M0,32 Q120,48 240,32 T480,32 T720,32 T960,32 T1200,32 T1440,32 T1680,32 T1920,32",
            "M0,32 Q120,16 240,32 T480,32 T720,32 T960,32 T1200,32 T1440,32 T1680,32 T1920,32"
          ]
        }}
        transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
};

// Docker container icon moving along path
const MovingContainer = ({ delay = 0, duration = 15 }: { delay?: number; duration?: number }) => {
  const pathId = `containerPath-${delay}`;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
      <defs>
        <path id={pathId} d="M-50,600 Q400,400 700,550 T1400,450 T1970,500" />
      </defs>
      <path d="M-50,600 Q400,400 700,550 T1400,450 T1970,500" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1" strokeDasharray="4 8" />
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration, delay, repeat: Infinity }}
      >
        <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite">
          <mpath href={`#${pathId}`} />
        </animateMotion>
        <rect x="-15" y="-12" width="30" height="24" rx="4" fill="rgba(34, 211, 238, 0.3)" stroke="rgba(34, 211, 238, 0.6)" strokeWidth="1" />
        <line x1="-10" y1="-4" x2="10" y2="-4" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="1" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="1" />
        <line x1="-10" y1="4" x2="10" y2="4" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="1" />
      </motion.g>
    </svg>
  );
};

// Ambient glow orbs
const GlowOrb = ({ x, y, size, color, delay = 0 }: { 
  x: string; y: string; size: number; color: string; delay?: number 
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      transform: 'translate(-50%, -50%)',
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export function DevOpsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-transparent to-slate-900/30" />
      
      {/* Scanning grid with lines */}
      <ScanningGrid />
      
      {/* CI/CD Pipeline stages */}
      <PipelineStages />
      
      {/* Glowing diagonal pipelines */}
      <GlowingPipeline startX={-100} startY={400} endX={800} endY={300} delay={0} duration={10} color="cyan" />
      <GlowingPipeline startX={600} startY={700} endX={1500} endY={400} delay={3} duration={12} color="blue" />
      <GlowingPipeline startX={1000} startY={200} endX={2000} endY={500} delay={6} duration={11} color="emerald" />
      
      {/* Data streams with particles */}
      <DataStream path="M100,300 C300,200 500,400 700,300 S900,200 1100,300" delay={0} duration={10} color="cyan" />
      <DataStream path="M200,700 C400,600 600,800 800,700 S1000,600 1200,700" delay={4} duration={12} color="emerald" />
      <DataStream path="M1200,400 C1400,300 1600,500 1800,400" delay={2} duration={8} color="blue" />
      
      {/* Moving Docker containers */}
      <MovingContainer delay={0} duration={18} />
      <MovingContainer delay={6} duration={20} />
      
      {/* Kubernetes cluster nodes */}
      <ClusterNode x="25%" y="45%" label="Pod-1" delay={0} color="cyan" />
      <ClusterNode x="45%" y="55%" label="Pod-2" delay={1} color="emerald" />
      <ClusterNode x="65%" y="40%" label="Pod-3" delay={2} color="blue" />
      <ClusterNode x="80%" y="60%" label="Node" delay={3} color="cyan" />
      
      {/* Monitoring waveforms */}
      <MonitoringWave y="75%" color="cyan" delay={0} />
      <MonitoringWave y="82%" color="emerald" delay={1} />
      
      {/* Ambient glow orbs */}
      <GlowOrb x="20%" y="30%" size={400} color="rgba(34, 211, 238, 0.15)" delay={0} />
      <GlowOrb x="70%" y="50%" size={500} color="rgba(59, 130, 246, 0.12)" delay={2} />
      <GlowOrb x="50%" y="80%" size={350} color="rgba(52, 211, 153, 0.1)" delay={4} />
      <GlowOrb x="85%" y="25%" size={300} color="rgba(34, 211, 238, 0.1)" delay={6} />
    </div>
  );
}
