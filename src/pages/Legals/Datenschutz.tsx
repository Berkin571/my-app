import type { FunctionComponent } from "react";
import type { Company } from "../../types";
import "./Legal.css";
import { Page } from "../../layout";

export const Datenschutz: FunctionComponent<Partial<Company>> = ({
  name,
  address,
  email,
  phone,
}) => {
  const stand = new Date().toLocaleDateString("de-DE", {
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Page
      title="Datenschutzerklärung"
      subtitle="Informationen zur Verarbeitung Ihrer Daten auf dieser Website"
    >
      <div
        className="legal-meta"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Stand: {stand}
      </div>
      <div className="legal-layout">
        <div className="legal-content">
          <section className="legal-section" id="verantwortlicher">
            <h2>1. Verantwortlicher</h2>
            <p>
              {name} <br />
              {address?.street} {address?.houseNumber}, {address?.zip}{" "}
              {address?.city}, {address?.country}
              <br />
              Telefon: {phone} · E-Mail: {email}
            </p>
          </section>

          <section className="legal-section" id="logfiles">
            <h2>2. Hosting und Server-Logfiles</h2>
            <p>
              Beim Aufruf unserer Website werden automatisch Informationen durch
              den Browser Ihres Endgeräts an unseren Server übermittelt und
              temporär in sogenannten Server-Logfiles gespeichert. Erfasst
              werden u.a. die IP-Adresse, Datum und Uhrzeit des Zugriffs, URL
              der abgerufenen Seite, Referrer-URL, verwendeter Browser sowie das
              Betriebssystem. Die Verarbeitung erfolgt zur Sicherstellung eines
              reibungslosen Verbindungsaufbaus, zur Systemsicherheit sowie zur
              Auswertung für administrative Zwecke. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen
              Bereitstellung und Sicherheit der Website).
            </p>
          </section>

          <section className="legal-section" id="cookies">
            <h2>3. Cookies</h2>
            <p>
              Unsere Website setzt derzeit ausschließlich technisch notwendige
              Cookies ein, die für die Bereitstellung der Website erforderlich
              sind. Eine Reichweitenmessung oder ein Tracking zu
              Marketingzwecken findet nicht statt.
            </p>
          </section>

          <section className="legal-section" id="kontaktaufnahme">
            <h2>4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Telefon oder E-Mail kontaktieren oder das
              Kontaktformular nutzen, verarbeiten wir die von Ihnen mitgeteilten
              Daten (z.B. Name, Kontaktinformationen, Nachrichteninhalt) zur
              Bearbeitung Ihrer Anfrage und etwaiger Anschlussfragen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              bzw. vertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen). Die
              Daten werden gelöscht, sobald sie für die Zweckerreichung nicht
              mehr erforderlich sind und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section className="legal-section" id="google-maps">
            <h2>5. Einbindung von Google Maps</h2>
            <p>
              Zur visuellen Darstellung unseres Standorts binden wir den
              Kartendienst Google Maps ein. Anbieter ist Google Ireland Limited,
              Gordon House, Barrow Street, Dublin 4, Irland. Beim Aufruf der
              Karte werden Daten an Google übertragen (z.B. IP-Adresse, ggf.
              Standortdaten, Browser-Informationen). Dies kann eine Übermittlung
              an Server in den USA einschließen. Rechtsgrundlage ist Art. 6 Abs.
              1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden
              Darstellung unseres Standorts und an einer leichten
              Auffindbarkeit). Weitere Informationen finden Sie in der
              Datenschutzerklärung von Google unter
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer noopener"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          <section className="legal-section" id="rechte">
            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
              (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der
              Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO)
              sowie Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit.
              e oder f DSGVO beruhen (Art. 21 DSGVO). Sie haben zudem das Recht,
              erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft zu
              widerrufen (Art. 7 Abs. 3 DSGVO).
            </p>
          </section>

          <section className="legal-section" id="beschwerde">
            <h2>7. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren,
              insbesondere in dem Mitgliedstaat Ihres gewöhnlichen
              Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes (Art. 77 DSGVO).
            </p>
          </section>

          <section className="legal-section" id="sicherheit">
            <h2>8. Datensicherheit</h2>
            <p>
              Wir verwenden geeignete technische und organisatorische Maßnahmen,
              um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder
              unbefugten Zugriff zu schützen. Unsere Website nutzt
              TLS-Verschlüsselung (erkennbar an „https“ in der Adresszeile Ihres
              Browsers).
            </p>
          </section>

          <section className="legal-section" id="aenderungen">
            <h2>9. Änderung dieser Datenschutzerklärung</h2>
            <p>
              Wir passen diese Datenschutzerklärung an, sobald Änderungen an
              unserer Website oder an den rechtlichen Vorgaben dies erforderlich
              machen. Stand: {stand}
            </p>
          </section>
        </div>

        <aside className="legal-toc">
          <h3>Inhaltsverzeichnis</h3>
          <ul>
            <li>
              <a href="#verantwortlicher">1. Verantwortlicher</a>
            </li>
            <li>
              <a href="#logfiles">2. Hosting und Server-Logfiles</a>
            </li>
            <li>
              <a href="#cookies">3. Cookies</a>
            </li>
            <li>
              <a href="#kontaktaufnahme">4. Kontaktaufnahme</a>
            </li>
            <li>
              <a href="#google-maps">5. Google Maps</a>
            </li>
            <li>
              <a href="#rechte">6. Ihre Rechte</a>
            </li>
            <li>
              <a href="#beschwerde">7. Beschwerderecht</a>
            </li>
            <li>
              <a href="#sicherheit">8. Datensicherheit</a>
            </li>
            <li>
              <a href="#aenderungen">9. Änderungen</a>
            </li>
          </ul>
        </aside>
      </div>
    </Page>
  );
};
