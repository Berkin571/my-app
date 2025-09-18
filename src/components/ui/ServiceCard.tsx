import type { FunctionComponent, ReactNode } from "react";
import "./ServiceCard.css";

type ServiceDetail = { label: string; value: string; emphasizeLabel?: boolean };

type ServiceCardProps = {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  details?: ServiceDetail[];
  features?: string[];
  actions?: ReactNode;
  featured?: boolean;
  badge?: string;
};

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  icon,
  title,
  description,
  details,
  features,
  actions,
  featured = false,
  badge,
}) => {
  return (
    <div
      className={featured ? "service-card-ui featured" : "service-card-ui"}
      data-badge={badge ?? undefined}
    >
      {icon ? <div className="service-card-icon">{icon}</div> : null}
      <h3 className="service-card-title">{title}</h3>
      {description ? (
        <div className="service-card-description">{description}</div>
      ) : null}

      {details && details.length > 0 ? (
        <div className="service-card-details">
          {details.map((d, idx) => (
            <div className="service-card-detail" key={idx}>
              <span
                className={
                  d.emphasizeLabel ? "detail-label-red" : "detail-label"
                }
              >
                {d.label}
              </span>
              <span className="detail-value">{d.value}</span>
            </div>
          ))}
        </div>
      ) : null}

      {features && features.length > 0 ? (
        <ul className="service-card-features">
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      ) : null}

      {actions ? <div className="service-card-actions">{actions}</div> : null}
    </div>
  );
};
