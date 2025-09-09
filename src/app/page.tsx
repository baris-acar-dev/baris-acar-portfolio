"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  technologies, 
  learningResources, 
  languages, 
  interests, 
  workAreas, 
  projects, 
  fadeInUp, 
  staggerContainer 
} from "./data/portfolioData";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [expandedTechs, setExpandedTechs] = useState<{ [key: number]: boolean }>({});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Toggle tech stack expansion
  const toggleTechExpansion = (projectId: number) => {
    setExpandedTechs(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Scroll to section function
  const scrollToSection = (sectionName: string) => {
    const section = document.querySelector(`[data-section="${sectionName}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, { scope: containerRef }); return (
    <div ref={containerRef} className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroSectionRef} data-section="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden"><div
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

      {/* Work Areas Section with 3D animations */}
      <section data-section="work" className="min-h-screen py-20 px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"
        />
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Work Areas & Expertise
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {workAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-900/50 dark:to-gray-800/30 
                         backdrop-blur-lg rounded-2xl border border-gray-200/20 dark:border-gray-700/30 
                         shadow-xl hover:shadow-2xl transition-all duration-500 p-8 
                         hover:scale-105 hover:border-blue-500/50 dark:hover:border-purple-500/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                               dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                               dark:from-blue-400/20 dark:to-purple-400/20 
                               rounded-full text-sm font-medium text-gray-800 dark:text-gray-200
                               border border-blue-500/30 dark:border-purple-500/30
                               group-hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      
      {/* Projects Section with enhanced animations */}

      <section data-section="projects" className="min-h-screen py-20 px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"
        />
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer min-h-[280px] sm:min-h-[320px]"
              onClick={() => setSelectedProject(project)}
            ><div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl flex flex-col items-center"
                >
                  <Image src={project.image} alt={`${project.title} Logo`} width={568} height={568} />
                  {project.id === 1 && <span className="text-xs mt-2 font-mono bg-black/20 px-2 py-1 rounded">Next.js 15 + yt-dlp</span>}
                  {project.id === 2 && <span className="text-xs mt-2 font-mono bg-black/20 px-2 py-1 rounded">Next.js 14 + TMDB</span>}
                  {project.id === 3 && <span className="text-xs mt-2 font-mono bg-black/20 px-2 py-1 rounded">Next.js 15 + Ollama + RAG</span>}
                </motion.div>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                  {project.title}                  <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-normal">
                    {project.status}
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {(expandedTechs[project.id] ? project.technologies : project.technologies.slice(0, 3)).map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTechExpansion(project.id);
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600/30 transition-colors duration-200"
                    >
                      {expandedTechs[project.id] ? 'Show less' : `+${project.technologies.length - 3} more`}
                    </motion.button>
                  )}
                </div>
                <motion.div
                  className="mt-4 text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  Click to view details →
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 rounded-t-2xl">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl"><Image src={selectedProject.image} alt={`${selectedProject.image} Logo`} width={256} height={256} /></div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                          {selectedProject.title}                          <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-normal">
                            {selectedProject.status}
                          </span>
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 p-2"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tech Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg text-center"
                        >
                          <span className="text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg transition-all duration-200 hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {selectedProject.id === 1 ? "Try Video Downloader" :
                        selectedProject.id === 2 ? "Explore Watch Tracker" : "Try AI Chatbot"}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-medium transition-all duration-200 hover:border-blue-400 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Source Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Experience Section */}
      <section data-section="experience" className="min-h-screen py-20 px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-900/10"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Experience
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="space-y-8"
          >
            {/* Software Engineering Intern */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    AI Developer Intern
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                    ARENA Bilgisayar
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Istanbul, Turkey | Remote
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full"
                >
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    December 2023 - December 2024
                  </span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Developed and integrated advanced AI solutions for chatbot functionalities, focusing on natural language processing and conversational AI within an enterprise environment.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {[
                        "Developed and integrated APIs for Dialogflow and DRUID AI to enhance chatbot functionalities.",
                        "Used APIs for integrating LLMs and creating chatbots with RAG functionality.",
                        "Utilized Langchain for NLP tasks, implementing RAG for advanced conversational AI.",
                        "Created and fine-tuned custom Langchain agents, improving performance with curated knowledge bases."
                      ].map((achievement, index) => (
                        <motion.li
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Dialogflow", "DRUID AI", "Langchain", "Python", "APIs", "NLP", "LLMs", "RAG", "Fine-tuning"].map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Part-time Web Developer */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Software Engineering Intern
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Bursa Metropolitan Municipality
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Bursa, Turkey
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full"
                >
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                    August 2022 - September 2022
                  </span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Applied foundational web development and object-oriented programming principles to build and improve web application components.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {[
                        "Applied foundational C# knowledge and OOP concepts for efficient code structuring.",
                        "Manipulated data using JavaScript with arrays, objects, and DOM manipulation.",
                        "Implemented reusable functions to improve application modularity.",
                      ].map((responsibility, index) => (
                        <motion.li
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["C#", "JavaScript", "HTML", "CSS", "DOM", "OOP"].map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with enhanced animations */}
      <section data-section="skills" className="min-h-screen py-20 px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/50 to-transparent dark:via-cyan-900/10"
        />
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
        >
          Skills & Expertise
        </motion.h2>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Technologies with enhanced animations */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
            >
              Technologies
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  onHoverStart={() => setHoveredTech(tech.name)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700 flex items-center gap-3 transition-colors duration-200"
                >
                  <motion.span
                    animate={{
                      scale: hoveredTech === tech.name ? 1.2 : 1,
                      rotate: hoveredTech === tech.name ? 360 : 0
                    }}
                    className="text-2xl"
                  >
                    {tech.icon}
                  </motion.span>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Languages with enhanced animations */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
            >
              Languages
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.language}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">{lang.language}</span>
                    <span className="text-blue-600 dark:text-blue-400">{lang.level}</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Learning Resources with enhanced animations */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
            >
              Learning Resources
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              className="flex flex-wrap gap-3"
            >
              {learningResources.map((resource) => (
                <motion.span
                  key={resource}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  className="px-4 py-2 bg-white dark:bg-gray-800/50 rounded-full shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm font-medium transition-colors duration-200"
                >
                  {resource}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Interests with enhanced animations */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
            >
              Interests
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >              {interests.map((interest) => (
              <motion.div
                key={interest.name}
                variants={fadeInUp} whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                }}
                className={`card-3d ${interest.animationClass} bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-center font-medium transition-all duration-200 relative overflow-hidden group`}
                data-interest={interest.name}
              >
                <motion.div
                  className="text-3xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={interest.name.includes('Physics') ? {
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={interest.name.includes('Physics') ? {
                    rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                    scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                  } : { type: "spring", stiffness: 300 }}
                >
                  {interest.icon}
                </motion.div>
                <div className="font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.name}
                </div>
                <motion.div
                  className="text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ height: 0 }}
                  whileHover={{ height: "auto" }}
                >
                  {interest.description}
                </motion.div>

                {/* Simple decorative elements */}
                {interest.name.includes('Music') && (
                  <div className="absolute top-2 right-2 text-2xl animate-pulse">
                    🎵
                  </div>
                )}
              </motion.div>
            ))}
            </motion.div>
          </div>

          {/* Core Skills with enhanced animations */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
            >
              Core Skills
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <motion.ul
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {["Problem solving", "Research", "Communication", "Adaptation"].map((skill) => (
                  <motion.li
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400">→</span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section data-section="education" className="min-h-screen py-20 px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/50 to-transparent dark:via-green-900/10"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Education
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="space-y-8"
          >
            {/* University Education */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Eskisehir Technical University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Eskisehir, TURKIYE
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full"
                >
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    October 2020 - June 2024
                  </span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Pursued a comprehensive education in computer engineering, focusing on fundamental programming, data structures, and computer systems.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Coursework:</h4>
                    <ul className="space-y-2">
                      {[
                        "Data Structures and Algorithms",
                        "Object-Oriented Programming",
                        "Java Programming",
                        "Database Management Systems",
                        "Web Development Technologies",
                        "Software Engineering Principles",
                        "Computer Networks",
                        "Operating Systems",
                        "Artificial Intelligence Fundamentals",
                      ].map((course, index) => (
                        <motion.li
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                          <span>{course}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Academic Focus:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Software Engineering", "Java", "Web Development", "Python", "AI & ML", "Database Systems", "Algorithms", "Computer Systems"].map((focus) => (
                        <motion.span
                          key={focus}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/50 dark:to-teal-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700"
                        >
                          {focus}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Erasmus Exchange */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Software Engineering (Erasmus+ Exchange Programme)
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Vilnius University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Vilnius, LITHUANIA
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-4 py-2 rounded-full"
                >
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                    Spring 2023
                  </span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Engaged in a specialized software engineering curriculum with a strong emphasis on practical programming and advanced topics.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Experience Highlights:</h4>
                    <ul className="space-y-2">
                      {[
                        "Artificial Intelligence and Machine Learning",
                        "Cross-cultural academic environment",
                        "Data Structures and Algorithms",
                        "European academic perspective",
                        "Independent living and adaptation skills",
                        "Cultural exchange and networking",
                        "Lithuanian language basics",
                      ].map((highlight, index) => (
                        <motion.li
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-orange-600 dark:text-orange-400 mt-1">→</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Cultural Adaptability", "Java", "Python", "Artificial Intelligence", "International Collaboration", "Independence", "Global Perspective", "Lithuanian Language Introduction"].map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-700"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-section="contact" className="min-h-screen py-20 px-4 md:px-8 relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let&apos;s discuss how we can create something amazing together.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              variants={fadeInUp}
              href="mailto:contact.barisacar@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="https://linkedin.com/in/barishacar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-medium transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full"
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
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full"
          />
        </div>
      </section>
    </div>
  );
}