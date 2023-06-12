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
    public function index(Request $request)
    {
        $query = User::query();

        $searchTerm = $request->input('name');
        // if ($request->has('name')) {
        //     $query->where('name', 'like', '%' . $searchTerm . '%')
        //         ->orWhere('level', 'like', '%' . $searchTerm . '%');
        // }
        $query->where(function ($query) use ($searchTerm) {
            $query->where('username', 'like', '%' . $searchTerm . '%')
                ->orWhere('name', 'like', '%' . $searchTerm . '%')
                ->orWhere(function ($query) use ($searchTerm) {
                    $query->where('level', 'like', '%' . $searchTerm . '%')
                        ->orWhere('status', 'like', '%' . $searchTerm . '%');
                });
        });
        $filterParam = $request->input('level');
        if ($filterParam) {
            $query->where('level', $filterParam);
        }

        $user = $query->get();
        return Inertia::render('Akun/index', [
            'user' => $user
        ]);
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
        $data->password = bcrypt($validateData['password']);
        $data->level = $validateData['level'];
        $data->status = $validateData['status'];
        $data->save();
        // return redirect()->back()->with('message', 'berita berhasil dibuat');
        // return Inertia::render('Akun/index');
        // return redirect()->route('akun.index')->with('success', 'Data Berhasil Dibuat!');
        return Inertia::location(route('akun.index'));
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
    public function update(string $id)
    {
        if (!$id) {
            return "helllo world";
        }

        $user = User::find($id);
        if (!$user) {
            return Inertia::location('/404');
        }

        return Inertia::render('Akun/Update', [
            'user' => $user
        ]);
    }
    public function updateStore(Request $request)
    {
        $requestValidate = $request->validate([
            'name' => 'required',
            'username' => 'required',
            'level' => 'required',
            'status' => 'required'

        ]);
        $user = User::find($request->id);
        $user->name = $requestValidate['name'];
        $user->username = $requestValidate['username'];
        $user->level = $requestValidate['level'];
        $user->status = $requestValidate['status'];
        $user->save();
        return redirect()->route('akun.index')->with('success', 'Data Berhasil Dibuat!');
    }

    public function resetPassword(string $id)
    {
        $user = User::find($id);

        //delete post
        $user->password = bcrypt('12345678');
        $user->save();

        //redirect
        return redirect()->route('akun.index')->with('success', 'Password Berhasil Direset!');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        //delete post
        $user->delete();

        //redirect
        return redirect()->route('akun.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
