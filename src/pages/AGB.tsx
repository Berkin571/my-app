import type { FunctionComponent } from "react";
import type { Company } from "../types";
import "./Legal.css";
import { Page } from "../layout";

export const AGB: FunctionComponent<Partial<Company>> = ({
  name,
  address,
  email,
  phone,
}) => {
  return (
    <Page
      title="Allgemeine Geschäftsbedingungen (AGB)"
      subtitle="Regelungen für Leistungen und Zusammenarbeit"
    >
      <div className="legal-layout">
        <div className="legal-content">
          <section className="legal-section" id="geltungsbereich">
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese AGB gelten für alle Verträge zwischen {name} (nachfolgend
              "Anbieter") und seinen Kundinnen und Kunden (nachfolgend "Kunde")
              über Dienstleistungen rund um Prüfungen, Begutachtungen und
              sonstige Services der Prüfstelle.
            </p>
          </section>

          <section className="legal-section" id="vertragsschluss">
            <h2>2. Vertragsschluss</h2>
            <p>
              Ein Vertrag kommt durch Annahme eines Angebots des Anbieters durch
              den Kunden oder durch Inanspruchnahme der Dienstleistung zustande.
              Angebote des Anbieters sind freibleibend, sofern sie nicht
              ausdrücklich als bindend bezeichnet sind.
            </p>
          </section>

          <section className="legal-section" id="leistungen">
            <h2>3. Leistungen</h2>
            <p>
              Der Umfang der Leistungen ergibt sich aus der jeweiligen
              Leistungsbeschreibung, dem individuellen Angebot oder der
              Auftragsbestätigung. Nebenabreden bedürfen der Textform.
            </p>
          </section>

          <section className="legal-section" id="mitwirkung">
            <h2>4. Mitwirkungspflichten des Kunden</h2>
            <p>
              Der Kunde stellt sicher, dass alle zur Durchführung des Auftrags
              erforderlichen Informationen und Unterlagen vollständig und
              rechtzeitig bereitgestellt werden. Fahrzeuge müssen in einem
              verkehrssicheren und vorführfähigen Zustand sein.
            </p>
          </section>

          <section className="legal-section" id="preise">
            <h2>5. Preise und Zahlung</h2>
            <p>
              Es gelten die zum Zeitpunkt der Beauftragung vereinbarten Preise.
              Alle Preise verstehen sich inklusive der jeweils gültigen
              gesetzlichen Umsatzsteuer, sofern nicht anders ausgewiesen.
              Zahlungen sind sofort nach Rechnungsstellung ohne Abzug fällig.
            </p>
          </section>

          <section className="legal-section" id="termine">
            <h2>6. Termine und Verzug</h2>
            <p>
              Vereinbarte Termine sind grundsätzlich verbindlich. Kann ein
              Termin aus Gründen, die der Kunde zu vertreten hat, nicht
              eingehalten werden, ist der Anbieter unverzüglich zu informieren.
              Gerät der Kunde in Zahlungsverzug, gelten die gesetzlichen
              Regelungen.
            </p>
          </section>

          <section className="legal-section" id="haftung">
            <h2>7. Haftung</h2>
            <p>
              Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung
              des Lebens, des Körpers oder der Gesundheit, die auf einer
              vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie
              für sonstige Schäden bei Vorsatz und grober Fahrlässigkeit. Bei
              einfacher Fahrlässigkeit haftet der Anbieter nur bei Verletzung
              einer wesentlichen Vertragspflicht (Kardinalpflicht) und der Höhe
              nach begrenzt auf den vorhersehbaren, typischerweise eintretenden
              Schaden.
            </p>
          </section>

          <section className="legal-section" id="gewaehrleistung">
            <h2>8. Gewährleistung</h2>
            <p>
              Es gelten die gesetzlichen Gewährleistungsrechte, soweit nicht
              ausdrücklich abweichend vereinbart.
            </p>
          </section>

          <section className="legal-section" id="urheberrechte">
            <h2>9. Urheberrechte</h2>
            <p>
              An durch den Anbieter erstellten Gutachten, Berichten, Fotos und
              sonstigen Unterlagen stehen dem Anbieter die urheberrechtlichen
              Nutzungsrechte zu. Eine Weitergabe an Dritte oder Veröffentlichung
              ist nur mit vorheriger Zustimmung zulässig, sofern nicht
              gesetzliche Pflichten entgegenstehen.
            </p>
          </section>

          <section className="legal-section" id="datenschutz">
            <h2>10. Datenschutz</h2>
            <p>
              Der Umgang mit personenbezogenen Daten richtet sich nach unserer
              Datenschutzerklärung, abrufbar unter der Seite Datenschutz.
            </p>
          </section>

          <section className="legal-section" id="schlussbestimmungen">
            <h2>11. Schlussbestimmungen</h2>
            <p>
              Erfüllungsort ist der Sitz des Anbieters: {address?.street}{" "}
              {address?.houseNumber}, {address?.zip} {address?.city}. Es gilt
              deutsches Recht. Sollte eine Bestimmung dieser AGB unwirksam sein,
              bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
            <p>
              Kontakt: {name} · {address?.street} {address?.houseNumber},{" "}
              {address?.zip} {address?.city} · Telefon: {phone} · E-Mail:{" "}
              {email}
            </p>
          </section>
        </div>

        <aside className="legal-toc">
          <h3>Inhaltsverzeichnis</h3>
          <ul>
            <li>
              <a href="#geltungsbereich">1. Geltungsbereich</a>
            </li>
            <li>
              <a href="#vertragsschluss">2. Vertragsschluss</a>
            </li>
            <li>
              <a href="#leistungen">3. Leistungen</a>
            </li>
            <li>
              <a href="#mitwirkung">4. Mitwirkungspflichten</a>
            </li>
            <li>
              <a href="#preise">5. Preise und Zahlung</a>
            </li>
            <li>
              <a href="#termine">6. Termine und Verzug</a>
            </li>
            <li>
              <a href="#haftung">7. Haftung</a>
            </li>
            <li>
              <a href="#gewaehrleistung">8. Gewährleistung</a>
            </li>
            <li>
              <a href="#urheberrechte">9. Urheberrechte</a>
            </li>
            <li>
              <a href="#datenschutz">10. Datenschutz</a>
            </li>
            <li>
              <a href="#schlussbestimmungen">11. Schlussbestimmungen</a>
            </li>
          </ul>
        </aside>
      </div>
    </Page>
  );
};
