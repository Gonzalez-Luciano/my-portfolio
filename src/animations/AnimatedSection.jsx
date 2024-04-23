import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedSection = ({ children, sectionId, className}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [{ opacity, transform}, setSpring] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));
  

  const handleScroll = () => {
    const element = document.getElementById(sectionId);
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    });
  }, [isVisible, setSpring]);

  return (
    <animated.div id={sectionId} className={className} style={{ opacity, transform}}>
      {children}
    </animated.div>
  );
};

export default AnimatedSection;