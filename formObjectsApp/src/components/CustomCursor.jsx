import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');

    if (!cursor || !finePointer.matches) return undefined;

    let rafId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const moveCursor = (event) => {
      x = event.clientX;
      y = event.clientY;

      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          rafId = 0;
        });
      }
    };

    const setInteractive = (event) => {
      const target = event.target;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="active"]',
      );
      const isInvert = target.closest('[data-cursor="invert"]');
      cursor.classList.toggle('is-active', Boolean(isInteractive));
      cursor.classList.toggle('is-invert', Boolean(isInvert));
    };

    const showCursor = () => cursor.classList.add('is-visible');
    const hideCursor = () => cursor.classList.remove('is-visible');

    window.addEventListener('pointermove', moveCursor);
    window.addEventListener('pointermove', setInteractive);
    window.addEventListener('pointerenter', showCursor);
    window.addEventListener('pointerleave', hideCursor);
    showCursor();

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointermove', setInteractive);
      window.removeEventListener('pointerenter', showCursor);
      window.removeEventListener('pointerleave', hideCursor);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
