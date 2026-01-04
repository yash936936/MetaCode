import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Coffee, Home, Factory, ExternalLink, 
  ChevronLeft, ChevronRight, ArrowRight 
} from 'lucide-react';

const ProjectCard = ({ project }) => {
  const icons = {
    Restaurant: <Globe className="w-5 h-5" />,
    "Coffee Roasters": <Coffee className="w-5 h-5" />,
    "Real Estate": <Home className="w-5 h-5" />,
    Industrial: <Factory className="w-5 h-5" />
  };

  return (
    <div className="w-[320px] md:w-90 shrink-0">
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 h-full">
        {/* Header */}
        <div className={`h-40 rounded-xl mb-4 bg-linear-to-br ${project.linear} relative flex items-center justify-center`}>
          <div className="absolute inset-0 bg-black/30 rounded-xl" />
          <div className="text-4xl font-bold text-white/20 z-10">{project.name.charAt(0)}</div>
          <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-2">
            {icons[project.category]}
            {project.category}
          </div>
          <div className="absolute top-3 right-3 bg-white/20 text-white px-2 py-1 rounded text-xs">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>

        <a 
          href={project.url}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 text-sm"
        >
          Visit Website <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 1, name: "Paris Bánh Mì", category: "Restaurant",
      description: "Modern Vietnamese restaurant website with online ordering and loyalty program.",
      url: "https://parisbanhminewjersey.com", linear: "from-orange-500 to-red-500",
      tech: ["React", "E-commerce"], year: "2024"
    },
    {
      id: 2, name: "Madis Coffee", category: "Coffee Roasters",
      description: "Specialty coffee platform showcasing artisanal blends and services.",
      url: "https://www.madiscoffee.com", linear: "from-amber-600 to-yellow-600",
      tech: ["Next.js", "Contentful"], year: "2023"
    },
    {
      id: 3, name: "Henry Graham", category: "Real Estate",
      description: "Real estate agency with property listings and client management.",
      url: "https://www.hgraham.co.uk", linear: "from-blue-500 to-indigo-600",
      tech: ["React"], year: "2023"
    },
    {
      id: 4, name: "Qatar Steel", category: "Industrial",
      description: "B2B industrial website with product catalog and capabilities.",
      url: "https://www.qatarsteelfactory.com", linear: "from-gray-700 to-gray-500",
      tech: ["WordPress"], year: "2022"
    }
  ];

  // Simple auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Scroll to current project
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 360 : 320;
      carouselRef.current.scrollTo({
        left: currentIndex * (cardWidth + 24),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const scrollToProject = (index) => {
    setCurrentIndex(index);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="work" className="py-20 px-4 bg-linear-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Our Work
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real projects we've built for different industries
          </p>
        </div>

        {/* Simple Carousel */}
        <div className="relative mb-16">
          {/* Arrows */}
          <button 
            onClick={() => scrollToProject((currentIndex - 1 + projects.length) % projects.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-gray-800/90 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>

          <button 
            onClick={() => scrollToProject((currentIndex + 1) % projects.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-gray-800/90 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>

          {/* Cards Container */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-24 sm:px-0"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project, idx) => (
              <div key={project.id} className="snap-center">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToProject(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-6 bg-blue-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-2 mx-auto"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default WorkSection;
