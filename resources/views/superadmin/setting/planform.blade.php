@extends('layouts.superadmin.layout')
@section('content')
    <div class="relative">
        <livewire:superadmin.setting.plan-form  :id="$id" />
    </div>
@endsection