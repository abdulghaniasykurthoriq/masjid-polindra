<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemasukan extends Model
{
    use HasFactory;
    protected $table = 'pemasukan';
    protected $fillable = [
        'laporan_id',
        'kategory',
        'jumlah_pemasukan',
        'keterangan'
    ];
}
