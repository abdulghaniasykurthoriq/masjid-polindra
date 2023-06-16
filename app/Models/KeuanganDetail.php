<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeuanganDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'laporan_id',
        'kategory',
        'jumlah',
        'keterangan'
    ];

    public function laporan_keuangan()
    {
        return $this->belongsTo(LaporanKeuangan::class);
    }
}
