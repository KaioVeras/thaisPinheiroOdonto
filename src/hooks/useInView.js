import { useState, useEffect, useRef } from 'react';

export const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    if (!element || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};
