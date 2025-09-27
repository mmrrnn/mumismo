'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  quality = 95,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className,
  style,
  objectFit = 'cover',
}) => {
  const [imageError, setImageError] = useState(false);

  // Get the base name without extension
  const getBaseName = (path: string) => {
    const lastSlash = path.lastIndexOf('/');
    const filename = path.substring(lastSlash + 1);
    return filename.split('.')[0];
  };

  // Generate responsive image sources
  const generateSrcSet = (baseName: string, format: 'webp' | 'avif') => {
    const sizes = ['sm', 'md', 'lg', 'xl'];
    return sizes
      .map(size => `/optimized/${baseName}-${size}.${format} ${size === 'sm' ? '400' : size === 'md' ? '800' : size === 'lg' ? '1200' : '1600'}w`)
      .join(', ');
  };

  const baseName = getBaseName(src);
  const webpSrcSet = generateSrcSet(baseName, 'webp');
  const avifSrcSet = generateSrcSet(baseName, 'avif');

  const handleError = () => {
    setImageError(true);
  };

  // Fallback to original image if optimized versions fail
  if (imageError) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={className}
        style={{ ...style, objectFit }}
        onError={handleError}
      />
    );
  }

  return (
    <picture>
      {/* AVIF format (best compression) */}
      <source
        srcSet={avifSrcSet}
        sizes={sizes}
        type="image/avif"
      />
      {/* WebP format (good compression, wide support) */}
      <source
        srcSet={webpSrcSet}
        sizes={sizes}
        type="image/webp"
      />
      {/* Fallback to original format */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={className}
        style={{ ...style, objectFit }}
        onError={handleError}
      />
    </picture>
  );
};

export default ResponsiveImage;
