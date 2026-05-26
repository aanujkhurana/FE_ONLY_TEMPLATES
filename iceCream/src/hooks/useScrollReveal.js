import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
}
