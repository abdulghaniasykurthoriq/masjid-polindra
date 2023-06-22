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

        $nama = $request->input('nama');
        $level = $request->input('level');
        $status = $request->input('status');

        if ($nama) {
            $query->where(function ($subQuery) use ($nama) {
                $subQuery->where('name', 'like', '%' . $nama . '%')
                    ->orWhere('username', 'like', '%' . $nama . '%');
            });
        }

        if ($level !== null) {
            $query->where('level', 'like', '%' . $level . '%');
        }

        if ($status !== null) {
            if ($status == 'active') {
                $query->where('status', 'active');
            } elseif ($status == 'non-active') {
                $query->where('status', 'non-active');
            }
        }

        $user = $query->get();
        return Inertia::render('Akun/index', [
            'user' => $user
        ]);
    }

    public function filter(Request $request)
    {
        $nama = $request->input('nama');
        $level = $request->input('level');
        $status = $request->input('status');

        if ($level) {
            if ($status) {
                return Inertia::location(route('akun.index', ['nama' => $nama, 'level' => $level, 'status' => $status]));
            }
            return Inertia::location(route('akun.index', ['nama' => $nama, 'level' => $level]));
        }

        if ($status) {
            return Inertia::location(route('akun.index', ['nama' => $nama, 'status' => $status]));
        }

        return Inertia::location(route('akun.index', 'nama=' . $nama));
    }

    // public function index(Request $request)
    // {
    //     $query = User::query();

    //     $nama = $request->input('nama');
    //     $level = $request->input('level');
    //     $status = $request->input('status');

    //     if ($nama) {
    //         $query->where(function ($subQuery) use ($nama) {
    //             $subQuery->where('name', 'like', '%' . $nama . '%')
    //                 ->orWhere('username', 'like', '%' . $nama . '%');
    //         });
    //     }

    //     // if ($level) {
    //     //     $query->where('level', 'like', '%' . $level . '%');
    //     // }

    //     if ($status !== null) {
    //         $query->where('status', 'like', '%' . $status . '%');
    //     }

    //     $user = $query->get();
    //     return Inertia::render('Akun/index', [
    //         'user' => $user
    //     ]);
    // }

    // public function filter(Request $request)
    // {
    //     $nama = $request->input('nama');
    //     $level = $request->input('level');
    //     $status = $request->input('status');

    //     if ($level) {
    //         if ($status) {
    //             return Inertia::location(route('akun.index', ['nama' => $nama, 'level' => $level, 'status' => 'active']));
    //         }
    //         return Inertia::location(route('akun.index', ['nama' => $nama, 'level' => $level]));
    //     }

    //     if ($status) {
    //         // dd('status');
    //         return Inertia::location(route('akun.index', ['nama' => $nama, 'status' => 'active']));
    //     }

    //     return Inertia::location(route('akun.index', 'nama=' . $nama));
    // }

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
        if ($request->password) {
            $user->password = bcrypt($request->password);
        }
        $user->save();
        return Inertia::location(route('akun.index'));
        //return redirect()->route('akun.index')->with('success', 'Data Berhasil Dibuat!');
    }

    public function resetPassword(string $id)
    {
        $user = User::find($id);

        //delete post
        $user->password = bcrypt('12345678');
        $user->save();

        //redirect
        return Inertia::location(route('akun.index'));
        //return redirect()->route('akun.index')->with('success', 'Password Berhasil Direset!');
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
        return Inertia::location(route('akun.index'));
        //return redirect()->route('akun.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
