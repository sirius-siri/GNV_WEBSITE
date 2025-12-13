import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  animation?: 'fade-up' | 'fade-in' | 'slide-in';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { 
      threshold: 0.15, // Trigger when 15% visible
      rootMargin: '0px 0px -50px 0px' 
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Define initial states based on animation type
  const getInitialState = () => {
    switch (animation) {
      case 'fade-up': return 'translate-y-16 opacity-0';
      case 'fade-in': return 'opacity-0';
      case 'slide-in': return '-translate-x-10 opacity-0';
      default: return 'translate-y-16 opacity-0';
    }
  };

  const getFinalState = () => {
    switch (animation) {
      case 'fade-up': return 'translate-y-0 opacity-100';
      case 'fade-in': return 'opacity-100';
      case 'slide-in': return 'translate-x-0 opacity-100';
      default: return 'translate-y-0 opacity-100';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? getFinalState() : getInitialState()
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;