import "./GoogleRating.css";

export type Review = {
  author: string;
  rating: number; // 1..5
  text: string;
  date?: string;
};

export interface GoogleRatingProps {
  title?: string;
  ratingSummary?: { rating: number; count: number };
  reviewsTop?: Review[];
  reviewsBottom?: Review[];
  speedTopSec?: number; // Animationsdauer obere Reihe
  speedBottomSec?: number; // Animationsdauer untere Reihe
  pauseOnHover?: boolean;
  googleUrl?: string; // optionaler Link zur Google-Seite
  variant?: "contained" | "bleed"; // "contained" = im Container bleiben, "bleed" = symmetrisch über beide Seiten
}

const DEFAULT_REVIEWS: Review[] = [
  { author: "Max M.", rating: 5, text: "Super schneller Service und sehr freundlich. Klare Empfehlung!", date: "Aug 2025" },
  { author: "Sarah M.", rating: 5, text: "Transparente Beratung – habe mich jederzeit gut aufgehoben gefühlt.", date: "Jul 2025" },
  { author: "Tobias M.", rating: 4, text: "Alles wie erwartet, unkompliziert und zuverlässig.", date: "Jun 2025" },
  { author: "Nina R.", rating: 5, text: "Top Preis-Leistung und mega schnelle Rückmeldung!", date: "Mai 2025" },
  { author: "Lukas K.", rating: 5, text: "Sehr kompetent, freundlich und professionell. Danke!", date: "Apr 2025" },
  { author: "Aylin D.", rating: 5, text: "Einfacher Prozess, klare Kommunikation – gerne wieder.", date: "Mär 2025" },
  { author: "Jonas M.", rating: 4, text: "Übersichtliche Schritte, schnelle Abwicklung.", date: "Feb 2025" },
  { author: "Kathi W.", rating: 5, text: "Hervorragender Support – meine Fragen wurden sofort geklärt.", date: "Jan 2025" },
];

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <div className="grm-stars" aria-label={`${value} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`grm-star ${i < full ? "filled" : ""}`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="grm-card" aria-label={`Bewertung von ${r.author}`}>
      <header className="grm-card-header">
        <div className="grm-avatar" aria-hidden>
          {r.author.charAt(0).toUpperCase()}
        </div>
        <div className="grm-meta">
          <div className="grm-author">{r.author}</div>
          <div className="grm-sub">{r.date ?? "Neue Bewertung"}</div>
        </div>
      </header>
      <div className="grm-rating">
        <Stars value={r.rating} />
        <span className="grm-rating-num">{r.rating.toFixed(1)}</span>
      </div>
      <p className="grm-text">{r.text}</p>
    </article>
  );
}

export function GlobalRating({ ratingSummary, googleUrl }: { ratingSummary: { rating: number; count: number }, googleUrl: string | undefined }) {
   return( 
    <div className="grm-badge" aria-label={`Durchschnitt ${ratingSummary.rating} von 5 bei ${ratingSummary.count} Rezensionen`}>
          <div className="grm-google-dot" aria-hidden />
          <strong>{ratingSummary.rating.toFixed(1)}</strong>
          <span className="grm-badge-stars">★★★★★</span>
          <span className="grm-divider" />
          
          {googleUrl && (
            <a className="grm-link" href={googleUrl} target="_blank" rel="noreferrer">Bei Google ansehen</a>
          )}
        </div>)
}

// <span className="grm-count">Basierend auf {ratingSummary.count.toLocaleString("de-DE")} Rezensionen</span>

export function GoogleRating({
  title = "Google Bewertungen",
  ratingSummary = { rating: 4.9, count: 1243 },
  reviewsTop = DEFAULT_REVIEWS,
  reviewsBottom = DEFAULT_REVIEWS.slice().reverse(),
  speedTopSec = 38,
  speedBottomSec = 46,
  pauseOnHover = true,
  googleUrl,
  variant = "contained",
}: GoogleRatingProps) {
  // Duplizieren für nahtloses Endlos-Scrolling
  const topLoop = [...reviewsTop, ...reviewsTop];
  const bottomLoop = [...reviewsBottom, ...reviewsBottom];

  const content = (
    <div className={`grm-inner ${pauseOnHover ? "hover-pause" : ""}`}>
      <div className="grm-head">
        <h2 className="grm-title">{title}</h2>
        <div className="grm-badge" aria-label={`Durchschnitt ${ratingSummary.rating} von 5 bei ${ratingSummary.count} Rezensionen`}>
          <div className="grm-google-dot" aria-hidden />
          <strong>{ratingSummary.rating.toFixed(1)}</strong>
          <span className="grm-badge-stars">★★★★★</span>
          <span className="grm-divider" />
          <span className="grm-count">Basierend auf {ratingSummary.count.toLocaleString("de-DE")} Rezensionen</span>
          {googleUrl && (
            <a className="grm-link" href={googleUrl} target="_blank" rel="noreferrer">Bei Google ansehen</a>
          )}
        </div>
      </div>

      <div className="grm-row" style={{ ["--grm-duration" as any]: `${speedTopSec}s` }}>
        <div className="grm-mask">
          <div className="grm-track" role="list">
            {topLoop.map((r, idx) => (
              <div role="listitem" key={`t-${idx}`}>
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grm-row reverse" style={{ ["--grm-duration" as any]: `${speedBottomSec}s` }}>
        <div className="grm-mask">
          <div className="grm-track" role="list">
            {bottomLoop.map((r, idx) => (
              <div role="listitem" key={`b-${idx}`}>
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`grm-section ${variant === "bleed" ? "grm-bleed" : ""}`} aria-label="Kundenstimmen von Google">
      {variant === "bleed" ? (
        content
      ) : (
        <div className="container">{content}</div>
      )}
    </section>
  );
}
