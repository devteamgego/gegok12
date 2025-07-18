<?php

namespace App\Http\Controllers\Receptionist;

use App\Http\Resources\Receptionist\Task as TaskResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helpers\SiteHelper;
use App\Traits\Dashboard;
use App\Models\Task;

class DashboardController extends Controller
{
    use Dashboard;
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $receptionist_id  =   Auth::id();
        $school_id =   Auth::user()->school_id;

        $dashboard = $this->receptionDashboard( $school_id, $receptionist_id );

        return view( '/reception/dashboard', ['dashboard' => $dashboard]);
    }

    public function list(Request $request,$task_flag)
    {
        //
        $tasks = Task::where([['school_id',Auth::user()->school_id],['task_status',0],['task_flag',$task_flag]])->ByType('to_me',Auth::id());

        if($request->q != null)
        {
            $tasks = $tasks->where('title','LIKE','%'.$request->q.'%');
        }
        $tasks = $tasks->get();

        $tasks = TaskResource::collection($tasks);

        return $tasks;    
    }

    public function listCount()
    {
        //
        $tasks = Task::where([['school_id',Auth::user()->school_id],['user_id',Auth::id()],['task_status',0]])->ByType('to_me',Auth::id())->get()->groupBy('Flag');

        foreach ($tasks as $key => $value) 
        {
            $tasks[$key] = count($value);
        }

        return $tasks;    
    }
}