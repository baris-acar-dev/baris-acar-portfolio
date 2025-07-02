"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface WorkAreaProps {
  title: string;
  icon: string;
  description: string;
  animationType: 'ai' | 'frontend' | 'games' | 'design';
  skills: string[];
}

const AnimatedWorkArea: React.FC<WorkAreaProps> = ({ 
  title, 
  icon, 
  description, 
  animationType,
  skills 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 3D Canvas Animation
  useEffect(() => {
    if (!isHovered || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    // Create particles based on animation type
    const createParticles = () => {
      const colors = {
        ai: ['#3b82f6', '#8b5cf6', '#06b6d4'],
        frontend: ['#10b981', '#f59e0b', '#ef4444'],
        games: ['#8b5cf6', '#ec4899', '#f97316'],
        design: ['#06b6d4', '#8b5cf6', '#10b981']
      };

      for (let i = 0; i < 20; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: colors[animationType][Math.floor(Math.random() * colors[animationType].length)]
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, animationType]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'ai': return 'ai-animation';
      case 'frontend': return 'frontend-animation matrix-bg';
      case 'games': return 'games-animation';
      case 'design': return 'design-animation';
      default: return '';
    }
  };

  return (
    <motion.div
      className={`relative bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 overflow-hidden group cursor-pointer ${getAnimationClass()}`}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Canvas for particle animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
        style={{ display: isHovered ? 'block' : 'none' }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="text-4xl mb-4 text-center"
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-center mb-4 text-sm">
          {description}
        </p>

        {/* Skills with staggered animation */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated progress bar */}
        <motion.div 
          className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ width: "0%" }}
            whileInView={{ width: "85%" }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
        </motion.div>
      </div>

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6, #8b5cf6)',
          backgroundSize: '400% 400%',
          animation: isHovered ? 'neural-network 3s ease infinite' : 'none'
        }}
      />
      <div className="absolute inset-[2px] bg-white dark:bg-gray-800/50 rounded-xl" />
    </motion.div>
  );
};

export default AnimatedWorkArea;
