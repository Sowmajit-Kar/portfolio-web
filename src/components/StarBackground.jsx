import { useEffect, useRef } from "react";

// Module-level physics particle for 60fps canvas simulation
class MagneticNode {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.baseX = this.x;
    this.baseY = this.y;
    this.vx = (Math.random() - 0.5) * 0.45;
    this.vy = (Math.random() - 0.5) * 0.45;
    this.size = Math.random() * 2.2 + 0.9;
    this.mass = Math.random() * 15 + 10;
    this.pulse = Math.random() * Math.PI * 2;
  }

  update(width, height, mouse) {
    this.pulse += 0.025;

    // Natural wander
    this.baseX += this.vx;
    this.baseY += this.vy;

    // Wrap around screen boundaries
    if (this.baseX < -20) this.baseX = width + 20;
    if (this.baseX > width + 20) this.baseX = -20;
    if (this.baseY < -20) this.baseY = height + 20;
    if (this.baseY > height + 20) this.baseY = -20;

    // Default target is base position
    let targetX = this.baseX;
    let targetY = this.baseY;

    // Magnetic Gravitational Physics toward mouse
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.baseX;
      const dy = mouse.y - this.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        // Gravitational pull with spring easing
        const pull = (1 - dist / mouse.radius) * 35;
        targetX += (dx / dist) * pull;
        targetY += (dy / dist) * pull;
      }
    }

    // Spring damping interpolation
    this.x += (targetX - this.x) * 0.08;
    this.y += (targetY - this.y) * 0.08;
  }

  draw(ctx, isDark) {
    const dynamicSize = this.size + Math.sin(this.pulse) * 0.4;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.6, dynamicSize), 0, Math.PI * 2);

    if (isDark) {
      ctx.fillStyle = "rgba(167, 139, 250, 0.85)";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(167, 139, 250, 0.6)";
    } else {
      ctx.fillStyle = "rgba(109, 40, 217, 0.55)";
      ctx.shadowBlur = 0;
    }
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: null,
      y: null,
      radius: 170, // Magnetic radius
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    let nodes = [];
    const initNodes = () => {
      nodes = [];
      const count = Math.min(125, Math.floor((width * height) / 12000));
      for (let i = 0; i < count; i++) {
        nodes.push(new MagneticNode(width, height));
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize);

    initNodes();

    // Render synaptic connectivity mesh
    const renderMesh = (isDark) => {
      const maxDistance = 125;
      const len = nodes.length;

      for (let i = 0; i < len; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < len; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(139, 92, 246, ${alpha * 0.26})`
              : `rgba(99, 102, 241, ${alpha * 0.14})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Connect magnetic nodes to cursor
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = a.x - mouse.x;
          const mdy = a.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.radius) {
            const mAlpha = 1 - mDist / mouse.radius;
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(216, 180, 254, ${mAlpha * 0.45})`
              : `rgba(147, 51, 234, ${mAlpha * 0.3})`;
            ctx.lineWidth = 1.1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const animate = () => {
      const isDark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, width, height);

      const len = nodes.length;
      for (let i = 0; i < len; i++) {
        nodes[i].update(width, height, mouse);
        nodes[i].draw(ctx, isDark);
      }
      renderMesh(isDark);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      {/* Ambient magnetic nebula lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
    </div>
  );
};