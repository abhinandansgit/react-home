import React, { useEffect, useRef } from 'react';

export function BinaryRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const fontSize = 18;
    const tailLength = 25;
    const chars = ['0', '1'];
    let columns = [];

    const initColumns = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      // Calculate dynamic positions based on screen width
      // On smaller screens, they might be closer to the edge
      const leftOffsets = [width * 0.05, width * 0.12, width * 0.19];
      const rightOffsets = [width * 0.81, width * 0.88, width * 0.95];

      const configs = [
        // Left side
        { x: leftOffsets[0], y: Math.random() * height, speed: 2, direction: 1 },
        { x: leftOffsets[1], y: Math.random() * height, speed: 1.5, direction: -1 },
        { x: leftOffsets[2], y: Math.random() * height, speed: 2.5, direction: 1 },
        // Right side
        { x: rightOffsets[0], y: Math.random() * height, speed: 1.8, direction: -1 },
        { x: rightOffsets[1], y: Math.random() * height, speed: 2.2, direction: 1 },
        { x: rightOffsets[2], y: Math.random() * height, speed: 1.7, direction: -1 },
      ];

      columns = configs.map(config => {
        return {
          ...config,
          baseX: config.x,
          nodes: Array.from({ length: tailLength }, (_, i) => ({
            char: chars[Math.floor(Math.random() * chars.length)],
            opacity: 1 - (i / tailLength)
          }))
        };
      });
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      columns.forEach(col => {
        col.y += col.speed * col.direction;
        
        if (col.direction === 1 && col.y > canvas.height + tailLength * fontSize) {
          col.y = -fontSize * tailLength;
        } else if (col.direction === -1 && col.y < -tailLength * fontSize) {
          col.y = canvas.height + fontSize * tailLength;
        }

        // Base jitter
        const jitterX = (Math.random() - 0.5) * 4;
        let actualX = col.baseX + jitterX;

        ctx.font = `bold ${fontSize}px monospace`;
        ctx.textAlign = "center";
        
        for (let i = 0; i < tailLength; i++) {
          const node = col.nodes[i];
          const nodeY = col.y - (i * fontSize * col.direction);
          
          // Randomly flip bits
          if (Math.random() < 0.05) {
            node.char = chars[Math.floor(Math.random() * chars.length)];
          }

          let charX = actualX;
          
          // Cursor interaction
          const nodeDx = mouse.x - charX;
          const nodeDy = mouse.y - nodeY;
          const nodeDist = Math.sqrt(nodeDx * nodeDx + nodeDy * nodeDy);
          
          if (nodeDist < 120) {
            // Repel slightly and increase jitter on hover
            const force = (120 - nodeDist) / 120;
            charX -= nodeDx * force * 0.3;
            charX += (Math.random() - 0.5) * 12 * force; // extra jitter
            
            // Highlight color when cursor is near (Cyan)
            ctx.fillStyle = `rgba(34, 211, 238, ${node.opacity + 0.3})`;
          } else {
            // Default color (Indigo)
            ctx.fillStyle = `rgba(129, 140, 248, ${node.opacity * 0.6})`; 
          }

          ctx.fillText(node.char, charX, nodeY);
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-1 opacity-60 mix-blend-screen"
    />
  );
}
