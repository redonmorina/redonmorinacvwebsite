import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device via media query
    const checkTouch = () => {
        setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const onMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.matches('a, button, input, textarea, .cursor-pointer') || 
                        target.closest('a, button, .cursor-pointer');
      
      setIsHovering(!!clickable);
    };

    if (!isTouchDevice) {
        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    
    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.12,
        y: prev.y + (targetPosition.y - prev.y) * 0.12
      }));
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPosition, isTouchDevice]);

  if (!isVisible || isTouchDevice) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-500 ease-out flex items-center justify-center border border-stone-900 mix-blend-exclusion bg-white"
        style={{ 
          width: isHovering ? '64px' : '16px',
          height: isHovering ? '64px' : '16px',
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          opacity: 0.9
        }} 
      />
    </>
  );
};