import "./Leistungen.css";

// TYPES
export type ServiceCard = {
  title: string;
  description: string;
  legal?: string; // z. B. "§29 StVZO"
  imageSrc?: string; // Optional: Bild-URL/Import
};

export interface ServicesSectionsProps {
  prescribed?: ServiceCard[]; // Vorgeschriebene Fahrzeuguntersuchungen
  damage?: ServiceCard[]; // Schaden und Bewertung
}

// DEFAULT INHALTE (mit Gesetzen im ersten Block)
const DEFAULT_PRESCRIBED: ServiceCard[] = [
  {
    title: "Hauptuntersuchung (HU)",
    description:
      "Vollständige technische Überprüfung gemäß gesetzlichen Vorgaben.",
    legal: "Rechtsgrundlage: §29 StVZO (i. d. R. alle 2 Jahre)",
  },
  {
    title: "Kfz-Eintragung",
    description:
      "Einzelabnahme und Änderungsabnahme für Umbauten und Anbauteile.",
    legal: "Rechtsgrundlage: §19 Abs. 2 & 3 StVZO",
  },
  {
    title: "Vollgutachten",
    description:
      "Begutachtung nach StVZO, z. B. bei Import ohne EG-Typgenehmigung.",
    legal: "Rechtsgrundlage: §21 StVZO",
  },
];

const DEFAULT_DAMAGE: ServiceCard[] = [
  {
    title: "Unfallgutachten",
    description:
      "Schnelles, unabhängiges Gutachten für eine reibungslose Regulierung.",
  },
  {
    title: "Schadengutachten",
    description: "Dokumentation von Schäden – transparent und gerichtsfest.",
  },
  {
    title: "Gebrauchtwagenbewertung",
    description: "Objektive Wertermittlung beim Kauf oder Verkauf.",
  },
];

// KOMPONENTE
export function Leistungen({
  prescribed = DEFAULT_PRESCRIBED,
  damage = DEFAULT_DAMAGE,
}: ServicesSectionsProps) {
  return (
    <section className="svc-section container" aria-label="Unsere Leistungen">
      {/* Gruppe 1 */}
      <div className="svc-group">
        <div className="svc-header">
          <span className="svc-badge">Unsere Leistungen</span>
          <h2 className="svc-title">Vorgeschriebene Fahrzeuguntersuchungen</h2>
        </div>
        <div className="svc-grid">
          {prescribed.map((c, i) => (
            <article className="svc-card" key={`p-${i}`}>
              {c.imageSrc ? (
                <div className="svc-media">
                  <img
                    src={c.imageSrc}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="svc-media placeholder" aria-hidden>
                  <div className="svc-media-fallback" />
                </div>
              )}
              <div className="svc-body">
                <h3 className="svc-card-title">{c.title}</h3>
                <p className="svc-card-desc">{c.description}</p>
                {c.legal && <p className="svc-card-legal">{c.legal}</p>}
                <div className="svc-card-actions">
                  <a
                    className="btn btn-primary"
                    href="/leistungen"
                    aria-label={`${c.title} – mehr dazu`}
                  >
                    Mehr dazu →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Gruppe 2 */}
      <div className="svc-group">
        <div className="svc-header">
          <span className="svc-badge">Unsere Leistungen</span>
          <h2 className="svc-title">Schaden und Bewertung</h2>
        </div>
        <div className="svc-grid">
          {damage.map((c, i) => (
            <article className="svc-card" key={`d-${i}`}>
              {c.imageSrc ? (
                <div className="svc-media">
                  <img
                    src={c.imageSrc}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="svc-media placeholder" aria-hidden>
                  <div className="svc-media-fallback" />
                </div>
              )}
              <div className="svc-body">
                <h3 className="svc-card-title">{c.title}</h3>
                <p className="svc-card-desc">{c.description}</p>
                {c.legal && <p className="svc-card-legal">{c.legal}</p>}
                <div className="svc-card-actions">
                  <a
                    className="btn btn-primary"
                    href="/leistungen"
                    aria-label={`${c.title} – mehr dazu`}
                  >
                    Mehr dazu →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
