import type { FunctionComponent } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiTruck } from "react-icons/fi";
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
              <FiPhone size={32} />
            </div>
            <h3>Telefon</h3>
            <p className="contact-detail">{phone}</p>
            <p className="contact-note">Mo-Fr: 08:00-18:00 Uhr</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <FiMail size={32} />
            </div>
            <h3>E-Mail</h3>
            <p className="contact-detail">{email}</p>
            <p className="contact-note">Antwort innerhalb 24h</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <FiMapPin size={32} />
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
              <FiClock size={32} />
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
              <FiTruck size={20} />
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
                <FiTruck size={20} />
                <span>U2 Musterstraße</span>
              </div>
              <div className="transport-option">
                <FiTruck size={20} />
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
              Ich stimme der <a href="/datenschutz">Datenschutzerklärung</a> zu
              *
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
            <FiPhone size={24} />
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
