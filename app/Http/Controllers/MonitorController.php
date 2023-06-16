<?php

namespace App\Http\Controllers;

use App\Models\JadwalSholat;
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

        $currentDateTime = date('Y-m-d 00:00:00');

        $jadwal_sholat = JadwalSholat::query()->where('created_at', $currentDateTime)->first();
        $subuh = '';
        $duhur = '';
        $ashar = '';
        $maghrib = '';
        $isya = '';
        $tanggal_jadwal_sholat = '';

        if ($jadwal_sholat) {
            $subuh = $jadwal_sholat->subuh;
            $duhur = $jadwal_sholat->duhur;
            $ashar = $jadwal_sholat->ashar;
            $maghrib = $jadwal_sholat->maghrib;
            $isya = $jadwal_sholat->isya;
            $tanggal_jadwal_sholat = $jadwal_sholat->created_at;
        }
        //   dd($jadwal_sholat);
        return Inertia::render('Monitor', [
            'laporan_keuangan' => $laporan_keuangan,
            'postingan' => $postingan,
            'subuh' => $subuh,
            'duhur' => $duhur,
            'ashar' => $ashar,
            'maghrib' => $maghrib,
            'isya' => $isya,
            'tanggal_jadwal_sholat' => $tanggal_jadwal_sholat
        ]);
    }
}
