import React, { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { CATALOGUE_COLLECTIONS, DECORATION_CATEGORIES } from '../data/catalogueData';
import { ArrowUpRight, Filter } from 'lucide-react';

export default function DecorationCatalogue({ 
  activeCategory, 
  onSelectCollectionForEnquiry,
  percentage = '20%' 
}) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Collections' },
    ...DECORATION_CATEGORIES.map(c => ({ id: c.id, label: c.title }))
  ];

  const currentFilter = activeCategory || selectedFilter;

  const filteredCollections = currentFilter === 'all'
    ? CATALOGUE_COLLECTIONS
    : CATALOGUE_COLLECTIONS.filter(item => item.category === currentFilter);

  return (
    <section id="catalogue" className="catalogue-section catalogue-main-showcase">
      <div className="catalogue-container">
        {/* Section Pre-title (20% Text) */}
        <div className="section-pre-title">
          <span className="section-index-num">SECTION 03</span>
          <span className="section-divider-dash">—</span>
          <span className="section-category-name">CURATED PORTFOLIO PLATES</span>
          <span className="section-percentage-badge">{percentage}</span>
        </div>

        <div className="catalogue-editorial-header">
          <div>
            <h2 className="catalogue-section-heading">
              Our Decoration Collections
            </h2>
            <div className="skeleton-paragraph-group" style={{ maxWidth: '520px' }}>
              <span className="skeleton-line w-95"></span>
            </div>
          </div>
          <div className="catalogue-meta-badge">
            <span className="badge-title">CATALOGUE VOL. 2026</span>
            <span className="badge-subtitle">PLATES COMPILED: {percentage}</span>
          </div>
        </div>

        {/* Filter Tabs (20% Text) */}
        <div className="catalogue-filter-bar" role="tablist" aria-label="Decoration Collections Filter">
          <div className="filter-label-group">
            <Filter size={14} />
            <span className="filter-heading-text">FILTER:</span>
          </div>
          <div className="filter-tabs-track">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={currentFilter === tab.id}
                className={`catalogue-filter-tab ${currentFilter === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Editorial Grid */}
        <div className="catalogue-collections-grid">
          {filteredCollections.map((item) => (
            <article key={item.id} className="collection-editorial-plate">
              <div className="plate-header-row">
                <span className="collection-code-tag">{item.collectionCode}</span>
                <span className="collection-cat-label">{item.categoryLabel}</span>
              </div>

              {/* Shimmering Plate with 20% Percentage */}
              <div className="collection-plate-frame">
                <ImagePlaceholder
                  aspectRatio="16/10"
                  percentage={percentage}
                  className="collection-main-frame"
                />
              </div>

              {/* Plate Details (20% Title Text + Shimmer Details) */}
              <div className="plate-details-row">
                <div className="plate-copy-block">
                  <h3 className="collection-plate-title">
                    {item.title}
                  </h3>
                  
                  {/* Shimmering Notes & Specs */}
                  <div className="skeleton-paragraph-group" style={{ marginBottom: '8px' }}>
                    <span className="skeleton-line w-95"></span>
                    <span className="skeleton-line w-75"></span>
                  </div>

                  <span className="collection-dimensions-tag">
                    {item.dimensions}
                  </span>
                </div>

                <div className="plate-action-block">
                  <a
                    href="#contact"
                    className="catalogue-btn catalogue-btn-outline plate-enquire-btn"
                    onClick={(e) => {
                      if (onSelectCollectionForEnquiry) {
                        e.preventDefault();
                        onSelectCollectionForEnquiry(item);
                      }
                    }}
                  >
                    <span>ENQUIRE THIS SETUP</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
