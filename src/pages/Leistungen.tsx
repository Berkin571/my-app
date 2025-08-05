import type { FunctionComponent } from "react";
import "./Leistungen.css";

export const Leistungen: FunctionComponent = () => {
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
    // Open phone dialer
    window.open("tel:+49123456789", "_self");
  };

  const handleEmail = () => {
    // Open email client
    const subject = encodeURIComponent("Anfrage zu Leistungen");
    const body = encodeURIComponent(
      "Guten Tag,\n\nich interessiere mich für Ihre Leistungen.\n\nMit freundlichen Grüßen"
    );
    window.open(
      "mailto:info@example.com?subject=" + subject + "&body=" + body,
      "_self"
    );
  };

  const handleGetDirections = () => {
    // Open Google Maps with directions
    const url =
      "https://www.google.com/maps/dir/?api=1&destination=48.1351,11.5820";
    window.open(url, "_blank");
  };

  return (
    <div className="leistungen-page">
      <div className="leistungen-header">
        <h1>Unsere Leistungen</h1>
        <p className="subtitle">
          Professionelle Fahrzeugprüfungen und Prüfplaketten-Vergabe
        </p>
      </div>

      {/* Hauptleistungen */}
      <div className="services-section">
        <h2>Hauptleistungen</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
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
                <span className="detail-label">Preis:</span>
                <span className="detail-value">120€</span>
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
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3>Haupt- + Abgasuntersuchung</h3>
            <p className="service-description">
              Kombinierte Prüfung für maximale Sicherheit und
              Umweltverträglichkeit.
            </p>
            <div className="service-details">
              <div className="service-detail">
                <span className="detail-label">Dauer:</span>
                <span className="detail-value">45-60 Minuten</span>
              </div>
              <div className="service-detail">
                <span className="detail-label">Preis:</span>
                <span className="detail-value">180€</span>
              </div>
              <div className="service-detail">
                <span className="detail-label">Gültigkeit:</span>
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
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
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
                <span className="detail-label">Preis:</span>
                <span className="detail-value">50€</span>
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-2.4-.4-3.5-1.5S16 9 16 8s.4-2.5 1.5-3.5S20 3 21 3s2.4.4 3.5 1.5S26 7 26 8s-.4 2.5-1.5 3.5S22 12 21 12z"></path>
              </svg>
            </div>
            <h3>Nachprüfung</h3>
            <p>Erneute Prüfung nach Mängelbehebung</p>
            <span className="price">15,00€</span>
            <button className="btn btn-danger btn-small" onClick={handleCall}>
              Buchen
            </button>
          </div>

          <div className="additional-service-card">
            <div className="additional-service-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3>Prüfbericht</h3>
            <p>Detaillierter Prüfbericht mit Fotos</p>
            <span className="price">5,00€</span>
            <button className="btn btn-danger btn-small" onClick={handleCall}>
              Bestellen
            </button>
          </div>

          <div className="additional-service-card">
            <div className="additional-service-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="m22 21-2-2"></path>
                <path d="M16 16l4 4 4-4"></path>
              </svg>
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
            </div>
            <h3>Express-Service</h3>
            <p>Prüfung innerhalb von 15 Minuten</p>
            <span className="price">+10,00€</span>
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
              </svg>
            </div>
            <h3>Pkw</h3>
            <p>Personenkraftwagen aller Klassen</p>
          </div>

          <div className="vehicle-type-card">
            <div className="vehicle-type-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                <path d="M12 17v-6"></path>
              </svg>
            </div>
            <h3>Lkw</h3>
            <p>Lastkraftwagen und Transporter</p>
          </div>

          <div className="vehicle-type-card">
            <div className="vehicle-type-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
            <h3>Busse</h3>
            <p>Busse und Kleinbusse</p>
          </div>

          <div className="vehicle-type-card">
            <div className="vehicle-type-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                <path d="M12 17v-6"></path>
                <path d="M8 12h8"></path>
              </svg>
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
    </div>
  );
};
