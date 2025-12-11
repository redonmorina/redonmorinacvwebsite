import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Negative margin helps trigger early enough to see the animation start
  const isVisible = useOnScreen(ref, '-50px');

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      // Smoother duration (1200ms) and a more elegant cubic-bezier for a "glide" effect
      className={`transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-20 scale-[0.98] blur-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};