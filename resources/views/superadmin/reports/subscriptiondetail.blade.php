@extends('layouts.superadmin.layout')
@section('content')
    <div class="relative">
        <livewire:superadmin.reports.subscription-detail :id="$id" />
    </div>
@endsection