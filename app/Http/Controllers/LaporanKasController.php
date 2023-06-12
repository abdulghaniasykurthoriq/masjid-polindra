<?php

namespace App\Http\Controllers;

use App\Models\LaporanKeuangan;
use App\Models\Pemasukan;
use App\Models\Pengeluaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LaporanKasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // $laporanKeuangan = LaporanKeuangan::orderBy('created_at', 'desc')->limit(5)->get();
        $laporan = LaporanKeuangan::query()->orderBy('created_at', 'desc');
        $kode = $request->input('kode');
        if ($kode) {
            $laporan->where('kode_laporan', 'like', '%' . $kode . '%');
        }
        $laporanKeuangan = $laporan->get();
        return Inertia::render('LaporanKas/index', [
            'laporan_keuangan' => $laporanKeuangan
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function createPemasukan()
    {
        $kode_laporan = LaporanKeuangan::count() + 1;
        $kode = 'KD' . $kode_laporan;
        return Inertia::render('LaporanKas/Pemasukan', [
            'kode_laporan' => $kode
        ]);
    }

    public function createPengeluaran()
    {
        $kode_laporan = LaporanKeuangan::count() + 1;
        $kode = 'KD' . $kode_laporan;
        return Inertia::render('LaporanKas/Pengeluaran', [
            'kode_laporan' => $kode
        ]);
    }

    public function detail()
    {
        return Inertia::render('LaporanKas/Detail');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storePemasukan(Request $request)
    {
        $laporanKas = new LaporanKeuangan();
        $laporanKas->kode_laporan = $request->kode_laporan;
        $laporanKas->user_id = 1;
        $laporanKas->status = "pemasukan";

        foreach ($request->items as $pemasukan) {
            $laporanKas->total += $pemasukan['jumlah_pemasukan'];
        }
        $laporanKas->save();
        // dd($request->items);
        foreach ($request->items as $pemasukan) {
            Pemasukan::create([
                'users_id' => Auth::user()->id,
                'kategory' => $pemasukan['kategory'],
                'laporan_id' => $laporanKas->id,
                'jumlah_pemasukan' => $pemasukan['jumlah_pemasukan'],
                'keterangan' => $pemasukan['keterangan']
            ]);
        }
        return Inertia::location(route('kas.index'));
        //return redirect()->route('kas.index')->with('success', 'Data Berhasil Dibuat!');
    }
    public function storePengeluaran(Request $request)
    {
        $laporanKas = new LaporanKeuangan();
        $laporanKas->kode_laporan = $request->kode_laporan;
        $laporanKas->user_id = 1;
        $laporanKas->status = "pengeluaran";

        foreach ($request->items as $pengeluaran) {
            $laporanKas->total += $pengeluaran['jumlah_pengeluaran'];
        }
        $laporanKas->save();
        // dd($request->items);
        foreach ($request->items as $pengeluaran) {
            Pengeluaran::create([
                'users_id' => Auth::user()->id,
                'kategory' => $pengeluaran['kategory'],
                'laporan_id' => $laporanKas->id,
                'jumlah_pengeluaran' => $pengeluaran['jumlah_pengeluaran'],
                'keterangan' => $pengeluaran['keterangan']
            ]);
        }
        return Inertia::location(route('kas.index'));
       // return redirect()->route('kas.index')->with('success', 'Data Berhasil Dibuat!');
    }
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
