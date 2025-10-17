"use client";

import { motion } from "framer-motion";
import React from "react";
import { technologies, languages, interests, fadeInUp, staggerContainer } from "../data/portfolioData";

interface SkillsSectionProps {
  hoveredTech: string | null;
  setHoveredTech: (tech: string | null) => void;
}

const getLevelBadgeClass = (level: string) => {
  switch (level.toLowerCase()) {
    case 'native':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'proficient':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'elementary':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    case 'learning':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};

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
                <motion.div
                  className="w-8 h-8 text-gray-800 dark:text-gray-200"
                  animate={{
                    scale: hoveredTech === tech.name ? 1.2 : 1,
                    rotate: hoveredTech === tech.name ? 360 : 0
                  }}
                >
                  {tech.icon}
                </motion.div>
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
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {languages.map((lang) => (
              <motion.div
                key={lang.language}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              >
                {/* Header for language name and level */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    {lang.language}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getLevelBadgeClass(lang.level)}`}>
                    {lang.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {lang.context.map((ctx) => (
                      <motion.span
                        key={ctx}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 ${getLevelBadgeClass(lang.level)} rounded-full text-sm font-medium`}
                      >
                        {ctx}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
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
                  className="text-3xl mb-2 flex justify-center items-center mx-auto w-12 h-12 text-gray-800 dark:text-gray-200"
                  whileHover={ interest.name.includes('Physics') ? {} : { scale: 1.2, rotate: 10 } }
                  animate={interest.name.includes('Physics') ? {
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={interest.name.includes('Physics') ? {
                    rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                    scale: { repeat: Infinity, duration: 2, ease: "easeInOut"}
                  } : { type: "spring", stiffness: 300 }}
                >
                  {interest.icon}
                </motion.div>
                <div className="font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.name}
                </div>
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
