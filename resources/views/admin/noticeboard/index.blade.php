@extends('layouts.admin.layout')

@section('content')
   	<portal-target name="add_notice"></portal-target>
   	<notice-board-list url="{{ url('/') }}" scope="" hidecolumns="false" searchquery="{{ $query }}" mode="admin"></notice-board-list>
@endsection