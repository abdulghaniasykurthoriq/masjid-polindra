<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Materi;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $event = Event::all();
        return Inertia::render(
            'Event/Event',
            [
                'event' => $event
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Event/Create');
    }
    public function detail(String $id)
    {
        $event = Event::with('materi')->where('id', $id)->first();
        return Inertia::render('Event/Detail', [
            'event' => $event
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
            // 'materi' => 'required|array',
            'kategori' => 'required|string'
        ]);
        // if ($request->files == null) {
        //     // dd($request);
        //     $event = new Event();
        //     $event->nama = $request->nama;
        //     $event->kategori = $request->kategori;
        //     $event->user_id = 1;
        //     $event->save();
        //     return response()->json(['berhasil' => 'berhasil menambah event tanpa image']);
        // }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);

            $event = new Event();
            $event->nama = $request->nama;
            $event->kategori = $request->kategori;
            $event->image = $imageName;
            $event->user_id = 1;
            $event->save();
            return response()->json(['success' => 'Image uploaded successfully.']);
        }
        // dd($request->files);
        $event = new Event();
        $event->nama = $request->nama;
        $event->kategori = $request->kategori;
        $event->user_id = 1;
        $event->save();
        return response()->json(['berhasil' => 'berhasil menambah event tanpa image']);
        // return response()->json(['error' => 'Error upload event.']);
    }

    /**
     * Display the specified resource.
     */
    // public function show($id)
    // {
    //     $event = Event::with('materi')->where('id', $id)->first();
    //     return Inertia::render('Event/Detail', [
    //         'event' => $event
    //     ]);
    // }

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
