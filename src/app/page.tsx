'use client';

import { useEffect, useRef } from 'react';
import {
  BoltIcon,
  StarIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  LockClosedIcon,
  CogIcon,
  SparklesIcon,
  CubeIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import About from './components/About';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Tech icons for .NET developer
    const iconPaths = [
      // Bolt icon path (Performance)
      'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 01-.521.721H8.906l2.544-5.832zM13.5 21.75L11.375 16.64a.563.563 0 01.521-.721h5.188l-3.484 5.831z',
      
      // Star icon path (Quality)
      'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      
      // Code bracket icon path (Programming)
      'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
      
      // Cog icon path (Configuration)
      'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      
      // CPU chip icon path (Processing)
      'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21m4.5-1.5V21m4.5-1.5V21M8.25 3v1.5m0 0V6m0-1.5h4.5M8.25 4.5H6.75a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-1.5m-4.5 0V3M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      
      // Database icon path (SQL Server)
      'M4.5 12.75l6 6 9-13.5',
      
      // Server icon path (Microservices)
      'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0v3a4.5 4.5 0 01-.9 2.7l-2.587 3.45a3.375 3.375 0 01-2.7 1.35H8.437a3.375 3.375 0 01-2.7-1.35L3.15 16.95A4.5 4.5 0 012.25 14.25v-3',
      
      // Cloud icon path (Azure)
      'M2.25 15a4.5 4.5 0 004.5 4.5h11.25a3 3 0 10.75-5.25 4.5 4.5 0 00-8.25-3h-3A4.5 4.5 0 002.25 15z',
      
      // Cube icon path (.NET Core)
      'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
      
      // Document text icon path (Documentation)
      'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
      
      // Shield check icon path (Security)
      'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
      
      // Rocket launch icon path (Deployment)
      'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
      
      // Git branch icon path (Git)
      'M3 3v4.5M3 3h4.5M3 7.5L15 19.5M21 3v4.5M21 3h-4.5M21 7.5L9 19.5m12-12v9m0-9h-9m9 9h-9',
      
      // Monitor icon path (Visual Studio)
      'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
    ];

    const symbols = iconPaths;
    
    // Floating particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      symbol: string;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * 20 + 15,
        opacity: Math.random() * 0.6 + 0.2,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      });
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse attraction (stronger when closer)
        const attractionStrength = Math.max(0, 200 - distance) / 200;
        const attraction = attractionStrength * 0.0008;
        
        if (distance < 200) {
          particle.vx += dx * attraction;
          particle.vy += dy * attraction;
        }

        // Random movement
        particle.vx += (Math.random() - 0.5) * 0.01;
        particle.vy += (Math.random() - 0.5) * 0.01;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrapping
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle (SVG path)
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.strokeStyle = particle.color;
        ctx.fillStyle = particle.color;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Scale and translate for the icon
        const scale = particle.size / 24; // Heroicons are 24x24 by default
        ctx.translate(particle.x, particle.y);
        ctx.scale(scale, scale);
        ctx.translate(-12, -12); // Center the 24x24 icon
        
        // Draw SVG path
        const path = new Path2D(particle.symbol);
        ctx.stroke(path);
        
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Levt Madden</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Interactive Floating Icons Background */}
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-0 pointer-events-none"
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Full-Stack .NET Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Building robust financial systems with complex microservices architecture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Learn More
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <About />
    </div>
  );
}
