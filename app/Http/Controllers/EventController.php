<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Materi;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Termwind\Components\Dd;

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


        if ($request->hasFile('image')) {
            // $path = $request->file('image')->store('gambar');

            // return response()->json([
            //     'path' => $path,
            // ]);
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);

            $event = new Event();
            $event->nama = $request->nama;
            $event->kategori = $request->kategori;
            $event->image = $imageName;
            $event->user_id = 1;
            $event->save();
            if ($request->has('items')) {
                $counter = 0;
                foreach ($request->items as $item) {

                    if (isset($item['materi']) && is_a($item['materi'], 'Illuminate\Http\UploadedFile')) {
                        $counter++;
                        $materi = $item['materi'];
                        $materiName = time() . '.' . $materi->getClientOriginalExtension();

                        $materi->move(public_path('materi'), $materiName);
                        Materi::create([
                            'name' => 'Materi ' . $counter,
                            'event_id' => $event->id,
                            'file_materi' => $materiName
                        ]);
                    } else {
                        // Tindakan jika item tidak memiliki file
                    }
                }
            }
            return response()->json(['berhasil' => 'berhasil menambah event dengan image']);
            // return response()->json(['success' => 'Image uploaded successfully.']);
        } else {
            $event = new Event();
            $event->nama = $request->nama;
            $event->kategori = $request->kategori;
            $event->user_id = Auth::user()->id;
            $event->save();
            if ($request->has('items')) {
                $counter = 0;
                foreach ($request->items as $item) {

                    if (isset($item['materi']) && is_a($item['materi'], 'Illuminate\Http\UploadedFile')) {
                        $counter++;
                        $materi = $item['materi'];
                        $materiName = time() . '.' . $materi->getClientOriginalExtension();

                        $materi->move(public_path('materi'), $materiName);
                        Materi::create([
                            'name' => 'Materi ' . $counter,
                            'event_id' => $event->id,
                            'file_materi' => $materiName
                        ]);
                    } else {
                        // Tindakan jika item tidak memiliki file
                    }
                }
            }
            return response()->json(['berhasil' => 'berhasil menambah event tanpa image']);
        }


        return response()->json(['gagal' => 'something went wrong']);
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
        $event = Event::findOrFail($id);

        $event->materi()->delete();

        $event->delete();
        return Inertia::location(route('event.index'));
    }
}
