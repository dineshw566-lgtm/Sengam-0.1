import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';
import { DECORATION_CATEGORIES } from '../data/catalogueData';

export default function DecorationCategories({ onSelectCategory, percentage = '20%' }) {
  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      const el = document.getElementById('catalogue');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="catalogue-section catalogue-categories-section">
      <div className="catalogue-container">
        {/* Section Pre-title (20% Text) */}
        <div className="section-pre-title">
          <span className="section-index-num">SECTION 02</span>
          <span className="section-divider-dash">—</span>
          <span className="section-category-name">SERVICES DIRECTORY</span>
          <span className="section-percentage-badge">{percentage}</span>
        </div>

        {/* Section Header (20% Text) */}
        <div className="section-header-block">
          <h2 className="catalogue-section-heading">
            Decoration Categories
          </h2>
          <div className="skeleton-paragraph-group" style={{ maxWidth: '600px' }}>
            <span className="skeleton-line w-100"></span>
            <span className="skeleton-line w-75"></span>
          </div>
          <div className="catalogue-editorial-note">
            <span className="note-label">INDEX STATUS:</span> {percentage} DIRECTORY SPECIFICATIONS PREVIEWED
          </div>
        </div>

        {/* Categories Editorial Grid (20% Text + Shimmering Details) */}
        <div className="categories-editorial-grid">
          {DECORATION_CATEGORIES.map((cat, index) => {
            const isFeatured = index === 0 || index === 1;

            return (
              <article 
                key={cat.id} 
                className={`category-catalogue-card ${isFeatured ? 'card-featured' : ''}`}
              >
                {/* 20% Image Placeholder Frame */}
                <div className="card-plate-wrapper">
                  <ImagePlaceholder
                    aspectRatio={isFeatured ? '16/10' : '4/3'}
                    percentage={percentage}
                    className="category-plate"
                  />
                </div>

                {/* Card Editorial Body (20% Key Text + Shimmer Details) */}
                <div className="card-content-block">
                  <div className="card-header-meta">
                    <span className="card-cat-number">{cat.catNumber}</span>
                    <span className="card-tag-badge">{cat.tag}</span>
                  </div>

                  {/* Core Category Title (20% Text) */}
                  <h3 className="card-title">
                    {cat.title}
                  </h3>

                  {/* Shimmering Description Lines */}
                  <div className="skeleton-paragraph-group" style={{ marginBottom: '16px', flexGrow: 1 }}>
                    <span className="skeleton-line w-100"></span>
                    <span className="skeleton-line w-85"></span>
                  </div>

                  <div className="card-footer-action">
                    <button 
                      onClick={() => handleCategoryClick(cat.id)}
                      className="category-view-link"
                      aria-label={`View ${cat.title} in catalogue`}
                    >
                      <span>VIEW IN CATALOGUE</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
