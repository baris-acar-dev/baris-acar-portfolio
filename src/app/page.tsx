"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkAreasSection from "./components/WorkAreasSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./data/portfolioData";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        containerRef={containerRef}
        heroSectionRef={heroSectionRef}
        nameRef={nameRef}
        subtitleRef={subtitleRef}
        descriptionRef={descriptionRef}
        buttonsRef={buttonsRef}
        scrollIndicatorRef={scrollIndicatorRef}
        animationComplete={animationComplete}
        setAnimationComplete={setAnimationComplete}
        y={y}
        scrollToSection={scrollToSection}
      />

      {/* Work Areas Section */}
      <WorkAreasSection />

      {/* Projects Section */}
      <ProjectsSection
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        expandedTechs={expandedTechs}
        toggleTechExpansion={toggleTechExpansion}
      />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection
        hoveredTech={hoveredTech}
        setHoveredTech={setHoveredTech}
      />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
