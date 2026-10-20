import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/catalogueData';

export default function Navbar({ onNavigate, percentage = '20%' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top 20% Percentage Loading Progress Strip */}
      <div className="catalogue-top-strip">
        <div className="catalogue-container strip-flex">
          <div className="percentage-progress-group">
            <span className="strip-edition">INITIALIZING CATALOGUE</span>
            <span className="percentage-highlight-pill">{percentage} LOADED</span>
            <div className="global-progress-bar-track">
              <div className="global-progress-bar-fill" style={{ width: percentage }}></div>
            </div>
          </div>
          
          <a href={`tel:${COMPANY_CONTACT.phoneCall}`} className="strip-contact">
            <Phone size={12} />
            <span>Consultations: {COMPANY_CONTACT.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Header with Real Brand Logo */}
      <header className="catalogue-header">
        <div className="catalogue-container header-inner">
          {/* Authentic Snegam Logo */}
          <a 
            href="#hero" 
            className="brand-logo-anchor"
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            aria-label="Snegam Decorations Home"
          >
            <img 
              src="/snegam-logo.png" 
              alt="Snegam Decorations — Event & Stage Decors" 
              className="catalogue-brand-logo" 
            />
          </a>

          {/* 20% Core Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-menu-list">
              <li>
                <a 
                  href="#hero" 
                  className="nav-link-item"
                  onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="nav-link-item"
                  onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="nav-link-item"
                  onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#catalogue" 
                  className="nav-link-item"
                  onClick={(e) => { e.preventDefault(); handleNavClick('catalogue'); }}
                >
                  Catalogue
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  className="nav-link-item"
                  onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}
                >
                  Our Work
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="nav-link-item"
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Action CTA with Percentage Badge */}
          <div className="header-actions">
            <span className="nav-status-percentage">{percentage}</span>
            <a 
              href="#contact" 
              className="catalogue-btn catalogue-btn-primary"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              <span>Enquire With Us</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
            <div className="catalogue-container drawer-inner">
              <div className="drawer-percentage-row">
                <span className="drawer-catalogue-ref">SNEGAM CATALOGUE</span>
                <span className="percentage-highlight-pill">{percentage} LOADED</span>
              </div>
              <ul className="drawer-nav-list">
                <li><a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>01. Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>02. About Snegam</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>03. Services Directory</a></li>
                <li><a href="#catalogue" onClick={(e) => { e.preventDefault(); handleNavClick('catalogue'); }}>04. Decoration Catalogue</a></li>
                <li><a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}>05. Our Work</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>06. Contact & Consultation</a></li>
              </ul>
              <div className="drawer-footer-cta">
                <a 
                  href="#contact" 
                  className="catalogue-btn catalogue-btn-primary drawer-btn"
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                >
                  <span>Enquire With Us</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
