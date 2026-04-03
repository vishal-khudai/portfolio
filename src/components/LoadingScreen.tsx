import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Gamepad2, Box, Layers, Palette } from "lucide-react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
          </div>

          <div className="relative flex flex-col items-center gap-12">
            {/* Animated Icons */}
            <div className="flex items-center gap-8">
              <motion.div
                animate={{ 
                  rotateY: 360,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="text-accent/40"
              >
                <Box className="w-8 h-8" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: 360
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="bg-accent rounded-2xl w-20 h-20 flex items-center justify-center shadow-[0_0_50px_rgba(var(--accent-rgb),0.3)]"
              >
                <Gamepad2 className="w-10 h-10 text-black" />
              </motion.div>

              <motion.div
                animate={{ 
                  rotateX: 360,
                  y: [0, 10, 0]
                }}
                transition={{ 
                  rotateX: { duration: 3, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="text-accent/40"
              >
                <Palette className="w-8 h-8" />
              </motion.div>
            </div>

            {/* Loading Text */}
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white/60"
              >
                <Layers className="w-4 h-4 text-accent animate-pulse" />
                <span>Rendering Assets</span>
                <span className="flex gap-1">
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
                </span>
              </motion.div>

              {/* Progress Bar Container */}
              <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
                <motion.div 
                  className="h-full bg-accent rounded-full shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              
              <div className="text-[10px] font-mono text-accent/50 tabular-nums">
                {Math.round(progress)}% COMPLETE
              </div>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-3xl" />
          <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-3xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
