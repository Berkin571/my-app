import type { FunctionComponent } from "react";
import { GoogleMap } from "../components";
import "./Kontakt.css";
import type { Company } from "../types";

export const Kontakt: FunctionComponent<Partial<Company>> = ({
  name,
  address,
  phone,
  email,
}) => {
  return (
    <div className="kontakt-page">
      <div className="kontakt-header">
        <h1>Kontakt</h1>
        <p className="subtitle">
          Nehmen Sie Kontakt mit uns auf - wir sind für Sie da!
        </p>
      </div>

      {/* Kontakt-Informationen */}
      <div className="contact-info-section">
        <h2>So erreichen Sie uns</h2>
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Telefon</h3>
            <p className="contact-detail">{phone}</p>
            <p className="contact-note">Mo-Fr: 08:00-18:00 Uhr</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>E-Mail</h3>
            <p className="contact-detail">{email}</p>
            <p className="contact-note">Antwort innerhalb 24h</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Adresse</h3>
            <p className="contact-detail">
              {address?.street} {address?.houseNumber}
            </p>
            <p className="contact-detail">
              {address?.zip} {address?.city}
            </p>
            <p className="contact-note">Gut erreichbar mit Auto und ÖPNV</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <h3>Öffnungszeiten</h3>
            <div className="opening-hours">
              <div className="hours-row">
                <span>Mo-Fr:</span>
                <span>08:00-18:00</span>
              </div>
              <div className="hours-row">
                <span>Sa:</span>
                <span>09:00-14:00</span>
              </div>
              <div className="hours-row">
                <span>So:</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anfahrt */}
      <div className="directions-section">
        <h2>Anfahrt</h2>
        <div className="directions-grid">
          <div className="directions-info">
            <h3>Mit dem Auto</h3>
            <p>
              Kostenlose Parkplätze direkt vor der Prüfstelle verfügbar.
              Einfahrt über Musterstraße 123.
            </p>
            <div className="parking-info">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
              </svg>
              <span>Kostenlose Parkplätze</span>
            </div>
          </div>

          <div className="directions-info">
            <h3>Mit öffentlichen Verkehrsmitteln</h3>
            <p>
              U-Bahn: U2 (Musterstraße), Bus: 100, 200 (Haltestelle
              Musterstraße)
            </p>
            <div className="public-transport">
              <div className="transport-option">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                </svg>
                <span>U2 Musterstraße</span>
              </div>
              <div className="transport-option">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                </svg>
                <span>Bus 100, 200</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Karte */}
      <div className="map-section">
        <h2>Unser Standort</h2>
        <GoogleMap
          latitude={address?.latitude ?? 0}
          longitude={address?.longitude ?? 0}
          zoom={15}
          title={name}
        />
      </div>

      {/* Kontaktformular */}
      <div className="contact-form-section">
        <h2>Nachricht senden</h2>
        <p>Haben Sie eine spezielle Frage? Senden Sie uns eine Nachricht!</p>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail *</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Betreff</label>
            <select id="subject" name="subject">
              <option value="">Bitte wählen</option>
              <option value="allgemein">Allgemeine Anfrage</option>
              <option value="preise">Preisanfrage</option>
              <option value="termin">Terminabsprache</option>
              <option value="beschwerde">Beschwerde</option>
              <option value="sonstiges">Sonstiges</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Nachricht *</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="privacy" required />
              <span className="checkmark"></span>
              Ich stimme der <a href="#privacy">Datenschutzerklärung</a> zu *
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-large">
            Nachricht senden
          </button>
        </form>
      </div>

      {/* Notfall-Kontakt */}
      <div className="emergency-contact">
        <h2>Notfall-Kontakt</h2>
        <p>Für dringende Angelegenheiten außerhalb der Öffnungszeiten:</p>
        <div className="emergency-info">
          <div className="emergency-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div>
              <h3>Notfall-Hotline</h3>
              <p>{phone}</p>
              <small>Nur für echte Notfälle</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
