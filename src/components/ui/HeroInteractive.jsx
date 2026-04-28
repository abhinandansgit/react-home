import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Search, Code, GraduationCap, Zap, Cpu, Activity, Lock } from 'lucide-react';
import { cn } from '../../lib/utils';

const serviceCards = [
  { icon: Shield, label: 'AWARENESS', color: 'text-orange-400' },
  { icon: Search, label: 'OSINT', color: 'text-blue-400' },
  { icon: Code, label: 'DEV OPS', color: 'text-emerald-400' },
  { icon: GraduationCap, label: 'ACADEMY', color: 'text-purple-400' },
  { icon: Zap, label: 'AI CORE', color: 'text-cyan-400' },
];

export function HeroInteractive() {
  const [isOpen, setIsOpen] = useState(false);
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? 110 : 150);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      animate={{ height: isOpen ? (radius * 2.5 + 40) : 100 }}
      className="relative flex items-center justify-center w-full overflow-visible transition-all duration-500"
    >
      {/* HUD Orbit Background */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              className="absolute z-0 border border-white/5 rounded-full"
              style={{ width: radius * 2.1, height: radius * 2.1 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute z-0 border border-dashed border-indigo-500/20 rounded-full"
              style={{ width: radius * 2.3, height: radius * 2.3 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Central Core - High Fidelity Trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative z-20 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group overflow-hidden",
          isOpen
            ? "bg-indigo-600 text-white shadow-[0_0_30px_rgba(79,70,229,0.5)]"
            : "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:border-indigo-500/50"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {isOpen ? <Cpu className="w-10 h-10" /> : <Activity className="w-10 h-10 animate-pulse" />}
        </motion.div>
      </motion.button>

      {/* Floating HUD Nodes */}
      <AnimatePresence>
        {isOpen && serviceCards.map((card, index) => {
          const total = serviceCards.length;
          const angle = (index * (360 / total) - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{ opacity: 1, x, y, scale: 1 }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: index * 0.08
              }}
              className="absolute z-10"
            >
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                {/* Node Line Connector */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-t from-indigo-500/50 to-transparent origin-bottom -z-10 opacity-20" 
                  style={{ transform: `rotate(${index * (360 / total)}deg)` }} 
                />

                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-indigo-500/50 group-hover:-translate-y-1 transition-all">
                    <card.icon className={cn("w-7 h-7", card.color)} />
                  </div>
                </div>

                <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors uppercase">
                  {card.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
