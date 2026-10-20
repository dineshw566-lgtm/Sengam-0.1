import React, { useState } from 'react';
import { COMPANY_CONTACT, DECORATION_CATEGORIES } from '../data/catalogueData';
import { Phone, Mail, MapPin, MessageSquare, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function Enquiry({ prefilledItem, percentage = '20%' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: prefilledItem?.categoryLabel || 'Wedding Decoration',
    eventDate: '',
    venueLocation: '',
    requirements: prefilledItem ? `Interested in ${prefilledItem.title} (${prefilledItem.collectionCode})` : ''
  });

  return (
    <section id="contact" className="catalogue-section catalogue-enquiry-section">
      <div className="catalogue-container">
        {/* Pre-title (20% Text) */}
        <div className="section-pre-title">
          <span className="section-index-num">SECTION 06</span>
          <span className="section-divider-dash">—</span>
          <span className="section-category-name">CONSULTATION & ENQUIRY</span>
          <span className="section-percentage-badge">{percentage}</span>
        </div>

        <div className="enquiry-editorial-grid">
          {/* Left Column: Direct Studio Information */}
          <div className="enquiry-info-column">
            <h2 className="catalogue-section-heading" style={{ textAlign: 'left' }}>
              Plan Your Celebration With Us
            </h2>

            <div className="skeleton-paragraph-group" style={{ marginBottom: '24px' }}>
              <span className="skeleton-line w-95"></span>
              <span className="skeleton-line w-80"></span>
            </div>

            <div className="contact-methods-stack">
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Phone size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">TELEPHONE & WHATSAPP</span>
                  <a href={`tel:${COMPANY_CONTACT.phoneCall}`} className="method-value-link">
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                  <span className="method-note">Direct line for calendar availability</span>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Mail size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">EMAIL DESK</span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="method-value-link">
                    {COMPANY_CONTACT.email}
                  </a>
                  <span className="method-note">Send floor plans and inspiration boards</span>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">STUDIO & WAREHOUSING</span>
                  <span className="method-value-static">{COMPANY_CONTACT.location}</span>
                  <span className="method-note">{COMPANY_CONTACT.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="instant-contact-card">
              <div className="instant-card-header">
                <MessageSquare size={16} />
                <span>DIRECT MESSAGING // {percentage}</span>
              </div>
              <p className="instant-card-text">
                Connect directly with our decoration coordinators on WhatsApp for quick date checks.
              </p>
              <a 
                href={COMPANY_CONTACT.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="catalogue-btn catalogue-btn-primary instant-card-btn"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Enquiry Form Structure */}
          <div className="enquiry-form-column">
            <div className="form-card-container">
              <div className="form-card-header">
                <span className="form-plate-ref">FORM SPECIFICATION // {percentage} LOADED</span>
                <h3 className="form-heading">Decoration Consultation Request</h3>
              </div>

              <div className="form-status-notice" role="status">
                <AlertCircle size={16} />
                <div>
                  <strong className="status-notice-title">ENQUIRY FORM STATUS: {percentage} COMPILED</strong>
                  <p className="status-notice-desc">
                    Backend submission integration is currently being established. Use the fields below to prepare your requirements or click direct WhatsApp.
                  </p>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); }} className="editorial-form-fields">
                <div className="form-row-pair">
                  <div className="field-group">
                    <label className="field-label" htmlFor="client-name">
                      Client Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      className="catalogue-input"
                      placeholder="e.g. Ramesh & Priya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label className="field-label" htmlFor="client-phone">
                      Contact Telephone / WhatsApp *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      className="catalogue-input"
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-pair">
                  <div className="field-group">
                    <label className="field-label" htmlFor="event-type">
                      Decoration Service Category
                    </label>
                    <select
                      id="event-type"
                      className="catalogue-select"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    >
                      {DECORATION_CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.title}>
                          {cat.title}
                        </option>
                      ))}
                      <option value="Custom Combination">Custom Event Combination</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label className="field-label" htmlFor="event-date">
                      Approximate Event Date
                    </label>
                    <input
                      id="event-date"
                      type="date"
                      className="catalogue-input"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="venue-location">
                    Venue or City Location
                  </label>
                  <input
                    id="venue-location"
                    type="text"
                    className="catalogue-input"
                    placeholder="e.g. Mandapam / Hotel Ballroom, Chennai"
                    value={formData.venueLocation}
                    onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                  />
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="decor-requirements">
                    Decoration Requirements & Theme Preferences
                  </label>
                  <textarea
                    id="decor-requirements"
                    rows="3"
                    className="catalogue-textarea"
                    placeholder="Describe specific floral choices, stage dimensions, color inspirations..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-action-footer">
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      `Hello Snegam Decorations! My name is ${formData.name || 'a client'}. I am enquiring about ${formData.eventType} on ${formData.eventDate || 'an upcoming date'} at ${formData.venueLocation || 'my venue'}. Requirements: ${formData.requirements || 'General consultation'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="catalogue-btn catalogue-btn-primary full-width-btn"
                  >
                    <span>Send Prepared Details via WhatsApp</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <span className="form-disclaimer">
                    Direct communication ensures immediate validation against our event calendar.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
