import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Services = () => {
  const { t } = useLanguage();
  const [activeServiceId, setActiveServiceId] = useState(null);

  const servicesData = t.services || {};
  const title = servicesData.title || 'Layanan & Portofolio Solusi';
  const subtitle = servicesData.subtitle || 'Layanan terintegrasi dari tahap ide konseptual hingga perakitan massal.';
  const items = Array.isArray(servicesData.items) ? servicesData.items : [];
  const modalCloseLabel = servicesData.modalClose || 'Tutup Detail';
  const modalKeyPointsTitle = servicesData.modalKeyPointsTitle || 'Poin Utama & Kapabilitas Teknis';
  const viewDetailsLabel = servicesData.viewDetails || 'Lihat Detail Spesifikasi';

  // Temukan item aktif berdasarkan ID yang dipilih
  const activeService = items.find(item => item.id === activeServiceId) || null;

  // Tutup modal menggunakan tombol keyboard ESC & kunci scroll body saat terbuka
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveServiceId(null);
      }
    };

    if (activeService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeService]);

  // Ikon SVG kontekstual untuk tiap kategori layanan
  const renderServiceIcon = (id) => {
    switch (id) {
      case 'pcb-engineering':
        return (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2"></rect>
            <path d="M7 2v4"></path>
            <path d="M17 2v4"></path>
            <path d="M2 7h4"></path>
            <path d="M2 17h4"></path>
            <path d="M7 22v-4"></path>
            <path d="M17 22v-4"></path>
            <path d="M22 7h-4"></path>
            <path d="M22 17h-4"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      case 'iot-embedded':
        return (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      case 'industrial-automation':
        return (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        );
      case 'reverse-eng-testing':
      default:
        return (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
          </svg>
        );
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">{title}</span>
          <h2 className="section-title">{subtitle}</h2>
          <div className="section-divider"></div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {items.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => setActiveServiceId(service.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveServiceId(service.id);
                }
              }}
              aria-label={`Buka detail layanan ${service.title}`}
            >
              <div className="service-card-top">
                <div className="service-icon-box">
                  {renderServiceIcon(service.id)}
                </div>
                <span className="service-id-badge">ID #{service.id.slice(0, 3).toUpperCase()}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDesc}</p>

              <div className="service-card-footer">
                <span className="service-more-link">
                  <span>{viewDetailsLabel}</span>
                  <svg className="link-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Modal Pop-Up Detail */}
        {activeService && (
          <div
            className="modal-backdrop"
            onClick={() => setActiveServiceId(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div className="modal-title-wrapper">
                  <div className="modal-icon-badge">
                    {renderServiceIcon(activeService.id)}
                  </div>
                  <div>
                    <span className="modal-kicker">SPESIFIKASI TEKNIS DETIL</span>
                    <h3 id="modal-title" className="modal-title">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveServiceId(null)}
                  aria-label={modalCloseLabel}
                  title={modalCloseLabel}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Modal Body: Deskripsi, Poin Utama, dan Outro */}
              <div className="modal-body">
                {/* Deskripsi Lengkap */}
                <div className="modal-section-block">
                  <p className="modal-full-desc">{activeService.fullDesc}</p>
                </div>

                {/* Poin Utama / Key Capabilities */}
                {Array.isArray(activeService.points) && activeService.points.length > 0 && (
                  <div className="modal-section-block">
                    <h4 className="modal-subheading">
                      <span className="subheading-accent">▍</span>
                      {modalKeyPointsTitle}
                    </h4>
                    <ul className="modal-points-list">
                      {activeService.points.map((point, pIdx) => (
                        <li key={pIdx} className="modal-point-item">
                          <span className="modal-point-check">✓</span>
                          <span className="modal-point-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Outro / Catatan Jaminan Teknis */}
                {activeService.outro && (
                  <div className="modal-outro-box">
                    <div className="outro-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <p className="modal-outro-text">{activeService.outro}</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <a
                  href="#contact"
                  className="btn-primary"
                  onClick={() => setActiveServiceId(null)}
                >
                  <span>Konsultasikan Spesifikasi Ini</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setActiveServiceId(null)}
                >
                  {modalCloseLabel}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

