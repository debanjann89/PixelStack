'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  baseSpeedX: number;
  baseSpeedY: number;
  opacity: number;
  color: string;
  glow: boolean;
}

export default function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 65;
    
    // Track mouse position
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120,
    };

    // Color palettes based on CSS custom properties or fallback values
    const getColors = () => {
      const isLight = document.documentElement.classList.contains('light');
      if (isLight) {
        return {
          primary: '#059669', // Emerald 600
          secondary: '#0d9488', // Teal 600
          accent: '#10b981', // Emerald 500
          background: 'rgba(240, 253, 244, 0.05)',
        };
      }
      return {
        primary: '#10b981', // Emerald 500
        secondary: '#14b8a6', // Teal 500
        accent: '#34d399', // Mint 400
        background: 'rgba(2, 6, 4, 0.05)',
      };
    };

    // Resize handler with DPI scaling support
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles(rect.width, rect.height);
    };

    // Initialize particles
    const initParticles = (width: number, height: number) => {
      particles = [];
      const colors = getColors();
      const palette = [colors.primary, colors.secondary, colors.accent];

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 3; // Pixel size
        const speedX = (Math.random() - 0.5) * 0.4;
        const speedY = (Math.random() - 0.5) * 0.4;
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          speedX,
          speedY,
          baseSpeedX: speedX,
          baseSpeedY: speedY,
          opacity: Math.random() * 0.5 + 0.25,
          color: palette[Math.floor(Math.random() * palette.length)],
          glow: Math.random() > 0.8,
        });
      }
    };

    // Track mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Burst particles on click
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const colors = getColors();
      const palette = [colors.primary, colors.secondary, colors.accent];

      // Emit 15 rapid explosion particles
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        const size = Math.random() * 4 + 2;
        
        particles.push({
          x: clickX,
          y: clickY,
          size,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          baseSpeedX: Math.cos(angle) * 0.2,
          baseSpeedY: Math.sin(angle) * 0.2,
          opacity: 1,
          color: palette[Math.floor(Math.random() * palette.length)],
          glow: true,
        });
      }

      // Remove excess particles if they exceed 120
      if (particles.length > 120) {
        particles.splice(0, particles.length - 120);
      }
    };

    // Core animation tick
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Render grid alignment guides faintly (creative blueprint aesthetic)
      ctx.strokeStyle = document.documentElement.classList.contains('light') 
        ? 'rgba(5, 150, 105, 0.03)' 
        : 'rgba(16, 185, 129, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render and update particles
      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse attraction/repulsion physics
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Push away/attract code depending on speed configuration
            const force = (mouse.radius - distance) / mouse.radius;
            // Push slightly
            p.speedX -= (dx / distance) * force * 0.08;
            p.speedY -= (dy / distance) * force * 0.08;
            p.opacity = Math.min(p.opacity + 0.02, 0.85);
          } else {
            // Decay back to base speed
            p.speedX += (p.baseSpeedX - p.speedX) * 0.05;
            p.speedY += (p.baseSpeedY - p.speedY) * 0.05;
          }
        } else {
          // Slow recovery to base speed
          p.speedX += (p.baseSpeedX - p.speedX) * 0.05;
          p.speedY += (p.baseSpeedY - p.speedY) * 0.05;
        }

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        // Bound validation
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Draw particle as a clean modern square ("pixel")
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;

        // Apply visual neon glow to designated glow pixels
        if (p.glow) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;

        // Interactive "stacking" - Draw thin link lines between close particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            const alpha = (65 - dist) / 65 * 0.15;
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Watch theme changes
    const observer = new MutationObserver(() => {
      // Re-init particle colors on theme toggle
      const colors = getColors();
      const palette = [colors.primary, colors.secondary, colors.accent];
      particles.forEach(p => {
        p.color = palette[Math.floor(Math.random() * palette.length)];
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    // Initial setup
    handleResize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      if (canvas) {
        canvas.removeEventListener('click', handleClick);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
