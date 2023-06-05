<?php

namespace App\Http\Controllers;

use App\Models\Postingan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostinganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $postingan = Postingan::all();

        return Inertia::render('Postingan/index', [
            'postingan' => $postingan
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Postingan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'text' => 'required'
        ]);
        $postingan = new Postingan();
        $postingan->text = $validateData['text'];
        $postingan->user_id = 1;
        $postingan->save();
        return redirect()->route('postingan.index')->with('success', 'Data Berhasil Dibuat!');
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
        $post = Postingan::find($id);

        return Inertia::render('Postingan/Update', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     return Inertia::render('Postingan/Update');
    // }
    public function update(Request $request, string $id)
    {
        $post = Postingan::find($id);
        $post->text = $request->text;
        $post->save();
        return redirect()->route('postingan.index')->with('success', 'Data Berhasil Dibuat!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Postingan::find($id);
        $post->delete();
        return redirect()->route('postingan.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
