import type { FunctionComponent, ReactNode } from "react";
import "./Page.css";

type PageProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  maxWidth?: number;
};

export const Page: FunctionComponent<PageProps> = ({
  title,
  subtitle,
  children,
  maxWidth,
}) => {
  return (
    <section className="page">
      {(title || subtitle) && (
        <header className="page-header">
          {title && <h1 className="page-title">{title}</h1>}
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </header>
      )}
      <div
        className="page-content"
        style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      >
        {children}
      </div>
    </section>
  );
};
