@extends('layouts.superadmin.layout')
@section('content')
    <div class="relative">
        <livewire:superadmin.setting.country-detail  :id="$id" />
    </div>
@endsection