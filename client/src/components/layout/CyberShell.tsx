import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Github, Linkedin, Menu, Moon, Sparkles, X } from "lucide-react";
import { useVault } from "@/contexts/VaultContext";

interface CyberShellProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/", label: "Ana sayfa" },
  { path: "/operations", label: "Projeler" },
  { path: "/arsenal", label: "Yetenekler" },
  { path: "/intelligence", label: "Yazılar" },
  { path: "/doctrine", label: "Hakkımda" },
];

export const CyberShell: React.FC<CyberShellProps> = ({ children }) => {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSecureMode, toggleSecureMode } = useVault();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="site-shell min-h-screen bg-[#0b0d0f] text-[#f3f5f4] selection:bg-[#b9f36b] selection:text-[#0b0d0f]">
      <div className="site-glow site-glow-one" />
      <div className="site-glow site-glow-two" />

      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="brand" aria-label="Bahattin Yunus ana sayfa">
            <span className="brand-mark"><Sparkles size={16} strokeWidth={2.5} /></span>
            <span>
              <strong>Bahattin Yunus</strong>
              <small>Yazılım mühendisi adayı · AI & sistemler</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Ana navigasyon">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${location === item.path ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className={`mode-toggle ${isSecureMode ? "is-on" : ""}`}
              onClick={toggleSecureMode}
              aria-label="Odak modunu değiştir"
              title="Odak modunu değiştir"
            >
              <Moon size={15} />
              <span>{isSecureMode ? "Odak açık" : "Odak modu"}</span>
            </button>
            <Link href="/comms" className="header-contact">
              İletişime geç <ArrowUpRight size={15} />
            </Link>
            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menüyü aç/kapat"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`mobile-nav-link ${location === item.path ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/comms" className="mobile-nav-link mobile-nav-cta">İletişime geç <ArrowUpRight size={15} /></Link>
          </div>
        )}
      </header>

      <main className="site-main">
        <div className="site-container">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="site-container site-footer-inner">
          <p>© {new Date().getFullYear()} Bahattin Yunus Çetin. Merakla, disiplinle, birlikte.</p>
          <div className="footer-links">
            <a href="https://github.com/bahattinyunus" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
            <a href="https://www.linkedin.com/in/bahattinyunus" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
