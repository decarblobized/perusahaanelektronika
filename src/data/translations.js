/**
 * Kamus data multi-bahasa lengkap untuk PT Nusantara Elektronika Mandiri.
 * Mendukung Bahasa Indonesia (id), English (en), Arabic (ar), dan Français (fr).
 * Struktur data identik di seluruh bahasa untuk mencegah runtime error undefined.
 */

export const supportedLanguages = [
  { code: 'id', name: 'Bahasa Indonesia', shortName: 'ID', flag: '🇮🇩', dir: 'ltr' },
  { code: 'en', name: 'English', shortName: 'EN', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ar', name: 'العربية', shortName: 'AR', flag: '🇸🇦', dir: 'rtl' },
  { code: 'fr', name: 'Français', shortName: 'FR', flag: '🇫🇷', dir: 'ltr' }
];

export const translations = {
  // ===================== BAHASA INDONESIA =====================
  id: {
    navbar: {
      brand: 'Nusantara Elektronika',
      brandSubtitle: 'Mandiri & Presisi',
      home: 'Beranda',
      about: 'Tentang Kami',
      services: 'Layanan',
      whyUs: 'Keunggulan',
      contact: 'Kontak',
      consultationBtn: 'Konsultasi Proyek',
      toggleTheme: 'Ganti Tema',
      selectLanguage: 'Pilih Bahasa'
    },
    hero: {
      badge: 'Solusi Elektronika Generasi Masa Depan',
      tagline: 'Presisi Tinggi. Skalabilitas Industri.',
      title: 'Inovasi Rekayasa Elektronika & Otomasi Cerdas',
      slogan: 'Membangun Perangkat Keras Unggulan untuk Masa Depan Industri Digital',
      subtitle: 'Kami merancang, memvalidasi, dan memproduksi sistem semikonduktor, modul IoT industri, PCB multi-layer, serta otomasi berbasis mikroelektronika dengan standar sertifikasi global.',
      ctaPrimary: 'Jelajahi Solusi Kami',
      ctaSecondary: 'Hubungi Tim Perekayasa',
      metrics: [
        { value: '99.8%', label: 'Tingkat Keandalan Hardware' },
        { value: '350+', label: 'Proyek Tertanam Sukses' },
        { value: 'ISO 9001', label: 'Standar Mutu Internasional' }
      ],
      previewBadge: 'FIRMWARE & HARDWARE STACK v4.2',
      previewFileName: 'telemetry_controller.ts',
      previewCode: [
        '// Inisialisasi Kontroler Mikroelektronika IoT',
        'import { MicroController, SensorBus } from "@nusantara/core";',
        '',
        'export class TelemetryBridge extends MicroController {',
        '  private bus = new SensorBus({ baudRate: 115200, redundancy: true });',
        '',
        '  async calibrateSensors(): Promise<DiagnosticResult> {',
        '    await this.bus.syncClock();',
        '    const health = await this.readPcbThermalTelemetry();',
        '    return health.status === "OPTIMAL" ? health : this.autoCompensate();',
        '  }',
        '}'
      ]
    },
    about: {
      title: 'Tentang Kami',
      subtitle: 'Pelopor Fabrikasi & Desain Sistem Elektronika Indonesia',
      lead: 'Berdiri sebagai pusat keunggulan rekayasa perangkat keras, PT Nusantara Elektronika Mandiri berdedikasi menciptakan ekosistem perangkat keras dan embedded system yang mandiri, tahan uji pada kondisi ekstrem, serta siap bersaing di kancah global.',
      visionTag: 'Visi Kami',
      visionText: 'Menjadi korporasi pelopor teknologi elektronika dan semikonduktor terdepan di Asia Tenggara yang memberdayakan transformasi industri berdaulat dan berkelanjutan.',
      missionTag: 'Misi Kami',
      missions: [
        'Mengembangkan riset mikroelektronika dan desain PCB bernilai presisi tinggi.',
        'Menyediakan solusi manufaktur OEM/ODM otomasi industri yang teruji standar militer dan sipil.',
        'Membina talenta perekayasa lokal untuk mendorong kemandirian pasokan komponen teknologi nasional.',
        'Menerapkan prinsip manufaktur ramah lingkungan dengan efisiensi energi sirkuit maksimal.'
      ],
      stats: [
        { number: '15+', label: 'Tahun Pengalaman' },
        { number: '48+', label: 'Insinyur Elektronika Bersertifikat' },
        { number: '120k+', label: 'Unit PCB Terproduksi Tiap Bulan' },
        { number: '18', label: 'Paten Desain Industri Terdaftar' }
      ]
    },
    advantages: {
      title: 'Mengapa Memilih Kami',
      subtitle: 'Standar rekayasa tanpa kompromi untuk kebutuhan perangkat keras misi kritis.',
      items: [
        {
          number: '01',
          title: 'Presisi Manufaktur Kelas Mikron',
          desc: 'Mesin Surface Mount Technology (SMT) berkecepatan tinggi dengan sistem inspeksi optik otomatis (AOI) dan X-ray 3D untuk deteksi solder tanpa cacat.'
        },
        {
          number: '02',
          title: 'Siklus Cepat Desain ke Purwarupa',
          desc: 'Akselerasi siklus R&D dari skematik sketsa, simulasi termal/EMC, hingga purwarupa fungsional siap uji dalam hitungan 5 hari kerja.'
        },
        {
          number: '03',
          title: 'Sertifikasi & Kepatuhan Global',
          desc: 'Seluruh produk dirancang mematuhi standar RoHS, CE, FCC, dan ISO 9001:2015 guna menjamin keamanan, kompatibilitas, serta kepatuhan emisi elektromagnetik.'
        }
      ]
    },
    whyUs: {
      title: 'Keunggulan Kami',
      subtitle: 'Standar rekayasa tanpa kompromi untuk kebutuhan perangkat keras misi kritis.',
      items: [
        {
          number: '01',
          title: 'Presisi Manufaktur Kelas Mikron',
          desc: 'Mesin Surface Mount Technology (SMT) berkecepatan tinggi dengan sistem inspeksi optik otomatis (AOI) dan X-ray 3D untuk deteksi solder tanpa cacat.'
        },
        {
          number: '02',
          title: 'Siklus Cepat Desain ke Purwarupa',
          desc: 'Akselerasi siklus R&D dari skematik sketsa, simulasi termal/EMC, hingga purwarupa fungsional siap uji dalam hitungan 5 hari kerja.'
        },
        {
          number: '03',
          title: 'Sertifikasi & Kepatuhan Global',
          desc: 'Seluruh produk dirancang mematuhi standar RoHS, CE, FCC, dan ISO 9001:2015 guna menjamin keamanan, kompatibilitas, serta kepatuhan emisi elektromagnetik.'
        }
      ]
    },
    services: {
      title: 'Layanan & Portofolio Solusi',
      subtitle: 'Layanan terintegrasi dari tahap ide konseptual hingga perakitan massal tingkat industri.',
      viewDetails: 'Lihat Detail Spesifikasi',
      modalClose: 'Tutup Detail',
      modalKeyPointsTitle: 'Poin Utama & Kapabilitas Teknis',
      items: [
        {
          id: 'pcb-engineering',
          title: 'Desain & Fabrikasi PCB Multi-Layer',
          shortDesc: 'Pengembangan tata letak sirkuit tercetak berdensitas tinggi (HDI) hingga 32 lapisan dengan integritas sinyal berkecepatan tinggi.',
          fullDesc: 'Layanan rekayasa PCB komprehensif kami mencakup perencanaan penumpukan lapisan (stackup), analisis integritas sinyal dan daya (SI/PI), simulasi impedansi terkendali, serta penanganan disipasi termal untuk sirkuit RF, FPGA frekuensi tinggi, dan prosesor komputasi tepi.',
          points: [
            'Dukungan HDI (High Density Interconnect), Blind/Buried Vias, dan Rigid-Flex PCB.',
            'Simulasi integritas daya & sinyal frekuensi gigahertz sebelum tahap produksi.',
            'Fabrikasi bahan substrat khusus seperti Rogers, FR-4 TG tinggi, dan polimida tahan panas.',
            'Inspeksi X-Ray 100% untuk komponen kemasan BGA dan QFN berjarak pin mikro.'
          ],
          outro: 'Hasil desain kami siap diproduksi massal dengan efisiensi biaya material optimal dan keandalan operasional lebih dari 100.000 jam MTBF.'
        },
        {
          id: 'iot-embedded',
          title: 'Pengembangan Firmware & Sistem Tertanam',
          shortDesc: 'Arsitektur mikrokontroler real-time (RTOS/Bare-Metal) dilengkapi enkripsi kriptografi hardware dan protokol konektivitas industri.',
          fullDesc: 'Kami membangun fondasi perangkat lunak tingkat rendah yang hemat daya, aman dari peretasan siber fisik, dan andal untuk sistem telemetri, gateway SCADA, dan pemantauan jarak jauh via LoRaWAN, Cellular NB-IoT, BLE, serta Ethernet Industri.',
          points: [
            'Pengembangan RTOS (FreeRTOS, Zephyr) dan arsitektur event-driven deterministik.',
            'Dukungan mikrokontroler ARM Cortex-M/R, RISC-V, dan DSP berkemampuan tinggi.',
            'Firmware Over-The-Air (FOTA) pembaruan nirkabel dengan dual-bank memory fallback aman.',
            'Integrasi chip keamanan hardware (Secure Element / TPM) untuk tanda tangan digital.'
          ],
          outro: 'Setiap baris kode diuji melalui automated hardware-in-the-loop (HIL) testing sebelum dirilis ke lingkungan produksi komersial.'
        },
        {
          id: 'industrial-automation',
          title: 'Otomasi Industri & Rekayasa Instrumentasi',
          shortDesc: 'Perancangan panel kendali PLC, sistem akuisisi data sensorik presisi tinggi, dan aktuator cerdas untuk pabrik modern.',
          fullDesc: 'Menjembatani kesenjangan antara perangkat keras pabrik dan sistem analitik cloud. Kami merancang modul instrumentasi tahan derau elektromagnetik (EMC Heavy Industrial Grade) yang mampu bertahan di lingkungan bersuhu ekstrem, getaran tinggi, dan berdebu.',
          points: [
            'Protokol komunikasi industri: Modbus RTU/TCP, PROFINET, EtherCAT, dan CANopen.',
            'Sirkuit isolasi optik galvanik hingga 5kV untuk keselamatan operasional operator.',
            'Sistem kalibrasi analog-ke-digital (ADC) 24-bit dengan drift suhu mendekati nol.',
            'Pembuatan panel kabinet IP66 / NEMA 4X bersertifikasi uji kebocoran dan getaran.'
          ],
          outro: 'Meningkatkan efisiensi OEE (Overall Equipment Effectiveness) lini produksi mitra manufaktur hingga 38%.'
        },
        {
          id: 'reverse-eng-testing',
          title: 'Pengujian Laboratorium EMC/EMI & Sertifikasi',
          shortDesc: 'Validasi kepatuhan elektromagnetik pra-kepatuhan (pre-compliance) dan sertifikasi lingkungan sebelum distribusi komersial.',
          fullDesc: 'Kami menyediakan fasilitas uji mandiri untuk memastikan perangkat elektronik Anda bebas dari emisi radiasi liar yang mengganggu dan kebal terhadap kejutan listrik statis (ESD), surge petir, serta fluktuasi voltase jala-jala listrik.',
          points: [
            'Uji pelepasan muatan elektrostatik (ESD) hingga 15kV kontak/udara (IEC 61000-4-2).',
            'Ruang anechoic pra-kepatuhan untuk pemindaian radiasi terpancar dan konduksi.',
            'Uji siklus termal ruang iklim (-40°C hingga +125°C) dan kelembapan ekstrem 95% RH.',
            'Pendampingan penyusunan berkas teknis permohonan sertifikasi SDPPI / SNI / CE / FCC.'
          ],
          outro: 'Mengurangi risiko kegagalan sertifikasi resmi yang memakan waktu dan biaya, mempercepat time-to-market produk Anda.'
        }
      ]
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Diskusikan spesifikasi rekayasa elektronika Anda bersama konsultan ahli kami.',
      addressLabel: 'Alamat Kantor Pusat & Fasilitas Lab',
      address: 'Kawasan Industri Teknologi Terpadu Blok E-12, Cikarang, Jawa Barat 17530, Indonesia',
      emailLabel: 'Email Korespondensi Resmi',
      email: 'engineering@nusantara-elektronika.co.id',
      phoneLabel: 'Saluran Telepon / Hotline Layanan',
      phone: '+62 (21) 8990-4521 / +62 811-9988-7766',
      hoursLabel: 'Jam Operasional Laboratorium',
      hours: 'Senin - Jumat: 08.00 - 17.00 WIB',
      formTitle: 'Kirim Permintaan Konsultasi atau Penawaran',
      nameLabel: 'Nama Lengkap / Instansi',
      namePlaceholder: 'Contoh: Ir. Bambang Wicaksono (PT Industri Cerdas)',
      emailLabelInput: 'Alamat Email Perusahaan',
      emailPlaceholder: 'nama@perusahaan.com',
      serviceLabel: 'Layanan yang Diminati',
      selectServicePlaceholder: '-- Pilih Kategori Layanan --',
      messageLabel: 'Deskripsi Kebutuhan & Estimasi Volume',
      messagePlaceholder: 'Jelaskan ringkasan skematik, target kuantitas purwarupa/produksi, serta tenggat waktu proyek...',
      submitBtn: 'Kirim Formulir Konsultasi',
      sendingBtn: 'Sedang Mengirim ke Sistem...',
      successMsg: 'Terima kasih! Pesan dan spesifikasi kebutuhan Anda telah berhasil dikirim. Tim teknis kami akan menghubungi Anda dalam kurun 1x24 jam kerja.',
      errorMsg: 'Maaf, terjadi kendala saat menghubungkan ke server Google Script. Silakan periksa koneksi internet Anda atau kirimkan email langsung ke engineering@nusantara-elektronika.co.id'
    },
    footer: {
      description: 'Korporasi pelopor perancangan sistem semikonduktor, fabrikasi PCB multi-layer, dan solusi otomasi industri terintegrasi berstandar global.',
      quickLinksTitle: 'Navigasi Cepat',
      servicesTitle: 'Layanan Utama',
      contactTitle: 'Hubungi Pabrik',
      rights: 'Hak Cipta Dilindungi Undang-Undang.',
      builtWith: 'Ditenagai oleh Ekosistem React JS & Standar Rekayasa Cerdas.'
    }
  },

  // ===================== ENGLISH =====================
  en: {
    navbar: {
      brand: 'Nusantara Electronics',
      brandSubtitle: 'Precision & Sovereignty',
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      whyUs: 'Why Us',
      contact: 'Contact',
      consultationBtn: 'Project Inquiry',
      toggleTheme: 'Toggle Theme',
      selectLanguage: 'Select Language'
    },
    hero: {
      badge: 'Next-Generation Electronics Solutions',
      tagline: 'High Precision. Industrial Scalability.',
      title: 'Electronic Engineering & Intelligent Automation',
      slogan: 'Building Superior Hardware Architectures for the Digital Industrial Era',
      subtitle: 'We engineer, validate, and manufacture embedded semiconductor systems, industrial IoT modules, multi-layer PCBs, and microelectronics automation meeting rigorous global standards.',
      ctaPrimary: 'Explore Our Solutions',
      ctaSecondary: 'Talk with Engineers',
      metrics: [
        { value: '99.8%', label: 'Hardware Reliability Rate' },
        { value: '350+', label: 'Embedded Projects Deployed' },
        { value: 'ISO 9001', label: 'Certified Quality Standard' }
      ],
      previewBadge: 'FIRMWARE & HARDWARE STACK v4.2',
      previewFileName: 'telemetry_controller.ts',
      previewCode: [
        '// IoT Microelectronics Controller Initialization',
        'import { MicroController, SensorBus } from "@nusantara/core";',
        '',
        'export class TelemetryBridge extends MicroController {',
        '  private bus = new SensorBus({ baudRate: 115200, redundancy: true });',
        '',
        '  async calibrateSensors(): Promise<DiagnosticResult> {',
        '    await this.bus.syncClock();',
        '    const health = await this.readPcbThermalTelemetry();',
        '    return health.status === "OPTIMAL" ? health : this.autoCompensate();',
        '  }',
        '}'
      ]
    },
    about: {
      title: 'About Us',
      subtitle: 'Pioneering Electronics Design & Manufacturing Excellence',
      lead: 'Founded as a center of hardware engineering excellence, PT Nusantara Elektronika Mandiri is dedicated to creating robust, sovereign embedded systems engineered for extreme environments and ready for global deployment.',
      visionTag: 'Our Vision',
      visionText: 'To be Southeast Asia’s foremost pioneer in electronics and semiconductor technologies, enabling sovereign, sustainable industrial modernization.',
      missionTag: 'Our Mission',
      missions: [
        'Advance microelectronics research and high-density, ultra-precise PCB layouts.',
        'Deliver military- and industrial-grade OEM/ODM automation solutions.',
        'Cultivate local engineering talents to secure domestic component supply chains.',
        'Champion green manufacturing methodologies with optimal circuit energy efficiency.'
      ],
      stats: [
        { number: '15+', label: 'Years of Engineering' },
        { number: '48+', label: 'Certified Hardware Engineers' },
        { number: '120k+', label: 'PCBs Fabricated Monthly' },
        { number: '18', label: 'Registered Industrial Patents' }
      ]
    },
    advantages: {
      title: 'Why Choose Us',
      subtitle: 'Uncompromising engineering standards built for mission-critical hardware deployments.',
      items: [
        {
          number: '01',
          title: 'Micron-Level Manufacturing Precision',
          desc: 'High-speed Surface Mount Technology (SMT) with 3D automated optical inspection (AOI) and industrial X-ray imaging for zero-defect solder joints.'
        },
        {
          number: '02',
          title: 'Rapid Design-to-Prototype Iteration',
          desc: 'Accelerated R&D turnaround from schematic sketches, thermal/EMC simulation, to functional tested prototypes within 5 business days.'
        },
        {
          number: '03',
          title: 'Global Certifications & Compliance',
          desc: 'All circuits adhere to RoHS, CE, FCC, and ISO 9001:2015 standards, ensuring electrical safety, reliability, and electromagnetic compatibility.'
        }
      ]
    },
    whyUs: {
      title: 'Why Choose Us',
      subtitle: 'Uncompromising engineering standards built for mission-critical hardware deployments.',
      items: [
        {
          number: '01',
          title: 'Micron-Level Manufacturing Precision',
          desc: 'High-speed Surface Mount Technology (SMT) with 3D automated optical inspection (AOI) and industrial X-ray imaging for zero-defect solder joints.'
        },
        {
          number: '02',
          title: 'Rapid Design-to-Prototype Iteration',
          desc: 'Accelerated R&D turnaround from schematic sketches, thermal/EMC simulation, to functional tested prototypes within 5 business days.'
        },
        {
          number: '03',
          title: 'Global Certifications & Compliance',
          desc: 'All circuits adhere to RoHS, CE, FCC, and ISO 9001:2015 standards, ensuring electrical safety, reliability, and electromagnetic compatibility.'
        }
      ]
    },
    services: {
      title: 'Services & Solution Portfolio',
      subtitle: 'End-to-end electronic engineering from conceptual schematic design to mass production.',
      viewDetails: 'View Technical Specs',
      modalClose: 'Close Details',
      modalKeyPointsTitle: 'Key Technical Capabilities',
      items: [
        {
          id: 'pcb-engineering',
          title: 'Multi-Layer PCB Design & Fabrication',
          shortDesc: 'High-Density Interconnect (HDI) circuit design up to 32 layers with high-speed signal integrity matching.',
          fullDesc: 'Our comprehensive PCB engineering covers stackup planning, signal & power integrity (SI/PI) modeling, controlled impedance simulations, and thermal dissipation architectures for RF, high-frequency FPGAs, and edge compute processors.',
          points: [
            'HDI layout support, blind/buried micro-vias, and rigid-flex board manufacturing.',
            'Pre-fabrication gigahertz signal integrity and power plane impedance modeling.',
            'Specialized substrates including Rogers, high-Tg FR-4, and heat-resistant polyimide.',
            '100% 3D X-Ray BGA and micro-pitch QFN inspection verification.'
          ],
          outro: 'Designs delivered production-ready with optimized Bill-of-Materials (BOM) cost and over 100,000 hours MTBF reliability.'
        },
        {
          id: 'iot-embedded',
          title: 'Embedded Firmware & IoT Systems',
          shortDesc: 'Real-time deterministic firmware (RTOS/Bare-Metal) featuring hardware crypto security and industrial connectivity.',
          fullDesc: 'We construct low-power, physically tamper-resistant low-level software stacks for telemetry, SCADA gateways, and remote monitoring over LoRaWAN, Cellular NB-IoT, BLE, and Industrial Ethernet.',
          points: [
            'RTOS integration (FreeRTOS, Zephyr) and deterministic event-driven architectures.',
            'ARM Cortex-M/R, RISC-V, and high-performance digital signal processors.',
            'Secure Firmware Over-The-Air (FOTA) updates with dual-bank fail-safe fallback.',
            'Hardware Secure Element (TPM / ATECC) integration for hardware root-of-trust.'
          ],
          outro: 'Every code release is thoroughly validated through automated hardware-in-the-loop (HIL) test suites.'
        },
        {
          id: 'industrial-automation',
          title: 'Industrial Automation & Instrumentation',
          shortDesc: 'Custom PLC control panels, high-precision telemetry acquisition units, and smart field actuators.',
          fullDesc: 'Bridging physical factory floor operations with cloud analytics. We build heavy-industrial EMC-rated instrumentation resilient against severe thermal swings, mechanical shocks, and airborne contaminants.',
          points: [
            'Industrial telemetry protocols: Modbus RTU/TCP, PROFINET, EtherCAT, and CANopen.',
            '5kV galvanic isolation barriers for operator safety and surge suppression.',
            '24-bit analog-to-digital converter (ADC) circuits with ultra-low thermal drift.',
            'IP66 / NEMA 4X industrial enclosures with validated ingress protection.'
          ],
          outro: 'Proven to enhance Overall Equipment Effectiveness (OEE) by up to 38% for enterprise manufacturing clients.'
        },
        {
          id: 'reverse-eng-testing',
          title: 'EMC/EMI Pre-Compliance & Laboratory Testing',
          shortDesc: 'Comprehensive electromagnetic compatibility pre-compliance and environmental stress testing.',
          fullDesc: 'In-house laboratory facilities to guarantee your electronics operate free of spurious radiation and remain immune to electrostatic discharge (ESD), lightning surges, and power line voltage dips.',
          points: [
            'ESD testing up to 15kV contact/air discharge compliance (IEC 61000-4-2).',
            'Pre-compliance semi-anechoic chamber for radiated and conducted emissions.',
            'Environmental thermal cycling (-40°C to +125°C) and 95% RH humidity stress tests.',
            'Regulatory dossier preparation for FCC, CE, SDPPI, and RoHS compliance.'
          ],
          outro: 'Mitigate certification delays and costly respins, accelerating your product time-to-market.'
        }
      ]
    },
    contact: {
      title: 'Contact Our Engineering Team',
      subtitle: 'Discuss your electronic hardware requirements with our senior technical consultants.',
      addressLabel: 'Headquarters & Laboratory Facility',
      address: 'Integrated High-Tech Industrial Estate Block E-12, Cikarang, West Java 17530, Indonesia',
      emailLabel: 'Official Correspondence Email',
      email: 'engineering@nusantara-elektronika.co.id',
      phoneLabel: 'Hotline / Engineering Direct Line',
      phone: '+62 (21) 8990-4521 / +62 811-9988-7766',
      hoursLabel: 'Laboratory Operational Hours',
      hours: 'Monday - Friday: 08:00 - 17:00 (GMT+7)',
      formTitle: 'Submit Project Inquiry or RFQ',
      nameLabel: 'Full Name / Organization',
      namePlaceholder: 'e.g. Dr. Arthur Pendelton (Global Automation Corp)',
      emailLabelInput: 'Corporate Email Address',
      emailPlaceholder: 'name@company.com',
      serviceLabel: 'Required Capability',
      selectServicePlaceholder: '-- Select Service Category --',
      messageLabel: 'Project Specifications & Volume Estimate',
      messagePlaceholder: 'Outline schematic constraints, expected prototype/production batches, and timeline requirements...',
      submitBtn: 'Send Consultation Request',
      sendingBtn: 'Transmitting Data to System...',
      successMsg: 'Thank you! Your project specifications have been logged successfully. Our engineering team will follow up within 24 business hours.',
      errorMsg: 'Failed to communicate with Google Script endpoint. Please check your network or email us directly at engineering@nusantara-elektronika.co.id'
    },
    footer: {
      description: 'Pioneering semiconductor hardware systems, multi-layer PCB fabrication, and mission-critical industrial automation solutions.',
      quickLinksTitle: 'Quick Navigation',
      servicesTitle: 'Core Capabilities',
      contactTitle: 'Direct Facility Contact',
      rights: 'All Rights Reserved.',
      builtWith: 'Engineered with React JS & High-Precision Design Standards.'
    }
  },

  // ===================== ARABIC (العربية) =====================
  ar: {
    navbar: {
      brand: 'نوسانتارا للإلكترونيات',
      brandSubtitle: 'دقة متناهية وسيادة تقنية',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      whyUs: 'لماذا نحن',
      contact: 'اتصل بنا',
      consultationBtn: 'طلب استشارة هندسية',
      toggleTheme: 'تبديل المظهر',
      selectLanguage: 'اختر اللغة'
    },
    hero: {
      badge: 'حلول إلكترونيات الجيل القادم',
      tagline: 'دقة فائقة. قابلية توسع صناعية.',
      title: 'ابتكار الهندسة الإلكترونية والأتمتة الذكية',
      slogan: 'بناء بنى تحتية صلبة ومتقدمة لعصر الصناعة الرقمية',
      subtitle: 'نقوم بتصميم واختبار وتصنيع أنظمة أشباه الموصلات المدمجة، وحدات إنترنت الأشياء الصناعية، ولوحات الدوائر المطبوعة متعددة الطبقات بأعلى المعايير العالمية.',
      ctaPrimary: 'استكشف حلولنا الهندسية',
      ctaSecondary: 'تحدث مع فريق المهندسين',
      metrics: [
        { value: '99.8%', label: 'معدل موثوقية الأجهزة' },
        { value: '350+', label: 'مشروع مدمج ناجح' },
        { value: 'ISO 9001', label: 'معيار الجودة العالمي' }
      ],
      previewBadge: 'حزمة البرمجيات والعتاد v4.2',
      previewFileName: 'telemetry_controller.ts',
      previewCode: [
        '// تهيئة وحدة التحكم الدقيقة لإنترنت الأشياء',
        'import { MicroController, SensorBus } from "@nusantara/core";',
        '',
        'export class TelemetryBridge extends MicroController {',
        '  private bus = new SensorBus({ baudRate: 115200, redundancy: true });',
        '',
        '  async calibrateSensors(): Promise<DiagnosticResult> {',
        '    await this.bus.syncClock();',
        '    const health = await this.readPcbThermalTelemetry();',
        '    return health.status === "OPTIMAL" ? health : this.autoCompensate();',
        '  }',
        '}'
      ]
    },
    about: {
      title: 'من نحن',
      subtitle: 'ريادة التصميم وتصنيع الأنظمة الإلكترونية',
      lead: 'تأسست شركة نوسانتارا للإلكترونيات لتكون صرحاً متقدماً في هندسة العتاد والأنظمة المدمجة القادرة على العمل بكفاءة تحت أقسى الظروف الصناعية وفق أعلى معايير الجودة العالمية.',
      visionTag: 'رؤيتنا',
      visionText: 'أن نكون الشركة الرائدة في تقنيات الإلكترونيات الدقيقة وأشباه الموصلات في جنوب شرق آسيا، وتمكين تحول صناعي مستدام ومستقل.',
      missionTag: 'رسالتنا',
      missions: [
        'تطوير أبحاث الإلكترونيات الدقيقة وتصميم لوحات الدوائر عالية الكثافة والدقة.',
        'تقديم حلول أتمتة صناعية مصنعة وفق المعايير العسكرية والمدنية الصارمة.',
        'تأهيل الكفاءات الهندسية لتعزيز الاعتماد الذاتي على سلاسل الإمداد التقنية.',
        'تطبيق ممارسات التصنيع الصديقة للبيئة مع تحقيق أعلى كفاءة لاستهلاك الطاقة.'
      ],
      stats: [
        { number: '15+', label: 'عاماً من الخبرة' },
        { number: '48+', label: 'مهندس أجهزة معتمد' },
        { number: '120k+', label: 'لوحة مطبوعة شهرياً' },
        { number: '18', label: 'براءة اختراع صناعية مسجلة' }
      ]
    },
    advantages: {
      title: 'لماذا تختارنا',
      subtitle: 'معايير هندسية صارمة مصممة للمهام الحيوية التي لا تحتمل الخطأ.',
      items: [
        {
          number: '01',
          title: 'دقة تصنيع بمستوى الميكرون',
          desc: 'خطوط إنتاج تركيب سطحي (SMT) فائقة السرعة مع فحص بصري آلي ثلاثي الأبعاد وأشعة سينية متطورة لضمان خلو نقاط اللحام من العيوب.'
        },
        {
          number: '02',
          title: 'دورة سريعة من التصميم إلى النموذج',
          desc: 'تسريع دورة البحث والتطوير من المخططات الأولية والمحاكاة الحرارية إلى نموذج اختباري متكامل خلال 5 أيام عمل فقط.'
        },
        {
          number: '03',
          title: 'مطابقة المعايير والشهادات الدولية',
          desc: 'تصميم يلتزم بمعايير RoHS و CE و FCC و ISO 9001:2015 لضمان السلامة الكهربائية والموثوقية والتوافق الكهرومغناطيسي.'
        }
      ]
    },
    whyUs: {
      title: 'لماذا تختارنا',
      subtitle: 'معايير هندسية صارمة مصممة للمهام الحيوية التي لا تحتمل الخطأ.',
      items: [
        {
          number: '01',
          title: 'دقة تصنيع بمستوى الميكرون',
          desc: 'خطوط إنتاج تركيب سطحي (SMT) فائقة السرعة مع فحص بصري آلي ثلاثي الأبعاد وأشعة سينية متطورة لضمان خلو نقاط اللحام من العيوب.'
        },
        {
          number: '02',
          title: 'دورة سريعة من التصميم إلى النموذج',
          desc: 'تسريع دورة البحث والتطوير من المخططات الأولية والمحاكاة الحرارية إلى نموذج اختباري متكامل خلال 5 أيام عمل فقط.'
        },
        {
          number: '03',
          title: 'مطابقة المعايير والشهادات الدولية',
          desc: 'تصميم يلتزم بمعايير RoHS و CE و FCC و ISO 9001:2015 لضمان السلامة الكهربائية والموثوقية والتوافق الكهرومغناطيسي.'
        }
      ]
    },
    services: {
      title: 'الخدمات ومحفظة الحلول',
      subtitle: 'خدمات هندسية متكاملة تبدأ من الفكرة التخطيطية وحتى الإنتاج الكمي الصناعي.',
      viewDetails: 'عرض التفاصيل الفنية',
      modalClose: 'إغلاق النافذة',
      modalKeyPointsTitle: 'القدرات والميزات التقنية الرئيسية',
      items: [
        {
          id: 'pcb-engineering',
          title: 'تصميم وتصنيع لوحات الدوائر متعددة الطبقات',
          shortDesc: 'تطوير لوحات الربط عالية الكثافة (HDI) حتى 32 طبقة مع سلامة إشارات متناهية السرعة.',
          fullDesc: 'تغطي خدماتنا تخطيط تراصف الطبقات، نمذجة سلامة الإشارات وتوزيع الطاقة (SI/PI)، محاكاة المقاومة المعيارية، وتصريف الحرارة لدارات التردد الراديوي ومعالجات الحوسبة الطرفية.',
          points: [
            'دعم تصاميم HDI وتقنيات الفتحات الدقيقة العمياء والمدفونة، واللوحات الصلبة-المرنة.',
            'محاكاة سلامة الإشارات بترددات الغيغاهرتز قبل البدء في مرحلة الإنتاج الفعلي.',
            'استخدام ركائز متخصصة مثل Rogers و FR-4 عالي المقاومة للحرارة والبوليميد.',
            'فحص كامل بالأشعة السينية ثلاثية الأبعاد لمكونات BGA و QFN الدقيقة.'
          ],
          outro: 'تصاميم جاهزة للإنتاج الكمي بتكلفة مدروسة وموثوقية تشغيلية تتجاوز 100,000 ساعة MTBF.'
        },
        {
          id: 'iot-embedded',
          title: 'تطوير البرمجيات المضمنة وأنظمة إنترنت الأشياء',
          shortDesc: 'هندسة برمجيات دقيقة بنظام الوقت الحقيقي (RTOS) مع حماية تشفير عتادية وبروتوكولات صناعية.',
          fullDesc: 'نقوم ببناء أنظمة برمجية منخفضة المستوى موفرة للطاقة ومقاومة للاختراق لمنظومات القياس عن بعد، بوابات SCADA، والمراقبة عبر LoRaWAN والشبكات الخلوية وشبكات إيثرنت الصناعية.',
          points: [
            'تطوير برمجيات FreeRTOS و Zephyr وبنى معمارية محددة التوقيت بدقة.',
            'دعم كامل لمعالجات ARM Cortex-M/R ومعمارية RISC-V ومعالجات الإشارات الرقمية.',
            'تحديث البرمجيات عبر الهواء (FOTA) مع نظام أمان واسترجاع مزدوج للذاكرة.',
            'دمج رقائق الأمان العتادية (Secure Element) للمصادقة وتشفير المفاتيح.'
          ],
          outro: 'يخضع كل كود لاختبارات المحاكاة العتادية الأوتوماتيكية (HIL) قبل اعتماده في بيئة العمل الحقيقية.'
        },
        {
          id: 'industrial-automation',
          title: 'الأتمتة الصناعية وهندسة القياس الدقيق',
          shortDesc: 'لوحات تحكم مبرمجة مخصصة (PLC)، ووحدات اقتناء بيانات القياس الحساسة، ومشغلات ذكية.',
          fullDesc: 'نربط بين عتاد خطوط الإنتاج وأنظمة التحليلات السحابية من خلال وحدات قياس متينة ومقاومة للتشويش الكهرومغناطيسي، والاهتزازات الشديدة ودرجات الحرارة القاسية.',
          points: [
            'دعم بروتوكولات: Modbus RTU/TCP و PROFINET و EtherCAT و CANopen.',
            'عزل كلفاني بصري حتى 5 كيلوفولت لسلامة المشغلين وحماية الأجهزة.',
            'دوائر تحويل تناظري-رقمي (ADC) بدقة 24-بت مع انحراف حراري شبه منعدم.',
            'صناديق حماية صناعية معتمدة بمعيار IP66 / NEMA 4X ضد الماء والغبار.'
          ],
          outro: 'تحسين الفعالية الإجمالية للمعدات (OEE) لشركائنا الصناعيين بنسبة تصل إلى 38%.'
        },
        {
          id: 'reverse-eng-testing',
          title: 'اختبارات التوافق الكهرومغناطيسي (EMC/EMI) والمعامل',
          shortDesc: 'فحوصات التوافق الكهرومغناطيسي المسبقة واختبارات الإجهاد البيئي قبل الطرح التجاري.',
          fullDesc: 'نوفر مختبراً مجهزاً للتحقق من عدم انبعاث إشعاعات كهرومغناطيسية مشوشة وضمان مناعة الأجهزة ضد التفريغ الكهروستاتيكي وتيارات الصواعق وارتفاع الجهد.',
          points: [
            'اختبار التفريغ الكهروستاتيكي (ESD) حتى 15 كيلوفولت وفق معيار IEC 61000-4-2.',
            'غرفة لا صدى لاختبار مستويات الإشعاع الكهرومغناطيسي المنبعث والتوصيلي.',
            'اختبارات الإجهاد الحراري في غرف مناخية (-40° إلى +125° مئوية) ورطوبة تصل إلى 95%.',
            'إعداد الملفات الفنية لاستيفاء متطلبات شهادات الاعتماد الدولية CE و FCC و ISO.'
          ],
          outro: 'تقليل مخاطر إعادة الاختبار المكلفة وتسريع وصول منتجك التقني إلى الأسواق العالمية.'
        }
      ]
    },
    contact: {
      title: 'اتصل بالفريق الهندسي',
      subtitle: 'ناقش متطلباتك ومواصفاتك التقنية مع استشاريي الهندسة الإلكترونية لدينا.',
      addressLabel: 'المقر الرئيسي والمختبرات التقنية',
      address: 'المنطقة الصناعية للتكنولوجيا المتكاملة، مجمع E-12، سيكارانغ، جاوة الغربية 17530، إندونيسيا',
      emailLabel: 'البريد الإلكتروني الرسمي للمراسلات',
      email: 'engineering@nusantara-elektronika.co.id',
      phoneLabel: 'خط الاستفسارات والمكتب الفني',
      phone: '+62 (21) 8990-4521 / +62 811-9988-7766',
      hoursLabel: 'ساعات العمل الرسمية للمختبر',
      hours: 'الاثنين - الجمعة: 08:00 صباحاً - 05:00 مساءً (توقيت جاكرتا)',
      formTitle: 'إرسال طلب استشارة أو عرض أسعار',
      nameLabel: 'الاسم الكامل / اسم المنشأة',
      namePlaceholder: 'مثال: م. أحمد منصور (شركة التقنيات الحديثة)',
      emailLabelInput: 'البريد الإلكتروني للعمل',
      emailPlaceholder: 'name@company.com',
      serviceLabel: 'مجال الخدمة المطلوب',
      selectServicePlaceholder: '-- اختر فئة الخدمة --',
      messageLabel: 'وصف المتطلبات وحجم الإنتاج المقدر',
      messagePlaceholder: 'يرجى تقديم ملخص عن المواصفات، الكمية المتوقعة للنماذج الأولية، والجدول الزمني...',
      submitBtn: 'إرسال طلب الاستشارة',
      sendingBtn: 'جاري الإرسال إلى النظام...',
      successMsg: 'شكراً لك! تم استلام مواصفات مشروعك بنجاح. سيتواصل معك فريقنا الهندسي خلال 24 ساعة عمل.',
      errorMsg: 'تعذر الاتصال بخادم Google Script. يرجى التحقق من اتصالك بالإنترنت أو مراسلتنا مباشرة عبر البريد الإلكتروني.'
    },
    footer: {
      description: 'مؤسسة رائدة في تصميم أنظمة أشباه الموصلات، تصنيع لوحات الدوائر متعددة الطبقات، وحلول الأتمتة الصناعية بمعايير عالمية.',
      quickLinksTitle: 'روابط سريعة',
      servicesTitle: 'الخدمات الأساسية',
      contactTitle: 'بيانات التواصل',
      rights: 'جميع الحقوق محفوظة.',
      builtWith: 'تم التطوير باستخدام React JS ومعايير الهندسة المتقدمة.'
    }
  },

  // ===================== FRANÇAIS =====================
  fr: {
    navbar: {
      brand: 'Nusantara Électronique',
      brandSubtitle: 'Précision & Souveraineté',
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      whyUs: 'Nos Atouts',
      contact: 'Contact',
      consultationBtn: 'Demander un Devis',
      toggleTheme: 'Changer Thème',
      selectLanguage: 'Choisir Langue'
    },
    hero: {
      badge: 'Solutions Électroniques Nouvelle Génération',
      tagline: 'Haute Précision. Évolutivité Industrielle.',
      title: 'Ingénierie Électronique & Automatisation Intelligente',
      slogan: 'Concevoir du matériel haute performance pour l’ère industrielle numérique',
      subtitle: 'Nous concevons, validons et fabriquons des systèmes à semi-conducteurs embarqués, des modules IoT industriels et des circuits imprimés multicouches selon les normes internationales les plus strictes.',
      ctaPrimary: 'Découvrir nos Solutions',
      ctaSecondary: 'Contacter nos Ingénieurs',
      metrics: [
        { value: '99.8%', label: 'Fiabilité Matérielle' },
        { value: '350+', label: 'Systèmes Embarqués Livrés' },
        { value: 'ISO 9001', label: 'Norme Qualité Certifiée' }
      ],
      previewBadge: 'STACK HARDWARE & FIRMWARE v4.2',
      previewFileName: 'telemetry_controller.ts',
      previewCode: [
        '// Initialisation du Contrôleur Microélectronique IoT',
        'import { MicroController, SensorBus } from "@nusantara/core";',
        '',
        'export class TelemetryBridge extends MicroController {',
        '  private bus = new SensorBus({ baudRate: 115200, redundancy: true });',
        '',
        '  async calibrateSensors(): Promise<DiagnosticResult> {',
        '    await this.bus.syncClock();',
        '    const health = await this.readPcbThermalTelemetry();',
        '    return health.status === "OPTIMAL" ? health : this.autoCompensate();',
        '  }',
        '}'
      ]
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Pionnier de la Conception & Fabrication Électronique de Précision',
      lead: 'Fondée comme centre d’excellence en ingénierie matérielle, PT Nusantara Elektronika Mandiri se consacre à la création de systèmes embarqués robustes et souverains, conçus pour opérer dans des environnements sévères.',
      visionTag: 'Notre Vision',
      visionText: 'Devenir le leader de référence en technologies de microélectronique et semi-conducteurs en Asie du Sud-Est, favorisant une industrie moderne, souveraine et durable.',
      missionTag: 'Notre Mission',
      missions: [
        'Développer la recherche en microélectronique et circuits imprimés haute densité.',
        'Fournir des solutions OEM/ODM d’automatisation industrielle conformes aux normes strictes.',
        'Former les talents d’ingénierie locaux pour renforcer les chaînes d’approvisionnement.',
        'Adopter des processus de fabrication écoresponsables à haute efficacité énergétique.'
      ],
      stats: [
        { number: '15+', label: 'Ans d’Expérience' },
        { number: '48+', label: 'Ingénieurs Certifiés' },
        { number: '120k+', label: 'PCB Fabriqués / Mois' },
        { number: '18', label: 'Brevets Industriels Déposés' }
      ]
    },
    advantages: {
      title: 'Pourquoi Nous Choisir',
      subtitle: 'Des standards d’ingénierie sans compromis pour vos équipements de mission critique.',
      items: [
        {
          number: '01',
          title: 'Précision de Fabrication au Micron',
          desc: 'Lignes d’assemblage CMS (SMT) haute vitesse avec inspection optique automatisée 3D (AOI) et contrôle rayons X pour des soudures irréprochables.'
        },
        {
          number: '02',
          title: 'Cycle Accéléré Conception-Prototype',
          desc: 'Accélération R&D du schéma préliminaire aux simulations thermiques/CEM jusqu’au prototype fonctionnel testé en 5 jours ouvrés.'
        },
        {
          number: '03',
          title: 'Conformité & Certifications Mondiales',
          desc: 'Nos circuits respectent scrupuleusement les normes RoHS, CE, FCC et ISO 9001:2015, garantissant sécurité et compatibilité électromagnétique.'
        }
      ]
    },
    whyUs: {
      title: 'Nos Atouts Majeurs',
      subtitle: 'Des standards d’ingénierie sans compromis pour vos équipements de mission critique.',
      items: [
        {
          number: '01',
          title: 'Précision de Fabrication au Micron',
          desc: 'Lignes d’assemblage CMS (SMT) haute vitesse avec inspection optique automatisée 3D (AOI) et contrôle rayons X pour des soudures irréprochables.'
        },
        {
          number: '02',
          title: 'Cycle Accéléré Conception-Prototype',
          desc: 'Accélération R&D du schéma préliminaire aux simulations thermiques/CEM jusqu’au prototype fonctionnel testé en 5 jours ouvrés.'
        },
        {
          number: '03',
          title: 'Conformité & Certifications Mondiales',
          desc: 'Nos circuits respectent scrupuleusement les normes RoHS, CE, FCC et ISO 9001:2015, garantissant sécurité et compatibilité électromagnétique.'
        }
      ]
    },
    services: {
      title: 'Services & Portefeuille de Solutions',
      subtitle: 'Prestations complètes, de la conception schématique initiale à la fabrication en série.',
      viewDetails: 'Détails Techniques',
      modalClose: 'Fermer',
      modalKeyPointsTitle: 'Capacités et Spécifications Clés',
      items: [
        {
          id: 'pcb-engineering',
          title: 'Conception & Fabrication PCB Multicouche',
          shortDesc: 'Développement de circuits imprimés HDI jusqu’à 32 couches avec maîtrise totale de l’intégrité du signal.',
          fullDesc: 'Notre expertise couvre l’empilement des couches (stackup), l’analyse d’intégrité de signal et de puissance (SI/PI), les simulations d’impédance contrôlée et la gestion thermique pour RF et FPGA haute fréquence.',
          points: [
            'Circuits HDI, micro-vias borgnes/enterrés et circuits flex-rigides.',
            'Modélisation SI/PI gigahertz avant validation pour fabrication.',
            'Substrats spécifiques : Rogers, FR-4 haute Tg et polyimide thermique.',
            'Contrôle rayons X 3D systématique sur boîtiers BGA et micro-QFN.'
          ],
          outro: 'Livrables optimisés pour la production série avec MTBF supérieur à 100 000 heures.'
        },
        {
          id: 'iot-embedded',
          title: 'Firmware Embarqué & Systèmes IoT',
          shortDesc: 'Développement logiciel temps réel (RTOS) avec sécurité cryptographique matérielle et protocoles industriels.',
          fullDesc: 'Nous développons des micrologiciels basse consommation et hautement sécurisés pour passerelles SCADA, capteurs industriels et télémesure via LoRaWAN, NB-IoT et Ethernet industriel.',
          points: [
            'Architectures RTOS déterministes (FreeRTOS, Zephyr).',
            'Support processeurs ARM Cortex-M/R, RISC-V et DSP haute cadence.',
            'Mises à jour sécurisées par voie hertzienne (FOTA) avec double partition de repli.',
            'Intégration d’éléments matériels sécurisés (Secure Element / TPM).'
          ],
          outro: 'Validation exhaustive par banc de test automatisé hardware-in-the-loop (HIL).'
        },
        {
          id: 'industrial-automation',
          title: 'Automatisation Industrielle & Instrumentation',
          shortDesc: 'Armoires de commande API personnalisées, systèmes d’acquisition de mesure et actionneurs intelligents.',
          fullDesc: 'Interconnexion entre machines d’atelier et plateformes cloud. Nous concevons une instrumentation durcie CEM résistante aux vibrations extrêmes et aux poussières d’usine.',
          points: [
            'Protocoles industriels : Modbus RTU/TCP, PROFINET, EtherCAT, CANopen.',
            'Isolation galvanique jusqu’à 5 kV pour la protection des opérateurs.',
            'Convertisseurs analogique-numérique (CAN) 24 bits à dérive thermique minimale.',
            'Boîtiers IP66 / NEMA 4X testés contre l’humidité et les chocs mécaniques.'
          ],
          outro: 'Augmentation mesurée du taux de rendement synthétique (TRS/OEE) jusqu’à 38%.'
        },
        {
          id: 'reverse-eng-testing',
          title: 'Essais en Laboratoire CEM/EMI & Certification',
          shortDesc: 'Validation de pré-conformité électromagnétique et tests de contraintes environnementales.',
          fullDesc: 'Installations de laboratoire internes pour certifier l’absence d’émissions parasites et la robustesse contre les décharges électrostatiques (ESD) et les surtensions.',
          points: [
            'Essais de décharges électrostatiques (ESD) jusqu’à 15 kV (CEI 61000-4-2).',
            'Chambre semi-anéchoïque pour mesures de rayonnements et émissions conduites.',
            'Tests climatiques en enceinte thermique (-40°C à +125°C) et 95% d’humidité.',
            'Dossiers techniques de certification officielle pour normes CE, FCC et ISO.'
          ],
          outro: 'Réduction des coûts de reprise et accélération de la mise sur le marché de vos produits.'
        }
      ]
    },
    contact: {
      title: 'Contacter notre Équipe Technique',
      subtitle: 'Échangez sur vos besoins d’ingénierie avec nos consultants experts en électronique.',
      addressLabel: 'Siège & Laboratoire d’Essais',
      address: 'Zone Industrielle Technologique Intégrée, Bloc E-12, Cikarang 17530, Indonésie',
      emailLabel: 'Courriel Officiel',
      email: 'engineering@nusantara-elektronika.co.id',
      phoneLabel: 'Ligne Directe / Support Technique',
      phone: '+62 (21) 8990-4521 / +62 811-9988-7766',
      hoursLabel: 'Heures d’Ouverture du Laboratoire',
      hours: 'Lundi - Vendredi : 08h00 - 17h00 (UTC+7)',
      formTitle: 'Demander une Étude ou un Devis',
      nameLabel: 'Nom Complet / Société',
      namePlaceholder: 'ex. Dr. Jean-Pierre Laurent (Systèmes Avancés SAS)',
      emailLabelInput: 'Adresse Email Professionnelle',
      emailPlaceholder: 'nom@entreprise.com',
      serviceLabel: 'Prestation Souhaitée',
      selectServicePlaceholder: '-- Sélectionner une Catégorie --',
      messageLabel: 'Cahier des Charges & Volumes Estimés',
      messagePlaceholder: 'Décrivez vos contraintes techniques, les volumes de prototypes souhaités et l’échéance du projet...',
      submitBtn: 'Envoyer la Demande',
      sendingBtn: 'Transmission en cours...',
      successMsg: 'Merci ! Vos spécifications ont bien été enregistrées. Nos ingénieurs vous répondront sous 24 heures ouvrées.',
      errorMsg: 'Échec de transmission vers le serveur Google Script. Veuillez vérifier votre connexion ou nous contacter par email.'
    },
    footer: {
      description: 'Pionnier en conception de systèmes électroniques, circuits multicouches et automatisation industrielle de classe mondiale.',
      quickLinksTitle: 'Navigation',
      servicesTitle: 'Expertises',
      contactTitle: 'Coordonnées',
      rights: 'Tous droits réservés.',
      builtWith: 'Conçu avec React JS et des standards d’ingénierie de précision.'
    }
  }
};

/**
 * Helper function to safely retrieve nested translation key with fallback.
 */
export const getTranslation = (lang = 'id') => {
  return translations[lang] || translations.id;
};

