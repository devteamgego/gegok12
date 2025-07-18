@extends('layouts.student.layout')

@section('content')
<div class="container">
@include('student.conversations.partials._header')

    <div class="row">
        <div class="col-md-4">
          <livewire:conversations.conversation-list :conversations="$conversations" />
        </div>

          <div class="col-md-8 conversations">
           <livewire:conversations.conversation-create />
        </div>
    </div>
</div>
@endsection
