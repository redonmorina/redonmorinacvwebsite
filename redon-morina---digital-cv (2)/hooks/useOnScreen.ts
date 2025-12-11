import { useEffect, useState, useRef, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin: string = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Optional: Disconnect after first reveal to avoid re-triggering
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        rootMargin,
        threshold: 0.1
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}