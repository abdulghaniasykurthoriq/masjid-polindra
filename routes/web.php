<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\KehadiranJamaahController;
use App\Http\Controllers\KotakSaranController;
use App\Http\Controllers\LaporanKasController;
use App\Http\Controllers\ManagementAkunController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\MonitorController;
use App\Http\Controllers\PostinganController;
use App\Http\Controllers\ProfileController;
use App\Models\LaporanKeuangan;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return 'hello world';
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return Inertia::location(route('dashboard'));
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/monitor', [MonitorController::class, 'index'])->name('monitor.index');
// Route::get('/testPdf', function () {
//     $laporan = LaporanKeuangan::with('detail')
//         ->whereHas('detail') // Filter hanya ketika ada relasi "detail"
//         ->orderBy('created_at', 'desc')
//         ->find(1);


//     return view('pdf.template', compact('laporan'));
// });



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/laporan-kas', [LaporanKasController::class, 'index'])->name('kas.index');
    Route::post('/laporan-kas', [LaporanKasController::class, 'filter'])->name('kas.filter');
    Route::get('/laporan-kas/pemasukan', [LaporanKasController::class, 'createPemasukan'])->name('kas.createPemasukan');
    Route::post('/laporan-kas/pemasukan', [LaporanKasController::class, 'storePemasukan'])->name('kas.storePemasukan');

    Route::get('/laporan-kas/pengeluaran', [LaporanKasController::class, 'createPengeluaran'])->name('kas.createPengeluaran');
    Route::get('/laporan-kas/{id}/downloadpdf', [LaporanKasController::class, 'generatePDF'])->name('kas.generatePDF');
    Route::post('/laporan-kas/pengeluaran', [LaporanKasController::class, 'storePengeluaran'])->name('kas.storePengeluaran');
    Route::get('/laporan-kas/detail', [LaporanKasController::class, 'detail'])->name('kas.detail');
    Route::delete('/laporan-kas/{id}/delete', [LaporanKasController::class, 'destroy'])->name('kas.destroy');

    Route::get('/event', [EventController::class, 'index'])->name('event.index');
    Route::post('/event/filter', [EventController::class, 'filter'])->name('event.filter');

    Route::post('/event', [EventController::class, 'store'])->name('event.store');
    Route::get('/event/create', [EventController::class, 'create'])->name('event.create');
    Route::get('/event/{id}', [EventController::class, 'detail'])->name('eventdetail');
    Route::delete('/event/{id}', [EventController::class, 'destroy'])->name('event.destroy');

    // Route::patch('/event', [EventController::class, 'update'])->name('event.update');
    // Route::delete('/event', [EventController::class, 'destroy'])->name('event.destroy');
    Route::get('/postingan', [PostinganController::class, 'index'])->name('postingan.index');
    Route::post('/postingan', [PostinganController::class, 'filter'])->name('postingan.filter');
    Route::get('/postingan/create', [PostinganController::class, 'create'])->name('postingan.create');
    Route::post('/postingan/create', [PostinganController::class, 'store'])->name('postingan.store');
    Route::get('/postingan/{id}/edit', [PostinganController::class, 'edit'])->name('postingan.edit');
    Route::put('/postingan/{id}/update', [PostinganController::class, 'update'])->name('postingan.update');
    Route::delete('/postingan/{id}/delete', [PostinganController::class, 'destroy'])->name('postingan.delete');
    Route::get('/materi{name}', [MateriController::class, 'downloadPDF'])->name('materi.downloadPDF');
    Route::delete('/materi{id}', [MateriController::class, 'destroy'])->name('materi.destroy');


    Route::get('/kehadiran-jamaah', [KehadiranJamaahController::class, 'index'])->name('kehadiran-jamaah.index');

    Route::get('/kotak-saran', [KotakSaranController::class, 'index'])->name('kotak-saran.index');
    Route::get('/kotak-saran/masuk', [KotakSaranController::class, 'kotakSaranMasuk'])->name('kotak-saran.masuk');
    Route::post('/kotak-saran/{id}/setujui', [KotakSaranController::class, 'setujuiSaran'])->name('kotak-saran.setujui');
    Route::delete('/kotak-saran/{id}/hapus', [KotakSaranController::class, 'hapusSaran'])->name('kotak-saran.hapus');



    // Route::get('/dashboard', [PostinganController::class, 'index'])->name('postingan.index');

    Route::get('/akun', [ManagementAkunController::class, 'index'])->name('akun.index')->middleware('checkRole:dosen,admin');
    Route::post('/akun', [ManagementAkunController::class, 'filter'])->name('akun.index')->middleware('checkRole:dosen,admin');
    Route::get('/akun/create', [ManagementAkunController::class, 'create'])->name('akun.create')->middleware('checkRole:dosen,admin');
    Route::post('/akuncreate', [ManagementAkunController::class, 'store'])->middleware('checkRole:dosen,admin');
    Route::get('/akun/update/{id}', [ManagementAkunController::class, 'update'])->name('akun.update')->middleware('checkRole:dosen,admin');
    Route::post('/akun/update/{id}', [ManagementAkunController::class, 'updateStore'])->name('akun.updateStore')->middleware('checkRole:dosen,admin');
    Route::put('/akun/{id}/resetpassword', [ManagementAkunController::class, 'resetPassword'])->name('akun.resetPassword')->middleware('checkRole:dosen,admin');
    Route::delete('/akun/{id}/delete', [ManagementAkunController::class, 'destroy'])->name('akun.destroy')->middleware('checkRole:dosen,admin');
});


require __DIR__ . '/auth.php';
