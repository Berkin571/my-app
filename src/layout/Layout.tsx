import type { FunctionComponent, ReactNode } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";
import type { Company } from "../types";

type Props = {
  company: Company;
  children: ReactNode;
};

/**
 * Layout-Komponente:
 * - mobile-first: eine Spalte mit togglebarer Sidebar
 * - ab Desktop-Breakpoint Grid mit Sidebar
 */
export const Layout: FunctionComponent<Props> = ({ children, company }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="layout">
      {/* Location Bar */}
      <div className="location-bar">
        <div className="location-content">
          <div className="location-left">
            <span className="location-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span className="location-text">
              {company.address.street} {company.address.houseNumber},{" "}
              {company.address.zip} {company.address.city}
            </span>
          </div>
          <div className="advertisement-container">
            <div className="advertisement-text">
              <span>✓ Professionelle Gutachten ✓ Schnelle Bearbeitung ✓ Faire Preise ✓ Zuverlässiger Service</span>
              <span>✓ Professionelle Gutachten ✓ Schnelle Bearbeitung ✓ Faire Preise ✓ Zuverlässiger Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <h1>{company.name}</h1>
          </div>
          <div className="header-right">
            <button
              className="user-menu"
              onClick={() => window.open(`tel:${company.phone}`, "_self")}
              title="Anrufen"
              aria-label="Anrufen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <h3>Navigation</h3>
          <button
            className="sidebar-close"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={isActive("/") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                Startseite
              </Link>
            </li>
            <li>
              <Link
                to="/leistungen"
                className={isActive("/leistungen") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={isActive("/faq") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className={isActive("/kontakt") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                to="/ueber-uns"
                className={isActive("/ueber-uns") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="m22 21-2-2"></path>
                  <path d="M16 16l4 4 4-4"></path>
                </svg>
                Über uns
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main-Content */}
      <main className="main">
        <div className="container">{children}</div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              © {new Date().getFullYear()} {company.name}. Alle Rechte
              vorbehalten.
            </p>
          </div>
          <div className="footer-right">
            <a href="/datenschutz">Datenschutz</a>
            <a href="/agb">AGB</a>
            <a href="/kontakt">Kontakt</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Nach oben scrollen"
        title="Nach oben scrollen"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="18,15 12,9 6,15"></polyline>
        </svg>
      </button>
    </div>
  );
};
