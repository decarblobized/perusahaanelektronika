import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const footer = t.footer || {};
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="corporate-footer">
      <div className="footer-top-accent"></div>
      
      <div className="section-container footer-content-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <div className="footer-logo-badge">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="6" y1="18" x2="18" y2="18"></line>
              </svg>
            </div>
            <div>
              <span className="footer-brand-title">PT Nusantara Elektronika Mandiri</span>
              <span className="footer-brand-sub">Electronics Engineering & Manufacturing</span>
            </div>
          </div>
          <p className="footer-description">
            {footer.description || 'Pionir dalam desain sistem semikonduktor terintegrasi, fabrikasi sirkuit PCB presisi, dan otomasi industri.'}
          </p>

          <div className="footer-cert-tags">
            <span className="cert-pill">ISO 9001:2015</span>
            <span className="cert-pill">RoHS Compliant</span>
            <span className="cert-pill">IPC-A-610 Class 3</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">{footer.quickLinksTitle || 'Navigasi Cepat'}</h4>
          <ul className="footer-link-list">
            <li><a href="#home">{t.navbar?.home || 'Beranda'}</a></li>
            <li><a href="#about">{t.navbar?.about || 'Tentang Kami'}</a></li>
            <li><a href="#services">{t.navbar?.services || 'Layanan'}</a></li>
            <li><a href="#why-us">{t.navbar?.whyUs || 'Keunggulan'}</a></li>
            <li><a href="#contact">{t.navbar?.contact || 'Kontak & Konsultasi'}</a></li>
          </ul>
        </div>

        {/* Services Overview Column */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">{footer.servicesTitle || 'Layanan Utama'}</h4>
          <ul className="footer-link-list">
            <li><a href="#services">Desain & Fabrikasi PCB HDI</a></li>
            <li><a href="#services">Firmware & Mikrokontroler IoT</a></li>
            <li><a href="#services">Otomasi Industri & Panel PLC</a></li>
            <li><a href="#services">Uji Laboratorium EMC/EMI</a></li>
            <li><a href="#services">Hardware-in-the-Loop Testing</a></li>
          </ul>
        </div>

        {/* Lab Headquarters Column */}
        <div className="footer-contact-col">
          <h4 className="footer-heading">{footer.contactTitle || 'Fasilitas Pabrik & Lab'}</h4>
          <div className="footer-contact-items">
            <p className="footer-contact-line">
              <strong>Kawasan Industri Terpadu</strong><br />
              Blok E-12, Cikarang, Jawa Barat 17530
            </p>
            <p className="footer-contact-line">
              <strong>Email:</strong> engineering@nusantara-elektronika.co.id
            </p>
            <p className="footer-contact-line">
              <strong>Hotline:</strong> +62 (21) 8990-4521
            </p>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Deep Navy Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-flex">
          <p className="copyright-text">
            © {currentYear} PT Nusantara Elektronika Mandiri. {footer.rights || 'Hak Cipta Dilindungi Undang-Undang.'}
          </p>
          <p className="tech-badge-text">
            {footer.builtWith || 'Ditenagai oleh React JS & Vite.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

