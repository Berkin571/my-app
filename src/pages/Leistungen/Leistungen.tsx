import type { FunctionComponent } from "react";
import type { Company } from "../../types";
import {
  FiTool,
  FiStar,
  FiTrendingUp,
  FiCheck,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import "./Leistungen.css";
import { Page } from "../../layout";

export const Leistungen: FunctionComponent<Partial<Company>> = ({
  phone,
  email,
  address,
}) => {
  // Button action functions
  const handleComeNow = () => {
    // Scroll to top and show a message about coming without appointment
    window.scrollTo({ top: 0, behavior: "smooth" });
    alert("Kommen Sie einfach vorbei! Keine Terminvereinbarung nötig.");
  };

  const handleViewPrices = () => {
    // Scroll to services section to show prices
    const servicesSection = document.querySelector(".services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCall = () => {
    if (phone) {
      window.open(`tel:${phone}`, "_self");
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Anfrage zu Leistungen");
    const body = encodeURIComponent(
      "Guten Tag,\n\nich interessiere mich für Ihre Leistungen.\n\nMit freundlichen Grüßen"
    );
    if (email) {
      window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_self");
    }
  };

  const handleGetDirections = () => {
    // Open Google Maps with directions using company coordinates or address
    let destination = "";
    if (address?.latitude && address?.longitude) {
      destination = `${address.latitude},${address.longitude}`;
    } else if (address?.street && address?.city) {
      const addrString = `${address.street} ${address.houseNumber ?? ""}, ${
        address.zip ?? ""
      } ${address.city}`.trim();
      destination = encodeURIComponent(addrString);
    }
    if (destination) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
      window.open(url, "_blank");
    }
  };

  return (
    <Page
      title="Unsere Leistungen"
      subtitle="Professionelle Fahrzeugprüfungen und Prüfplaketten-Vergabe"
    >
      {/* Hauptleistungen */}
      <div className="services-section">
        <h2>Hauptleistungen</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FiTool size={48} />
            </div>
            <h3>Hauptuntersuchung (HU)</h3>
            <p className="service-description">
              Vollständige technische Überprüfung Ihres Fahrzeugs gemäß den
              gesetzlichen Vorgaben.
            </p>
            <div className="service-details">
              <div className="service-detail">
                <span className="detail-label">Dauer:</span>
                <span className="detail-value">30-45 Minuten</span>
              </div>
              <div className="service-detail">
                <span className="detail-label">Gültigkeit:</span>
                <span className="detail-value">2 Jahre (Pkw)</span>
              </div>
            </div>
            <ul className="service-features">
              <li>✓ Bremsenprüfung</li>
              <li>✓ Beleuchtungsprüfung</li>
              <li>✓ Achsen und Räder</li>
              <li>✓ Karosserie und Fahrwerk</li>
              <li>✓ Motormanagement</li>
              <li>✓ Prüfplakette</li>
            </ul>
            <div className="service-actions">
              <button className="btn btn-danger btn-small" onClick={handleCall}>
                Anrufen
              </button>
              <button
                className="btn btn-secondary btn-small"
                onClick={handleEmail}
              >
                Anfrage
              </button>
            </div>
          </div>

          <div className="service-card featured">
            <div className="service-icon">
              <FiStar size={48} />
            </div>
            <h3>Haupt- + Abgasuntersuchung</h3>
            <p className="service-description">
              Kombinierte Prüfung für maximale Sicherheit und
              Umweltverträglichkeit.
            </p>
            <div className="service-details">
              <div className="service-detail">
                <span className="detail-label-red">Dauer:</span>
                <span className="detail-value">45-60 Minuten</span>
              </div>
              <div className="service-detail">
                <span className="detail-label-red">Gültigkeit:</span>
                <span className="detail-value">2 Jahre (Pkw)</span>
              </div>
            </div>
            <ul className="service-features">
              <li>✓ Alle HU-Leistungen</li>
              <li>✓ Abgaswerte prüfen</li>
              <li>✓ Lambda-Sonde</li>
              <li>✓ Katalysator</li>
              <li>✓ Abgasreinigung</li>
              <li>✓ Prüfplakette</li>
            </ul>
            <div className="service-actions">
              <button className="btn btn-danger btn-small" onClick={handleCall}>
                Anrufen
              </button>
              <button
                className="btn btn-secondary btn-small"
                onClick={handleEmail}
              >
                Anfrage
              </button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FiTrendingUp size={48} />
            </div>
            <h3>Abgasuntersuchung (AU)</h3>
            <p className="service-description">
              Überprüfung der Abgaswerte und Umweltverträglichkeit Ihres
              Fahrzeugs.
            </p>
            <div className="service-details">
              <div className="service-detail">
                <span className="detail-label">Dauer:</span>
                <span className="detail-value">15-20 Minuten</span>
              </div>
              <div className="service-detail">
                <span className="detail-label">Gültigkeit:</span>
                <span className="detail-value">1 Jahr</span>
              </div>
            </div>
            <ul className="service-features">
              <li>✓ Abgaswerte messen</li>
              <li>✓ Lambda-Sonde prüfen</li>
              <li>✓ Katalysator testen</li>
              <li>✓ Abgasreinigung</li>
              <li>✓ Prüfbericht</li>
            </ul>
            <div className="service-actions">
              <button className="btn btn-danger btn-small" onClick={handleCall}>
                Anrufen
              </button>
              <button
                className="btn btn-secondary btn-small"
                onClick={handleEmail}
              >
                Anfrage
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Zusatzleistungen */}
      <div className="additional-services-section">
        <h2>Zusatzleistungen</h2>
        <div className="additional-services-grid">
          <div className="additional-service-card">
            <div className="additional-service-icon">
              <FiCheck size={32} />
            </div>
            <h3>Nachprüfung</h3>
            <p>Erneute Prüfung nach Mängelbehebung</p>
            <button className="btn btn-danger btn-small" onClick={handleCall}>
              Buchen
            </button>
          </div>

          <div className="additional-service-card">
            <div className="additional-service-icon">
              <FiTool size={32} />
            </div>
            <h3>Prüfbericht</h3>
            <p>Detaillierter Prüfbericht mit Fotos</p>
            <button className="btn btn-danger btn-small" onClick={handleCall}>
              Bestellen
            </button>
          </div>

          <div className="additional-service-card">
            <div className="additional-service-icon">
              <FiUser size={32} />
            </div>
            <h3>Beratung</h3>
            <p>Technische Beratung zu Mängeln</p>
            <span className="price">Kostenlos</span>
            <button className="btn btn-danger btn-small" onClick={handleCall}>
              Beratung
            </button>
          </div>

          <div className="additional-service-card">
            <div className="additional-service-icon">
              <FiTrendingUp size={32} />
            </div>
            <h3>Express-Service</h3>
            <p>Prüfung innerhalb von 15 Minuten</p>
            <button className="btn btn-danger btn-small" onClick={handleCall}>
              Express
            </button>
          </div>
        </div>
      </div>

      {/* Fahrzeugtypen */}
      <div className="vehicle-types-section">
        <h2>Für alle Fahrzeugtypen</h2>
        <div className="vehicle-types-grid">
          <div className="vehicle-type-card">
            <div className="vehicle-type-icon">
              <FiTruck size={40} />
            </div>
            <h3>Pkw</h3>
            <p>Personenkraftwagen aller Klassen</p>
          </div>

          <div className="vehicle-type-card">
            <div className="vehicle-type-icon">
              <FiTruck size={40} />
            </div>
            <h3>Lkw</h3>
            <p>Lastkraftwagen und Transporter</p>
          </div>

          <div className="vehicle-type-card">
            <div className="vehicle-type-icon">
              <FiTruck size={40} />
            </div>
            <h3>Busse</h3>
            <p>Busse und Kleinbusse</p>
          </div>

          <div className="vehicle-type-card">
            <div className="vehicle-type-icon">
              <FiTruck size={40} />
            </div>
            <h3>Anhänger</h3>
            <p>Anhänger und Wohnwagen</p>
          </div>
        </div>
        <div className="vehicle-types-cta">
          <button
            className="btn btn-primary btn-large"
            onClick={handleGetDirections}
          >
            Standort finden
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="leistungen-cta">
        <h2>Fahrzeug zur Prüfung bringen?</h2>
        <p>Kommen Sie einfach vorbei - ohne Termin!</p>
        <div className="cta-buttons">
          <button className="btn btn-primary btn-large" onClick={handleComeNow}>
            Jetzt vorbeikommen
          </button>
          <button className="btn btn-secondary" onClick={handleViewPrices}>
            Preise ansehen
          </button>
        </div>
      </div>
    </Page>
  );
};
