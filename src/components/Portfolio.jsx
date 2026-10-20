import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { PORTFOLIO_PROJECTS } from '../data/catalogueData';
import { Info } from 'lucide-react';

export default function Portfolio({ percentage = '20%' }) {
  return (
    <section id="work" className="catalogue-section catalogue-portfolio-section">
      <div className="catalogue-container">
        {/* Pre-title (20% Text) */}
        <div className="section-pre-title">
          <span className="section-index-num">SECTION 04</span>
          <span className="section-divider-dash">—</span>
          <span className="section-category-name">EXECUTED STAGES & VENUES</span>
          <span className="section-percentage-badge">{percentage}</span>
        </div>

        {/* Section Heading */}
        <div className="section-header-block">
          <h2 className="catalogue-section-heading">
            Our Work / Project Portfolio
          </h2>
          <div className="skeleton-paragraph-group" style={{ maxWidth: '640px' }}>
            <span className="skeleton-line w-95"></span>
          </div>
        </div>

        {/* Status Notice with 20% Text */}
        <div className="editorial-notice-banner" role="status">
          <div className="notice-icon-wrapper">
            <Info size={18} />
          </div>
          <div className="notice-content">
            <span className="notice-title">PROJECT GALLERY INITIALIZATION • {percentage} COMPLETE</span>
            <p className="notice-description">
              Snegam Decorations is curating authentic photography from commissioned venue installations. Verified case studies and venue galleries will populate as assets reach 100%.
            </p>
          </div>
        </div>

        {/* Portfolio Grid (20% Titles + Shimmering Details) */}
        <div className="portfolio-editorial-grid">
          {PORTFOLIO_PROJECTS.map((proj) => (
            <article key={proj.id} className="portfolio-project-card">
              <div className="portfolio-frame-header">
                <span className="proj-plate-num">{proj.plateNumber}</span>
                <span className="proj-category">{proj.category}</span>
              </div>

              <div className="portfolio-plate-wrapper">
                <ImagePlaceholder
                  aspectRatio="16/11"
                  percentage={percentage}
                  className="portfolio-main-plate"
                />
              </div>

              <div className="portfolio-details-block">
                <h3 className="project-title">
                  {proj.title}
                </h3>
                <span className="project-venue-type">
                  {proj.venueType}
                </span>
                <div className="skeleton-paragraph-group" style={{ marginTop: '8px' }}>
                  <span className="skeleton-line w-95"></span>
                  <span className="skeleton-line w-60"></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
