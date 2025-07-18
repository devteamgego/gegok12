@extends('layouts.main')

@section('title')
GegoK12 - Attendance App for Teachers 
@endsection

@section('content')
<!-- start -->
<div class="bg-red-600 py-8 lg:py-16 md:py-8">
	<div class="container mx-auto">
		<div class="text-center tracking-wider px-1">
		<h1 class="text-white font-plex text-2xl lg:text-4xl">Attendance App for Teachers </h1>
		</div>
	</div>
</div>
<!-- end -->
<!-- <div class="bg-gray-400">
	<div class="container mx-auto py-16">
		<h1 class="text-4xl">Attendance App for Teachers </h1>
	</div>
</div> -->

<div class="container mx-auto py-8 px-3">
<div class="flex flex-col lg:flex-row items-center justify-between">
<div class="w-full lg:w-2/3">
<p class="leading-loose text-justify mb-8 text-gray-700">Tracking a school attendance is a challenge in itself. There are many reasons why attendance data could be misleading. Such data could have serious ramifications when it comes to student safety. For example, if a student is known that he or she did not attend school for the day, parents and the school officials can follow up with each other and find why the student is missing and if he or she is in danger. The most daunting challenge while marking attendance is inconsistency while taking the attendance. Teachers who work within the same school track attendance differently even when they are given sophisticated tracking system. Many teachers track attendance only at the beginning of the class which leads tardiness into being absent. Most teachers believe that it is the responsibilities of the students to be accurate but they rarely know how to do so. Some teachers are not complaint with the school system of tracking the attendance. In addition to this, staff members or other teachers who have been in a meeting with the student will fail to report the whereabouts of the student during a class hour. Schools are motivated by the system to look good when it comes to attendance.
</p>
<p class="leading-loose text-justify mb-8 text-gray-700">Apart from these the practice of what to do when attendance is lacking depends solely on the seriousness with which the school administration treats the issue. If a school does not follow up with absenteeism for a long time, then this would result in losing several students in the system. In order to overcome all these problems, schools should enable an automated system to track the attendance.
</p>
</div>
<div class="w-full lg:w-1/4">
<img src="{{url('images/attendance.png')}}" class="mx-auto">
</div>
</div>

<p class="leading-loose text-justify mb-8 text-gray-700">
Gego K12 is a platform which helps school administration to automate the day to day processes. With the issue in attendance tracking, Gego K12 helps schools take attendance automatically.
</p>
<div class="flex flex-wrap">
<!-- **** -->
<div class="w-full lg:w-1/2 lg:px-5 py-2">
<div class="px-4 py-3 flex">
<div>
	<div class="bg-red-300 text-red-700 w-16 p-4 rounded-full flex items-center justify-center">
		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15.692 15.692" xml:space="preserve" class="w-8 fill-current"><g><g><path d="M2.996,5.11c0.037,0.223,0.123,0.364,0.208,0.453C3.406,6.909,4.531,8.158,5.56,8.158
			c1.199,0,2.291-1.352,2.501-2.592c0.087-0.088,0.174-0.23,0.212-0.456c0.068-0.252,0.156-0.69,0.002-0.896
			C8.267,4.204,8.258,4.193,8.25,4.185c0.145-0.529,0.328-1.623-0.327-2.368C7.865,1.743,7.497,1.304,6.712,1.072L6.337,0.943
			C5.719,0.752,5.331,0.709,5.314,0.707c-0.028-0.002-0.057,0-0.084,0.007C5.209,0.72,5.135,0.74,5.078,0.732
			c-0.148-0.021-0.37,0.055-0.409,0.07c-0.051,0.021-1.248,0.5-1.611,1.615c-0.034,0.09-0.179,0.564,0.014,1.726
			c-0.029,0.02-0.055,0.044-0.077,0.073C2.839,4.42,2.927,4.858,2.996,5.11z"></path> <path d="M7.784,13.594c-0.221-0.124-0.461-0.243-0.717-0.356c-0.124-0.055-0.25-0.107-0.375-0.156
			c-0.098-0.037-0.214-0.085-0.295-0.106l-1.186-0.32L7.43,8.138l0.951,0.6C8.582,8.864,8.73,8.971,8.892,9.09l0.034,0.025
			C9.087,9.234,9.245,9.356,9.4,9.482c0.337,0.272,0.635,0.538,0.912,0.813c0.021,0.021,0.041,0.04,0.062,0.061
			c0.093-0.103,0.184-0.195,0.275-0.294c-0.116-0.345-0.257-0.664-0.429-0.92c0,0-0.244-0.333-0.823-0.555
			c0,0-0.049-0.015-0.124-0.04C8.758,8.306,8.269,8.151,8.269,8.151C8.164,8.113,8.072,8.076,7.989,8.04
			c-0.35-0.173-0.641-0.368-0.701-0.552c0,0,0.202,1.955-1.507,2.001L5.543,9.478C3.994,9.34,3.891,7.484,3.891,7.484
			c-0.162,0.509-2.11,1.101-2.11,1.101C1.202,8.807,0.957,9.141,0.957,9.141C0.101,10.411,0,13.237,0,13.237
			c0.011,0.646,0.29,0.713,0.29,0.713c1.969,0.879,5.058,1.034,5.058,1.034c0.167,0.004,0.322-0.005,0.477-0.014l0.004,0.016
			c0,0,1.508-0.077,3.089-0.423L8.725,14.31C8.568,14.103,8.217,13.836,7.784,13.594z"></path> <path d="M7.222,7.571c0.021-0.027,0.044-0.054,0.066-0.084C7.283,7.469,7.282,7.46,7.282,7.46
			C7.263,7.499,7.241,7.532,7.222,7.571z"></path> <path d="M3.9,7.481L3.895,7.46L3.891,7.482C3.892,7.478,3.896,7.474,3.897,7.47
			C3.898,7.471,3.899,7.475,3.9,7.481z"></path> <path d="M13.882,8.388c-0.561,0.396-1.084,0.844-1.582,1.315c-0.499,0.474-0.972,0.973-1.427,1.488
			c-0.169,0.192-0.333,0.386-0.496,0.581c-0.002-0.003-0.004-0.006-0.005-0.009c-0.24-0.32-0.5-0.605-0.77-0.872
			c-0.27-0.266-0.55-0.512-0.838-0.746c-0.145-0.116-0.291-0.23-0.44-0.342C8.169,9.691,8.033,9.59,7.843,9.47l-1.182,2.405
			c0.108,0.029,0.265,0.09,0.398,0.142c0.141,0.054,0.279,0.112,0.417,0.173c0.276,0.122,0.545,0.255,0.802,0.398
			c0.508,0.284,0.981,0.63,1.251,0.983l0.909,1.192l0.523-1.134c0.263-0.568,0.578-1.162,0.901-1.728
			c0.326-0.57,0.674-1.129,1.051-1.668s0.781-1.06,1.233-1.54c0.452-0.477,0.951-0.921,1.546-1.236
			C15.046,7.649,14.442,7.996,13.882,8.388z"></path></g></g></svg>
	</div>
</div>
<div class="w-full px-3">
<h3 class="text-base text-gray-700 font-semibold ">Attendance taker</h3>
<p class="text-sm text-gray-700 my-1 text-justify leading-loose">With inconsistencies in the school attendance tracking system, Gego K12 gives a solution to track attendance in classes accurately. By installing this software as an entire management for your school, you can easily take attendance without any errors in the classes.</p>
</div>
</div>
</div>
<!-- **** -->
<!-- **** -->
<div class="w-full lg:w-1/2 lg:px-5 py-2">
<div class="px-4 py-3 flex">
<div>
	<div class="bg-red-300 text-red-700 w-16 p-4 rounded-full flex items-center justify-center">
		<svg class="h-8 fill-current" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m256 512c30.692 0 57.122-18.539 68.719-45h-137.438c11.597 26.461 38.028 45 68.719 45z"/><path d="m411 247.862v-32.862c0-69.822-46.411-129.001-110-148.33v-21.67c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67c-63.59 19.329-110 78.507-110 148.33v32.862c0 61.332-23.378 119.488-65.827 163.756-4.16 4.338-5.329 10.739-2.971 16.267s7.788 9.115 13.798 9.115h420c6.01 0 11.439-3.587 13.797-9.115s1.189-11.929-2.97-16.267c-42.449-44.268-65.827-102.425-65.827-163.756zm-140-187.134c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728v-15.728c0-8.271 6.729-15 15-15s15 6.729 15 15z"/><path d="m451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c36.831 36.831 57.114 85.8 57.114 137.887z"/><path d="m46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0-42.497 42.497-65.901 98.999-65.901 159.099 0 8.284 6.716 15 15 15z"/></g></svg>
	</div>
</div>
<div class="w-full px-3">
<h3 class="text-base text-gray-700 font-semibold ">Notification</h3>
<p class="text-sm text-gray-700 my-1 text-justify leading-loose">Once the tool accesses a class attendance, it will then send the record to the parents of every individual student as notification on their device. Through this parents will be aware whether their child attended school or not.</p>
</div>
</div>
</div>
<!-- **** -->
</div>

</div>
@endsection 