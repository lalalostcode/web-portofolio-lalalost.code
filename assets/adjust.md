1. Landingpage Home
I want the full is fully on the left side then we have some animation of anything animated on the rights side.

the contenth should be like my short summary. under the text should have icon for linkedin, github, email, cv, instagram. 

on the top of right side we have nav bar on theese

1. home
2. about
3. projects
5. Get in Touch 


Ini adalah Product Requirements Document (PRD) lengkap yang dirancang khusus untuk diberikan kepada AI Agent. Dokumen ini menggabungkan struktur desain dari referensi yang kamu berikan dengan identitas profesional dan data teknis kamu.

PRD: Portfolio Adjustment - Structural Sophistication
1. Project Overview
Tujuan dari proyek ini adalah melakukan pemutakhiran pada bagian "About" dan "Works" di website portofolio yang sudah ada. Website ini harus mencerminkan identitas sebagai Computer Engineering Student yang fokus pada Data Engineering, AI, dan Cloud Computing.

Design Philosophy: "Structural Sophistication"—bersih, terstruktur secara arsitektural, dan profesional.

Warna: Menggunakan palet yang sudah ada (Sage Green dan White).

Referensi Layout: FireShot Capture 002 - Afif's Portfolio - [www.afifalhauzan.me]_2.jpg (About & Experience) dan image_e284e0.jpg (Project Grid & Side Panel).

2. Page Architecture & Layout
A. About Me & Experience Section
Mengikuti struktur dari FireShot Capture 002 - Afif's Portfolio - [www.afifalhauzan.me]_2.jpg:

Header Profil: Foto profil di kiri dan deskripsi bio singkat di kanan yang menonjolkan spesialisasi AI dan Data Engineering.

Experience List: Daftar vertikal pengalaman profesional dan organisasi.

Setiap item memiliki detail: Nama Organisasi, Peran, Tahun, dan Deskripsi singkat.

Tampilkan foto/gambar terkait di sisi kanan setiap item pengalaman.

Tech Stack Grid: Tampilkan ikon tools (seperti Python, PyTorch, Airflow, Docker, AWS) yang dikelompokkan secara logis.

B. The "Master Switch" (Works & Credentials)
Implementasikan sistem navigasi dua lapis untuk memisahkan karya dan bukti kompetensi:

Toggle Utama: Tombol untuk beralih antara [ Projects ] dan [ Certifications & Training ].

Sub-Filter (Hanya untuk Projects): Empat kategori filter: AI, Data Engineering, IoT, dan Cloud Engineering.

3. Functional Specifications
View 1: Projects (Grid + Side Panel)
Grid Layout: Menampilkan kartu proyek secara responsif.

Interaction (Side Panel): Merujuk pada image_e284e0.jpg, setiap kartu yang diklik harus membuka panel samping (Right-Side Drawer).

Isi Panel:

Judul Proyek.

Tag Teknologi.

Deskripsi S.T.A.R (Situation, Task, Action, Result).

Link Repository GitHub.

View 2: Certifications & Training (List View)
Layout: Berubah dari bentuk grid menjadi Vertical Structural List.

Data Fields: Menampilkan Tahun, Nama Sertifikasi/Event, Penyelenggara, dan Link bukti kredensial.

4. Content Mapping (Source: CV)
Instruksi untuk Agent: Ambil detail data dari file CV yang dilampirkan.

AI Category: Sertakan proyek Sekolah Rakyat (LLM), TinyTorch (Framework), Scancer (Deep Learning), dan Maltopia.

Data Engineering: Sertakan Smart Harvest (ETL Pipeline) dan proyek otomasi data lainnya.

Cloud Engineering: Fokus pada persiapan AWS Certified Cloud Practitioner.

Certifications & Training: Masukkan AI Talent Factory (Kemenkomdigi), Top 10 Finalist Budaya GO! 2025, dan latar belakang akademik (IPK 3.79).

5. Technical & UI Requirements
Framework: React/Next.js dengan Tailwind CSS.

Animations: Gunakan transisi halus (fade atau slide) untuk perpindahan antar view dan pembukaan side panel.

Responsiveness: Layout wajib mobile-friendly, di mana grid dan panel akan bertumpuk secara vertikal pada layar kecil.

Constraint Warna: Dilarang menggunakan palet warna dari gambar referensi. Wajib menggunakan Sage Green dan White sesuai sistem yang sudah ada