import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, supportedLanguages, getTranslation } from '../data/translations';

const STORAGE_KEY = 'selected_language';
const DEFAULT_LANG = 'id';

// Daftar kode bahasa yang didukung secara valid
const VALID_LANG_CODES = supportedLanguages.map(l => l.code);

/**
 * Mendeteksi preferensi bahasa awal:
 * 1. Cek nilai di localStorage ('selected_language')
 * 2. Jika tidak ada, deteksi bahasa browser (navigator.language)
 * 3. Jika bukan ID/EN/AR/FR, fallback otomatis ke Indonesia ('id')
 */
const getInitialLanguage = () => {
  if (typeof window === 'undefined') return DEFAULT_LANG;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && VALID_LANG_CODES.includes(saved)) {
      return saved;
    }

    // Deteksi browser
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const primaryCode = browserLang.split('-')[0]; // Ambil prefix kode seperti 'en' dari 'en-US'

    if (VALID_LANG_CODES.includes(primaryCode)) {
      return primaryCode;
    }
  } catch (err) {
    console.warn('Gagal membaca localStorage atau bahasa navigator:', err);
  }

  return DEFAULT_LANG;
};

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  // Fungsi ganti bahasa sesuai spesifikasi
  const changeLanguage = (code) => {
    const targetCode = VALID_LANG_CODES.includes(code) ? code : DEFAULT_LANG;
    setLanguage(targetCode);
    try {
      localStorage.setItem(STORAGE_KEY, targetCode);
    } catch (err) {
      console.warn('Gagal menyimpan selected_language ke localStorage:', err);
    }
  };

  // Alias setLang sesuai spesifikasi teknis
  const setLang = changeLanguage;

  // Temukan metadata bahasa aktif
  const currentLangMeta = supportedLanguages.find(l => l.code === language) || supportedLanguages[0];
  const isRTL = currentLangMeta.dir === 'rtl';

  // Sinkronisasi atribut HTML document saat bahasa berganti
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = currentLangMeta.dir || 'ltr';
      
      // Tambahkan kelas helper untuk styling RTL jika diperlukan
      if (isRTL) {
        document.documentElement.classList.add('rtl-mode');
      } else {
        document.documentElement.classList.remove('rtl-mode');
      }
    }
  }, [language, currentLangMeta, isRTL]);

  // Ambil terjemahan aktif dengan fallback aman
  const activeTranslation = getTranslation(language);

  const value = {
    language,
    lang: language, // alias cepat
    currentLanguage: currentLangMeta,
    supportedLanguages,
    changeLanguage,
    setLang, // alias sesuai spesifikasi
    t: activeTranslation,
    isRTL,
    dir: currentLangMeta.dir || 'ltr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage harus digunakan di dalam cakupan LanguageProvider');
  }
  return context;
};

export default LanguageContext;

