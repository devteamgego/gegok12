@extends('layouts.accountant.layout')

@section('content')
    <transaction-list url="{{ url('/') }}" ></transaction-list>
 
 @endsection