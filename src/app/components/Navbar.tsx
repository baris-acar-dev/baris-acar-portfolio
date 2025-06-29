"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface NavigationItem {
  id: string;
  icon: React.ReactElement;
  label: string;
  href?: string;
  external?: boolean;
  section?: string;
}

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      id: "github",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      href: "https://github.com/baris-acar-dev", 
      external: true
    },
    {
      id: "linkedin",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      href: "https://linkedin.com/in/barishacar",
      external: true
    }
  ];

  const navigationItems = [
    {
      id: "home",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: "Home",
      section: "home"
    },
    {
      id: "projects",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      label: "Projects",
      section: "projects"
    },
    {
      id: "skills",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      label: "Skills",
      section: "skills"
    }
  ];

  const contactItem = {
    id: "contact",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Contact",
    section: "contact"
  };

  const handleClick = (item: NavigationItem) => {
    if (item.external && item.href) {
      window.open(item.href, '_blank');
    } else if (item.section) {
      scrollToSection(item.section);
    }
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 group"
    >
      <motion.div 
        className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-3 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col space-y-2">
          {/* Social Links */}
          {socialLinks.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item)}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50"
            >
              {item.icon}
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: hoveredItem === item.id ? 1 : 0,
                  x: hoveredItem === item.id ? 0 : -10
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap pointer-events-none shadow-lg"
              >
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
              </motion.div>
            </motion.button>
          ))}

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent my-2" />

          {/* Navigation Items */}
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item)}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50"
            >
              {item.icon}
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: hoveredItem === item.id ? 1 : 0,
                  x: hoveredItem === item.id ? 0 : -10
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap pointer-events-none shadow-lg"
              >
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
              </motion.div>
            </motion.button>
          ))}

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent my-2" />

          {/* Contact Item */}
          <motion.button
            onClick={() => handleClick(contactItem)}
            onHoverStart={() => setHoveredItem(contactItem.id)}
            onHoverEnd={() => setHoveredItem(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50"
          >
            {contactItem.icon}
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: hoveredItem === contactItem.id ? 1 : 0,
                x: hoveredItem === contactItem.id ? 0 : -10
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap pointer-events-none shadow-lg"
            >
              {contactItem.label}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
