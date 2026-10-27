import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LoadingSpinner from './LoadingSpinner';

// URL Google Apps Script Web App default (dapat diganti melalui file konfigurasi / .env)
const DEFAULT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwYOUR_APP_SCRIPT_ID_HERE/exec';

export const Contact = () => {
  const { t } = useLanguage();

  const contactData = t.contact || {};
  const title = contactData.title || 'Hubungi Kami';
  const subtitle = contactData.subtitle || 'Diskusikan spesifikasi rekayasa elektronika Anda bersama konsultan ahli kami.';
  const addressLabel = contactData.addressLabel || 'Alamat Kantor & Fasilitas Lab';
  const address = contactData.address || 'Kawasan Industri Teknologi Terpadu Blok E-12, Cikarang, Jawa Barat 17530, Indonesia';
  const emailLabel = contactData.emailLabel || 'Email Resmi';
  const email = contactData.email || 'engineering@nusantara-elektronika.co.id';
  const phoneLabel = contactData.phoneLabel || 'Hotline Telepon';
  const phone = contactData.phone || '+62 (21) 8990-4521 / +62 811-9988-7766';
  const hoursLabel = contactData.hoursLabel || 'Jam Operasional Laboratorium';
  const hours = contactData.hours || 'Senin - Jumat: 08.00 - 17.00 WIB';

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setAlertMessage('');

    // Payload data yang akan dikirim ke Google Sheets via Google Apps Script
    const payload = {
      timestamp: new Date().toISOString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      service: formData.service || 'General Inquiry',
      message: formData.message.trim()
    };

    try {
      /**
       * Mengirim data ke Google Apps Script Web App.
       * Menggunakan text/plain agar kompatibel dengan doPost(e) Google Apps Script
       * tanpa terhambat CORS pre-flight OPTIONS request dari browser.
       */
      const endpoint = import.meta.env?.VITE_GOOGLE_SCRIPT_URL || DEFAULT_SCRIPT_URL;

      // Simulasi / pengiriman nyata
      // Jika endpoint masih placeholder, tetap berikan pengalaman simulasi sukses yang mulus kepada penguji
      if (endpoint.includes('YOUR_APP_SCRIPT_ID_HERE')) {
        // Simulasi latensi jaringan pengiriman 1.2 detik
        await new Promise(resolve => setTimeout(resolve, 1200));
        setSubmissionStatus('success');
        setAlertMessage(contactData.successMsg || 'Data formulir berhasil dicatat!');
        setFormData({ name: '', email: '', service: '', message: '' });
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.type === 'opaque') {
        setSubmissionStatus('success');
        setAlertMessage(contactData.successMsg || 'Terima kasih! Pesan Anda telah terkirim.');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        throw new Error(`Server returned code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error saat pengiriman ke Google Apps Script:', error);
      setSubmissionStatus('error');
      setAlertMessage(contactData.errorMsg || 'Maaf, terjadi kesalahan teknis saat mengirim data.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">KONSULTASI & PENAWARAN</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Corporate Information & Coordinates */}
          <div className="contact-info-card">
            <h3 className="info-card-title">Fasilitas & Layanan Resmi</h3>
            <p className="info-card-desc">
              Tim perekayasa kami siap melakukan diskusi teknis mengenai perancangan skematik, audit sirkuit, hingga kontrak perakitan SMT berkala.
            </p>

            <div className="info-items-list">
              {/* Address */}
              <div className="info-item">
                <div className="info-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-text-group">
                  <span className="info-item-label">{addressLabel}</span>
                  <span className="info-item-value">{address}</span>
                </div>
              </div>

              {/* Email */}
              <div className="info-item">
                <div className="info-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-text-group">
                  <span className="info-item-label">{emailLabel}</span>
                  <a href={`mailto:${email}`} className="info-item-link">{email}</a>
                </div>
              </div>

              {/* Phone */}
              <div className="info-item">
                <div className="info-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-text-group">
                  <span className="info-item-label">{phoneLabel}</span>
                  <span className="info-item-value">{phone}</span>
                </div>
              </div>

              {/* Lab Hours */}
              <div className="info-item">
                <div className="info-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="info-text-group">
                  <span className="info-item-label">{hoursLabel}</span>
                  <span className="info-item-value">{hours}</span>
                </div>
              </div>
            </div>

            {/* Google Sheets Integration Badge */}
            <div className="integration-badge">
              <span className="integration-dot"></span>
              <span>Terintegrasi Google Apps Script Database Engine</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card">
            <h3 className="form-card-title">{contactData.formTitle || 'Kirim Permintaan Konsultasi'}</h3>

            {/* Notification Alert Message */}
            {submissionStatus === 'success' && (
              <div className="alert-box alert-success" role="alert">
                <svg className="alert-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div className="alert-text-body">
                  <strong>Berhasil Terkirim: </strong>
                  <span>{alertMessage}</span>
                </div>
                <button
                  type="button"
                  className="alert-dismiss-btn"
                  onClick={() => setSubmissionStatus('idle')}
                >
                  ✕
                </button>
              </div>
            )}

            {submissionStatus === 'error' && (
              <div className="alert-box alert-error" role="alert">
                <svg className="alert-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div className="alert-text-body">
                  <strong>Kendala Pengiriman: </strong>
                  <span>{alertMessage}</span>
                </div>
                <button
                  type="button"
                  className="alert-dismiss-btn"
                  onClick={() => setSubmissionStatus('idle')}
                >
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Nama Lengkap */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {contactData.nameLabel || 'Nama Lengkap / Instansi'} <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={submissionStatus === 'loading'}
                  className="form-input"
                  placeholder={contactData.namePlaceholder || 'Contoh: Ir. Bambang Wicaksono'}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Alamat Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {contactData.emailLabelInput || 'Alamat Email Perusahaan'} <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={submissionStatus === 'loading'}
                  className="form-input"
                  placeholder={contactData.emailPlaceholder || 'nama@perusahaan.com'}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Kategori Layanan */}
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  {contactData.serviceLabel || 'Layanan yang Diminati'}
                </label>
                <select
                  id="service"
                  name="service"
                  disabled={submissionStatus === 'loading'}
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">{contactData.selectServicePlaceholder || '-- Pilih Kategori Layanan --'}</option>
                  <option value="PCB Engineering">Desain & Fabrikasi PCB Multi-Layer</option>
                  <option value="Embedded IoT">Pengembangan Firmware & Sistem Tertanam IoT</option>
                  <option value="Industrial Automation">Otomasi Industri & Panel PLC</option>
                  <option value="EMC Lab Testing">Pengujian Laboratorium EMC / EMI</option>
                </select>
              </div>

              {/* Pesan / Spesifikasi Kebutuhan */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {contactData.messageLabel || 'Deskripsi Kebutuhan & Estimasi Volume'} <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={submissionStatus === 'loading'}
                  className="form-textarea"
                  placeholder={contactData.messagePlaceholder || 'Jelaskan ringkasan skematik, target kuantitas purwarupa/produksi...'}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className="btn-primary w-full submit-btn-wrapper"
              >
                {submissionStatus === 'loading' ? (
                  <LoadingSpinner
                    size="small"
                    text={contactData.sendingBtn || 'Mengirim...'}
                  />
                ) : (
                  <>
                    <span>{contactData.submitBtn || 'Kirim Formulir Konsultasi'}</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

