import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function About({ percentage = '20%' }) {
  return (
    <section id="about" className="catalogue-section catalogue-about-section">
      <div className="catalogue-container">
        {/* Section Pre-title (20% Text) */}
        <div className="section-pre-title">
          <span className="section-index-num">SECTION 01</span>
          <span className="section-divider-dash">—</span>
          <span className="section-category-name">INTRODUCTION</span>
          <span className="section-percentage-badge">{percentage}</span>
        </div>

        <div className="about-editorial-grid">
          {/* Left Column: Framed Placeholder Plate (20% Shimmer) */}
          <div className="about-visual-column">
            <div className="about-frame-wrapper">
              <div className="frame-meta-bar">
                <span className="frame-meta-num">PLATE II</span>
                <span className="frame-meta-title">STUDIO ATELIER // {percentage}</span>
              </div>

              <ImagePlaceholder 
                aspectRatio="4/3" 
                percentage={percentage}
              />

              <div className="about-caption-box">
                <span className="caption-tag">STUDIO OVERVIEW</span>
                <div className="skeleton-paragraph-group" style={{ marginTop: '4px' }}>
                  <span className="skeleton-line w-95"></span>
                  <span className="skeleton-line w-75"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Headings (20% Text) + Shimmering Body */}
          <div className="about-content-column">
            <h2 className="catalogue-section-heading">
              About Snegam Decorations
            </h2>

            <div className="brand-accent-line"></div>

            {/* Shimmering Body Paragraphs */}
            <div className="about-text-body">
              <div className="skeleton-paragraph-group">
                <span className="skeleton-line w-100"></span>
                <span className="skeleton-line w-95"></span>
                <span className="skeleton-line w-88"></span>
              </div>

              <div className="skeleton-paragraph-group">
                <span className="skeleton-line w-100"></span>
                <span className="skeleton-line w-92"></span>
                <span className="skeleton-line w-80"></span>
              </div>

              <div className="skeleton-paragraph-group">
                <span className="skeleton-line w-100"></span>
                <span className="skeleton-line w-85"></span>
                <span className="skeleton-line w-65"></span>
              </div>
            </div>

            {/* 20% Text Values Strip */}
            <div className="about-values-strip">
              <div className="value-mini-card">
                <span className="value-idx">A.</span>
                <span className="value-title">Bespoke Design</span>
                <span className="skeleton-line w-85" style={{ marginTop: '6px' }}></span>
              </div>
              <div className="value-mini-card">
                <span className="value-idx">B.</span>
                <span className="value-title">Sacred Symmetry</span>
                <span className="skeleton-line w-85" style={{ marginTop: '6px' }}></span>
              </div>
              <div className="value-mini-card">
                <span className="value-idx">C.</span>
                <span className="value-title">Punctual Delivery</span>
                <span className="skeleton-line w-85" style={{ marginTop: '6px' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
