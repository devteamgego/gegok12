<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Resources\Studentlist as StudentlistResource;
use App\Http\Requests\AttendanceAddRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Traits\AcademicProcess;
use App\Models\StudentAcademic;
use Illuminate\Http\Request;
use App\Models\StandardLink;
use App\Models\AbsentReason;
use App\Traits\LogActivity;
use App\Helpers\SiteHelper;
use App\Models\Attendance;
use League\Csv\Writer;
use App\Traits\Common;
use Carbon\Carbon;
use Exception;

class AttendanceController extends Controller
{
    //
    use AcademicProcess;
    use LogActivity;
    use Common;

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        //
        $array = [];
        $school_id = Auth::user()->school_id;

        $academic_year = SiteHelper::getAcademicYear($school_id);

        $standardLinklist = SiteHelper::getStandardLinkList($school_id);

        $studentAcademic = StudentAcademic::with('user')->where([['school_id',$school_id],['academic_year_id',$academic_year->id]])->whereHas('user', function($q){
                        $q->where([['status','active'],['deleted_at',null]]);
                    })->get();
        
        $studentlist = StudentlistResource::collection($studentAcademic)->groupBy('standardLink_id');

        $absentReasonlist   = AbsentReason::where('status',1)->get();

        $array['standardlist']      = $standardLinklist;
        $array['studentlist']       = $studentlist;
        $array['absentReasonlist']  = $absentReasonlist;

        return $array;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $standard = \Request::get('standardLink_id') ? \Request::get('standardLink_id'):'';

        return view('/teacher/attendance/create' ,['standard' => $standard]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AttendanceAddRequest $request)
    { 
        //
        try
        {
            $school_id      = Auth::user()->school_id;
            $academic_year  = SiteHelper::getAcademicYear($school_id);
            $admin          = Auth::id();

            $attendance = $this->createAttendance($school_id , $academic_year->id , $admin , $request);

            $message = trans('messages.add_success_msg',['module' => 'Attendance']);

            $ip= $this->getRequestIP();
            $this->doActivityLog(
                $attendance,
                Auth::user(),
                ['ip' => $ip, 'details' => $_SERVER['HTTP_USER_AGENT'] ],
                LOGNAME_ADD_ATTENDANCE,
                $message
            );

            $res['success'] = $message;

            return $res;
        }
        catch(Exception $e)
        {
            //dd($e->getMessage());
        }
    }

    public function export($standardLink_id)
    {
        try
        {
            //
            $school_id      = Auth::user()->school_id;
            $academic_year = SiteHelper::getAcademicYear($school_id);
            $standardLink = StandardLink::where('id',$standardLink_id)->first();
            $standard = $standardLink->StandardName;
            $section = $standardLink->section->name;
            $csv_name = 'SP Student Attendance Export_'.$standard.'_'.$section.'_'.date('_d-m-Y_H:i').'.csv';
            $attendances  = Attendance::where([
                ['school_id',$school_id],
                ['academic_year_id',$academic_year->id],
                ['standardLink_id',$standardLink_id],
                ['status',0]
            ])->orderBy('date','DESC')->get()->groupBy([function($attendance) {
                    return Carbon::parse($attendance->date)->format('d-m-Y'); 
                },'session']);
            $csv = Writer::createFromFileObject(new \SplTempFileObject());

            if(count($attendances) > 0)
            {
                $csv->insertOne(['Date','Forenoon_Absent_Count','Afternoon_Absent_Count']);
          
                $i = 0;
                foreach ($attendances as $key => $attendance) 
                {
                    foreach ($attendance as $key1 => $student) 
                    { 
                        if($key1 == 'forenoon')
                        {
                            $forenoon_count[$i] = count($student);
                        }
                        else
                        {
                            $afternoon_count[$i] = count($student);
                        }
                    }
                    $csv->insertOne([ $key, $forenoon_count[$i] , $afternoon_count[$i] ]);
                    $i++;
                }
            }
            else
            {
               $csv->insertOne(['No Records Found']);
               $csv->output($csv_name);
            }
            $csv->output($csv_name);
            $message= trans('messages.export_success_msg',['module' => 'Student Attendance']);

            $ip= $this->getRequestIP();
            $this->doActivityLog(
                Auth::user(),
                Auth::user(),
                ['ip' => $ip, 'details' => $_SERVER['HTTP_USER_AGENT'] ],
                LOGNAME_EXPORT_STUDENT_ATTENDANCE,
                $message
            );
        }
        catch(Exception $e)
        {
            //dd($e->getMessage());
        }
    }
}
