"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
import { projects, fadeInUp, staggerContainer } from "../data/portfolioData";

interface ProjectsSectionProps {
  selectedProject: typeof projects[0] | null;
  setSelectedProject: (project: typeof projects[0] | null) => void;
  expandedTechs: { [key: number]: boolean };
  toggleTechExpansion: (projectId: number) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedProject,
  setSelectedProject,
  expandedTechs,
  toggleTechExpansion,
}) => {
  return (
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
          >
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden flex items-center justify-center">
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
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                {project.title}
                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-normal">
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
                        {selectedProject.title}
                        <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-normal">
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
                </div>

                {/* Action Buttons */}
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
  );
};

export default ProjectsSection;
