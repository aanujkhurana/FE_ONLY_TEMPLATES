import { useRef } from 'react';
import useCursor from '../hooks/useCursor';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useCursor(cursorRef, ringRef);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
