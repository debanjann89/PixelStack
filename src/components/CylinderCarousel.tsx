'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface CylinderCarouselProps {
  items: {
    id: string;
    title: string;
    category: string;
    desc: string;
    image: string | null;
    bg: string;
  }[];
  onItemClick?: (item: CylinderCarouselProps['items'][0]) => void;
}

export function CylinderCarousel({ items, onItemClick }: CylinderCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(0);
  const rotationStartRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const faceCount = items.length || 6;
  const anglePerFace = 360 / faceCount;
  // Radius calculated from face width to form a proper cylinder
  const faceWidth = 320;
  const radius = faceWidth / (2 * Math.tan(Math.PI / faceCount));

  // Auto-rotate
  useEffect(() => {
    if (isHovered || isDragging) return;

    let lastTime = performance.now();
    const speed = 0.015; // degrees per ms

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      setRotation((prev) => prev + speed * delta);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, isDragging]);

  // Drag handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      dragStartRef.current = e.clientX;
      rotationStartRef.current = rotation;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [rotation]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - dragStartRef.current;
      setRotation(rotationStartRef.current + delta * 0.3);
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none"
      style={{ perspective: '1200px', height: '420px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Reflection/glow underneath */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      {/* 3D Cylinder */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`,
          width: `${faceWidth}px`,
          height: '360px',
          transition: isDragging ? 'none' : undefined,
        }}
      >
        {items.map((item, index) => {
          const angle = index * anglePerFace;

          return (
            <motion.div
              key={item.id}
              className="absolute inset-0 w-full h-full cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                backfaceVisibility: 'hidden',
              }}
              onClick={() => onItemClick?.(item)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`relative w-full h-full rounded-xl overflow-hidden border border-zinc-800/60 bg-gradient-to-br ${item.bg} shadow-2xl shadow-black/50 group`}
              >
                {/* Image */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                    draggable={false}
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Subtle shine on edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.03]" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-primary text-[9px] font-bold uppercase tracking-[0.25em] block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-base font-bold leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-[11px] line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Top-right glow dot */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Drag hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-600 text-[10px] font-medium tracking-wider uppercase flex items-center gap-2 pointer-events-none">
        <span className="inline-block w-4 h-px bg-zinc-700" />
        Drag to explore
        <span className="inline-block w-4 h-px bg-zinc-700" />
      </div>
    </div>
  );
}
