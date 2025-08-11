import type { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiPlus,
  FiStar,
  FiCheck,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";
import { GoogleMap } from "../components";
import "./Home.css";
import type { Company } from "../types";

export const Home: FunctionComponent<Partial<Company>> = ({
  name,
  address,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "KFZ-Hauptuntersuchung ohne Termin",
      subtitle: "Kommen Sie einfach vorbei - wir prüfen Ihr Fahrzeug sofort!",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Jetzt vorbeikommen",
    },
    {
      id: 2,
      title: "Professionelle Fahrzeugprüfung",
      subtitle: "Erfahrene Prüfer, moderne Technik - für Ihre Sicherheit",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      cta: "Preise ansehen",
    },
    {
      id: 3,
      title: "Schnell & Zuverlässig",
      subtitle: "Hauptuntersuchung in nur 30-45 Minuten",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Mehr erfahren",
    },
    {
      id: 4,
      title: "Alle Fahrzeugtypen",
      subtitle: "Pkw, Lkw, Busse und Anhänger - wir prüfen alles",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Leistungen entdecken",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Button action functions
  const handleComeNow = () => {
    // Scroll to map section to show location
    const mapSection = document.querySelector(".map-section");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewPrices = () => {
    // Scroll to prices section
    const pricesSection = document.querySelector(".prices-section");
    if (pricesSection) {
      pricesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    // Scroll to why us section
    const whyUsSection = document.querySelector(".why-us-section");
    if (whyUsSection) {
      whyUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDiscoverServices = () => {
    // Navigate to services page
    window.location.href = "/leistungen";
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
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
      <div className="hero-section">
        <h1>KFZ-Hauptuntersuchung ohne Termin</h1>
        <p className="hero-subtitle">
          Kommen Sie einfach vorbei - wir prüfen Ihr Fahrzeug sofort!
        </p>
        <div className="hero-features">
          <div className="hero-feature">
            <FiClock size={24} />
            <span>Ohne Termin</span>
          </div>
          <div className="hero-feature">
            <FiPlus size={24} />
            <span>30-45 Minuten</span>
          </div>
          <div className="hero-feature">
            <FiStar size={24} />
            <span>Ab 50€</span>
          </div>
        </div>
        <div className="hero-cta">
          <button
            className="btn btn-danger btn-large"
            style={{ marginLeft: "1rem" }}
            onClick={handleComeNow}
          >
            Jetzt vorbeikommen
          </button>
        </div>
      </div>

      {/* Services Teaser Section */}
      <div className="home-services-section">
        <h2>Unsere Leistungen</h2>
        <div className="home-services-grid">
          <div className="home-service-card">
            <div className="service-icon">
              <FiTool size={40} />
            </div>
            <h3>Hauptuntersuchung (HU)</h3>
            <p>Vollständige technische Überprüfung gemäß gesetzlichen Vorgaben.</p>
          </div>

          <div className="home-service-card featured">
            <div className="service-icon">
              <FiStar size={40} />
            </div>
            <h3>Haupt- + Abgasuntersuchung</h3>
            <p>Kombinierte Prüfung für maximale Sicherheit und Umweltverträglichkeit.</p>
          </div>

          <div className="home-service-card">
            <div className="service-icon">
              <FiTrendingUp size={40} />
            </div>
            <h3>Abgasuntersuchung (AU)</h3>
            <p>Überprüfung der Abgaswerte und Umweltverträglichkeit Ihres Fahrzeugs.</p>
          </div>
        </div>
        <div className="home-services-cta">
          <button className="btn btn-primary" onClick={handleDiscoverServices}>
            Alle Leistungen ansehen
          </button>
        </div>
      </div>

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

      {/* Requirements Section */}
      <div className="requirements-section">
        <h2>Was Sie mitbringen müssen</h2>
        <div className="requirements-grid">
          <div className="requirement-item">
            <div className="requirement-icon">
              <FiCheck size={24} />
            </div>
            <div className="requirement-text">
              <h3>Fahrzeugschein</h3>
              <p>Zulassungsbescheinigung Teil I</p>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">
              <FiCheck size={24} />
            </div>
            <div className="requirement-text">
              <h3>Personalausweis</h3>
              <p>Des Fahrzeughalters</p>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">
              <FiCheck size={24} />
            </div>
            <div className="requirement-text">
              <h3>Gültige HU</h3>
              <p>Falls vorhanden</p>
            </div>
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

      {/* Hours Section */}
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
          <button
            className="btn btn-secondary btn-large"
            onClick={handleComeNow}
          >
            Jetzt vorbeikommen
          </button>
          <button className="btn btn-secondary" onClick={handleViewPrices}>
            Preise ansehen
          </button>
        </div>
      </div>
    </div>
  );
};
