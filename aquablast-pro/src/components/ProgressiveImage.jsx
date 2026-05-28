import { memo, useCallback, useState } from 'react';

function ProgressiveImage({
  src, srcSet, avifSrcSet, alt, className, imgClassName,
  placeholder, sizes = '100vw', eager, fetchPriority, style, onLoad, ...imgProps
}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    onLoad?.();
  }, [onLoad]);

  return (
    <div className={`relative overflow-hidden ${className || ''}`} style={{ backgroundColor: placeholder || '#020b14', ...style }}>
      <picture>
        {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
        <source type="image/webp" srcSet={srcSet || src} sizes={sizes} />
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${imgClassName || ''} ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={fetchPriority}
          decoding="async"
          onLoad={handleLoad}
          onError={handleLoad}
          {...imgProps}
        />
      </picture>
    </div>
  );
}

export default memo(ProgressiveImage);
