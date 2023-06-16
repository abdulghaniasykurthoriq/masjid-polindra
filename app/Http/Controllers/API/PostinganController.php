<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Postingan;
use Illuminate\Http\Request;

class PostinganController extends Controller
{
    public function index()
    {
        $postingan = Postingan::orderBy('created_at', 'desc')->limit(5)->get();
        if ($postingan) {
            return response()->json([
                'postingan' => $postingan
            ]);
        }
        return response()->json([
            'postingan' => 'data not found'
        ]);
    }
}
