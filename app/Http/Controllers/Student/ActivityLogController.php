<?php

namespace App\Http\Controllers\Student;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ActivityLog;

class ActivityLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activitylog = ActivityLog::with('user')->where('causer_id',Auth::id())->orderby('id','desc')->paginate(10);
       
        return view('/student/activity_log/show',[ 'activitylog' => $activitylog ]);
    }
}
