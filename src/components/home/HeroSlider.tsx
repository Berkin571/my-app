import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HeroSlider.css";

export type HeroSlide = {
  id: number | string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
};

interface HeroSliderProps {
  slides: HeroSlide[];
  autoMs?: number;
  onCtaClick?: (cta: string, slide: HeroSlide) => void;
}

export const HeroSlider: FunctionComponent<HeroSliderProps> = ({
  slides,
  autoMs = 5000,
  onCtaClick,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      autoMs
    );
    return () => clearInterval(timer);
  }, [slides.length, autoMs]);

  const goTo = (index: number) => setCurrent(index);
  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="hero-slider" aria-label="Highlights">
      <div className="hero-slider__viewport">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slider__slide ${
              index === current ? "is-active" : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${slide.image})`,
            }}
          >
            <div className="hero-slider__content">
              <h2 className="hero-slider__title">{slide.title}</h2>
              <p className="hero-slider__subtitle">{slide.subtitle}</p>
              <button
                className="btn btn-danger hero-slider__cta"
                onClick={() => onCtaClick?.(slide.cta, slide)}
              >
                {slide.cta}
              </button>
            </div>
          </div>
        ))}

        <button
          className="hero-slider__nav hero-slider__nav--prev"
          onClick={prev}
          aria-label="Vorheriger Slide"
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          className="hero-slider__nav hero-slider__nav--next"
          onClick={next}
          aria-label="Nächster Slide"
        >
          <FiChevronRight size={22} />
        </button>

        <div key={current} className="hero-slider__progress">
          <div className="hero-slider__progress-bar" />
        </div>

        <div className="hero-slider__dots" role="tablist" aria-label="Slides">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider__dot ${
                index === current ? "is-active" : ""
              }`}
              onClick={() => goTo(index)}
              aria-label={`Gehe zu Slide ${index + 1}`}
              aria-selected={index === current}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
