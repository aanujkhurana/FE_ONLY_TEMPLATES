import { useState, useEffect, useRef } from 'react';

export default function ProgressiveImage({
  src, srcSet, alt, className, imgClassName,
  placeholder, sizes, eager, fetchPriority, style, onLoad, ...imgProps
}) {
  const [loaded, setLoaded] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    setLoaded(false);
    mountedRef.current = true;
    const img = new Image();
    if (srcSet) img.srcset = srcSet;
    if (sizes) img.sizes = sizes;
    img.src = src;
    const handleLoad = () => {
      if (!mountedRef.current) return;
      setLoaded(true);
      onLoad?.();
    };
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleLoad);
    if (img.complete) handleLoad();
    return () => { mountedRef.current = false; };
  }, [src, srcSet, sizes]);

  return (
    <div className={`relative overflow-hidden ${className || ''}`} style={{ backgroundColor: placeholder || '#020b14', ...style }}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${imgClassName || ''} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={fetchPriority}
        decoding="async"
        {...imgProps}
      />
    </div>
  );
}
