import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Hero({ onExploreCatalogue, onEnquireClick, percentage = '20%' }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="catalogue-hero-section">
      <div className="catalogue-container">
        {/* Cover Meta with 20% Indicator */}
        <div className="hero-editorial-meta">
          <div className="meta-left">
            <span className="meta-serial">ISSUE // 2026</span>
            <span className="meta-divider">•</span>
            <span className="meta-category">EVENT ARCHITECTURE & DECORATION</span>
          </div>
          <div className="meta-right">
            <span className="percentage-tag-box">STATUS: {percentage} LOADED</span>
          </div>
        </div>

        {/* Hero Editorial Grid: 20% Core Text + 80% Loading Shimmer */}
        <div className="hero-editorial-grid">
          {/* Left Column */}
          <div className="hero-copy-column">
            <div className="hero-brand-callout">
              <span className="callout-line"></span>
              <span className="callout-text">SNEGAM DECORATIONS STUDIO</span>
              <span className="callout-percentage">{percentage}</span>
            </div>

            {/* Core Headline (20% Text) */}
            <h1 className="hero-editorial-title">
              Creating Beautiful Spaces for <span className="title-emphasis">Unforgettable</span> Celebrations.
            </h1>

            {/* Shimmering Lead Paragraph (Loading Type) */}
            <div className="skeleton-paragraph-group" style={{ marginBottom: '28px' }}>
              <span className="skeleton-line w-100"></span>
              <span className="skeleton-line w-95"></span>
              <span className="skeleton-line w-88"></span>
              <span className="skeleton-line w-70"></span>
            </div>

            {/* CTA Buttons (20% Text) */}
            <div className="hero-cta-group">
              <button 
                onClick={onExploreCatalogue || (() => scrollTo('catalogue'))}
                className="catalogue-btn catalogue-btn-primary"
              >
                <span>EXPLORE OUR CATALOGUE</span>
                <ArrowDown size={14} />
              </button>
              <button 
                onClick={onEnquireClick || (() => scrollTo('contact'))}
                className="catalogue-btn catalogue-btn-outline"
              >
                <span>ENQUIRE WITH US</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Shimmering Specs */}
            <div className="hero-editorial-spec">
              <div className="spec-item">
                <span className="spec-label">MEDIUM</span>
                <span className="skeleton-bar w-220"></span>
              </div>
              <div className="spec-item">
                <span className="spec-label">APPROACH</span>
                <span className="skeleton-bar w-180"></span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Art-Directed Cover Frame with 20% Loading Shimmer */}
          <div className="hero-visual-column">
            <div className="hero-cover-frame-wrapper">
              <div className="cover-frame-header">
                <span className="plate-id">PLATE I — COVER ARCHITECTURE</span>
                <span className="plate-scale">{percentage} LOADED</span>
              </div>

              <ImagePlaceholder
                aspectRatio="16/11"
                percentage={percentage}
                className="hero-main-placeholder"
              />

              <div className="cover-frame-caption">
                <div className="caption-percentage-row">
                  <span className="caption-bold">Fig. 1.0</span>
                  <span className="caption-progress-pill">{percentage} ARCHITECTURAL COMPILED</span>
                </div>
                <div className="skeleton-paragraph-group" style={{ marginTop: '6px' }}>
                  <span className="skeleton-line w-95"></span>
                  <span className="skeleton-line w-70"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
