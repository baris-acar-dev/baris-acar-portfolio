"use client";

import { motion } from "framer-motion";
import React from "react";
import { fadeInUp, staggerContainer } from "../data/portfolioData";

const ExperienceSection: React.FC = () => {
  return (
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
                        <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["C#", "JavaScript", "OOP", "DOM Manipulation", "Web Development"].map((tech) => (
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
  );
};

export default ExperienceSection;
