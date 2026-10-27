import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check in case page is loaded already scrolled down
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-top-wrapper">
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${isVisible ? 'is-visible' : ''}`}
        aria-label="Scroll to top"
        aria-hidden={!isVisible}
        tabIndex={isVisible ? 0 : -1}
      >
        <ArrowUp className="h-6 w-6 md:h-7 md:w-7" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;