"use client";

import { motion, MotionValue } from "framer-motion";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HeroSectionProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  heroSectionRef: React.RefObject<HTMLElement | null>;
  nameRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLHeadingElement | null>;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
  buttonsRef: React.RefObject<HTMLDivElement | null>;
  scrollIndicatorRef: React.RefObject<HTMLDivElement | null>;
  animationComplete: boolean;
  setAnimationComplete: (complete: boolean) => void;
  y: MotionValue<string>;
  scrollToSection: (sectionName: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroSectionRef,
  nameRef,
  subtitleRef,
  descriptionRef,
  buttonsRef,
  scrollIndicatorRef,
  animationComplete,
  setAnimationComplete,
  y,
  scrollToSection,
}) => {
  useGSAP(() => {
    // Initial entrance animation timeline
    const tl = gsap.timeline({
      onComplete: () => setAnimationComplete(true)
    });

    // Initially hide everything except the name
    gsap.set([subtitleRef.current, descriptionRef.current, buttonsRef.current, scrollIndicatorRef.current], {
      opacity: 0,
      scale: 0.8,
      y: 50
    });

    // Start with name scaled up and centered
    gsap.set(nameRef.current, {
      scale: 2.5,
      y: 0,
      transformOrigin: "center center"
    });

    // Animation timeline
    tl
      // Hold the name for a moment
      .to({}, { duration: 1.0 })

      // Zoom out the name and reveal subtitle
      .to(nameRef.current, {
        scale: 1,
        duration: 1.0,
        ease: "power2.inOut"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=1")

      // Reveal description
      .to(descriptionRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3")

      // Reveal buttons
      .to(buttonsRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3")

      // Reveal scroll indicator
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.2");

    // Simple fade effect for hero section on scroll
    gsap.to(heroSectionRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "bottom top",
        end: "bottom top",
        scrub: 1,
        pin: false
      }
    });
  });

  return (
    <section ref={heroSectionRef} data-section="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div
        style={{ y: animationComplete ? y : 0 } as React.CSSProperties}
        className="relative z-10 px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-blue-300 text-center mb-4 font-medium"
        >
          Welcome to my digital universe
        </motion.p>
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Barış Acar
        </h1>
        <h2
          ref={subtitleRef}
          className="text-2xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          AI Engineer & Full Stack Developer
        </h2>
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-300 text-center mb-6 max-w-4xl mx-auto"
        >
          Crafting intelligent solutions where innovation meets user experience through cutting-edge technology and creative problem-solving.
        </p>
        <div className="text-center mb-8">
          <span className="text-sm md:text-base text-gray-400 font-medium">
            Tech Focus:
          </span>
          <span className="text-sm md:text-base text-blue-300 ml-2">
            React | Next.js | Node.js | Python | Generative AI | Agentic AI | User-Friendly Design
          </span>
        </div>
        <div
          ref={buttonsRef}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg transition-all duration-200 hover:bg-blue-700 hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-full font-medium transition-all duration-200 hover:border-blue-400 hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </div>

      {/* Floating stars decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full"
      />
    </section>
  );
};

export default HeroSection;
