import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { t, language, changeLanguage, supportedLanguages, isRTL } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const langRef = useRef(null);

  // Efek bayangan & blur navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Tutup menu mobile ketika navigasi diklik
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '#home', label: t.navbar?.home || 'Beranda' },
    { href: '#about', label: t.navbar?.about || 'Tentang Kami' },
    { href: '#services', label: t.navbar?.services || 'Layanan' },
    { href: '#why-us', label: t.navbar?.whyUs || 'Keunggulan' },
    { href: '#contact', label: t.navbar?.contact || 'Kontak' }
  ];

  const currentLangObj = supportedLanguages.find(l => l.code === language) || supportedLanguages[0];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              <line x1="6" y1="18" x2="18" y2="18"></line>
              <line x1="6" y1="6" x2="9" y2="6"></line>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">{t.navbar?.brand || 'Nusantara Elektronika'}</span>
            <span className="brand-subtitle">{t.navbar?.brandSubtitle || 'Mandiri & Presisi'}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Controls: Language Selector, Dark/Light Toggle, CTA */}
        <div className="navbar-controls-desktop">
          {/* Dropdown Selector Bahasa */}
          <div className="lang-dropdown-wrapper" ref={langRef}>
            <button
              type="button"
              className="lang-dropdown-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-expanded={langDropdownOpen}
              aria-label={t.navbar?.selectLanguage || 'Pilih Bahasa'}
            >
              <span className="lang-flag">{currentLangObj.flag}</span>
              <span className="lang-code">{currentLangObj.shortName}</span>
              <svg className={`chevron-icon ${langDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {langDropdownOpen && (
              <div className={`lang-dropdown-menu ${isRTL ? 'rtl-dropdown' : ''}`}>
                {supportedLanguages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    className={`lang-option-btn ${item.code === language ? 'active-lang' : ''}`}
                    onClick={() => {
                      changeLanguage(item.code);
                      setLangDropdownOpen(false);
                    }}
                  >
                    <span className="lang-option-flag">{item.flag}</span>
                    <span className="lang-option-name">{item.name}</span>
                    {item.code === language && (
                      <span className="lang-check-icon">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Toggle Theme Dark/Light */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={t.navbar?.toggleTheme || 'Ganti Tema'}
            title={isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
          >
            {isDark ? (
              // Sun Icon for Dark Mode (click to switch to light)
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon Icon for Light Mode (click to switch to dark)
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Consultation CTA Button */}
          <a href="#contact" className="btn-primary-sm">
            {t.navbar?.consultationBtn || 'Konsultasi Proyek'}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="navbar-mobile-toggle">
          {/* Quick theme toggle for mobile view */}
          <button
            type="button"
            className="theme-toggle-btn mobile-quick-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={closeMobileMenu}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="mobile-brand-title">{t.navbar?.brand || 'Nusantara Elektronika'}</span>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={closeMobileMenu}
                aria-label="Tutup Menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-drawer-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-language-section">
                <span className="mobile-section-label">{t.navbar?.selectLanguage || 'Pilih Bahasa'}:</span>
                <div className="mobile-lang-grid">
                  {supportedLanguages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className={`mobile-lang-btn ${item.code === language ? 'active' : ''}`}
                      onClick={() => {
                        changeLanguage(item.code);
                        closeMobileMenu();
                      }}
                    >
                      <span>{item.flag}</span>
                      <span>{item.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="btn-primary w-full text-center"
                onClick={closeMobileMenu}
              >
                {t.navbar?.consultationBtn || 'Konsultasi Proyek'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

