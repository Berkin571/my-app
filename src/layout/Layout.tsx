import type { FunctionComponent, ReactNode } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiMapPin, 
  FiMenu, 
  FiPhone, 
  FiX, 
  FiHome, 
  FiTool, 
  FiHelpCircle, 
  FiMail, 
  FiUser, 
  FiChevronUp 
} from "react-icons/fi";
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
              <FiMapPin size={16} />
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
              <FiMenu size={24} />
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
              <FiPhone size={24} />
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
            <FiX size={24} />
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
                <FiHome size={20} color='#000' />
                Startseite
              </Link>
            </li>
            <li>
              <Link
                to="/leistungen"
                className={isActive("/leistungen") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <FiTool size={20} />
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className={isActive("/kontakt") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <FiPhone size={20} />
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                to="/ueber-uns"
                className={isActive("/ueber-uns") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <FiUser size={20} />
                Über uns
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={isActive("/faq") ? "active" : ""}
                onClick={toggleSidebar}
              >
                <FiHelpCircle size={20} />
                FAQ
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
        <FiChevronUp size={24} />
      </button>
    </div>
  );
};
