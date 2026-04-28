import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useMotionValueEvent } from 'framer-motion';

export function Counter({ value, duration = 2, delay = 0 }) {
  // Extract number from string like "15,000+" or "250+"
  const numericValue = parseInt(value.replace(/,/g, ''), 10);
  const suffix = value.replace(/[0-9,]/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString();
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const animation = animate(count, numericValue, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth finish
    });

    return animation.stop;
  }, [count, numericValue, duration, delay]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}
