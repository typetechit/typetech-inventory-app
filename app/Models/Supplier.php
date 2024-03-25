<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        "code",
        "name",
        "email",
        "phone",
        "address",
        "photo",
    ];

    /**
     * Get the post's featured image.
     *
     * @return Attribute
     */
    protected function photo(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => asset('storage/'.$value),
        );
    }
}
