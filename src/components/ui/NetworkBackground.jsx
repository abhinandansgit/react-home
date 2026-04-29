import React, { useEffect, useRef } from 'react';

export function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const numParticles = Math.floor(window.innerWidth / 25);
    
    let mouse = { x: null, y: null, lastMove: Date.now() };

    const handleMouseMove = (e) => {
      // Get relative position to canvas
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Only track if mouse is actually over the hero area
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
        mouse.lastMove = Date.now();
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Attach to window to capture moves even if they started elsewhere, 
    // but the handler filters by canvas bounds.
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.2 + 0.4;
      }
      
      update(mouseX, mouseY, forceMultiplier) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Magnetize to mouse with scaled force
        if (mouseX != null && mouseY != null && forceMultiplier > 0) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100; // Even more localized
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            this.x += dx * force * 0.02 * forceMultiplier;
            this.y += dy * force * 0.02 * forceMultiplier;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.35)'; 
        ctx.fill();
      }
    }

    particles = Array.from({ length: Math.min(numParticles, 170) }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      const timeSinceMove = now - mouse.lastMove;
      
      // Smoothly fade out the force after 1.5s, fully gone by 2s
      let forceMultiplier = 1;
      if (timeSinceMove > 1500) {
        forceMultiplier = Math.max(0, 1 - (timeSinceMove - 1500) / 500);
      }

      // Final interaction check (including scroll)
      const rect = canvas.getBoundingClientRect();
      const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
      const activeMouseX = isOutOfView ? null : mouse.x;
      const activeMouseY = isOutOfView ? null : mouse.y;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(activeMouseX, activeMouseY, forceMultiplier);
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 220) {
            ctx.beginPath();
            const opacity = 1 - (distance / 220);
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity * 0.45})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Draw lines to mouse with same multiplier
        if (activeMouseX != null && activeMouseY != null && forceMultiplier > 0) {
          const dx = particles[i].x - activeMouseX;
          const dy = particles[i].y - activeMouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const mouseMaxDist = 180;
          if (distance < mouseMaxDist) {
            ctx.beginPath();
            const opacity = (1 - (distance / mouseMaxDist)) * forceMultiplier;
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity * 0.5})`;
            ctx.lineWidth = 1.4;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(activeMouseX, activeMouseY);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-100 mix-blend-screen"
    />
  );
}
