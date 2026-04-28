import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

export function LiveClock() {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateString = time.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });

  return (
    <div 
      className="fixed bottom-8 right-8 z-100"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: -10 }}
            exit={{ opacity: 0, scale: 0.8, y: 10, x: -20 }}
            className="absolute bottom-0 right-full mb-0 mr-4 glass-dark p-4 rounded-2xl border border-white/10 shadow-2xl min-w-45"
          >
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Live Security Feed</span>
              <span className="text-2xl font-display font-bold text-white tabular-nums">
                {timeString}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {dateString} (GMT +5:30)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-2xl border border-white/10 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-linear-to-tr from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Clock className="w-6 h-6 relative z-10" />
        
        {/* Subtle pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-indigo-500"
        />
      </motion.button>
    </div>
  );
}
