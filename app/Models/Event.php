<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Event extends Model
{
    use HasFactory;
    protected $table = 'event';
    protected $fillable = [
        'nama',
        'image',
        'user_id',
        'kategori'
    ];
    // protected function name(): Attribute
    // {

    //     return Attribute::make(
    //         get: fn ($value) => url('uploads/' . $value),
    //     );
    // }
    public function materi()
    {
        return $this->hasMany(Materi::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
