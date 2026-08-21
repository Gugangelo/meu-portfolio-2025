"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = 800;
    const REPEL_RADIUS = 100;
    const ATTRACT_RADIUS = 220;
    const CONNECTION_DIST = 80;

    let W = 0;
    let H = 0;
    let particles: Particle[] = [];

    function resize() {
      const parent = canvas!.parentElement!;
      W = parent.offsetWidth;
      H = parent.offsetHeight;
      canvas!.width = W;
      canvas!.height = H;

      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.45 + 0.1,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      const { x: mx, y: my } = mouseRef.current;

      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * 0.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        } else if (dist < ATTRACT_RADIUS) {
          const t = (dist - REPEL_RADIUS) / (ATTRACT_RADIUS - REPEL_RADIUS);
          const tangX = -dy / dist;
          const tangY = dx / dist;
          const orbitStr = (1 - t) * 0.055;
          p.vx += tangX * orbitStr;
          p.vy += tangY * orbitStr;
        }

        p.vx *= 0.968;
        p.vy *= 0.968;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(180, 190, 255, ${p.opacity})`;
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.13;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(160, 170, 255, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    // Mouse relativo ao canvas (que é absolute dentro do wrapper)
    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -999, y: -999 };
    }

    function onTouchMove(e: TouchEvent) {
      const rect = canvas!.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current = {
        x: t.clientX - rect.left,
        y: t.clientY - rect.top,
      };
    }

    // Observa mudanças de tamanho no wrapper (ex: conteúdo carregado dinamicamente)
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    resize();
    draw();

    const parent = canvas.parentElement!;
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    parent.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      parent.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}