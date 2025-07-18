@extends('layouts.admin.layout')

@section('content')
<div class="relative">

<div class="flex flex-wrap lg:flex-row justify-between my-3">
<div class="">
   <h1 class="admin-h1 my-3">Teaching Staff ( {{ $count }} )</h1>
</div>

   <div class="w-full lg:w-2/4">
   	 <portal-target name="search" ></portal-target>
   	 <portal-target name="teacherfilter" ></portal-target>
   </div>


    <div class="relative flex items-center w-1/4 lg:justify-end">
    <div class="flex items-center" dusk="add-button">
   <a href="{{url('/admin/teacher/add/')}}" class="no-underline text-white  px-4 my-3 mx-1 flex items-center custom-green py-1 justify-center">
   <span class="mx-1 text-sm font-semibold">Add</span>
   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 409.6 409.6" xml:space="preserve" class="w-3 h-3 fill-current text-white"><g><g><path d="M392.533,187.733H221.867V17.067C221.867,7.641,214.226,0,204.8,0s-17.067,7.641-17.067,17.067v170.667H17.067
         C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h170.667v170.667c0,9.426,7.641,17.067,17.067,17.067
         s17.067-7.641,17.067-17.067V221.867h170.667c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"></path></g></g></svg>
   </a> 
   </div>
   <div>
    <teacher-export url="{{ url('/') }}" searchquery="{{ $query }}"></teacher-export>
   </div>
   <div class="">
   <a href="{{ url('/admin/import/teacher') }}" id="import-button" class="no-underline text-white  px-4 my-3 mx-1 flex items-center custom-green py-1">
   <span class="mx-1 text-sm font-semibold">Import</span>
   </a> 
   </div>
   <div class="mx-1">
      <div class="text-center"><a href="{{ url('/admin/attendance/staff/add') }}" class="text-xs"><div class="bg-gray-100 rounded-full w-8 h-8 lg:w-10 md:h-10 md:w-10 md:h-10 flex items-center justify-center mx-auto hover:bg-gray-200"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15.692 15.692" xml:space="preserve" class="w-4 h-4 lg:w-5 lg:h-5 md:w-5 md:h-5  fill-current text-gray-600"><g><g><path d="M2.996,5.11c0.037,0.223,0.123,0.364,0.208,0.453C3.406,6.909,4.531,8.158,5.56,8.158 c1.199,0,2.291-1.352,2.501-2.592c0.087-0.088,0.174-0.23,0.212-0.456c0.068-0.252,0.156-0.69,0.002-0.896 C8.267,4.204,8.258,4.193,8.25,4.185c0.145-0.529,0.328-1.623-0.327-2.368C7.865,1.743,7.497,1.304,6.712,1.072L6.337,0.943 C5.719,0.752,5.331,0.709,5.314,0.707c-0.028-0.002-0.057,0-0.084,0.007C5.209,0.72,5.135,0.74,5.078,0.732 c-0.148-0.021-0.37,0.055-0.409,0.07c-0.051,0.021-1.248,0.5-1.611,1.615c-0.034,0.09-0.179,0.564,0.014,1.726 c-0.029,0.02-0.055,0.044-0.077,0.073C2.839,4.42,2.927,4.858,2.996,5.11z"></path><path d="M7.784,13.594c-0.221-0.124-0.461-0.243-0.717-0.356c-0.124-0.055-0.25-0.107-0.375-0.156 c-0.098-0.037-0.214-0.085-0.295-0.106l-1.186-0.32L7.43,8.138l0.951,0.6C8.582,8.864,8.73,8.971,8.892,9.09l0.034,0.025 C9.087,9.234,9.245,9.356,9.4,9.482c0.337,0.272,0.635,0.538,0.912,0.813c0.021,0.021,0.041,0.04,0.062,0.061 c0.093-0.103,0.184-0.195,0.275-0.294c-0.116-0.345-0.257-0.664-0.429-0.92c0,0-0.244-0.333-0.823-0.555 c0,0-0.049-0.015-0.124-0.04C8.758,8.306,8.269,8.151,8.269,8.151C8.164,8.113,8.072,8.076,7.989,8.04 c-0.35-0.173-0.641-0.368-0.701-0.552c0,0,0.202,1.955-1.507,2.001L5.543,9.478C3.994,9.34,3.891,7.484,3.891,7.484 c-0.162,0.509-2.11,1.101-2.11,1.101C1.202,8.807,0.957,9.141,0.957,9.141C0.101,10.411,0,13.237,0,13.237 c0.011,0.646,0.29,0.713,0.29,0.713c1.969,0.879,5.058,1.034,5.058,1.034c0.167,0.004,0.322-0.005,0.477-0.014l0.004,0.016 c0,0,1.508-0.077,3.089-0.423L8.725,14.31C8.568,14.103,8.217,13.836,7.784,13.594z"></path><path d="M7.222,7.571c0.021-0.027,0.044-0.054,0.066-0.084C7.283,7.469,7.282,7.46,7.282,7.46 C7.263,7.499,7.241,7.532,7.222,7.571z"></path><path d="M3.9,7.481L3.895,7.46L3.891,7.482C3.892,7.478,3.896,7.474,3.897,7.47 C3.898,7.471,3.899,7.475,3.9,7.481z"></path><path d="M13.882,8.388c-0.561,0.396-1.084,0.844-1.582,1.315c-0.499,0.474-0.972,0.973-1.427,1.488 c-0.169,0.192-0.333,0.386-0.496,0.581c-0.002-0.003-0.004-0.006-0.005-0.009c-0.24-0.32-0.5-0.605-0.77-0.872 c-0.27-0.266-0.55-0.512-0.838-0.746c-0.145-0.116-0.291-0.23-0.44-0.342C8.169,9.691,8.033,9.59,7.843,9.47l-1.182,2.405 c0.108,0.029,0.265,0.09,0.398,0.142c0.141,0.054,0.279,0.112,0.417,0.173c0.276,0.122,0.545,0.255,0.802,0.398 c0.508,0.284,0.981,0.63,1.251,0.983l0.909,1.192l0.523-1.134c0.263-0.568,0.578-1.162,0.901-1.728 c0.326-0.57,0.674-1.129,1.051-1.668s0.781-1.06,1.233-1.54c0.452-0.477,0.951-0.921,1.546-1.236 C15.046,7.649,14.442,7.996,13.882,8.388z"></path></g></g></svg></div> <span class="hover:font-semibold hidden lg:block md:block">Attendance</span></a></div>
   </div>
   </div>
</div>

@include('partials.message')
<teacher-list url="{{url('/')}}"  searchquery="{{$query}}" letter="{{ $alphabet }}" birthday="{{ $birthday }}"></teacher-list>

<teacher-filter url="{{url('/')}}" searchquery="{{$query}}"></teacher-filter>
   
</div>

 @endsection