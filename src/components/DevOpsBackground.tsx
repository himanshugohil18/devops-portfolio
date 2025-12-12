import { motion } from "framer-motion";

const FlowingLine = ({ y, delay = 0, duration = 20 }: { y: string; delay?: number; duration?: number }) => (
  <motion.div
    className="absolute h-px w-full"
    style={{ top: y }}
  >
    <motion.div
      className="h-full bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent"
      style={{ width: '40%' }}
      animate={{ x: ['-40%', '140%'] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </motion.div>
);

const DataDot = ({ startX, y, delay = 0, duration = 15 }: { 
  startX: string; y: string; delay?: number; duration?: number 
}) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/[0.06]"
    style={{ top: y, left: startX }}
    animate={{ 
      x: [0, 800],
      opacity: [0, 0.08, 0.08, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const SoftNode = ({ x, y, delay = 0 }: { x: string; y: string; delay?: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-primary/[0.04]"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.03, 0.06, 0.03]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const CircuitPath = ({ delay = 0 }: { delay?: number }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <motion.path
      d="M0,400 L300,400 L350,350 L600,350 L650,400 L900,400"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1] }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.path
      d="M1920,600 L1600,600 L1550,650 L1300,650 L1250,600 L1000,600"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1] }}
      transition={{
        duration: 10,
        delay: delay + 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </svg>
);

const WaveformLine = ({ y, delay = 0 }: { y: string; delay?: number }) => (
  <svg className="absolute w-full h-8 opacity-[0.02]" style={{ top: y }} viewBox="0 0 1920 32" preserveAspectRatio="none">
    <motion.path
      d="M0,16 Q60,8 120,16 T240,16 T360,16 T480,16 T600,16 T720,16 T840,16 T960,16 T1080,16 T1200,16 T1320,16 T1440,16 T1560,16 T1680,16 T1800,16 T1920,16"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      animate={{
        d: [
          "M0,16 Q60,8 120,16 T240,16 T360,16 T480,16 T600,16 T720,16 T840,16 T960,16 T1080,16 T1200,16 T1320,16 T1440,16 T1560,16 T1680,16 T1800,16 T1920,16",
          "M0,16 Q60,24 120,16 T240,16 T360,16 T480,16 T600,16 T720,16 T840,16 T960,16 T1080,16 T1200,16 T1320,16 T1440,16 T1560,16 T1680,16 T1800,16 T1920,16",
          "M0,16 Q60,8 120,16 T240,16 T360,16 T480,16 T600,16 T720,16 T840,16 T960,16 T1080,16 T1200,16 T1320,16 T1440,16 T1560,16 T1680,16 T1800,16 T1920,16"
        ]
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </svg>
);

const SubtleGrid = () => (
  <div 
    className="absolute inset-0 opacity-[0.015]"
    style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
      `,
      backgroundSize: '100px 100px'
    }}
  />
);

export function DevOpsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Very subtle grid */}
      <SubtleGrid />
      
      {/* Soft flowing horizontal lines */}
      <FlowingLine y="20%" delay={0} duration={25} />
      <FlowingLine y="40%" delay={5} duration={22} />
      <FlowingLine y="60%" delay={10} duration={28} />
      <FlowingLine y="80%" delay={15} duration={24} />
      
      {/* Tiny data dots moving slowly */}
      <DataDot startX="5%" y="25%" delay={0} duration={18} />
      <DataDot startX="10%" y="45%" delay={4} duration={20} />
      <DataDot startX="0%" y="65%" delay={8} duration={16} />
      <DataDot startX="15%" y="75%" delay={12} duration={22} />
      
      {/* Very soft pulsing nodes */}
      <SoftNode x="15%" y="30%" delay={0} />
      <SoftNode x="35%" y="50%" delay={1} />
      <SoftNode x="55%" y="35%" delay={2} />
      <SoftNode x="75%" y="55%" delay={3} />
      <SoftNode x="85%" y="25%" delay={4} />
      <SoftNode x="25%" y="70%" delay={5} />
      <SoftNode x="65%" y="75%" delay={6} />
      
      {/* Light circuit paths */}
      <CircuitPath delay={0} />
      
      {/* Faint waveform lines */}
      <WaveformLine y="30%" delay={0} />
      <WaveformLine y="70%" delay={2} />
      
      {/* Very soft ambient glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.02) 0%, transparent 70%)',
          left: '70%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(180 50% 50% / 0.015) 0%, transparent 70%)',
          left: '25%',
          top: '65%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
