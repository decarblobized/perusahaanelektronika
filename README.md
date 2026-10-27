# PT Nusantara Elektronika Mandiri - Corporate Portal

Website korporat responsif, modern, dan multi-bahasa untuk organisasi perusahaan manufaktur & rekayasa elektronika yang dibangun dengan **React JS + Vite**.

---

## 🚀 Fitur Utama & Arsitektur

1. **Multi-Bahasa (ID, EN, AR, FR)**
   - **Penyimpanan State:** Pilihan bahasa disimpan di `localStorage` dengan kunci `'selected_language'`.
   - **Deteksi Browser Otomatis:** Deteksi awal menggunakan `navigator.language`. Jika bahasa bukan salah satu dari bahasa yang didukung, otomatis fallback ke Bahasa Indonesia (`'id'`).
   - **RTL Support:** Dukungan native Right-to-Left untuk Bahasa Arab (`dir="rtl"`).
   - **Fungsi Konteks:** Menyediakan fungsi `changeLanguage(code)` dan alias `setLang` melalui `LanguageContext.jsx`.
   - **Struktur Kamus Konsisten:** Menjamin tidak ada runtime error `undefined` saat membaca data terjemahan.

2. **Mode Gelap / Terang (Dark / Light Mode)**
   - **Penyimpanan State:** Disimpan di `localStorage` dengan kunci `'app_theme'`.
   - **Atribut Root HTML:** Memanipulasi atribut `data-theme="dark"` / `data-theme="light"` pada elemen `<html>`.
   - **CSS Variables:** Mendukung variabel CSS lengkap via `:root` dan `[data-theme="dark"]` di `index.css`.

3. **Interactive Modal Layanan (Services.jsx)**
   - Kartu layanan dapat diklik untuk membuka modal pop-up detail spesifikasi teknis.
   - Konten modal responsif terhadap bahasa aktif (menampilkan judul, deskripsi lengkap, poin-poin utama kapabilitas, dan outro).
   - Dilengkapi penutup modal tombol ESC, backdrop click, dan penguncian scroll layar.

4. **Formulir Kontak & Integrasi Google Sheets**
   - Mengirimkan data formulir langsung ke Google Apps Script Web App via `fetch()` POST.
   - Status loading interaktif (`"Sedang Mengirim ke Sistem..."` / Spinner) dan notifikasi alert sukses/gagal.

---

## 📁 Struktur Direktori Berkas

```
d:/Perusahaan Elektronika/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── assets/
    ├── components/
    │   ├── Navbar.jsx          # Mobile hamburger, selector bahasa & toggle tema
    │   ├── Hero.jsx            # Title, slogan, badge, preview card firmware TS
    │   ├── About.jsx           # Profil, visi & misi, counter statistik
    │   ├── Services.jsx        # Grid layanan & modal pop-up detail interaktif
    │   ├── WhyUs.jsx           # Keunggulan 01, 02, 03
    │   ├── Contact.jsx         # Detail kontak & formulir integrasi Google Sheets
    │   ├── Footer.jsx          # Deep navy footer & navigasi cepat
    │   └── LoadingSpinner.jsx  # Indikator loading spinner SVG/CSS
    ├── context/
    │   ├── LanguageContext.jsx # Context bahasa, auto-detection, setLang alias
    │   └── ThemeContext.jsx    # Context tema light/dark, DOM data-theme sync
    ├── data/
    │   ├── translations.js     # Kamus data lengkap ID, EN, AR, FR
    │   └── newsData.js         # Data berita & rilis teknis korporat
    ├── index.css               # Consolidated design system & CSS variables
    ├── App.jsx                 # Main layout & context providers
    └── main.jsx                # Entry point ReactDOM root
```

---

## 🛠️ Panduan Integrasi Google Apps Script (Google Sheets)

Untuk menyambungkan formulir kontak ke spreadsheet Google Anda:

1. Buat Google Sheets baru di Google Drive Anda (misal beri nama `Database Kontak Nusantara Elektronika`).
2. Beri nama kolom pada baris 1:
   - Kolom A: `Timestamp`
   - Kolom B: `Name`
   - Kolom C: `Email`
   - Kolom D: `Service`
   - Kolom E: `Message`
3. Klik menu **Extensions (Ekstensi)** > **Apps Script**.
4. Tempelkan kode Google Apps Script berikut:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name,
      data.email,
      data.service,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data logged successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Klik tombol **Deploy** > **New deployment**.
6. Pilih type **Web app**.
   - **Execute as:** `Me (akun Anda)`
   - **Who has access:** `Anyone` (PENTING agar form website dapat mengirim tanpa login Google).
7. Salin URL Web App yang dihasilkan (berakhiran `/exec`).
8. Masukkan URL tersebut pada file `.env` di proyek:
   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```
   *(Atau ubah konstanta `DEFAULT_SCRIPT_URL` di `src/components/Contact.jsx`)*.

---

## 💻 Cara Menjalankan Proyek

1. **Install dependensi:**
   ```bash
   npm install
   ```
2. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan terbuka otomatis di browser pada `http://localhost:3000`.

3. **Build untuk produksi:**
   ```bash
   npm run build
   ```
   Hasil kompilasi siap di-deploy yang berada di folder `dist/`.

