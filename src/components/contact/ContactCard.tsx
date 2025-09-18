import type { FunctionComponent, ReactNode, MouseEventHandler } from "react";
import "./ContactCard.css";

type ContactCardProps = {
  title: string;
  icon: ReactNode;
  detail?: ReactNode;
  note?: ReactNode;
  children?: ReactNode;
};

export const ContactCard: FunctionComponent<ContactCardProps> = ({
  title,
  icon,
  detail,
  note,
  children,
}) => {
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.removeProperty("--x");
    e.currentTarget.style.removeProperty("--y");
  };

  return (
    <div
      className="contact-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="contact-card-header">
        <span className="contact-card-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="contact-card-body">
        {children ? (
          children
        ) : (
          <>
            {detail ? <p className="contact-card-detail">{detail}</p> : null}
            {note ? <p className="contact-card-note">{note}</p> : null}
          </>
        )}
      </div>
    </div>
  );
};
