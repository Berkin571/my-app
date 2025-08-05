import type { FunctionComponent } from "react";
import { useState } from "react";
import "./FAQ.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const FAQ: FunctionComponent = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("alle");

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Wie lange dauert eine Hauptuntersuchung?",
      answer:
        "Eine Hauptuntersuchung dauert in der Regel 30-45 Minuten. Bei einer Kombination aus Haupt- und Abgasuntersuchung rechnen Sie mit 45-60 Minuten. Die genaue Dauer hängt vom Zustand Ihres Fahrzeugs ab.",
      category: "allgemein",
    },
    {
      id: 2,
      question: "Kann ich ohne Termin kommen?",
      answer:
        "Ja, Sie können jederzeit ohne Termin vorbeikommen. Wir prüfen Ihr Fahrzeug sofort, wenn wir Kapazität haben. In der Regel müssen Sie nur wenige Minuten warten.",
      category: "allgemein",
    },
    {
      id: 3,
      question: "Was passiert, wenn mein Fahrzeug nicht besteht?",
      answer:
        "Wir erklären Ihnen genau, welche Mängel behoben werden müssen. Sie erhalten einen detaillierten Prüfbericht mit allen festgestellten Mängeln. Nach der Reparatur können Sie zur Nachprüfung wiederkommen.",
      category: "pruefung",
    },
    {
      id: 4,
      question: "Welche Zahlungsarten akzeptieren Sie?",
      answer:
        "Wir akzeptieren Bargeld, EC-Karte und alle gängigen Kreditkarten (Visa, Mastercard, American Express). Rechnung ist ebenfalls möglich. Die Bezahlung erfolgt nach der Prüfung.",
      category: "preise",
    },
    {
      id: 5,
      question: "Was muss ich zur Prüfung mitbringen?",
      answer:
        "Sie benötigen: Fahrzeugschein (Zulassungsbescheinigung Teil I), Personalausweis oder Reisepass des Fahrzeughalters und falls vorhanden die letzte gültige Hauptuntersuchung.",
      category: "allgemein",
    },
    {
      id: 6,
      question: "Wie lange ist eine Hauptuntersuchung gültig?",
      answer:
        "Bei Personenkraftwagen ist die Hauptuntersuchung 2 Jahre gültig. Bei Fahrzeugen, die älter als 3 Jahre sind, ist sie 1 Jahr gültig. Die Abgasuntersuchung ist 1 Jahr gültig.",
      category: "pruefung",
    },
    {
      id: 7,
      question: "Können Sie auch Lkw und Busse prüfen?",
      answer:
        "Ja, wir prüfen alle Fahrzeugtypen: Pkw, Lkw, Busse, Anhänger und Wohnwagen. Für größere Fahrzeuge empfehlen wir eine vorherige Anmeldung.",
      category: "allgemein",
    },
    {
      id: 8,
      question: "Was kostet eine Nachprüfung?",
      answer:
        "Eine Nachprüfung nach Mängelbehebung kostet 15,00€. Dies ist deutlich günstiger als eine komplette Neuprüfung.",
      category: "preise",
    },
    {
      id: 9,
      question: "Gibt es Express-Service?",
      answer:
        "Ja, wir bieten einen Express-Service an. Bei diesem Service wird Ihr Fahrzeug innerhalb von 15 Minuten geprüft. Der Aufpreis beträgt 10,00€.",
      category: "service",
    },
    {
      id: 10,
      question: "Können Sie auch am Samstag prüfen?",
      answer:
        "Ja, wir sind auch samstags von 09:00 bis 14:00 Uhr für Sie da. Sonntags sind wir geschlossen.",
      category: "oeffnungszeiten",
    },
    {
      id: 11,
      question: "Was wird bei einer Hauptuntersuchung geprüft?",
      answer:
        "Bei der Hauptuntersuchung werden folgende Bereiche geprüft: Bremsen, Beleuchtung, Achsen und Räder, Karosserie und Fahrwerk, Motormanagement, Abgasanlage und weitere sicherheitsrelevante Komponenten.",
      category: "pruefung",
    },
    {
      id: 12,
      question: "Können Sie auch Elektrofahrzeuge prüfen?",
      answer:
        "Ja, wir prüfen auch Elektrofahrzeuge. Die Hauptuntersuchung ist für alle Fahrzeugtypen gesetzlich vorgeschrieben, unabhängig vom Antrieb.",
      category: "allgemein",
    },
  ];

  const categories = [
    { id: "alle", name: "Alle Fragen" },
    { id: "allgemein", name: "Allgemein" },
    { id: "pruefung", name: "Prüfung" },
    { id: "preise", name: "Preise" },
    { id: "service", name: "Service" },
    { id: "oeffnungszeiten", name: "Öffnungszeiten" },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQ =
    activeCategory === "alle"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Häufige Fragen</h1>
        <p className="subtitle">
          Finden Sie schnell Antworten auf Ihre Fragen zur Fahrzeugprüfung
        </p>
      </div>

      {/* Kategorie-Filter */}
      <div className="faq-categories">
        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Liste */}
      <div className="faq-list">
        {filteredFAQ.map((item) => (
          <div key={item.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems.includes(item.id)}
            >
              <span className="question-text">{item.question}</span>
              <svg
                className={`faq-icon ${
                  openItems.includes(item.id) ? "rotated" : ""
                }`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div
              className={`faq-answer ${
                openItems.includes(item.id) ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Keine Ergebnisse */}
      {filteredFAQ.length === 0 && (
        <div className="no-results">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <h3>Keine Fragen gefunden</h3>
          <p>
            Für diese Kategorie haben wir noch keine Fragen. Wählen Sie eine
            andere Kategorie oder kontaktieren Sie uns direkt.
          </p>
        </div>
      )}

      {/* Kontakt Section */}
      <div className="faq-contact">
        <h2>Weitere Fragen?</h2>
        <p>
          Falls Sie Ihre Frage hier nicht finden, kontaktieren Sie uns gerne
          direkt.
        </p>
        <div className="contact-methods">
          <div className="contact-method">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div>
              <h3>Telefon</h3>
              <p>030 12345678</p>
            </div>
          </div>
          <div className="contact-method">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div>
              <h3>E-Mail</h3>
              <p>info@kfz-pruefstelle.de</p>
            </div>
          </div>
          <div className="contact-method">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <h3>Vorbeikommen</h3>
              <p>Kommen Sie einfach vorbei - ohne Termin!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
