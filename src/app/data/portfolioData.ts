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
    title: "Full-Stack Development",
    icon: "💻",
    description: "Building robust and scalable web applications from server to client.",
    animationType: "frontend" as const,
    skills: ["Node.js", "React", "Next.js", "PostgreSQL", "MongoDB", "Prisma ORM", "Tailwind CSS", "REST APIs", "GSAP"]
  }
];

export const projects = [
  {
    "id": 1,
    title: "Chattie AI Copilot",
    status: "Beta",
    description: "An advanced Next.js 15 AI copilot with multi-provider support (Ollama, OpenAI, Gemini), a sophisticated RAG knowledge base, web scraping, and a prompt template system.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth.js",
      "Ollama",
      "Google Gemini",
      "OpenAI GPT",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS"
    ],
    longDescription: "Chattie is a powerful AI copilot built with Next.js 15. It features a flexible multi-provider architecture, allowing integration with local models via Ollama, as well as cloud services like OpenAI GPT and Google Gemini. Its core strength lies in an advanced Retrieval-Augmented Generation (RAG) system that enhances search with keyword matching, cross-encoder re-ranking, and corrective RAG. The system processes multiple document formats (PDF, DOCX, etc.) with intelligent, paragraph-aware chunking strategies. Additional features include web scraping for content analysis, a dynamic prompt template system, and secure, encrypted per-user API key management. Built on a robust stack including PostgreSQL, Prisma, and NextAuth.js, Chattie offers a comprehensive solution for creating intelligent, context-aware conversational AI.",
    features: [
      "Multi-Provider AI Integration (Ollama, OpenAI, Google Gemini)",
      "Advanced RAG with Cross-Encoder Re-ranking",
      "Corrective RAG for Enhanced Search Accuracy",
      "Multi-format Document Processing (PDF, DOCX, Excel, Text)",
      "Paragraph-Aware Content Chunking Strategy",
      "Web Scraping Capabilities for URL content analysis",
      "Dynamic Prompt Template System",
      "Secure, Encrypted Per-User API Key Management",
      "Multi-user support with Demo-style NextAuth.js Authentication",
      "Persistent Conversation Storage with PostgreSQL & Prisma",
      "Smart AI-Generated Conversation Titles",
      "Responsive UI with Mobile-First Design & Dark Mode"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/baris-acar-dev/chattie",
    image: "/chattie.jpg"
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