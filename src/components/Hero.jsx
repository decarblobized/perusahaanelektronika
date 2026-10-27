import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  // Ambil data hero dengan fallback aman
  const hero = t.hero || {};
  const badge = hero.badge || 'Solusi Rekayasa Elektronika';
  const title = hero.title || 'Inovasi Rekayasa Elektronika';
  const slogan = hero.slogan || 'Membangun Perangkat Keras Unggulan Masa Depan';
  const subtitle = hero.subtitle || 'Spesialis desain PCB multi-layer, firmware mikrokontroler, dan sistem otomasi industri.';
  const ctaPrimary = hero.ctaPrimary || 'Jelajahi Solusi';
  const ctaSecondary = hero.ctaSecondary || 'Hubungi Kami';
  const metrics = hero.metrics || [];
  const previewBadge = hero.previewBadge || 'FIRMWARE & HARDWARE STACK';
  const previewFileName = hero.previewFileName || 'telemetry_controller.ts';
  const previewCode = hero.previewCode || [];

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-effects">
        <div className="hero-glow-blob blob-1"></div>
        <div className="hero-glow-blob blob-2"></div>
        <div className="circuit-grid-pattern"></div>
      </div>

      <div className="hero-container">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-pulse-dot"></span>
            <span className="badge-text">{badge}</span>
          </div>

          {/* Slogan & Main Title */}
          <h1 className="hero-title">
            {title}
          </h1>

          <p className="hero-slogan">
            {slogan}
          </p>

          <p className="hero-subtitle">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#services" className="btn-primary">
              <span>{ctaPrimary}</span>
              <svg className="btn-arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              <span>{ctaSecondary}</span>
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          {metrics.length > 0 && (
            <div className="hero-metrics-grid">
              {metrics.map((item, idx) => (
                <div key={idx} className="metric-item">
                  <span className="metric-value">{item.value}</span>
                  <span className="metric-label">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Code Card Preview (TS Firmware) */}
        <div className="hero-preview-column">
          <div className="code-card">
            {/* Terminal Window Header */}
            <div className="code-card-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="code-tab-active">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span className="tab-filename">{previewFileName}</span>
              </div>
              <span className="code-badge-tag">{previewBadge}</span>
            </div>

            {/* Code Body */}
            <div className="code-card-body">
              <pre className="code-pre">
                <code>
                  {previewCode.map((line, idx) => {
                    const isComment = line.trim().startsWith('//');
                    const isImport = line.trim().startsWith('import');
                    const isClass = line.includes('class ') || line.includes('export');
                    const isAsync = line.includes('async ') || line.includes('await');

                    let lineClass = 'code-line-default';
                    if (isComment) lineClass = 'code-line-comment';
                    else if (isImport) lineClass = 'code-line-import';
                    else if (isClass) lineClass = 'code-line-keyword';
                    else if (isAsync) lineClass = 'code-line-async';

                    return (
                      <div key={idx} className="code-line">
                        <span className="line-num">{idx + 1}</span>
                        <span className={`line-content ${lineClass}`}>{line || ' '}</span>
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>

            {/* Card Status Footer */}
            <div className="code-card-footer">
              <div className="hardware-status">
                <span className="status-live-indicator"></span>
                <span className="status-text">Micro-Core Status: LOCKED & SYNCHRONIZED</span>
              </div>
              <div className="hardware-specs">
                <span>SPI / I2C / CAN</span>
                <span>•</span>
                <span>120 MHz DSP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

