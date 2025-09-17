import type { FunctionComponent, ReactNode } from "react";
import { GlobalRating } from "../google-components";
import "./Hero.css";

export interface HeroProps {
  title: string;
  subtitle?: string;
  features?: Array<{ icon: ReactNode; label: string }>;
  ratingSummary?: { rating: number; count: number };
  googleUrl?: string;
  primaryCta?: { label: string; onClick: () => void };
}

export const Hero: FunctionComponent<HeroProps> = ({
  title,
  subtitle,
  features = [],
  ratingSummary,
  googleUrl,
  primaryCta,
}) => {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__inner">
        <div className="hero__heading">
          <h1 className="hero__title">{title}</h1>
          {ratingSummary && (
            <div className="hero__rating">
              <GlobalRating
                ratingSummary={ratingSummary}
                googleUrl={googleUrl}
              />
            </div>
          )}
        </div>

        {subtitle && <p className="hero__subtitle">{subtitle}</p>}

        {features.length > 0 && (
          <div className="hero__badges">
            {features.map((feature, index) => (
              <div key={index} className="hero__badge">
                <span className="hero__badge-icon">{feature.icon}</span>
                <span className="hero__badge-label">{feature.label}</span>
              </div>
            ))}
          </div>
        )}

        {primaryCta && (
          <div className="hero__actions">
            <button
              className="btn btn-danger btn-large"
              onClick={primaryCta.onClick}
            >
              {primaryCta.label}
            </button>
          </div>
        )}
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </section>
  );
};
