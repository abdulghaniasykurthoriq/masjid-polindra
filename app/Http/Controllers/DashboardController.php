<?php

namespace App\Http\Controllers;

use App\Models\KeuanganDetail;
use App\Models\LaporanKeuangan;
use App\Models\Pemasukan;
use App\Models\Pengeluaran;
use App\Models\Saldo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $saldo = Saldo::query()->where('id', 1)->get();

        $latestMonth = LaporanKeuangan::query()
            ->orderBy('created_at', 'desc')
            ->value(LaporanKeuangan::raw('MONTH(created_at)'));
        $totalPemasukan = LaporanKeuangan::query()->where('status', 'pemasukan')->whereMonth('created_at', $latestMonth)
            ->sum('total');
        $latestCreatedAt = LaporanKeuangan::query()->where('status', 'pemasukan')
            ->orderBy('created_at', 'desc')
            ->value('created_at');

        $totalPemasukan = $totalPemasukan;
        $periodePemasukan = $latestCreatedAt;


        $latestMonthX = LaporanKeuangan::query()
            ->orderBy('created_at', 'desc')
            ->value(LaporanKeuangan::raw('MONTH(created_at)'));
        $totalPemasukanX = LaporanKeuangan::query()->where('status', 'pengeluaran')->whereMonth('created_at', $latestMonthX)
            ->sum('total');
        $latestCreatedAt2 = LaporanKeuangan::query()->where('status', 'pengeluaran')
            ->orderBy('created_at', 'desc')
            ->value('created_at');

        $totalPengeluaran = $totalPemasukanX;
        $periodePengeluaran = $latestCreatedAt2;


        // $latestMonth2 = Pengeluaran::query()
        //     ->orderBy('created_at', 'desc')
        //     ->value(Pengeluaran::raw('MONTH(created_at)'));
        // $pengeluaran = Pengeluaran::query()
        //     ->whereMonth('created_at', $latestMonth2)
        //     ->get();

        // $totalPengeluaran = 0;
        // $periodePengeluaran = '';
        // foreach ($pengeluaran as $pmskn) {
        //     $totalPengeluaran += $pmskn->jumlah_pengeluaran;
        //     $periodePengeluaran = $pmskn->created_at;
        // }

        return Inertia::render('Dashboard', [
            'saldo' => $saldo,
            'pemasukan' => $totalPemasukan,
            'periode_pemasukan' => $periodePemasukan,
            'pengeluaran' => $totalPengeluaran,
            'periode_pengeluaran' => $periodePengeluaran
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
