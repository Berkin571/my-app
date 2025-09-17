import type { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiPlus,
  FiStar,
  FiCheck,
} from "react-icons/fi";
import { GoogleMap, Leistungen, Hero } from "../components";

import "./Home.css";
import type { Company } from "../types";

import pruefstelle from "../assets/kues-pruefstelle.jpeg";
import unfall from "../assets/unfall.jpg";
import kennzeichen from "../assets/kennzeichen.jpg";
import { GoogleRating } from "../components";

export const Home: FunctionComponent<Partial<Company>> = ({
  name,
  address,
  phone,
  email,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "KFZ-Hauptuntersuchung ohne Termin",
      subtitle: "Kommen Sie einfach vorbei - wir prüfen Ihr Fahrzeug sofort!",
      image: pruefstelle,
      cta: "Jetzt vorbeikommen",
    },
    {
      id: 2,
      title: "Professionelle Fahrzeugprüfung",
      subtitle: "Erfahrene Prüfer, moderne Technik - für Ihre Sicherheit",
      image: unfall,
      cta: "Preise ansehen",
    },
    {
      id: 3,
      title: "Schnell & Zuverlässig",
      subtitle: "Hauptuntersuchung in nur 30-45 Minuten",
      image: kennzeichen,
      cta: "Mehr erfahren",
    },
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Button action functions
  const handleComeNow = () => {
    const el = document.querySelector(".map-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };
  const handleViewPrices = () => {
    const el = document.querySelector(".prices-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };
  const handleLearnMore = () => {
    const el = document.querySelector(".why-us-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };
  const handleDiscoverServices = () => {
    window.location.href = "/leistungen";
  };
  const handleCall = () => {
    if (phone) window.open(`tel:${phone}`, "_self");
  };
  const handleEmail = () => {
    if (email) window.open(`mailto:${email}`, "_self");
  };

  return (
    <div className="home-page">
      {/* Image Slider */}
      <div className="slider-section">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${slide.image})`,
              }}
            >
              <div className="slider-content">
                <h1 className="slider-title">{slide.title}</h1>
                <p className="slider-subtitle">{slide.subtitle}</p>
                <button
                  className="slider-cta btn btn-danger btn-large"
                  onClick={() => {
                    if (slide.cta === "Jetzt vorbeikommen") handleComeNow();
                    else if (slide.cta === "Preise ansehen") handleViewPrices();
                    else if (slide.cta === "Mehr erfahren") handleLearnMore();
                    else if (slide.cta === "Leistungen entdecken")
                      handleDiscoverServices();
                  }}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button className="slider-nav slider-prev" onClick={prevSlide}>
            <FiChevronLeft size={24} />
          </button>
          <button className="slider-nav slider-next" onClick={nextSlide}>
            <FiChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        title="HU-Plakette fällig? Wir prüfen Ihr Fahrzeug sofort!"
        subtitle="Kommen Sie gerne ohne Termin vorbei!"
        ratingSummary={{ rating: 4.9, count: 1243 }}
        primaryCta={{ label: "Jetzt vorbeikommen", onClick: handleComeNow }}
        features={[
          { icon: <FiClock size={20} />, label: "Ohne Termin" },
          { icon: <FiPlus size={20} />, label: "30-45 Minuten" },
          { icon: <FiStar size={20} />, label: "Ab 50€" },
        ]}
      />

      <Leistungen
        prescribed={[
          {
            title: "Hauptuntersuchung (HU)",
            description:
              "Vollständige technische Überprüfung gemäß gesetzlichen Vorgaben.",
            legal: "Rechtsgrundlage: §29 StVZO (i. d. R. alle 2 Jahre)",
            imageSrc: pruefstelle,
          },
          {
            title: "Kfz-Eintragung",
            description:
              "Einzelabnahme und Änderungsabnahme für Umbauten und Anbauteile.",
            legal: "Rechtsgrundlage: §19 Abs. 2 & 3 StVZO",
            imageSrc: kennzeichen,
          },
          {
            title: "Vollgutachten",
            description:
              "Begutachtung nach StVZO, z. B. bei Import ohne EG-Typgenehmigung.",
            legal: "Rechtsgrundlage: §21 StVZO",
            imageSrc: pruefstelle,
          },
        ]}
        damage={[
          {
            title: "Unfallgutachten",
            description:
              "Schnelles, unabhängiges Gutachten für eine reibungslose Regulierung.",
            imageSrc: unfall,
          },
          {
            title: "Schadengutachten",
            description:
              "Dokumentation von Schäden – transparent und gerichtsfest.",
            imageSrc: unfall,
          },
          {
            title: "Gebrauchtwagenbewertung",
            description: "Objektive Wertermittlung beim Kauf oder Verkauf.",
            imageSrc: kennzeichen,
          },
        ]}
      />

      {/* Why Us Section */}
      <div className="why-us-section">
        <h2>Warum wir?</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <div className="why-us-icon">
              <FiClock size={32} />
            </div>
            <h3>Ohne Termin</h3>
            <p>
              Keine Terminvereinbarung nötig. Kommen Sie einfach vorbei und
              lassen Sie Ihr Fahrzeug prüfen.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">
              <FiPlus size={32} />
            </div>
            <h3>Schnell & Zuverlässig</h3>
            <p>
              Professionelle Prüfung in nur 30-45 Minuten. Wir sind schnell,
              gründlich und zuverlässig.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">
              <FiStar size={32} />
            </div>
            <h3>Günstige Preise</h3>
            <p>
              Transparente Preise ohne versteckte Kosten. Abgasuntersuchung
              bereits ab 50€.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">
              <FiCheck size={32} />
            </div>
            <h3>Erfahrene Prüfer</h3>
            <p>
              Unsere Prüfer sind zertifiziert und haben jahrelange Erfahrung in
              der Fahrzeugprüfung.
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Unser Standort</h2>
        <p className="subtitle">
          Finden Sie uns in {address?.city} – gut erreichbar mit dem Auto und
          öffentlichen Verkehrsmitteln
        </p>
        <GoogleMap
          latitude={address?.latitude ?? 0}
          longitude={address?.longitude ?? 0}
          zoom={15}
          title={name}
        />
      </div>

      {/* Öffnungszeiten */}
      <div className="hours-section">
        <div className="hours-content">
          <h2>Öffnungszeiten</h2>
          <div className="hours-grid">
            <div className="hours-item">
              <div className="hours-day">Montag - Freitag</div>
              <div className="hours-time">08:00 - 18:00</div>
            </div>
            <div className="hours-item">
              <div className="hours-day">Samstag</div>
              <div className="hours-time">09:00 - 14:00</div>
            </div>
            <div className="hours-item">
              <div className="hours-day">Sonntag</div>
              <div className="hours-time">Geschlossen</div>
            </div>
          </div>
          <div className="hours-note">
            <strong>Wichtig:</strong> Keine Terminvereinbarung nötig - kommen
            Sie einfach vorbei!
          </div>
        </div>
      </div>

      {/* Google Reviews (ENTKOPPELT, ohne <style>, im Container gehalten) */}
      <GoogleRating
        title="Das sagen unsere Kunden"
        ratingSummary={{ rating: 4.9, count: 1243 }}
        variant="contained" /* auf "bleed" stellen für symmetrischen Full-Width-Einsatz */
      />

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Häufige Fragen</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Wie lange dauert eine Hauptuntersuchung?</h3>
            <p>
              Eine Hauptuntersuchung dauert in der Regel 30-45 Minuten. Bei
              einer Kombination aus Haupt- und Abgasuntersuchung rechnen Sie mit
              45-60 Minuten.
            </p>
          </div>
          <div className="faq-item">
            <h3>Kann ich ohne Termin kommen?</h3>
            <p>
              Ja, Sie können jederzeit ohne Termin vorbeikommen. Wir prüfen Ihr
              Fahrzeug sofort, wenn wir Kapazität haben.
            </p>
          </div>
          <div className="faq-item">
            <h3>Was passiert, wenn mein Fahrzeug nicht besteht?</h3>
            <p>
              Wir erklären Ihnen genau, welche Mängel behoben werden müssen.
              Nach der Reparatur können Sie zur Nachprüfung wiederkommen.
            </p>
          </div>
          <div className="faq-item">
            <h3>Welche Zahlungsarten akzeptieren Sie?</h3>
            <p>
              Wir akzeptieren Bargeld, EC-Karte und alle gängigen Kreditkarten.
              Rechnung ist ebenfalls möglich.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Fahrzeug zur Prüfung bringen?</h2>
        <p>
          Keine Terminvereinbarung nötig! Kommen Sie einfach vorbei und lassen
          Sie Ihr Fahrzeug prüfen.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary btn-large" onClick={handleComeNow}>
            Jetzt vorbeikommen
          </button>
          <span className="cta-divider">oder</span>
          <div className="cta-buttons-2">
            <button className="btn btn-secondary" onClick={handleCall}>
              Anrufen
            </button>
            <button className="btn btn-secondary" onClick={handleEmail}>
              E-Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
