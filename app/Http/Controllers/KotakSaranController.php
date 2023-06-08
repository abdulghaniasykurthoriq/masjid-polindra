<?php

namespace App\Http\Controllers;

use App\Models\KotakSaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KotakSaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $kotakSaranApproved = KotakSaran::query()
            ->when('status_approval', function ($query) {
                return $query->where('status_approval', true);
            })
            ->get();
        // $kotakSaranApproved->where('status_approval', 1);
        return Inertia::render(
            'KotakSaran/index',
            [
                'kotak_saran' => $kotakSaranApproved
            ]
        );
    }

    public function kotakSaranMasuk()
    {
        $kotakSaranMasuk = KotakSaran::query()
            ->when('status_approval', function ($query) {
                return $query->where('status_approval', false);
            })
            ->get();
        return Inertia::render('KotakSaran/KotakSaranMasuk', [
            'kotak_saran_masuk' => $kotakSaranMasuk
        ]);
    }
    public function setujuiSaran(string $id)
    {
        $kotakSaranMasuk = KotakSaran::find($id);
        $kotakSaranMasuk->status_approval = true;
        $kotakSaranMasuk->save();
        return redirect()->route('kotak-saran.index')->with('success', 'Saran Berhasil disetujui!');
    }

    public function hapusSaran(string $id)
    {
        $kotakSaranMasuk = KotakSaran::find($id);
        $kotakSaranMasuk->status_approval = true;
        $kotakSaranMasuk->delete();
        return redirect()->route('kotak-saran.index')->with('success', 'Saran Berhasil disetujui!');
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
