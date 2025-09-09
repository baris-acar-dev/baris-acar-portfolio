// Portfolio Data - All static data used in the portfolio website moved here for better organization

export const technologies = [
  { name: "JavaScript", icon: "🌐" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "💻" },
  { name: "HTML-CSS", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "ℕ" },
  { name: "PostgreSQL", icon: "🗄️" },
  { name: "Adobe AE", icon: "🎬" },
];

export const learningResources = [
  "Youtube",
  "FreeCodeCamp",
  "Udemy",
  "W3 Schools",
  "Stack Overflow",
  "HackerRank",
  "LinkedIn Learning",
];

export const languages = [
  { language: "Turkish", level: "Native", progress: 100 },
  { language: "English", level: "Proficient", progress: 70 },
  { language: "German", level: "Elementary", progress: 20 },
  { language: "Spanish", level: "Loading...", progress: 0 },
];

export const interests = [
  {
    name: "Web Design",
    icon: "🎨",
    animationClass: "design-animation",
    description: "Creating beautiful and user-friendly interfaces"
  },
  {
    name: "Artificial Intelligence",
    icon: "🧠",
    animationClass: "",
    description: "Exploring AI, machine learning, and neural networks"
  },
  {
    name: "Music",
    icon: "🎵",
    animationClass: "music-animation",
    description: "Learning Guitar and Piano - expressing creativity through music"
  },
  {
    name: "Physics",
    icon: "⚛️",
    animationClass: "physics-animation",
    description: "Understanding the fundamental laws of the universe and quantum mechanics"
  },
  {
    name: "Sports",
    icon: "⚽",
    animationClass: "space-animation",
    description: "Football, basketball, and fitness - maintaining an active lifestyle"
  },
  {
    name: "Astronomy",
    icon: "🌌",
    animationClass: "space-animation",
    description: "Exploring the wonders of the universe"
  },
];

export const workAreas = [
  {
    title: "AI Engineering",
    icon: "🤖",
    description: "Building intelligent systems with machine learning and neural networks",
    animationType: "ai" as const,
    skills: ["Machine Learning", "Generative AI", "Python", "TensorFlow", "PyTorch"]
  },
  {
    title: "Frontend Development",
    icon: "💻",
    description: "Creating modern, responsive web applications with cutting-edge technologies",
    animationType: "frontend" as const,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"]
  },
  {
    title: "Full-Stack Development",
    icon: "💻",
    description: "Building robust and scalable web applications from server to client.",
    animationType: "frontend" as const,
    skills: ["Node.js", "React", "Next.js", "PostgreSQL", "MongoDB", "Prisma ORM"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Universal Video Downloader",
    status: "Production",
    description: "A powerful web application for downloading videos from multiple platforms with high-quality output options.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "GSAP", "Zustand", "Headless UI", "yt-dlp"],
    longDescription: "Universal Video Downloader is a comprehensive web application built with Next.js 15 and React that allows users to download videos from various platforms including YouTube, Twitter, Instagram, and more. The application features a modern user interface with drag-and-drop functionality, batch downloading capabilities, and quality selection options. It utilizes yt-dlp for video processing on the backend and implements state management with Zustand for optimal user experience.",
    features: [
      "Support for 15+ video platforms",
      "Multiple quality options (4K, 1080p, 720p, etc.)",
      "Batch downloading with queue management",
      "Progress tracking and download history",
      "Audio extraction capabilities",
      "Subtitle download support",
      "Custom output directory selection",
      "Responsive design with Tailwind CSS",
      "Smooth animations with GSAP"
    ],
    demoUrl: "#",
    githubUrl: "#",
    image: "/uvd.jpg"
  },
  {
    id: 2,
    title: "Watch Time Tracker",
    status: "In Development",
    description: "A sophisticated time tracking application designed for monitoring and analyzing movie and TV show watching habits with detailed analytics.",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "Tailwind CSS", "shadcn/ui", "GSAP", "TMDB API"],
    longDescription: "Watch Time Tracker is a media consumption tracking web application developed with Next.js 14 App Router and TypeScript. The application helps users monitor their watching habits, track favorites, and generate insightful reports. It features automatic time tracking, manual entry, media categorization, and comprehensive analytics with visual charts and graphs. The app uses PostgreSQL with Prisma ORM for data persistence and integrates with TMDB API for rich media metadata.", features: [
      "Automatic time tracking for movies and TV shows",
      "Manual watch history entry and editing",
      "Media categorization and tagging",
      "Daily, weekly, and monthly viewing reports",
      "Viewing habits analytics and insights",
      "Goal setting for media consumption",
      "Integration with TMDB for rich metadata",
      "Personalized recommendations",
      "Responsive UI with shadcn/ui components"
    ], demoUrl: "#",
    githubUrl: "#",
    image: "/wtt.jpg"
  },
  {
    id: 3,
    title: "Chattie - AI Chatbot with RAG",
    status: "Beta",
    description: "A comprehensive Next.js chatbot application with local Ollama AI models, advanced RAG knowledge base, and intelligent document processing.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "Ollama", "Google Gemini", "Framer Motion", "GSAP", "Tailwind CSS"],
    longDescription: "Chattie is an advanced AI chatbot application that combines local Ollama models with cloud-based Google Gemini AI. It features a sophisticated RAG (Retrieval-Augmented Generation) knowledge base system that can process multiple document formats including PDF, DOCX, Excel, and text files. The application includes web scraping capabilities, intelligent document chunking, multi-user support with authentication, and beautiful animations. Users can upload documents and ask questions about their content, with the AI providing contextual answers with source citations.",
    features: [
      "Local AI chat with Ollama models + Cloud AI with Google Gemini",
      "Advanced RAG knowledge base with multi-format document support",
      "Intelligent document processing (PDF, DOCX, Excel, Text)",
      "Web scraping capabilities for URL content analysis",
      "Smart document selection and filtering",
      "Context-aware content chunking and relevance scoring",
      "Multi-user support with NextAuth.js authentication",
      "Persistent conversation storage with PostgreSQL",
      "Real-time animations with Framer Motion and GSAP",
      "Responsive UI with dark mode support",
      "Secure API key management with encryption",
      "Special thinking message display for AI reasoning"
    ],
    demoUrl: "#",
    githubUrl: "#",
    image: "/chattie.jpg"
  }
];

// Animation configurations
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};