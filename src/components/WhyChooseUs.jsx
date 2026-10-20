import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/catalogueData';
import { Compass, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

const ICONS = [Compass, Sparkles, Sliders, CheckCircle2];

export default function WhyChooseUs({ percentage = '20%' }) {
  return (
    <section id="why-us" className="catalogue-section catalogue-philosophy-section">
      <div className="catalogue-container">
        {/* Pre-title (20% Text) */}
        <div className="section-pre-title">
          <span className="section-index-num">SECTION 05</span>
          <span className="section-divider-dash">—</span>
          <span className="section-category-name">THE SNEGAM PHILOSOPHY</span>
          <span className="section-percentage-badge">{percentage}</span>
        </div>

        {/* Section Heading */}
        <div className="section-header-block">
          <h2 className="catalogue-section-heading">
            Why Choose Snegam Decorations
          </h2>
          <div className="skeleton-paragraph-group" style={{ maxWidth: '600px' }}>
            <span className="skeleton-line w-95"></span>
          </div>
        </div>

        {/* 4 Pillars (20% Titles + Shimmering Descriptions) */}
        <div className="philosophy-editorial-grid">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx] || Sparkles;

            return (
              <div key={pillar.number} className="philosophy-column-card">
                <div className="pillar-header-row">
                  <span className="pillar-index-number">NO. {pillar.number}</span>
                  <div className="pillar-icon-symbol">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Core Pillar Title (20% Text) */}
                <h3 className="pillar-title-text">
                  {pillar.title}
                </h3>

                <div className="pillar-divider-line"></div>

                {/* Shimmering Description Lines */}
                <div className="skeleton-paragraph-group">
                  <span className="skeleton-line w-100"></span>
                  <span className="skeleton-line w-92"></span>
                  <span className="skeleton-line w-75"></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="philosophy-footnote-box">
          <div className="footnote-tag">STUDIO STANDARD // {percentage}</div>
          <p className="footnote-text">
            We prioritize authentic floral freshness, secure rigging standards, and harmonious palette alignment with your celebration attire.
          </p>
        </div>
      </div>
    </section>
  );
}
