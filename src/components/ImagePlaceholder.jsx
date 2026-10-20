import React from 'react';

/**
 * Editorial Image Placeholder Component for Snegam Decorations Catalogue.
 * Designed with pure Loading Type (Shimmer Skeleton Frame) with 20% Progress Tag.
 */
export default function ImagePlaceholder({
  src = null,
  alt = '',
  aspectRatio = '16/10',
  percentage = '20%',
  minHeight = null,
  className = ''
}) {
  if (src) {
    return (
      <div 
        className={`editorial-image-frame has-image ${className}`}
        style={{ aspectRatio, minHeight: minHeight || undefined }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="editorial-real-image" 
          loading="lazy" 
        />
      </div>
    );
  }

  // Loading Type with Shimmer & 20% Percentage Tag
  return (
    <div 
      className={`editorial-image-frame loading-type-shimmer ${className}`}
      style={{ aspectRatio, minHeight: minHeight || undefined }}
      role="presentation"
      aria-label={`Asset loading ${percentage}`}
    >
      {/* Registration Marks */}
      <span className="corner-mark top-left">+</span>
      <span className="corner-mark top-right">+</span>
      <span className="corner-mark bottom-left">+</span>
      <span className="corner-mark bottom-right">+</span>

      {/* Shimmering Mat with 20% Indicator */}
      <div className="plate-inner-mat-loading">
        <div className="loading-shimmer-wave"></div>
        
        <div className="plate-percentage-badge">
          <span className="percentage-pulse-dot"></span>
          <span className="percentage-num-text">{percentage}</span>
          <span className="percentage-label-text">LOADED</span>
        </div>

        <div className="plate-percentage-mini-bar">
          <div className="mini-bar-fill" style={{ width: percentage }}></div>
        </div>
      </div>
    </div>
  );
}
