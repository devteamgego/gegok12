@extends('layouts.superadmin.layout')
@section('content')
    <div class="relative">
        <livewire:superadmin.academics.userprofile-detail :id="$id" />
    </div>
@endsection