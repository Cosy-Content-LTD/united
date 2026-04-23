import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}

export function useIntersectionObserver(
  threshold: number = 0.15
): UseIntersectionObserverReturn {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
