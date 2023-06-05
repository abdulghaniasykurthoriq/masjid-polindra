<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KotakSaran extends Model
{
    use HasFactory;

    protected $table = 'kotak_saran';
    protected $fillable = [
        'username',
        'text_saran',
        'status_approval',
        'created_at'
    ];
}
