import React from 'react';
import { Image, ArrowUpRight } from 'lucide-react';

const CATEGORY_ITEMS = [
  { id: 'cat-1', title: 'WEDDING MANDAPS', code: 'BOX 01', type: 'TRADITIONAL' },
  { id: 'cat-2', title: 'RECEPTION STAGES', code: 'BOX 02', type: 'LUXURY' },
  { id: 'cat-3', title: 'THEME BIRTHDAYS', code: 'BOX 03', type: 'CONTEMPORARY' },
  { id: 'cat-4', title: 'BABY SHOWERS', code: 'BOX 04', type: 'SEEMANTHAM' },
  { id: 'cat-5', title: 'CORPORATE EVENTS', code: 'BOX 05', type: 'FORMAL' },
  { id: 'cat-6', title: 'HOME & FESTIVE', code: 'BOX 06', type: 'POOJA DECOR' }
];

export default function Categories() {
  return (
    <section id="categories" className="boxed-section">
      <div className="boxed-container">
        <div className="section-type-indicator">
          <span>[SECTION BOX: SERVICES & CATEGORIES]</span>
        </div>

        {/* Section Header Box */}
        <div className="box-module section-head-box">
          <span className="box-type-tag">[SECTION HEADER BOX]</span>
          <div className="section-badge-tag">[OFFERINGS DIRECTORY]</div>
          <h2 className="boxed-section-title">DECORATION CATEGORIES</h2>
          <span className="section-dim-info">GRID LAYOUT • 3 COLUMNS x 2 ROWS</span>
        </div>

        {/* 6 Category Card Boxes Grid */}
        <div className="category-cards-grid">
          {CATEGORY_ITEMS.map((item) => (
            <div key={item.id} className="box-module category-card-box">
              <div className="card-top-bar">
                <span className="box-type-tag">[{item.code}]</span>
                <span className="card-tag-pill">[{item.type}]</span>
              </div>

              {/* Zero Picture - Boxed Image Slot */}
              <div className="box-slot image-slot-box">
                <div className="slot-watermark">
                  <Image size={24} />
                  <span className="slot-dim-label">[IMAGE BOX: 400 x 260 PX]</span>
                </div>
              </div>

              {/* Title & Action Box */}
              <div className="box-slot meta-slot-box">
                <div className="slot-title">{item.title}</div>
                <div className="slot-desc">[SPECIFICATION: FRESH FLORALS & AMBIENT ILLUMINATION]</div>
                <a href="#contact" className="slot-action-link">
                  <span>[ENQUIRE SERVICE]</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
