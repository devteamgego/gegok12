@extends('layouts.admin.layout')

@section('content')
   <div class="relative">
      <div class="flex flex-wrap lg:flex-row justify-between">
         <div>
            <h1 class="admin-h1 mb-5 flex items-center">
               <a href="{{ url('/admin/sections') }}" title="Back" class="rounded-full bg-gray-300 p-2">
                  <img src="{{ asset('/uploads/icons/back.svg') }}" class="w-3 h-3">
               </a>
               <span class="mx-3">Add Sections</span>
            </h1>
         </div>
      </div>
      @include('partials.message')
      @include('admin.school.sections.create_form')
   </div>
@endsection

   