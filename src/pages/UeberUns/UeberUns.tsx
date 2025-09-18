import type { FunctionComponent } from "react";
import { FiCheck, FiStar, FiUser, FiPlus } from "react-icons/fi";
import "./UeberUns.css";
import type { Company } from "../../types";
import { Page } from "../../layout";
import { InfoCard } from "../../components";

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
            <InfoCard
              variant="stat"
              title={<span>20+</span>}
              subtitle="Jahre Erfahrung"
            />
            <InfoCard
              variant="stat"
              title={<span>50.000+</span>}
              subtitle="Prüfungen durchgeführt"
            />
            <InfoCard
              variant="stat"
              title={<span>98%</span>}
              subtitle="Kundenzufriedenheit"
            />
          </div>
        </div>
      </div>

      {/* Unsere Werte */}
      <div className="values-section">
        <h2>Unsere Werte</h2>
        <div className="values-grid">
          <InfoCard icon={<FiCheck size={24} />} title="Zuverlässigkeit">
            <p>
              Wir stehen für höchste Qualität und Zuverlässigkeit. Jede Prüfung
              wird mit der gleichen Sorgfalt und nach den aktuellsten Standards
              durchgeführt.
            </p>
          </InfoCard>
          <InfoCard icon={<FiStar size={24} />} title="Transparenz">
            <p>
              Transparente Preise ohne versteckte Kosten. Wir erklären Ihnen
              jeden Schritt der Prüfung und zeigen Ihnen genau, was geprüft
              wird.
            </p>
          </InfoCard>
          <InfoCard icon={<FiUser size={24} />} title="Kundenservice">
            <p>
              Ihr Wohlbefinden steht an erster Stelle. Wir nehmen uns Zeit für
              Sie und beantworten gerne alle Ihre Fragen zur Fahrzeugprüfung.
            </p>
          </InfoCard>
          <InfoCard icon={<FiPlus size={24} />} title="Innovation">
            <p>
              Wir setzen auf moderne Technologie und kontinuierliche
              Weiterbildung, um Ihnen den bestmöglichen Service zu bieten.
            </p>
          </InfoCard>
        </div>
      </div>

      {/* Unser Team */}
      <div className="team-section">
        <h2>Unser Team</h2>
        <div className="team-grid">
          <InfoCard
            align="center"
            icon={<FiUser size={40} />}
            title="Tugrul C."
          >
            <p className="member-role">KFZ Prüfingenieur</p>
            <p className="member-description">
              Spezialisiert auf Nutzfahrzeuge und Anhänger. Über 5 Jahre
              Erfahrung in der Prüfung. Exzellenter Service.
            </p>
          </InfoCard>
          <InfoCard align="center" icon={<FiUser size={40} />} title="Cihat K.">
            <p className="member-role">KFZ Prüfingenieur</p>
            <p className="member-description">
              Spezialisiert auf moderne Fahrzeugtechnologien und
              Elektrofahrzeuge. Über 5 Jahre Erfahrung in der Prüfung.
            </p>
          </InfoCard>
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
            <InfoCard
              variant="stat"
              accent="green"
              title={<span>-40%</span>}
              subtitle="CO2-Emissionen"
            />
            <InfoCard
              variant="stat"
              accent="blue"
              title={<span>100%</span>}
              subtitle="Digital"
            />
            <InfoCard
              variant="stat"
              accent="green"
              title={<span>95%</span>}
              subtitle="Recycling"
            />
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
          <button className="btn btn-primary">Jetzt vorbeikommen</button>
          <button className="btn btn-secondary">Kontakt aufnehmen</button>
        </div>
      </div>
    </Page>
  );
};
