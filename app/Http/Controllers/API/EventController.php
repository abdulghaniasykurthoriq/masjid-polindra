<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $event = Event::query()->orderBy('created_at', 'desc')->with('materi')->get();
        return response()->json([
            'data' => $event
        ]);
    }
    public function show($id)
    {
        $event = Event::query()->where('id', $id)->orderBy('created_at', 'desc')->with('materi')->first();

        if ($event) {
            return response()->json([
                'data' => $event
            ]);
        }

        return response()->json([
            'data' => 'Data not found'
        ]);
    }
}
