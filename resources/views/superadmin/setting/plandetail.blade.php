@extends('layouts.superadmin.layout')
@section('content')
    <div class="relative">
        <livewire:superadmin.setting.plan-detail  :id="$id" />
    </div>
@endsection