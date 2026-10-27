import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Inner component to access active language direction and context safely
const AppContent = () => {
  const { isRTL, dir } = useLanguage();

  return (
    <div className={`app-root ${isRTL ? 'is-rtl' : 'is-ltr'}`} dir={dir}>
      {/* Header & Navigasi dengan dropdown bahasa & toggle tema */}
      <Navbar />

      <main id="main-content">
        {/* Bagian Hero dengan preview code ts */}
        <Hero />

        {/* Bagian Profil, Visi & Misi */}
        <About />

        {/* Bagian Grid Layanan & Modal Popup Interaktif */}
        <Services />

        {/* Bagian Keunggulan Kompetitif (01, 02, 03) */}
        <WhyUs />

        {/* Bagian Kontak & Formulir Google Sheets */}
        <Contact />
      </main>

      {/* Footer Deep Navy */}
      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

