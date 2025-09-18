import type { FunctionComponent } from "react";
import type { Company } from "../../types";
import { useState } from "react";
import {
  FiChevronDown,
  FiHelpCircle,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import "./Faq.css";
import { Page } from "../../layout";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const FAQ: FunctionComponent<Partial<Company>> = ({
  phone,
  email,
  address,
}) => {
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
    <Page
      title="Häufige Fragen"
      subtitle="Finden Sie schnell Antworten auf Ihre Fragen zur Fahrzeugprüfung"
    >
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
              <FiChevronDown
                className={`faq-icon ${
                  openItems.includes(item.id) ? "rotated" : ""
                }`}
                size={24}
              />
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
          <FiHelpCircle size={64} />
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
            <FiPhone size={24} />
            <div>
              <h3>Telefon</h3>
              <p>{phone}</p>
            </div>
          </div>
          <div className="contact-method">
            <FiMail size={24} />
            <div>
              <h3>E-Mail</h3>
              <p>{email}</p>
            </div>
          </div>
          <div className="contact-method">
            <FiMapPin size={24} />
            <div>
              <h3>Vorbeikommen</h3>
              <p>
                {address?.street} {address?.houseNumber}, {address?.zip}{" "}
                {address?.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
