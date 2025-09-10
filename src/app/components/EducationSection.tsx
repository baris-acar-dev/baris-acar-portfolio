"use client";

import { motion } from "framer-motion";
import React from "react";
import { fadeInUp, staggerContainer } from "../data/portfolioData";

const EducationSection: React.FC = () => {
  return (
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
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Curriculum:</h4>
                  <ul className="space-y-2">
                    {[
                      "Data Structures and Algorithms",
                      "Software Engineering Principles",
                      "Computer Networks and Systems",
                      "Database Management Systems",
                      "Object-Oriented Programming",
                      "Web Development Technologies"
                    ].map((course, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Problem Solving", "Critical Thinking", "Team Collaboration", "Project Management", "Technical Documentation"].map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/50 dark:to-teal-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700"
                      >
                        {skill}
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
                  Erasmus Exchange Program
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Vilnius University
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Vilnius, Lithuania
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full"
              >
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  February 2023 - June 2023
                </span>
              </motion.div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Participated in an international exchange program, gaining valuable cross-cultural experience and exposure to different educational methodologies in computer science.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Experience Highlights:</h4>
                  <ul className="space-y-2">
                    {[
                      "International collaboration on software projects",
                      "Exposure to European educational standards",
                      "Cross-cultural communication skills development",
                      "Independent living and adaptability"
                    ].map((highlight, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cultural Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Global Perspective", "Cultural Awareness", "Language Skills", "Adaptability", "Independence"].map((benefit) => (
                      <motion.span
                        key={benefit}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/50 dark:to-blue-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-700"
                      >
                        {benefit}
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
  );
};

export default EducationSection;
