import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingShapes = [
    { size: 300, x: '10%', y: '20%', color: 'primary', delay: 0 },
    { size: 200, x: '80%', y: '30%', color: 'primary', delay: 0.5 },
    { size: 250, x: '70%', y: '70%', color: 'primary', delay: 1 },
    { size: 180, x: '20%', y: '80%', color: 'primary', delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl opacity-[0.03] dark:opacity-[0.05]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, hsl(var(--${shape.color})) 0%, transparent 70%)`,
          }}
          animate={{
            x: mousePosition.x * (index % 2 === 0 ? 1 : -1),
            y: mousePosition.y * (index % 2 === 0 ? -1 : 1),
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      ))}

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)',
          left: '50%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}