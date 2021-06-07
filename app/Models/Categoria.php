<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table ='category';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'name',
        
    ];
}
