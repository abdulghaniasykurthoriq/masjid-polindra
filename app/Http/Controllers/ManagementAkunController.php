<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagementAkunController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Akun/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Akun/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'username' => 'required',
            'name' => 'required',
            'password' => 'required',
            'level' => 'required',
            'status' => 'required'
        ]);
        $data = new User();
        $data->name = $validateData['name'];
        $data->username = $validateData['username'];
        $data->password = $validateData['password'];
        $data->level = $validateData['level'];
        $data->status = $validateData['status'];
        $data->save();
        return redirect()->back()->with('message', 'berita berhasil dibuat');
        // return Inertia::render('Akun/index');
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
    public function update()
    {
        return Inertia::render('Akun/Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
