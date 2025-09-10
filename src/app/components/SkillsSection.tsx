"use client";

import { motion } from "framer-motion";
import React from "react";
import { technologies, learningResources, languages, interests, fadeInUp, staggerContainer } from "../data/portfolioData";

interface SkillsSectionProps {
  hoveredTech: string | null;
  setHoveredTech: (tech: string | null) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  hoveredTech,
  setHoveredTech,
}) => {
  return (
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
          >
            {interests.map((interest) => (
              <motion.div
                key={interest.name}
                variants={fadeInUp}
                whileHover={{
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
  );
};

export default SkillsSection;
