@extends('todos.layout')

@section('content')
<div class="text-center pt-10">
    <h1 class="text-2xl">What next you needTo-Do</h1>
    @include('layouts.flashCreate')
    <form action="/todos/create" method="post" class="py-5">
        @csrf
        <input type="text" name="title" class="p-2 border rounded">
        <input type="submit" value="create" class="p-2 border rounded">
    </form>
    <a class="mx-5 py-2 px-1  bg-gray-500 cursor-pointer rounded black" href="/todos/">back</a>
</div>
@endsection