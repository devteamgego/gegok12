<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class HomeworkApproval extends Model
{
    //
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'homework_approvals';


    /**
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
        'homework_id' , 'comments' , 'status' , 'approved_by' , 'approved_at'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['approved_at' , 'deleted_at'];

    public function approvedBy()
    {
    	return $this->belongsTo('\App\Models\User','approved_by');
    }

    public function homework()
    {
    	return $this->belongsTo('\App\Models\Homework','homework_id');
    }
}