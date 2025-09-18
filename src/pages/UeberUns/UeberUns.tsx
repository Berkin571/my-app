import type { FunctionComponent } from "react";
import { FiCheck, FiStar, FiUser, FiPlus } from "react-icons/fi";
import "./UeberUns.css";
import type { Company } from "../../types";
import { Page } from "../../layout";

export const UeberUns: FunctionComponent<Partial<Company>> = ({
  name,
  address,
}) => {
  return (
    <Page
      title="Über uns"
      subtitle={`Ihre zuverlässige ${name} in ${address?.city} seit 2003`}
    >
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
              <FiCheck size={40} />
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
              <FiStar size={40} />
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
              <FiUser size={40} />
            </div>
            <h3>Kundenservice</h3>
            <p>
              Ihr Wohlbefinden steht an erster Stelle. Wir nehmen uns Zeit für
              Sie und beantworten gerne alle Ihre Fragen zur Fahrzeugprüfung.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FiPlus size={40} />
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
              <FiUser size={80} />
            </div>
            <h3>Tugrul C.</h3>
            <p className="member-role">KFZ Prüfingenieur</p>
            <p className="member-description">
              Spezialisiert auf Nutzfahrzeuge und Anhänger. Über 5 Jahre
              Erfahrung in der Prüfung. Exzellenter Service.
            </p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <FiUser size={80} />
            </div>
            <h3>Cihat K.</h3>
            <p className="member-role">KFZ Prüfingenieur</p>
            <p className="member-description">
              Spezialisiert auf moderne Fahrzeugtechnologien und
              Elektrofahrzeuge. Über 5 Jahre Erfahrung in der Prüfung.
            </p>
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
    </Page>
  );
};
