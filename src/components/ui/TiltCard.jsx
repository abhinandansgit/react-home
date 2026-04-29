import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

export function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Subtle tilt bounds
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: 0, rotateY: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn("transition-shadow duration-300", className)}
    >
      {children}
    </motion.div>
  );
}
