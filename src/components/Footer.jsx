import React from 'react';
import { COMPANY_CONTACT, DECORATION_CATEGORIES } from '../data/catalogueData';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate, percentage = '20%' }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="catalogue-footer">
      <div className="catalogue-container">
        {/* Top Colophon Row */}
        <div className="footer-colophon-grid">
          {/* Brand Identification Column with Real Logo */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-logo-wrap" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <img 
                src="/snegam-logo.png" 
                alt="Snegam Decorations" 
                className="footer-brand-logo" 
              />
            </a>

            <p className="footer-brand-summary">
              {COMPANY_CONTACT.tagline}. Architectural stage backdrops, authentic temple mandaps, and bespoke floral artistry for cherished milestones.
            </p>

            <div className="footer-edition-badge">
              <span>{COMPANY_CONTACT.catalogueEdition} // {percentage}</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Catalogue Index</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>01. Home Cover</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>02. About Snegam</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>03. Services Directory</a></li>
              <li><a href="#catalogue" onClick={(e) => { e.preventDefault(); handleNavClick('catalogue'); }}>04. Decoration Catalogue</a></li>
              <li><a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}>05. Our Work Showcase</a></li>
              <li><a href="#why-us" onClick={(e) => { e.preventDefault(); handleNavClick('why-us'); }}>06. The Snegam Philosophy</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>07. Consultation & Enquiry</a></li>
            </ul>
          </div>

          {/* Decoration Categories Column */}
          <div className="footer-categories-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-list">
              {DECORATION_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <a href="#catalogue" onClick={(e) => { e.preventDefault(); handleNavClick('catalogue'); }}>
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Studio & Contact</h4>
            <div className="footer-contact-details">
              <p className="contact-line">
                <span className="contact-label">LOCATION:</span>
                <span className="contact-val">{COMPANY_CONTACT.location}</span>
              </p>
              <p className="contact-line">
                <span className="contact-label">TELEPHONE:</span>
                <a href={`tel:${COMPANY_CONTACT.phoneCall}`} className="contact-val link">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </p>
              <p className="contact-line">
                <span className="contact-label">ENQUIRY:</span>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="contact-val link">
                  {COMPANY_CONTACT.email}
                </a>
              </p>
              <p className="contact-line">
                <span className="contact-label">STATUS:</span>
                <span className="contact-val">{percentage} ASSETS INITIALIZED</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            © {new Date().getFullYear()} {COMPANY_CONTACT.brandName}. All rights reserved. 
            <span className="footer-divider-dot">•</span>
            [CATALOGUE ASSETS: {percentage} COMPILED]
            <span className="footer-divider-dot">•</span>
            Powered by Beyond Adverts.
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-button"
            aria-label="Back to top of catalogue"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
