# PRD: High-End Engineering Portfolio "lalalostcode"

## 1. Project Overview
Membangun website portofolio satu halaman (*Single Page Application*) berperforma tinggi untuk **Ilham Rafiqin** (Nama panggung: **lalalostcode**). Website ini harus menunjukkan keahlian teknis tingkat tinggi sebagai mahasiswa Teknik Komputer dalam bidang **Data Engineering, AI, dan Cloud Computing**.

*   **Identitas Utama:** Ilham Rafiqin (lalalostcode), Mahasiswa Teknik Komputer Universitas Brawijaya (GPA 3.79, C1 Advanced English).
*   **Vibe Desain:** "Structural Sophistication"—arsitektural, bersih, kokoh, dan profesional.

---

## 2. Visual Identity & Typography
*   **Branding:** Gunakan gaya dua warna pada teks **lalalost** (White) **code** (Sage Green) secara konsisten di *Navbar* dan *Hero Section*.
*   **Palet Warna (Inspirasi Kahf):**
    *   **Primary Background:** Deep Forest/Olive Green (`#3C4032`).
    *   **Primary Accent:** Sage Green (`#8F9E8B`).
    *   **Typography:** Pure White atau Pearl White untuk kontras tinggi di atas latar gelap.
*   **Typography (Tech Professional):**
    *   **Headings:** *Plus Jakarta Sans* atau *Outfit*.
    *   **Body:** *Inter*.
    *   **Terminal/Code:** *JetBrains Mono*.

---

## 3. Site Architecture & Navigation

### A. The Master Switch (Main Toggle)
Implementasikan sistem navigasi dua lapis untuk mengorganisir data teknis yang padat:
1.  **Level 1 (Toggle Utama):** Beralih antara **[ Selected Works ]** (Proyek) dan **[ Credentials & Expertise ]** (Sertifikasi & Akademik).
2.  **Level 2 (Sub-Filtering):** Hanya muncul saat view "Projects" aktif. Filter terdiri dari: **AI, Data Engineering, IoT, dan Cloud Engineering**.

---

## 4. Layout Specifications

### A. Hero Section (Stripe-Inspired)
*   **Background:** **Dynamic Mesh Gradient** yang bergerak lambat (*slow-float*) dengan transisi warna Deep Olive dan Sage Green.
*   **Hero Visual (Interactive Terminal):** Gantikan ilustrasi statis dengan *Glassmorphic Terminal Container* di sisi kanan.
    *   **Logic (Framer Motion Typewriter):**
        1. `$ whoami` -> Response: **Ilham Rafiqin** (White) **(lalalostcode)** (Sage).
        2. `$ I am into` -> Dynamic Loop: `[Data Engineering]`, `[Cloud Computing]`, `[AI Development]`, `[IoT Systems]`.
        3. `$ Experienced in` -> Dynamic Loop: `[AITF Kemenkomdigi]`, `[Budaya GO! (Top 10)]`, `[Sekolah Rakyat Project]`.

### B. About & Experience Section
Merujuk pada struktur layout daftar vertikal:
*   **Hero Profile:** Foto profil di kiri, bio profesional di kanan yang menonjolkan profil akademik.
*   **Experience List:** Menampilkan pengalaman di **AI Talent Factory (AITF)** dan kepemimpinan di proyek **Sekolah Rakyat**.
*   **Visual Proof:** Tampilkan gambar dokumentasi/foto di sisi kanan setiap baris pengalaman.

### C. Projects Grid & Side Drawer
Merujuk pada struktur `image_e284e0.jpg` dan `image_e2901e.jpg`:
*   **Grid Layout:** Menampilkan kartu proyek secara responsif dengan efek *glassmorphism*.
*   **Interaction (Side Drawer):** Klik pada kartu akan membuka panel dari sisi kanan (overlay).
*   **Content Drawer:** Deskripsi teknis menggunakan metode $S.T.A.R.$ (Situation, Task, Action, Result).

### D. Contact Section: "Get in Touch"
*   **Visual Header:** **get in** (White) **touch** (Sage Green).
*   **Contact Form:** Formulir pesan (Name, Email, Subject, Message) dengan integrasi fungsional ke email pribadi.
*   **Social Connectivity:** Tampilkan ikon minimalis untuk GitHub (lalalostcode), LinkedIn (Ilham Rafiqin), dan Email.

---

## 5. Content Mapping (Source: Attached CV & Profile)
*Instruksi: Ambil semua detail teknis secara eksklusif dari data di bawah ini atau file CV yang dilampirkan.*

*   **AI Category:** **Sekolah Rakyat** (LLM content), **TinyTorch** (Deep Learning framework), **Scancer** (Skin disease detection), **Maltopia**.
*   **Data Engineering Category:** **Smart Harvest** (ETL pipeline) menggunakan *Apache Airflow* dan *Docker*.
*   **Cloud Engineering Category:** Persiapan **AWS Certified Cloud Practitioner**.
*   **Credentials & Awards:** Top 10 Finalist **Budaya GO! 2025**, AITF Intern di Kemenkomdigi, IPK 3.79.

---

## 6. Technical Requirements
1.  **Strict Palette Compliance:** Dilarang menggunakan warna di luar turunan Sage Green, Deep Olive, dan White.
2.  **Animations:** Implementasikan `framer-motion` untuk efek *typing* terminal, transisi navigasi, dan pembukaan *side drawer*.
3.  **Framework:** Next.js (App Router) + Tailwind CSS + TypeScript.
4.  **No Hallucinations:** Ambil deskripsi teknis (seperti *Kafka, Terraform, uv, MobileNet V4*) murni dari data yang disediakan.