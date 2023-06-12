<?php

namespace App\Http\Controllers;

use App\Models\LaporanKeuangan;
use App\Models\Postingan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MonitorController extends Controller
{
    public function index()
    {
        $laporan_keuangan = LaporanKeuangan::orderBy('created_at', 'desc')->limit(5)->get();
        $postingan = Postingan::orderBy('created_at', 'desc')->limit(5)->get();

        return Inertia::render('Monitor', [
            'laporan_keuangan' => $laporan_keuangan,
            'postingan' => $postingan
        ]);
    }
}
