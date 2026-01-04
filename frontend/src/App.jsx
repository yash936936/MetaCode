import React, { useState, useEffect, useRef } from 'react';
import { Code2, Server, Rocket, Palette, Send } from 'lucide-react';
import Nav from './components/Nav.jsx';
import { Hero3D } from './components/Hero3D';
import WorkSection from './components/ProjectCard.jsx';
import ContactSection from './components/ContactSection.jsx';


export default function MetaCodePortfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! (Demo mode)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };
  
  const navigationLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TECH', href: '#tech' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Nav />
      
      {/* Hero Section */}
       <section id="home" className="min-h-screen pt-16 bg-black relative">
  {/* Mobile: 3D covers full background */}
  <div className="absolute inset-0 lg:hidden z-0">
    <div className="absolute inset-0 bg-linear-to-b from-black via-black/50 to-black"></div>
    <Hero3D />
  </div>
  
  {/* Desktop: 3D on right half only */}
  <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 right-0 z-0">
    <div className="absolute left-0 top-1/2 w-px h-48 bg-linear-to-b from-transparent via-blue-500 to-transparent -translate-y-1/2 z-20"></div>
    <Hero3D />
  </div>
  
  {/* Content - Always on top */}
  <div className="relative z-10 h-full">
    <div className="max-w-7xl mx-auto px-6 h-full">
      <div className="flex items-center min-h-[calc(100vh-4rem)]">
        <div className="w-full lg:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Hi, We're{' '}
            <span className="bg-linear-to-r from-blue-500 via-blue-300 to-white bg-clip-text text-transparent">
              MetaCode
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
            Full-Stack Excellence + Immersive 3D
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            We craft exceptional digital experiences through cutting-edge technology 
            and innovative design. From concept to deployment, we bring your ideas to life.
          </p>
          
         <div className="flex flex-wrap gap-6 pt-4">
  <a 
    href="#work"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('work')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }}
    className="relative bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-[0_4px_0_0_#1e40af,0_8px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_#1e3a8a,0_12px_0_0_rgba(0,0,0,0.1)] active:shadow-[0_2px_0_0_#1e40af,0_4px_0_0_rgba(0,0,0,0.1)] active:scale-95 inline-flex items-center justify-center cursor-pointer"
  >
    View Our Work
  </a>
  
  <a 
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }}
    className="relative bg-transparent border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-[0_4px_0_0_rgba(255,255,255,0.1),0_8px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(255,255,255,0.2),0_12px_0_0_rgba(0,0,0,0.1)] active:shadow-[0_2px_0_0_rgba(255,255,255,0.1),0_4px_0_0_rgba(0,0,0,0.1)] active:scale-95 backdrop-blur-sm inline-flex items-center justify-center cursor-pointer"
  >
    Contact Us
  </a>
</div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Capabilities Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">What We Do</h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            We craft exceptional digital experiences through cutting-edge technology and innovative design. 
            From concept to deployment, we bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <Code2 className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <p className="text-gray-400">Building responsive, interactive user interfaces with modern frameworks and best practices.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <Server className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-gray-400">Robust server-side solutions with scalable architecture and secure APIs.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <Rocket className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-3">Full Stack Development</h3>
              <p className="text-gray-400">End-to-end solutions combining frontend beauty with backend power.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <Palette className="w-12 h-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-bold mb-3">Web Design</h3>
              <p className="text-gray-400">Creating stunning visual experiences that captivate and engage users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Core Technologies</h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            We leverage the most powerful and modern technologies to deliver exceptional results.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* React */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 text-center hover:border-blue-400 transition group">
              <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
                <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none"/>
                <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
              </svg>
              <h3 className="text-lg font-semibold">React JS</h3>
            </div>
            
            {/* Node.js */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 text-center hover:border-green-400 transition group">
              <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#68A063" strokeWidth="1.5" fill="none"/>
                <path d="M12 12V2M12 12l9-5M12 12l-9-5M12 12v10M12 22l9-5M12 22l-9-5" stroke="#68A063" strokeWidth="1"/>
              </svg>
              <h3 className="text-lg font-semibold">Node JS</h3>
            </div>
            
            {/* Express */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 text-center hover:border-yellow-400 transition group">
              <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" stroke="#F7DF1E" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="6" y="8" width="12" height="8" stroke="#F7DF1E" strokeWidth="1.5" fill="none" rx="1"/>
              </svg>
              <h3 className="text-lg font-semibold">Express JS</h3>
            </div>
            
            {/* MongoDB */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 text-center hover:border-green-500 transition group">
              <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="none">
                <path d="M12 3c-1.5 0-2.7 1.8-3 4.5-.3 2.7-.3 5.3 0 8 .3 2.7 1.5 4.5 3 4.5s2.7-1.8 3-4.5c.3-2.7.3-5.3 0-8C14.7 4.8 13.5 3 12 3z" fill="#47A248"/>
                <ellipse cx="12" cy="11" rx="6" ry="3" stroke="#47A248" strokeWidth="1" fill="none"/>
                <path d="M12 20v2" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <h3 className="text-lg font-semibold">MongoDB</h3>
            </div>
            
            {/* SQL */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 text-center hover:border-orange-400 transition group">
              <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="8" rx="7" ry="3" stroke="#F29111" strokeWidth="1.5" fill="none"/>
                <path d="M5 8v8c0 1.7 3.1 3 7 3s7-1.3 7-3V8" stroke="#F29111" strokeWidth="1.5" fill="none"/>
                <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="#F29111" strokeWidth="1.5" fill="none"/>
              </svg>
              <h3 className="text-lg font-semibold">SQL</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <WorkSection />

      {/* Contact Section */}
     <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; 2026 MetaCode. All rights reserved.</p>
      </footer>
    </div>
  );
}