<?php

namespace App\Http\Middleware;

use Closure;

class MustBeSiteAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
     public function handle($request, Closure $next)
    {
        //dd("KKkc");
        if(\Auth::user()->usergroup_id==1)
        {//dd('siteadmin_midl');
            //return $next($request);
            return redirect('/superadmin/dashboard');
        }
          
        if(\Auth::user()->usergroup_id==3)
        {
            return redirect('/admin/dashboard');
        }

        if(\Auth::user()->usergroup_id==5)
        {
            return redirect('/teacher/dashboard');
        }

        if(\Auth::user()->usergroup_id==6)
        {
            return redirect('/student/dashboard');
        }
        
        if(\Auth::user()->usergroup_id==8)
        {
            return redirect('/library/dashboard');          
        }
        
        abort(404);
    }
}
