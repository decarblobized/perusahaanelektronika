import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const WhyUs = () => {
  const { t } = useLanguage();

  // Dukungan fleksibel untuk properti whyUs atau advantages
  const data = t.whyUs || t.advantages || {};
  const title = data.title || 'Mengapa Memilih Kami';
  const subtitle = data.subtitle || 'Standar rekayasa tanpa kompromi untuk kebutuhan perangkat keras misi kritis.';
  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <section id="why-us" className="whyus-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">KEUNGGULAN KOMPETITIF</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <div className="section-divider"></div>
        </div>

        {/* 01, 02, 03 Cards Grid */}
        <div className="whyus-grid">
          {items.map((item, idx) => (
            <div key={idx} className="whyus-card">
              <div className="whyus-card-header">
                <span className="whyus-number-watermark">{item.number}</span>
                <span className="whyus-badge-number">KEUNGGULAN {item.number}</span>
              </div>
              <h3 className="whyus-card-title">{item.title}</h3>
              <p className="whyus-card-desc">{item.desc}</p>

              <div className="whyus-card-decor">
                <div className="decor-line"></div>
                <div className="decor-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

