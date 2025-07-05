"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      
      // Determine current section
      const sections = ['home', 'projects', 'work', 'skills', 'experience', 'education', 'contact'];
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.querySelector(`[data-section="${section}"]`),
      }));

      let currentSectionId = 'home';
      sectionElements.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = id;
          }
        }
      });
      
      setCurrentSection(currentSectionId);
      setShowIndicator(scrollY > 100);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'home':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'projects':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'work':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
        );
      case 'skills':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'contact':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

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
      id: "work",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      label: "Work Areas",
      section: "work"
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
    },
    {
      id: "experience",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      label: "Experience",
      section: "experience"
    },
    {
      id: "education",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      label: "Education",
      section: "education"
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
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: isMobile && isScrolled ? 0 : 1,
          pointerEvents: isMobile && isScrolled ? 'none' : 'auto'
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 group"
      >
        <motion.div 
          className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-3 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-2">
            {/* Website Icon/Favicon */}
            <motion.div
              className="flex items-center justify-center w-10 h-10 mb-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src="/favicon.ico" 
                alt="Website Icon" 
                width={24}
                height={24}
                className="object-contain"
              />
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-500 to-transparent" />

            {/* Social Links */}
            {socialLinks.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleClick(item)}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50"
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
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-500 to-transparent my-2" />

            {/* Navigation Items */}
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleClick(item)}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 ${
                  currentSection === item.section 
                    ? 'text-blue-500 dark:text-blue-400 bg-blue-100/20 dark:bg-blue-900/20' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                {item.icon}
                
                {/* Current section indicator */}
                {currentSection === item.section && (
                  <motion.div
                    layoutId="currentSection"
                    className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredItem === item.id ? 1 : 0,
                    x: hoveredItem === item.id ? 0 : -10
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap pointer-events-none shadow-lg z-10"
                >
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
                </motion.div>
              </motion.button>
            ))}

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-500 to-transparent my-2" />

            {/* Contact Item */}
            <motion.button
              onClick={() => handleClick(contactItem)}
              onHoverStart={() => setHoveredItem(contactItem.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 ${
                currentSection === contactItem.section 
                  ? 'text-blue-500 dark:text-blue-400 bg-blue-100/20 dark:bg-blue-900/20' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              }`}
            >
              {contactItem.icon}
              
              {/* Current section indicator */}
              {currentSection === contactItem.section && (
                <motion.div
                  layoutId="currentSection"
                  className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: hoveredItem === contactItem.id ? 1 : 0,
                  x: hoveredItem === contactItem.id ? 0 : -10
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap pointer-events-none shadow-lg z-10"
              >
                {contactItem.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Section Indicator (shows when navbar is hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isMobile && showIndicator ? 1 : 0,
          scale: isMobile && showIndicator ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-8 z-50 pointer-events-none"
      >
        <motion.div
          className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-blue-400/30 rounded-full p-3 shadow-lg"
        >
          <div className="text-blue-500 dark:text-blue-400">
            {getSectionIcon(currentSection)}
          </div>
        </motion.div>
        
        {/* Touch indicator text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-md whitespace-nowrap"
        >
          Navigate
        </motion.div>
      </motion.div>

      {/* Touch overlay for mobile when navbar is hidden */}
      {isMobile && isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 w-20 h-full z-30"
          onTouchStart={() => {
            // Temporarily show navbar on touch
            setIsScrolled(false);
            setTimeout(() => setIsScrolled(window.scrollY > 100), 3000);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
