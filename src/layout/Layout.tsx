import type { FunctionComponent, ReactNode } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiMenu,
  FiPhone,
  FiX,
  FiHome,
  FiTool,
  FiHelpCircle,
  FiUser,
  FiChevronUp,
} from "react-icons/fi";
import "./Layout.css";
import type { Company } from "../types";
import logo from "../assets/kues_logo.svg";

type Props = { company: Company; children: ReactNode };

export const Layout: FunctionComponent<Props> = ({ children, company }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const isActive = (path: string) => location.pathname === path;
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowScrollTop(y > 300);
      setHasScrolled(y > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`layout ${hasScrolled ? "banner-hidden" : ""}`}>
      <div className={`location-bar ${hasScrolled ? "scrolled" : ""}`}>
        <div className="location-content">
          <div className="location-left">
            <span aria-hidden="true">
              <FiMapPin size={16} />
            </span>
            <span className="location-text">
              {company.address.street} {company.address.houseNumber},{" "}
              {company.address.zip} {company.address.city}
            </span>
          </div>
          <div className="advertisement-container" aria-hidden="true">
            <div className="advertisement-text">
              <span>
                ✓ Professionelle Gutachten ✓ Schnelle Bearbeitung ✓ Faire Preise
                ✓ Zuverlässiger Service
              </span>
              <span>
                ✓ Professionelle Gutachten ✓ Schnelle Bearbeitung ✓ Faire Preise
                ✓ Zuverlässiger Service
              </span>
            </div>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Menü öffnen"
            >
              <FiMenu size={24} />
            </button>
            <img
              className="logo"
              src={logo}
              alt="KÜS"
              width={140}
              height={40}
              decoding="async"
              loading="eager"
              sizes="(max-width: 480px) 120px, (max-width: 1024px) 140px, 160px"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
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

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}

      <aside
        className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}
        aria-label="Navigation"
      >
        <div className="sidebar-header">
          <h3>Navigation</h3>
          <button
            className="sidebar-close"
            onClick={toggleSidebar}
            aria-label="Menü schließen"
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
                <FiHome size={20} />
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

      <main className="main">
        <div className="container">{children}</div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <p>
              © {new Date().getFullYear()} {company.name}. Alle Rechte
              vorbehalten.
            </p>
          </div>
          <div className="footer-right">
            <button type="button" onClick={() => navigate("/datenschutz")}>
              Datenschutz
            </button>
            <button type="button" onClick={() => navigate("/agb")}>
              AGB
            </button>
            <button type="button" onClick={() => navigate("/kontakt")}>
              Kontakt
            </button>
          </div>
        </div>
      </footer>

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
