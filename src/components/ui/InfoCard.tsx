import type { FunctionComponent, ReactNode } from "react";
import "./InfoCard.css";

type InfoCardProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
  variant?: "default" | "stat";
  accent?: "red" | "green" | "blue" | "gray";
  align?: "left" | "center";
  size?: "sm" | "md";
};

export const InfoCard: FunctionComponent<InfoCardProps> = ({
  title,
  subtitle,
  icon,
  children,
  variant = "default",
  accent = "red",
  align = "center",
  size = "md",
}) => {
  const classes = [
    "info-card",
    variant === "stat" ? "info-card--stat" : "",
    accent ? `info-card--${accent}` : "",
    align === "left" ? "info-card--left" : "",
    size === "sm" ? "info-card--sm" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {(icon || title || subtitle) && (
        <div className="info-card-header">
          {icon ? <span className="info-card-icon">{icon}</span> : null}
          {title ? <h3 className="info-card-title">{title}</h3> : null}
          {subtitle ? <p className="info-card-subtitle">{subtitle}</p> : null}
        </div>
      )}
      {children ? <div className="info-card-body">{children}</div> : null}
    </div>
  );
};
