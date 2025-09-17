import type { FunctionComponent, ReactNode } from "react";
import { FiClock, FiPlus, FiStar, FiCheck } from "react-icons/fi";
import "./WhyUs.css";

type WhyUsItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

interface WhyUsProps {
  title?: string;
  items?: WhyUsItem[];
}

const defaultItems: WhyUsItem[] = [
  {
    icon: <FiClock size={24} />,
    title: "Ohne Termin",
    description:
      "Keine Terminvereinbarung nötig. Kommen Sie einfach vorbei und lassen Sie Ihr Fahrzeug prüfen.",
  },
  {
    icon: <FiPlus size={24} />,
    title: "Schnell & Zuverlässig",
    description:
      "Professionelle Prüfung in nur 30-45 Minuten. Wir sind schnell, gründlich und zuverlässig.",
  },
  {
    icon: <FiStar size={24} />,
    title: "Günstige Preise",
    description:
      "Transparente Preise ohne versteckte Kosten. Abgasuntersuchung bereits ab 50€.",
  },
  {
    icon: <FiCheck size={24} />,
    title: "Erfahrene Prüfer",
    description:
      "Unsere Prüfer sind zertifiziert und haben jahrelange Erfahrung in der Fahrzeugprüfung.",
  },
];

export const WhyUs: FunctionComponent<WhyUsProps> = ({
  title = "Warum wir?",
  items = defaultItems,
}) => {
  return (
    <section className="whyus" aria-labelledby="whyus-heading">
      <div className="whyus__head">
        <h2 id="whyus-heading" className="whyus__title">
          {title}
        </h2>
        <p className="whyus__subtitle">
          Sicherheit, Tempo und Transparenz – dafür stehen wir jeden Tag.
        </p>
      </div>
      <div className="whyus__grid">
        {items.map((item, index) => (
          <div key={index} className="whyus__card">
            <div className="whyus__icon">{item.icon}</div>
            <h3 className="whyus__card-title">{item.title}</h3>
            <p className="whyus__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
