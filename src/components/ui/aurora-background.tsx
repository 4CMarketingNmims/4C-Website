"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise3D = createNoise3D();

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    let animationId: number;
    let time = 0;

    const auroraColors = [
      { r: 68, g: 154, b: 249, a: 0.15 },   // #449AF9 - soft blue
      { r: 12, g: 46, b: 130, a: 0.12 },    // #0C2E82 - deep blue
      { r: 98, g: 91, b: 253, a: 0.18 },    // #625BFD - purple
      { r: 51, g: 110, b: 249, a: 0.14 },   // #336EF9 - medium blue
      { r: 30, g: 145, b: 254, a: 0.16 },   // #1E91FE - bright blue
      { r: 147, g: 197, b: 253, a: 0.1 },   // light blue variation
      { r: 129, g: 140, b: 248, a: 0.13 },  // lavender blue
      { r: 45, g: 212, b: 191, a: 0.12 },   // soft teal
      { r: 196, g: 181, b: 253, a: 0.11 },  // pale purple
      { r: 100, g: 181, b: 246, a: 0.15 },  // sky blue
    ];

    // Stars array
    const stars: { x: number; y: number; size: number; opacity: number; twinkle: number }[] = [];
    
    // Generate stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.6, // Stars in upper portion
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.01
      });
    }

    const drawStars = () => {
      ctx.save();
      for (const star of stars) {
        const twinkleOffset = Math.sin(time * star.twinkle) * 0.3;
        const currentOpacity = Math.max(0.1, star.opacity + twinkleOffset);
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add a subtle glow
        ctx.beginPath();
        ctx.fillStyle = `rgba(68, 154, 249, ${currentOpacity * 0.3})`;
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const drawAurora = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw stars first
      drawStars();

      // Draw multiple aurora layers with more organic curves and dynamic colors
      const layerCount = window.innerWidth < 768 ? 4 : 7;
      
      for (let layer = 0; layer < layerCount; layer++) {
        // Dynamic color selection with some randomness
        const primaryColor = auroraColors[layer % auroraColors.length];
        const secondaryColor = auroraColors[(layer + 3) % auroraColors.length];
        
        // Color mixing ratio based on time and layer
        const mixRatio = (Math.sin(time * 0.001 + layer * 0.5) + 1) * 0.5;
        const blendedColor = {
          r: Math.round(primaryColor.r * (1 - mixRatio) + secondaryColor.r * mixRatio),
          g: Math.round(primaryColor.g * (1 - mixRatio) + secondaryColor.g * mixRatio),
          b: Math.round(primaryColor.b * (1 - mixRatio) + secondaryColor.b * mixRatio),
          a: Math.max(0.08, Math.min(0.2, primaryColor.a * (0.8 + Math.sin(time * 0.002 + layer) * 0.4)))
        };
        
        // Create more organic, flowing shapes
        ctx.beginPath();
        
        const points: { x: number; y: number }[] = [];
        const segments = 50;
        
        // Generate flowing curve points
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments) * w;
          const baseY = h * 0.2 + layer * 20;
          
          // Multiple sine waves for complex curves
          const wave1 = Math.sin(x * 0.008 + time * 0.003 + layer) * 80;
          const wave2 = Math.sin(x * 0.015 + time * 0.002 + layer * 0.5) * 40;
          const wave3 = Math.sin(x * 0.025 + time * 0.004 + layer * 1.5) * 20;
          
          // Add noise for organic feel
          const noiseValue = noise3D(x * 0.005, time * 0.001, layer) * 60;
          
          const y = baseY + wave1 + wave2 + wave3 + noiseValue;
          points.push({ x, y });
        }
        
        // Draw the top curve
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const curr = points[i];
          const next = points[i + 1] || curr;
          
          // Smooth curve using quadratic bezier
          const cpx = (prev.x + curr.x) / 2;
          const cpy = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
        }
        
        // Create bottom curve for aurora band
        const bottomPoints: { x: number; y: number }[] = [];
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments) * w;
          const baseY = h * 0.4 + layer * 25;
          
          const wave1 = Math.sin(x * 0.006 + time * 0.0025 + layer + 1) * 60;
          const wave2 = Math.sin(x * 0.012 + time * 0.0018 + layer * 0.7) * 30;
          const noiseValue = noise3D(x * 0.004, time * 0.0008, layer + 10) * 40;
          
          const y = baseY + wave1 + wave2 + noiseValue;
          bottomPoints.push({ x, y });
        }
        
        // Connect to bottom curve (reverse order)
        for (let i = bottomPoints.length - 1; i >= 0; i--) {
          const point = bottomPoints[i];
          ctx.lineTo(point.x, point.y);
        }
        
        ctx.closePath();
        
        // Create gradient for this aurora band with blended colors
        const gradient = ctx.createLinearGradient(0, 0, 0, h * 0.6);
        gradient.addColorStop(0, `rgba(${blendedColor.r}, ${blendedColor.g}, ${blendedColor.b}, ${blendedColor.a})`);
        gradient.addColorStop(0.5, `rgba(${blendedColor.r}, ${blendedColor.g}, ${blendedColor.b}, ${blendedColor.a * 0.8})`);
        gradient.addColorStop(1, `rgba(${blendedColor.r}, ${blendedColor.g}, ${blendedColor.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add glow effect with dynamic intensity
        ctx.shadowColor = `rgba(${blendedColor.r}, ${blendedColor.g}, ${blendedColor.b}, 0.4)`;
        ctx.shadowBlur = 15 + Math.sin(time * 0.003 + layer) * 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      time += 1;
      animationId = requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className={cn(
        "transition-bg relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white",
        className,
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      />
      {showRadialGradient && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent via-aurora-blue/5 to-transparent" />
        </div>
      )}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};
