import React, { useState, useEffect, useRef, useCallback } from 'react';

const Nav = () => {
  const [active, setActive] = useState('Home');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#tech' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const buttonRefs = useRef({});
  const pillRef = useRef(null);
  const observerRef = useRef(null);
  
  const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  const setupObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const capitalizedId = capitalize(id) || 'Home';
            setActive(capitalizedId);
            
            if (id && window.location.hash !== `#${id}`) {
              window.history.replaceState(null, null, `#${id}`);
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-40% 0px -40% 0px'
      }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observerRef.current.observe(section);
      }
    });
  }, [links]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActive(capitalize(hash));
    } else {
      setActive('Home');
    }

    const timer = setTimeout(() => {
      setupObserver();
    }, 300);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, [setupObserver]);

  const handleLinkClick = (name, href) => {
    setActive(name);
    setIsHovered(false);
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, null, href);
    }
  };

  // Calculate pill dimensions
  const getPillStyles = () => {
    const activeButton = buttonRefs.current[active];
    if (!activeButton) {
      return {
        width: 'auto',
        padding: '8px 16px'
      };
    }

    if (isHovered) {
      // Expanded state - fixed padding on all sides
      return {
        width: 'auto',
        padding: '8px 16px', // Consistent padding on all sides
        gap: '10px'
      };
    } else {
      // Collapsed state - centered active button with padding
      const buttonWidth = activeButton.offsetWidth;
      return {
        width: `${buttonWidth + 32}px`, // 16px padding on each side
        padding: '8px 0', // Vertical padding only, horizontal handled by width
        gap: '0'
      };
    }
  };

  const pillStyles = getPillStyles();

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-lg font-bold">
              <span className="text-white">MetaCode</span>
            </div>

            {/* Desktop Pill Menu - Centered */}
            <div 
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                ref={pillRef}
                className="flex items-center justify-center rounded-full bg-black/90 border border-gray-700 overflow-hidden transition-all duration-300 shadow-lg"
                style={{ 
                  width: pillStyles.width,
                  padding: pillStyles.padding,
                  gap: pillStyles.gap,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  minWidth: 'fit-content'
                }}
              >
                {links.map((link) => (
                  <button
                    key={link.name}
                    ref={(el) => (buttonRefs.current[link.name] = el)}
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className={`whitespace-nowrap text-xs font-medium rounded-full transition-all duration-200 ${
                      isHovered || link.name === active
                        ? 'opacity-100 px-4 py-1.5' 
                        : 'opacity-0 w-0 px-0 overflow-hidden'
                    } ${
                      link.name === active
                        ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/80'
                    }`}
                    style={{
                      transition: 'opacity 0.2s ease, width 0.2s ease, padding 0.2s ease, margin 0.2s ease',
                      margin: !isHovered && link.name === active ? '0 16px' : '0', // Horizontal margin for padding
                      fontSize: '0.875rem'
                    }}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Spacer */}
            <div className="md:hidden invisible">
              <div className="text-lg font-bold">
                <span className="text-white">MetaCode</span>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white transition p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-sm border-l border-gray-800 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-16">
          <div className="flex justify-between items-center mb-6">
            <span className="text-white text-base font-bold">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleLinkClick(link.name, link.href)}
                  className={`block w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                    link.name === active
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Nav;