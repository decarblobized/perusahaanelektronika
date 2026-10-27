/**
 * Berita, Siaran Pers, dan Artikel Teknis PT Nusantara Elektronika Mandiri.
 * Disusun multibahasa untuk mendukung rujukan komponen jika diperlukan.
 */

export const corporateNews = [
  {
    id: 1,
    date: '2026-10-15',
    category: 'R&D Innovation',
    title: {
      id: 'Penyelesaian Fasilitas Perakitan SMT Berkecepatan Tinggi Generasi Ke-4',
      en: 'Commissioning of 4th-Gen Ultra-High-Speed SMT Manufacturing Line',
      ar: 'اكتمال تدشين خط إنتاج التركيب السطحي (SMT) فائق السرعة من الجيل الرابع',
      fr: 'Mise en service de la 4e ligne d’assemblage CMS ultra-haute vitesse'
    },
    excerpt: {
      id: 'Kapasitas produksi meningkat hingga 120.000 komponen per jam dengan toleransi peletakan 15 mikron untuk chip paket BGA ultra-halus.',
      en: 'Production throughput elevated to 120,000 components per hour with 15-micron precision placement for ultra-fine-pitch BGA packaging.',
      ar: 'ارتفاع الطاقة الإنتاجية إلى 120,000 عنصر في الساعة بدقة متناهية تصل إلى 15 ميكرون لرقائق BGA الدقيقة.',
      fr: 'Cadence de production portée à 120 000 composants par heure avec une précision de pose de 15 microns.'
    },
    author: 'Tim Teknik Manufaktur'
  },
  {
    id: 2,
    date: '2026-09-02',
    category: 'Certification & Quality',
    title: {
      id: 'Meraih Sertifikasi Laboratorium Uji Pra-Kepatuhan EMC / EMI ISO 17025',
      en: 'ISO 17025 Laboratory Accreditation Achieved for EMC/EMI Compliance Testing',
      ar: 'الحصول على اعتماد آيزو 17025 لمختبر اختبارات التوافق الكهرومغناطيسي',
      fr: 'Accréditation ISO 17025 obtenue pour le laboratoire de pré-conformité CEM'
    },
    excerpt: {
      id: 'Mempercepat siklus validasi perangkat telemetri IoT dan panel otomasi industri bagi mitra B2B domestik dan multinasional.',
      en: 'Accelerating telemetry module validation and industrial automation panel verification for international B2B partners.',
      ar: 'تسريع دورة التحقق من وحدات إنترنت الأشياء ولوحات الأتمتة الصناعية للشركاء العالميين.',
      fr: 'Accélération du cycle de validation des modules de télémesure et automatismes industriels.'
    },
    author: 'Divisi Penjamin Mutu'
  },
  {
    id: 3,
    date: '2026-07-28',
    category: 'Embedded Systems',
    title: {
      id: 'Rilis Arsitektur RTOS Deterministic v4.2 dengan Keamanan Hardware TPM',
      en: 'Release of Deterministic RTOS Architecture v4.2 with Hardware TPM Security',
      ar: 'إطلاق الإصدار 4.2 من معمارية برمجيات الوقت الحقيقي المعززة بأمان العتاد TPM',
      fr: 'Lancement du système RTOS Déterministe v4.2 avec sécurité matérielle TPM'
    },
    excerpt: {
      id: 'Fondasi mikrokontroler aman dari serangan sirkuit fisik dan siap terhubung ke protokol jaringan otomasi pabrik generasi baru.',
      en: 'Tamper-resistant microcontroller firmware ready for integration with next-generation smart factory automation stacks.',
      ar: 'برمجيات مضمنة آمنة من الاختراقات المادية وجاهزة للاتصال بشبكات المصانع الذكية الحديثة.',
      fr: 'Firmware inviolable prêt pour l’intégration aux usines connectées de nouvelle génération.'
    },
    author: 'Lab Riset Firmware'
  }
];

