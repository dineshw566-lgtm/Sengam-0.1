import React, { useState } from 'react';
import { Image, Maximize2 } from 'lucide-react';

const FILTER_TABS = [
  { id: 'all', label: '[ALL PORTFOLIO]' },
  { id: 'weddings', label: '[WEDDINGS]' },
  { id: 'receptions', label: '[RECEPTIONS]' },
  { id: 'birthdays', label: '[BIRTHDAYS]' },
  { id: 'baby-showers', label: '[BABY SHOWERS]' },
  { id: 'home', label: '[HOME DECOR]' }
];

const GALLERY_BOXES = [
  { id: 1, title: 'ROYAL TEMPLE MANDAP', cat: 'weddings', tag: 'WEDDING STAGE', dim: 'RATIO 4:3 • 600 x 450 PX' },
  { id: 2, title: 'EMERALD BOTANICAL STAGE', cat: 'receptions', tag: 'RECEPTION', dim: 'RATIO 4:3 • 600 x 450 PX' },
  { id: 3, title: 'GOLDEN THEMED BACKDROP', cat: 'birthdays', tag: 'BIRTHDAY', dim: 'RATIO 4:3 • 600 x 450 PX' },
  { id: 4, title: 'PASTEL SEEMANTHAM CRADLE', cat: 'baby-showers', tag: 'BABY SHOWER', dim: 'RATIO 4:3 • 600 x 450 PX' },
  { id: 5, title: 'MARIGOLD HOME ENTRANCE', cat: 'home', tag: 'FESTIVE HOME', dim: 'RATIO 4:3 • 600 x 450 PX' },
  { id: 6, title: 'CONTEMPORARY FLORAL ARCH', cat: 'receptions', tag: 'STAGE DAIS', dim: 'RATIO 4:3 • 600 x 450 PX' }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_BOXES
    : GALLERY_BOXES.filter(item => item.cat === activeFilter);

  return (
    <section id="gallery" className="boxed-section">
      <div className="boxed-container">
        <div className="section-type-indicator">
          <span>[SECTION BOX: PORTFOLIO GALLERY]</span>
        </div>

        {/* Section Header Box */}
        <div className="box-module section-head-box">
          <span className="box-type-tag">[SECTION HEADER BOX]</span>
          <div className="section-badge-tag">[SHOWCASE MODULE]</div>
          <h2 className="boxed-section-title">PORTFOLIO GALLERY GRID</h2>
          <span className="section-dim-info">FILTERABLE GRID • 3 COLUMNS x 2 ROWS</span>
        </div>

        {/* Filter Controls Box */}
        <div className="box-module filter-controls-box">
          <span className="box-type-tag">[FILTER BAR BOX]</span>
          <div className="filter-chips-row">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`box-filter-chip ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Boxes (Zero Pictures) */}
        <div className="gallery-boxed-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="box-module gallery-card-box">
              <div className="card-top-bar">
                <span className="box-type-tag">[PORTFOLIO BOX #{item.id}]</span>
                <span className="card-tag-pill">[{item.tag}]</span>
              </div>

              {/* Zero Picture - Boxed Slot */}
              <div className="box-slot gallery-slot-box">
                <div className="slot-watermark">
                  <Image size={26} />
                  <span className="slot-dim-label">[{item.dim}]</span>
                </div>
                <div className="slot-overlay-badge">
                  <Maximize2 size={13} />
                  <span>[BOX VIEW]</span>
                </div>
              </div>

              {/* Bottom Label Box */}
              <div className="box-slot gallery-info-slot">
                <div className="slot-title">{item.title}</div>
                <div className="slot-desc">[STATUS: COMPLETED PROJECT SPECIFICATION]</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
