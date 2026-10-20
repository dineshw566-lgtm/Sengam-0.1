import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckSquare } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="boxed-section">
      <div className="boxed-container">
        <div className="section-type-indicator">
          <span>[SECTION BOX: ENQUIRY & CONTACT]</span>
        </div>

        <div className="contact-boxed-grid">
          {/* Left Column Box: Contact Channels */}
          <div className="box-module contact-info-box">
            <span className="box-type-tag">[CONTACT INFO BOX]</span>

            <div className="box-item">
              <div className="section-badge-tag">[COMMUNICATIONS DESK]</div>
              <h2 className="boxed-section-title" style={{ textAlign: 'left', marginTop: '8px' }}>
                DIRECT ENQUIRY
              </h2>
              <span className="section-dim-info">AVAILABILITY: MON – SUN 8:00 AM – 9:00 PM</span>
            </div>

            <div className="channel-boxes-stack">
              <div className="box-item channel-item-box">
                <span className="box-type-tag">[PHONE BOX]</span>
                <div className="channel-content">
                  <Phone size={18} className="channel-icon" />
                  <div>
                    <span className="channel-label">TELEPHONE / WHATSAPP</span>
                    <strong className="channel-val">+91 98765 43210</strong>
                  </div>
                </div>
              </div>

              <div className="box-item channel-item-box">
                <span className="box-type-tag">[EMAIL BOX]</span>
                <div className="channel-content">
                  <Mail size={18} className="channel-icon" />
                  <div>
                    <span className="channel-label">ELECTRONIC MAIL</span>
                    <strong className="channel-val">decorations@snegam.com</strong>
                  </div>
                </div>
              </div>

              <div className="box-item channel-item-box">
                <span className="box-type-tag">[LOCATION BOX]</span>
                <div className="channel-content">
                  <MapPin size={18} className="channel-icon" />
                  <div>
                    <span className="channel-label">CENTRAL STUDIO & WAREHOUSE</span>
                    <strong className="channel-val">TAMIL NADU, INDIA</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-item" style={{ marginTop: 'auto' }}>
              <div className="box-footnote">
                [RESPONSE TIME SPECIFICATION: WITHIN 24 HOURS GUARANTEED]
              </div>
            </div>
          </div>

          {/* Right Column Box: Enquiry Form Box */}
          <div className="box-module form-panel-box">
            <span className="box-type-tag">[ENQUIRY FORM BOX]</span>

            {submitted ? (
              <div className="form-success-box">
                <CheckSquare size={36} color="#144527" />
                <div className="slot-title">[FORM SUBMISSION SUCCESS]</div>
                <div className="slot-desc">[REPRESENTATIVE WILL CONTACT VIA TELEPHONE]</div>
                <button 
                  className="box-btn box-btn-outline" 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '16px' }}
                >
                  [SUBMIT ANOTHER ENQUIRY]
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="boxed-form-elements">
                <div className="form-fields-grid-2">
                  <div className="box-item form-input-box">
                    <span className="box-type-tag">[INPUT FIELD: NAME]</span>
                    <label className="field-label">CLIENT FULL NAME *</label>
                    <input type="text" required placeholder="[ENTER CLIENT NAME]" className="box-input" />
                  </div>
                  <div className="box-item form-input-box">
                    <span className="box-type-tag">[INPUT FIELD: PHONE]</span>
                    <label className="field-label">CONTACT TELEPHONE *</label>
                    <input type="tel" required placeholder="[ENTER PHONE / WHATSAPP]" className="box-input" />
                  </div>
                </div>

                <div className="form-fields-grid-2">
                  <div className="box-item form-input-box">
                    <span className="box-type-tag">[SELECT FIELD: SERVICE]</span>
                    <label className="field-label">DECORATION CATEGORY</label>
                    <select className="box-input">
                      <option>[WEDDING MANDAP & STAGE]</option>
                      <option>[GRAND RECEPTION DAIS]</option>
                      <option>[MILESTONE BIRTHDAY SETUP]</option>
                      <option>[BABY SHOWER / SEEMANTHAM]</option>
                      <option>[CORPORATE GALA & STAGE]</option>
                      <option>[HOME & FESTIVE DECOR]</option>
                    </select>
                  </div>
                  <div className="box-item form-input-box">
                    <span className="box-type-tag">[DATE FIELD: EVENT]</span>
                    <label className="field-label">EVENT DATE</label>
                    <input type="date" className="box-input" />
                  </div>
                </div>

                <div className="box-item form-input-box">
                  <span className="box-type-tag">[INPUT FIELD: VENUE]</span>
                  <label className="field-label">VENUE / CITY LOCATION</label>
                  <input type="text" placeholder="[HALL / LOCATION ADDRESS]" className="box-input" />
                </div>

                <div className="box-item form-input-box">
                  <span className="box-type-tag">[TEXTAREA FIELD: NOTES]</span>
                  <label className="field-label">SPECIFIC EVENT SPECIFICATIONS</label>
                  <textarea rows="3" placeholder="[THEME PREFERENCES, FLORAL TYPES, STAGE DIMENSIONS...]" className="box-input"></textarea>
                </div>

                <div className="box-item form-submit-box">
                  <button type="submit" className="box-btn box-btn-primary" style={{ width: '100%' }}>
                    <Send size={15} />
                    <span>[SUBMIT ENQUIRY ACTION BUTTON]</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
