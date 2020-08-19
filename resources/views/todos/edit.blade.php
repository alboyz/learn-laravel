@extends('todos.layout')
@section('content')
<div class="text-center pt-10">
    <h1 class="text-2xl">Update Todolist</h1>
    <form method="post" action="{{route('todo.update',$tampil->id)}}"  class="py-5">
        @csrf
        @method('patch')
        <input type="text" value="{{$tampil->title}}" name="title" class="p-2 border rounded">
        <input type="submit" value="update" class="p-2 border rounded">
    </form>
    <a class="mx-5 py-2 px-1  bg-gray-500 cursor-pointer rounded black" href="/todos/">back</a>
</div>
@endsection