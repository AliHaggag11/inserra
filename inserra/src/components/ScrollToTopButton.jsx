import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const calculateScrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      setProgress((scrollTop / scrollHeight) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", calculateScrollProgress);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  const circleRadius = 30;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-40 w-16 h-16 bg-primary text-white rounded-full shadow-lg transition-opacity duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <svg width="100%" height="100%" viewBox="0 0 70 70">
            <circle
              cx="35"
              cy="35"
              r={circleRadius}
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="4"
            />
            <circle
              cx="35"
              cy="35"
              r={circleRadius}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 35 35)"
            />
            <ArrowUp className="w-6 h-6" x="22" y="22" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
