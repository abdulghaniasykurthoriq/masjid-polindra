<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Postingan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\Console\Input\Input;

class PostinganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        // $event = Event::with(['materi']);
        // $kode = $request->input('kode');

        // $postingan = Postingan::with('users')->where('id', $id)->first();
        // if ($kode) {
        //     $postingan = Postingan::query();
        // } else {
        //     $postingan = Postingan::all();
        //     $postingan->load('user');
        // }

        // $postingan = Postingan::all();
        // $postingan->load('user');

        $postingan = Postingan::query()->orderBy('created_at', 'desc');
        $text = $request->input('text');
        $postingan->with('user');
        if ($text) {
            $postingan->where('text', 'like', '%' . $text . '%');
        }
        $postingan = $postingan->get();
        return Inertia::render('Postingan/index', [
            'postingan' => $postingan,
            // 'event' => $event
        ]);
    }
    public function filter(Request $request)
    {
        // $laporanKeuangan = LaporanKeuangan::orderBy('created_at', 'desc')->limit(5)->get();
        $laporan = Postingan::query()->orderBy('created_at', 'desc');
        $text = $request->input('text');

        if ($text) {
            $laporan->where('text_laporan', 'like', '%' . $text . '%');
        }

        return Inertia::location(route('postingan.index', 'text=' . $text));
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
            'text' => 'required',
            'warna' => 'required'
        ]);
        $postingan = new Postingan();
        $postingan->text = $validateData['text'];
        $postingan->warna = $validateData['warna'];
        // $postingan->warna = $request->warna;
        $postingan->user_id = Auth::user()->id;
        $postingan->save();
        return Inertia::location(route('postingan.index'));
        //  return redirect()->route('postingan.index')->with('success', 'Data Berhasil Dibuat!');
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
        return Inertia::location(route('postingan.index'));
        //return redirect()->route('postingan.index')->with('success', 'Data Berhasil Dibuat!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Postingan::find($id);
        $post->delete();
        return Inertia::location(route('postingan.index'));
        //return redirect()->route('postingan.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
