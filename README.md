# Barış Acar - Portfolio

A modern, interactive portfolio website showcasing my work as an AI Engineer and Full Stack Developer. Built with cutting-edge web technologies to demonstrate my technical skills and creative projects.

## ✨ Features

### 🎨 Modern Design & UX
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth GSAP entrance animations and Framer Motion micro-interactions
- **Modern UI/UX**: Clean, professional design with consistent blue-purple gradient color scheme
- **Star Background**: Animated particle background for visual appeal

### 🧭 Smart Navigation
- **Adaptive Navbar**: Fixed sidebar navigation with smooth section highlighting
- **Mobile Auto-Hide**: Navbar automatically hides on mobile scroll with clean section indicator
- **Current Section Detection**: Real-time active section highlighting on both desktop and mobile
- **Smooth Scrolling**: Seamless navigation between sections with scroll indicators

### 💼 Project Showcase
- **Interactive Project Cards**: Hover effects and smooth animations
- **Detailed Project Modals**: Comprehensive project information with:
  - Overview and descriptions
  - Complete technology stack
  - Key features and capabilities
  - Action buttons for demos and source code
- **Status Indicators**: Production, In Development, and Beta status badges

### 🛠️ Skills Display
- **Interactive Technology Cards**: Hover animations and icon rotations
- **Language Progress Bars**: Animated skill level indicators
- **Work Areas**: Specialized sections for AI Engineering, Frontend, and Full-Stack development
- **Interest Cards**: Personal interests with descriptions and animations
- **Learning Resources**: Platforms and tools used for continuous learning

### 📧 Contact Integration
- **Direct Communication**: Email and LinkedIn integration
- **Animated Contact Cards**: Hover effects and call-to-action buttons

## 🛠️ Tech Stack

### Core Technologies
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **Animations**: GSAP (ScrollTrigger, Timeline), Framer Motion
- **Images**: Next.js Image optimization with responsive loading

### Development Tools
- **Linting**: ESLint for code quality
- **Styling**: PostCSS for CSS processing
- **Build**: Next.js optimized production builds
- **TypeScript**: Full type safety throughout the application

## 🚀 Featured Projects

### 🎥 Universal Video Downloader
A powerful web application for downloading videos from multiple platforms with high-quality output options.
- **Status**: 🚧 Development (Near Completion)
- **Technologies**: Next.js 15, React 19, TypeScript, Tailwind CSS, GSAP, Zustand, Headless UI, yt-dlp
- **Features**:
  - Support for 15+ video platforms
  - Multiple quality options (4K, 1080p, 720p)
  - Batch downloading with queue management
  - Progress tracking and download history
  - Audio extraction capabilities

### 🎬 Watch Time Tracker
A sophisticated time tracking application for monitoring movie and TV show watching habits with detailed analytics.
- **Status**: 🚧 In Development
- **Technologies**: Next.js 14, TypeScript, PostgreSQL, Prisma ORM, NextAuth.js, Tailwind CSS, shadcn/ui, GSAP, TMDB API
- **Features**:
  - Automatic time tracking for movies and TV shows
  - Media categorization and tagging
  - Daily, weekly, and monthly viewing reports
  - Integration with TMDB for rich metadata
  - Personalized recommendations

### 🤖 Chattie - AI Chatbot with RAG
A comprehensive chatbot application with local Ollama AI models and advanced RAG knowledge base.
- **Status**: 🧪 Beta
- **Technologies**: Next.js 15, React 19, TypeScript, PostgreSQL, Prisma ORM, NextAuth.js, Ollama, Google Gemini, Framer Motion, GSAP, Tailwind CSS
- **Features**:
  - Local AI chat with Ollama models + Cloud AI with Google Gemini
  - Advanced RAG knowledge base with multi-format document support
  - Intelligent document processing (PDF, DOCX, Excel, Text)
  - Web scraping capabilities for URL content analysis
  - Multi-user support with authentication
  - Real-time animations and responsive UI

## 🎯 Skills & Expertise

### 💻 Technical Skills
- **AI Engineering**: Machine Learning, Generative AI, Neural Networks, Python, TensorFlow, PyTorch
- **Frontend Development**: React, Next.js, TypeScript, Tailwind CSS, GSAP, Framer Motion
- **Full-Stack Development**: Node.js, PostgreSQL, MongoDB, Prisma ORM, NextAuth.js
- **Additional Technologies**: JavaScript, Java, HTML/CSS, Adobe After Effects

### 🌍 Languages
- **Turkish**: Native proficiency
- **English**: Professional proficiency
- **German**: Elementary level
- **Spanish**: Currently learning

### 🎨 Interests
- **Physics**: Quantum mechanics and fundamental laws of the universe
- **Music**: Guitar and Piano performance
- **Astronomy**: Exploring the wonders of space
- **Sports**: Football, basketball, and fitness
- **Web Design**: Creating beautiful and user-friendly interfaces
- **Artificial Intelligence**: Exploring AI, machine learning, and neural networks

## 🌟 Key Features Implemented

### Enhanced User Experience
- ✅ Mobile-responsive navbar with auto-hide functionality
- ✅ Current section highlighting for better navigation
- ✅ Expandable technology stacks in project cards
- ✅ Consistent blue-purple color scheme throughout
- ✅ Smooth animations and micro-interactions
- ✅ Clean project modal design without header clutter

### Performance Optimizations
- ✅ Optimized image loading with Next.js Image component
- ✅ Efficient animation libraries (GSAP + Framer Motion)
- ✅ TypeScript for better development experience
- ✅ Production-ready build optimization

### Accessibility & Usability
- ✅ Responsive design for all screen sizes
- ✅ Clear navigation with visual feedback
- ✅ Semantic HTML structure
- ✅ Intuitive user interface patterns

## 🚀 Live Demo

[**🔗 Visit Live Portfolio**](https://baris-acar-portfolio.vercel.app/)



## 📱 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/baris-acar-dev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Development Commands
```bash
# Start development server with hot reload
npm run dev

# Type checking
npm run type-check

# Build and analyze bundle
npm run build && npm run analyze
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in development mode.

## � Project Structure

```
baris-portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable React components
│   │   │   ├── AnimatedWorkArea.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── StarBackground.tsx
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main portfolio page
├── public/                      # Static assets (images, icons)
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`#3b82f6` to `#8b5cf6`)
- **Secondary**: Purple accent (`#8b5cf6`)
- **Background**: Dynamic dark/light themes
- **Text**: Responsive contrast ratios

### Typography
- **Headings**: Bold gradient text with proper hierarchy
- **Body**: Optimized readability across devices
- **Code**: Monospace for technical elements

### Animations
- **Entrance**: GSAP timeline animations
- **Interactions**: Framer Motion hover effects
- **Scroll**: Smooth section transitions

## 🚀 Deployment

This portfolio is optimized for deployment on:

- **Vercel** (Recommended - zero config)
- **Netlify** 
- **GitHub Pages** (with static export)
- **Custom VPS/Server**

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

## 📄 License

This project is created for portfolio purposes. The code is available for educational purposes and inspiration. Please don't use it directly for your own portfolio without significant modifications and proper attribution.

### Usage Guidelines
- ✅ Learning and educational purposes
- ✅ Code reference and inspiration
- ✅ Contributing improvements
- ❌ Direct copying for personal portfolios
- ❌ Commercial use without permission

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Framer** - For the smooth animation library
- **Tailwind CSS** - For the utility-first CSS framework
- **GSAP** - For professional-grade animations
- **Vercel** - For seamless deployment platform

## 📞 Contact & Connect

Ready to collaborate or discuss opportunities? Let's connect!

**Barış Acar** - AI Engineer & Full Stack Developer

📧 **Email**: [contact.barisacar@gmail.com](mailto:contact.barisacar@gmail.com)  
💼 **LinkedIn**: [linkedin.com/in/barishacar](https://linkedin.com/in/barishacar)  
💻 **GitHub**: [github.com/baris-acar-dev](https://github.com/baris-acar-dev)

---