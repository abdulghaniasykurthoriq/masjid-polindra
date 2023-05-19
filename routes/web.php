<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\KehadiranJamaahController;
use App\Http\Controllers\KotakSaranController;
use App\Http\Controllers\LaporanKasController;
use App\Http\Controllers\ManagementAkunController;
use App\Http\Controllers\PostinganController;
use App\Http\Controllers\ProfileController;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/laporan-kas', [LaporanKasController::class, 'index'])->name('kas.index');
    Route::get('/laporan-kas/pemasukan', [LaporanKasController::class, 'createPemasukan'])->name('kas.createPemasukan');
    Route::get('/laporan-kas/pengeluaran', [LaporanKasController::class, 'createPemasukan'])->name('kas.createPengeluaran');

    Route::get('/event', [EventController::class, 'index'])->name('event.index');
    Route::get('/event/create', [EventController::class, 'create'])->name('event.create');
    // Route::patch('/event', [EventController::class, 'update'])->name('event.update');
    // Route::delete('/event', [EventController::class, 'destroy'])->name('event.destroy');
    Route::get('/postingan', [PostinganController::class, 'index'])->name('postingan.index');
    Route::get('/kehadiran-jamaah', [KehadiranJamaahController::class, 'index'])->name('kehadiran-jamaah.index');
    Route::get('/kotak-saran', [KotakSaranController::class, 'index'])->name('kotak-saran.index');

    Route::get('/dashboard', [PostinganController::class, 'index'])->name('postingan.index');

    Route::get('/akun', [ManagementAkunController::class, 'index'])->name('akun.index');
});


require __DIR__ . '/auth.php';
