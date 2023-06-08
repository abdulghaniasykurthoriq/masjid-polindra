<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;

    protected $table = 'materi';
    protected $fillable = [
        'file_materi',
        'name'
    ];


    public function event()
    {
        return $this->belongsTo(Event::class);
    }
    
}
