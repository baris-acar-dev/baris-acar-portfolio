"use client";

import { motion } from "framer-motion";
import React from "react";
import { workAreas, fadeInUp, staggerContainer } from "../data/portfolioData";

const WorkAreasSection: React.FC = () => {
  return (
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
  );
};

export default WorkAreasSection;
