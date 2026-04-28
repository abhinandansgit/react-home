import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const binaryChars = '01';
const specialChars = '!@#$%^&*()_+<>?';

export function TextShuffler({ phrases, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % phrases.length;
      glitchTo(phrases[nextIndex]);
      setIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [index, phrases, interval]);

  const glitchTo = (target) => {
    let currentIteration = 0;
    const totalFrames = target.length * 2 + 10;
    
    const intervalId = setInterval(() => {
      setDisplayText(() => 
        target
          .split('')
          .map((char, i) => {
            // If we've passed the threshold for this character, show it
            if (currentIteration > i * 2) return target[i];
            
            // Otherwise, show a binary or special character with occasional flicker
            return Math.random() > 0.8 
              ? specialChars[Math.floor(Math.random() * specialChars.length)]
              : binaryChars[Math.floor(Math.random() * binaryChars.length)];
          })
          .join('')
      );

      currentIteration++;

      if (currentIteration >= totalFrames) {
        setDisplayText(target);
        clearInterval(intervalId);
      }
    }, 50);
  };

  return (
    <span className="inline-block w-full md:w-auto md:min-w-[500px] min-h-[1.5em] text-center md:whitespace-nowrap whitespace-normal transition-all duration-500 font-mono tracking-tighter">
      {displayText}
    </span>
  );
}
