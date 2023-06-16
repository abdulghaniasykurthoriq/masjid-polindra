<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaporanKeuangan extends Model
{
    use HasFactory;
    protected $table = 'laporan_keuangan';

    public function detail()
    {
        return $this->hasMany(KeuanganDetail::class, 'laporan_id');
    }
}
