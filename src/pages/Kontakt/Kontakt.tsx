import type { FunctionComponent } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { GoogleMap, ContactCard } from "../../components";
import "./Kontakt.css";
import type { Company } from "../../types";
import { Page } from "../../layout";

export const Kontakt: FunctionComponent<Partial<Company>> = ({
  name,
  address,
  phone,
  email,
}) => {
  return (
    <Page
      title="Kontakt"
      subtitle="Nehmen Sie Kontakt mit uns auf – wir sind für Sie da!"
    >
      {/* Kontakt-Informationen */}
      <section
        className="contact-info-section"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading">So erreichen Sie uns</h2>
        <div className="contact-info-grid">
          <ContactCard
            title="Telefon"
            icon={<FiPhone size={24} />}
            detail={
              phone ? (
                <a href={`tel:${phone}`} title="Anrufen">
                  {phone}
                </a>
              ) : (
                phone
              )
            }
            note="Mo–Fr: 08:00–18:00 Uhr"
          />
          <ContactCard
            title="E-Mail"
            icon={<FiMail size={24} />}
            detail={
              email ? (
                <a href={`mailto:${email}`} title="E-Mail schreiben">
                  {email}
                </a>
              ) : (
                email
              )
            }
            note="Antwort innerhalb 24h"
          />
          <ContactCard title="Adresse" icon={<FiMapPin size={24} />}>
            <p className="contact-card-detail">
              {address?.street} {address?.houseNumber}
            </p>
            <p className="contact-card-detail">
              {address?.zip} {address?.city}
            </p>
            <p className="contact-card-note">
              Gut erreichbar mit Auto und ÖPNV
            </p>
          </ContactCard>
          <ContactCard title="Öffnungszeiten" icon={<FiClock size={24} />}>
            <div className="contact-card-hours">
              <div className="contact-card-hour-row">
                <span>Mo–Fr:</span>
                <span>09:00–18:00</span>
              </div>
              <div className="contact-card-hour-row">
                <span>Sa:</span>
                <span>09:00–13:00</span>
              </div>
              <div className="contact-card-hour-row">
                <span>So:</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </ContactCard>
        </div>
      </section>

      {/* Karte */}
      <section className="map-section" aria-labelledby="map-heading">
        <h2 id="map-heading">Unser Standort</h2>
        <GoogleMap
          latitude={address?.latitude ?? 0}
          longitude={address?.longitude ?? 0}
          zoom={15}
          title={name}
          showDirections
          addressText={`${address?.street ?? ""} ${
            address?.houseNumber ?? ""
          }, ${address?.zip ?? ""} ${address?.city ?? ""}`.trim()}
        />
      </section>

      {/* Kontaktformular */}
      <section className="contact-form-section" aria-labelledby="form-heading">
        <h2 id="form-heading">Nachricht senden</h2>
        <p>Haben Sie eine spezielle Frage? Senden Sie uns eine Nachricht!</p>

        <form className="contact-form" noValidate>
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

          <button type="submit" className="btn btn-primary">
            Nachricht senden
          </button>
        </form>
      </section>
    </Page>
  );
};
