# Masjid Polindra

Aplikasi manajemen masjid berbasis Laravel, Inertia, dan React untuk membantu pengelolaan konten, kegiatan, keuangan kas, monitor informasi, serta akun pengguna.

## Ringkasan Proyek

Project ini menggunakan pola fullstack Laravel + Inertia, jadi backend dan frontend berada dalam satu repository:

- Backend: Laravel 10
- Frontend: React 18
- Bundler: Vite
- Styling: Tailwind CSS + DaisyUI
- Database utama: MySQL

## Fitur Utama

- Dashboard ringkasan saldo, pemasukan, dan pengeluaran
- Manajemen laporan kas
- Manajemen kegiatan/event masjid
- Upload dan pengelolaan materi event
- Manajemen postingan
- Monitor informasi
- Manajemen akun pengguna
- Kotak saran
- API sederhana untuk event dan postingan

## Kebutuhan Sistem

Sebelum menjalankan project ini, pastikan environment lokal sudah memiliki:

- PHP 8.1 atau lebih baru
- Composer
- Node.js dan npm
- MySQL / MariaDB

## Cara Setup Project

1. Clone repository ini lalu masuk ke folder project.
2. Install dependency backend:

```bash
composer install
```

3. Install dependency frontend:

```bash
npm install
```

4. Salin file environment:

```bash
cp .env.example .env
```

Jika menggunakan Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

5. Generate application key:

```bash
php artisan key:generate
```

6. Atur koneksi database di file `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_anda
DB_USERNAME=root
DB_PASSWORD=
```

7. Jalankan migrasi dan seeder:

```bash
php artisan migrate --seed
```

Seeder bawaan akan membuat:

- 1 akun admin default
- 1 data saldo awal

8. Pastikan folder upload tersedia.

Project ini menyimpan file upload langsung ke folder `public`, terutama:

- `public/images`
- `public/materi`

Jika folder belum ada, buat manual.

Contoh di PowerShell:

```powershell
New-Item -ItemType Directory -Force public\images
New-Item -ItemType Directory -Force public\materi
```

## Menjalankan Project

Jalankan 2 terminal:

Terminal 1:

```bash
php artisan serve
```

Terminal 2:

```bash
npm run dev
```

Lalu buka:

```text
http://127.0.0.1:8000
```

## Akun Default Seeder

Jika menjalankan `php artisan migrate --seed`, akun admin awal yang dibuat adalah:

- Username: `admin`
- Password: `12345678`

## Struktur Singkat

Folder penting dalam project:

- `app/Http/Controllers` untuk controller backend
- `app/Models` untuk model Eloquent
- `database/migrations` untuk struktur database
- `database/seeders` untuk data awal
- `resources/js/Pages` untuk halaman React/Inertia
- `routes/web.php` untuk route web
- `routes/api.php` untuk route API

## Perintah yang Sering Dipakai

Menjalankan server Laravel:

```bash
php artisan serve
```

Menjalankan Vite:

```bash
npm run dev
```

Build frontend untuk production:

```bash
npm run build
```

Menjalankan test:

```bash
php artisan test
```

Proyek ini menggunakan lisensi [MIT License](https://opensource.org/licenses/MIT).
