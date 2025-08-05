import type { FunctionComponent } from "react";
import "./UeberUns.css";
import type { Company } from "../types";

export const UeberUns: FunctionComponent<Partial<Company>> = ({
  name,
  address,
}) => {
  return (
    <div className="ueber-uns-page">
      <div className="ueber-uns-header">
        <h1>Über uns</h1>
        <p className="subtitle">
          Ihre zuverlässige {name} in {address?.city} seit 2003
        </p>
      </div>

      {/* Unsere Geschichte */}
      <div className="story-section">
        <h2>Unsere Geschichte</h2>
        <div className="story-content">
          <div className="story-text">
            <p>
              Seit 2003 sind wir Ihre zuverlässige {name} in {address?.city}.
              Was als kleiner Familienbetrieb begann, hat sich zu einer der
              führenden Prüfstellen der Region entwickelt.
            </p>
            <p>
              Unser Ziel war und ist es, Fahrzeugprüfungen so einfach und
              kundenfreundlich wie möglich zu gestalten. Deshalb arbeiten wir
              ohne Termine - Sie kommen einfach vorbei und wir prüfen Ihr
              Fahrzeug sofort.
            </p>
            <p>
              Mit über 50.000 erfolgreichen Prüfungen und tausenden zufriedenen
              Kunden sind wir stolz darauf, einen wichtigen Beitrag zur
              Verkehrssicherheit zu leisten.
            </p>
          </div>
          <div className="story-stats">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Jahre Erfahrung</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50.000+</div>
              <div className="stat-label">Prüfungen durchgeführt</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Unsere Werte */}
      <div className="values-section">
        <h2>Unsere Werte</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-2.4-.4-3.5-1.5S16 9 16 8s.4-2.5 1.5-3.5S20 3 21 3s2.4.4 3.5 1.5S26 7 26 8s-.4 2.5-1.5 3.5S22 12 21 12z"></path>
              </svg>
            </div>
            <h3>Zuverlässigkeit</h3>
            <p>
              Wir stehen für höchste Qualität und Zuverlässigkeit. Jede Prüfung
              wird mit der gleichen Sorgfalt und nach den aktuellsten Standards
              durchgeführt.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3>Transparenz</h3>
            <p>
              Transparente Preise ohne versteckte Kosten. Wir erklären Ihnen
              jeden Schritt der Prüfung und zeigen Ihnen genau, was geprüft
              wird.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg
                width="40"
                height="40"
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
            <h3>Kundenservice</h3>
            <p>
              Ihr Wohlbefinden steht an erster Stelle. Wir nehmen uns Zeit für
              Sie und beantworten gerne alle Ihre Fragen zur Fahrzeugprüfung.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v20M2 12h20"></path>
              </svg>
            </div>
            <h3>Innovation</h3>
            <p>
              Wir setzen auf moderne Technologie und kontinuierliche
              Weiterbildung, um Ihnen den bestmöglichen Service zu bieten.
            </p>
          </div>
        </div>
      </div>

      {/* Unser Team */}
      <div className="team-section">
        <h2>Unser Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Michael Schmidt</h3>
            <p className="member-role">Geschäftsführer & Prüfer</p>
            <p className="member-description">
              Seit 2003 in der Fahrzeugprüfung tätig. Zertifizierter Prüfer mit
              über 20 Jahren Erfahrung.
            </p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Sarah Weber</h3>
            <p className="member-role">Prüferin</p>
            <p className="member-description">
              Spezialisiert auf moderne Fahrzeugtechnologien und
              Elektrofahrzeuge.
            </p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Thomas Müller</h3>
            <p className="member-role">Prüfer</p>
            <p className="member-description">
              Experte für Nutzfahrzeuge und Anhänger. Über 15 Jahre Erfahrung in
              der Prüfung.
            </p>
          </div>
        </div>
      </div>

      {/* Unsere Zertifizierungen */}
      <div className="certifications-section">
        <h2>Unsere Zertifizierungen</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="certification-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-2.4-.4-3.5-1.5S16 9 16 8s.4-2.5 1.5-3.5S20 3 21 3s2.4.4 3.5 1.5S26 7 26 8s-.4 2.5-1.5 3.5S22 12 21 12z"></path>
              </svg>
            </div>
            <h3>DEKRA Zertifizierung</h3>
            <p>Offiziell anerkannte Prüfstelle</p>
          </div>

          <div className="certification-card">
            <div className="certification-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-2.4-.4-3.5-1.5S16 9 16 8s.4-2.5 1.5-3.5S20 3 21 3s2.4.4 3.5 1.5S26 7 26 8s-.4 2.5-1.5 3.5S22 12 21 12z"></path>
              </svg>
            </div>
            <h3>TÜV Anerkennung</h3>
            <p>Qualitätsstandards erfüllt</p>
          </div>

          <div className="certification-card">
            <div className="certification-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-2.4-.4-3.5-1.5S16 9 16 8s.4-2.5 1.5-3.5S20 3 21 3s2.4.4 3.5 1.5S26 7 26 8s-.4 2.5-1.5 3.5S22 12 21 12z"></path>
              </svg>
            </div>
            <h3>ISO 9001</h3>
            <p>Qualitätsmanagement zertifiziert</p>
          </div>
        </div>
      </div>

      {/* Umwelt & Nachhaltigkeit */}
      <div className="environment-section">
        <h2>Umwelt & Nachhaltigkeit</h2>
        <div className="environment-content">
          <div className="environment-text">
            <p>
              Wir sind uns unserer Verantwortung für die Umwelt bewusst. Deshalb
              setzen wir auf:
            </p>
            <ul className="environment-list">
              <li>✓ Energieeffiziente Prüfgeräte</li>
              <li>✓ Digitale Dokumentation statt Papier</li>
              <li>✓ Umweltfreundliche Reinigungsmittel</li>
              <li>✓ Recycling aller Materialien</li>
              <li>✓ CO2-neutrale Geschäftsprozesse</li>
            </ul>
          </div>
          <div className="environment-stats">
            <div className="env-stat">
              <div className="env-stat-number">-40%</div>
              <div className="env-stat-label">CO2-Emissionen</div>
            </div>
            <div className="env-stat">
              <div className="env-stat-number">100%</div>
              <div className="env-stat-label">Digital</div>
            </div>
            <div className="env-stat">
              <div className="env-stat-number">95%</div>
              <div className="env-stat-label">Recycling</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ueber-uns-cta">
        <h2>Vertrauen Sie uns</h2>
        <p>
          Über 20 Jahre Erfahrung und tausende zufriedene Kunden sprechen für
          sich.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary btn-large">
            Jetzt vorbeikommen
          </button>
          <button className="btn btn-secondary">Kontakt aufnehmen</button>
        </div>
      </div>
    </div>
  );
};
