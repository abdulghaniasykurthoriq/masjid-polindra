<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KehadiranJamaah extends Model
{
    use HasFactory;
    protected $table = 'kehadiran_jamaah';
    protected $fillable = [
        'nama',
        'jurusan',
        'no_hp'
    ];
}
