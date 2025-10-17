"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Star properties
    const stars: { x: number; y: number; size: number; speed: number; twinkleSpeed: number; twinklePhase: number }[] = [];
    const numStars = 200;
    const maxStarSize = 2;

    // Initialize stars
    const initializeStars = () => {
      // Clear the existing stars array before repopulating
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * maxStarSize,
          speed: Math.random() * 0.2 + 0.1,
          twinkleSpeed: Math.random() * 0.05 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars(); // This is the key fix!
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Shooting star properties
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      active: boolean;
    }
    const shootingStars: ShootingStar[] = [];
    const numShootingStars = 3;

    const resetShootingStar = (star: ShootingStar) => {
      star.length = Math.random() * 80 + 50;
      star.speed = Math.random() * 10 + 6;
      star.active = true;

      const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left

      switch (edge) {
        case 0: // Top edge
          star.x = Math.random() * canvas.width;
          star.y = -star.length;
          star.angle = Math.random() * (Math.PI / 2) + Math.PI / 4; // Downward angle
          break;
        case 1: // Right edge
          star.x = canvas.width + star.length;
          star.y = Math.random() * canvas.height;
          star.angle = Math.random() * (Math.PI / 2) + (3 * Math.PI / 4); // Leftward angle
          break;
        case 2: // Bottom edge
          star.x = Math.random() * canvas.width;
          star.y = canvas.height + star.length;
          star.angle = Math.random() * (Math.PI / 2) + (5 * Math.PI / 4); // Upward angle
          break;
        case 3: // Left edge
          star.x = -star.length;
          star.y = Math.random() * canvas.height;
          star.angle = Math.random() * (Math.PI / 2) - Math.PI / 4; // Rightward angle
          break;
      }
    };

    // Initialize shooting stars
    for (let i = 0; i < numShootingStars; i++) {
      const star = { x: 0, y: 0, length: 0, speed: 0, angle: 0, active: false };
      shootingStars.push(star);
      // De-activate them initially
      setTimeout(() => resetShootingStar(star), Math.random() * 3000);
    }

    // Animation
    let animationFrameId: number;
    const animate = () => {
      /*
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);*/

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw stars
      stars.forEach(star => {
        // Calculate twinkle effect
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + twinkle * 0.7})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * (0.5 + twinkle * 0.5), 0, Math.PI * 2);
        ctx.fill();

        // Update star position and twinkle
        star.y += star.speed;
        star.twinklePhase += star.twinkleSpeed;

        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Update and draw shooting stars
      shootingStars.forEach(star => {
        if (!star.active && Math.random() < 0.01) {
          star.active = true;
          star.x = -star.length;
          star.y = Math.random() * canvas.height / 2;
        }

        if (star.active) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - star.length * Math.cos(star.angle),
            star.y - star.length * Math.sin(star.angle));
          ctx.stroke();

          // Add glow effect
          const gradient = ctx.createLinearGradient(
            star.x, star.y,
            star.x - star.length * Math.cos(star.angle),
            star.y - star.length * Math.sin(star.angle)
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 4;
          ctx.stroke();

          star.x += star.speed * Math.cos(star.angle);
          star.y += star.speed * Math.sin(star.angle);

          if (star.x > canvas.width + star.length) {
            star.active = false;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 -z-10"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gradient-to-b from-[#0B0B1F] via-[#171738] to-[#3B2F4A]"
      />
      {/* Additional space decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.1)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" />
    </motion.div>
  );
};

export default StarBackground; 