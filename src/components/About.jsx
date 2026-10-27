import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  const about = t.about || {};
  const title = about.title || 'Tentang Kami';
  const subtitle = about.subtitle || 'Pelopor Fabrikasi & Desain Sistem Elektronika';
  const lead = about.lead || 'PT Nusantara Elektronika Mandiri berdedikasi menciptakan ekosistem perangkat keras berkualitas tinggi.';
  const visionTag = about.visionTag || 'Visi Kami';
  const visionText = about.visionText || 'Menjadi korporasi pelopor teknologi elektronika dan semikonduktor terdepan.';
  const missionTag = about.missionTag || 'Misi Kami';
  const missions = Array.isArray(about.missions) ? about.missions : [];
  const stats = Array.isArray(about.stats) ? about.stats : [];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">{title}</span>
          <h2 className="section-title">{subtitle}</h2>
          <div className="section-divider"></div>
        </div>

        {/* Lead Narrative */}
        <div className="about-lead-wrapper">
          <p className="about-lead-text">{lead}</p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="about-cards-grid">
          {/* Vision Card */}
          <div className="vision-card">
            <div className="card-accent-strip vision-accent"></div>
            <div className="card-icon-bubble vision-bubble">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="card-heading">{visionTag}</h3>
            <p className="vision-description">{visionText}</p>
          </div>

          {/* Mission Card */}
          <div className="mission-card">
            <div className="card-accent-strip mission-accent"></div>
            <div className="card-icon-bubble mission-bubble">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="card-heading">{missionTag}</h3>
            <ul className="mission-list">
              {missions.map((mission, idx) => (
                <li key={idx} className="mission-item">
                  <span className="mission-bullet-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </span>
                  <span className="mission-text">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Corporate Numbers / Stat Counters */}
        {stats.length > 0 && (
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-stat-box">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

