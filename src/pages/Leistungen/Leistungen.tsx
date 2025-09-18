import type { FunctionComponent } from "react";
import type { Company } from "../../types";
import { FiTool, FiStar, FiTrendingUp, FiCheck, FiUser } from "react-icons/fi";
import { FaCar, FaTruck, FaBus, FaCaravan } from "react-icons/fa";
import "./Leistungen.css";
import { Page } from "../../layout";
import { ServiceCard, InfoCard } from "../../components";

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
          <ServiceCard
            icon={<FiTool size={28} />}
            title="Hauptuntersuchung (HU)"
            description={
              <p>
                Vollständige technische Überprüfung Ihres Fahrzeugs gemäß den
                gesetzlichen Vorgaben.
              </p>
            }
            details={[
              { label: "Dauer:", value: "30-45 Minuten" },
              { label: "Gültigkeit:", value: "2 Jahre (Pkw)" },
            ]}
            features={[
              "✓ Bremsenprüfung",
              "✓ Beleuchtungsprüfung",
              "✓ Achsen und Räder",
              "✓ Karosserie und Fahrwerk",
              "✓ Motormanagement",
              "✓ Prüfplakette",
            ]}
            actions={
              <>
                <button
                  className="btn btn-danger btn-small"
                  onClick={handleCall}
                >
                  Anrufen
                </button>
                <button
                  className="btn btn-secondary btn-small"
                  onClick={handleEmail}
                >
                  Anfrage
                </button>
              </>
            }
          />

          <ServiceCard
            featured
            badge="Empfohlen"
            icon={<FiStar size={28} />}
            title="Haupt- + Abgasuntersuchung"
            description={
              <p>
                Kombinierte Prüfung für maximale Sicherheit und
                Umweltverträglichkeit.
              </p>
            }
            details={[
              { label: "Dauer:", value: "45-60 Minuten", emphasizeLabel: true },
              {
                label: "Gültigkeit:",
                value: "2 Jahre (Pkw)",
                emphasizeLabel: true,
              },
            ]}
            features={[
              "✓ Alle HU-Leistungen",
              "✓ Abgaswerte prüfen",
              "✓ Lambda-Sonde",
              "✓ Katalysator",
              "✓ Abgasreinigung",
              "✓ Prüfplakette",
            ]}
            actions={
              <>
                <button
                  className="btn btn-danger btn-small"
                  onClick={handleCall}
                >
                  Anrufen
                </button>
                <button
                  className="btn btn-secondary btn-small"
                  onClick={handleEmail}
                >
                  Anfrage
                </button>
              </>
            }
          />

          <ServiceCard
            icon={<FiTrendingUp size={28} />}
            title="Abgasuntersuchung (AU)"
            description={
              <p>
                Überprüfung der Abgaswerte und Umweltverträglichkeit Ihres
                Fahrzeugs.
              </p>
            }
            details={[
              { label: "Dauer:", value: "15-20 Minuten" },
              { label: "Gültigkeit:", value: "1 Jahr" },
            ]}
            features={[
              "✓ Abgaswerte messen",
              "✓ Lambda-Sonde prüfen",
              "✓ Katalysator testen",
              "✓ Abgasreinigung",
              "✓ Prüfbericht",
            ]}
            actions={
              <>
                <button
                  className="btn btn-danger btn-small"
                  onClick={handleCall}
                >
                  Anrufen
                </button>
                <button
                  className="btn btn-secondary btn-small"
                  onClick={handleEmail}
                >
                  Anfrage
                </button>
              </>
            }
          />
        </div>
      </div>

      {/* Zusatzleistungen */}
      <div className="additional-services-section">
        <h2>Zusatzleistungen</h2>
        <div className="additional-services-grid">
          <InfoCard size="sm" icon={<FiCheck size={20} />} title="Nachprüfung">
            <p>Erneute Prüfung nach Mängelbehebung</p>
            <div className="card-actions">
              <button className="btn btn-danger btn-small" onClick={handleCall}>
                Buchen
              </button>
            </div>
          </InfoCard>
          <InfoCard size="sm" icon={<FiTool size={20} />} title="Prüfbericht">
            <p>Detaillierter Prüfbericht mit Fotos</p>
            <div className="card-actions">
              <button className="btn btn-danger btn-small" onClick={handleCall}>
                Bestellen
              </button>
            </div>
          </InfoCard>
          <InfoCard size="sm" icon={<FiUser size={20} />} title="Beratung">
            <p>Technische Beratung zu Mängeln</p>
            <span className="price">Kostenlos</span>
            <div className="card-actions">
              <button className="btn btn-danger btn-small" onClick={handleCall}>
                Beratung
              </button>
            </div>
          </InfoCard>
          <InfoCard
            size="sm"
            icon={<FiTrendingUp size={20} />}
            title="Express-Service"
          >
            <p>Prüfung innerhalb von 15 Minuten</p>
            <div className="card-actions">
              <button className="btn btn-danger btn-small" onClick={handleCall}>
                Express
              </button>
            </div>
          </InfoCard>
        </div>
      </div>

      {/* Fahrzeugtypen */}
      <div className="vehicle-types-section">
        <h2>Für alle Fahrzeugtypen</h2>
        <div className="vehicle-types-grid">
          <InfoCard
            size="sm"
            accent="gray"
            icon={<FaCar size={20} color="gray" />}
            title="Pkw"
          >
            <p>Personenkraftwagen aller Klassen</p>
          </InfoCard>
          <InfoCard
            size="sm"
            accent="gray"
            icon={<FaTruck size={20} color="gray" />}
            title="Lkw"
          >
            <p>Lastkraftwagen und Transporter</p>
          </InfoCard>
          <InfoCard
            size="sm"
            accent="gray"
            icon={<FaBus size={20} color="gray" />}
            title="Busse"
          >
            <p>Busse und Kleinbusse</p>
          </InfoCard>
          <InfoCard
            size="sm"
            accent="gray"
            icon={<FaCaravan size={20} color="gray" />}
            title="Anhänger"
          >
            <p>Anhänger und Wohnwagen</p>
          </InfoCard>
        </div>
        <div className="vehicle-types-cta">
          <button className="btn btn-primary" onClick={handleGetDirections}>
            Standort finden
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="leistungen-cta">
        <h2>Fahrzeug zur Prüfung bringen?</h2>
        <p>Kommen Sie einfach vorbei - ohne Termin!</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={handleComeNow}>
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
