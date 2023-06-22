<?php

namespace App\Http\Controllers;

use App\Models\Materi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class MateriController extends Controller
{
    public function downloadPDF(String $name)
    {
        // $materi = Materi::query()->where('file_materi', $name)->first();

        // if ($materi) {
        //     $file = public_path('materi/' . $name);
        //     return response()->download($file, $materi->name);
        // }
        $file = public_path('materi/' . $name);
        return response()->download($file, 'fileName.pdf');
        // return response()->download($file, $materi->name . '.pdf');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $materi = Materi::find($id);


        //delete post
        $materi->delete();

        //redirect

        return Inertia::location(route('event.index'));
        //  return redirect()->route('akun.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
