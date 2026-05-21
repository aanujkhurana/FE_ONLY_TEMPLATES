import { useState, useEffect, useRef } from 'react';

export default function ProgressiveImage({ src, srcSet, alt, className, imgClassName, placeholder, style, eager, ...imgProps }) {
  const [loaded, setLoaded] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    setLoaded(false);
    mountedRef.current = true;
    const img = new Image();
    if (srcSet) img.srcset = srcSet;
    img.src = src;
    const onLoad = () => { if (mountedRef.current) setLoaded(true); };
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onLoad);
    if (img.complete) setLoaded(true);
    return () => { mountedRef.current = false; };
  }, [src, srcSet]);

  return (
    <div className={`relative overflow-hidden ${className || ''}`} style={{ backgroundColor: placeholder || '#020b14', ...style }}>
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${imgClassName || ''} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        {...imgProps}
      />
    </div>
  );
}
