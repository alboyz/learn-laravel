@extends('todos.layout')
@section('content')
<div class="text-center pt-10 ">
    <div class="flex justify-between border-b pb-4 px-4">
        <h1 class="text-2xl">All Todo</h1>
        <a class="mx-5 py-2 text-blue-400 cursor-pointer text-white" href="/todos/create/"><span
                class="fas fa-plus-circle transform scale-150" /></a>
    </div>
    @include('layouts.flashCreate')
    <ul class="my-2 py-2">
        @foreach ($todo as $tampil)
        <li class="flex justify-between p-2">
            @if ($tampil->completed)
            <p class="line-through"> {{$tampil->title}} </p>
            @else
            <p> {{$tampil->title}} </p>
            @endif
            <div>
                <a class="px-2 text-orange-400 cursor-pointer rounded text-white"
                    href="{{'/todos/'.$tampil->id.'/edit'}}"><span class="fas fa-edit px-2" /></a>
                
                @if ($tampil->completed)
                <span onclick="event.preventDefault();
                               document.getElementById('form-incomplete-{{$tampil->id}}').submit()"
                    class="fas fa-check text-green-400 px-2 cursor-pointer" />
                <form style="display: none" method="POST" id="{{'form-incomplete-'.$tampil->id}}"
                    action="{{route('todo.incompleted',$tampil->id)}}">
                    @csrf
                    @method('delete')
                </form>

                @else
                <span onclick="event.preventDefault();
                               document.getElementById('form-complete-{{$tampil->id}}').submit()"
                    class="fas fa-check px-2 text-gray-400 cursor-pointer" />
                <form style="display: none" method="POST" id="{{'form-complete-'.$tampil->id}}"
                    action="{{route('todo.completed',$tampil->id)}}">
                    @csrf
                    @method('put')
                </form>
                @endif
            </div>
            {{--<a class=" mx-5 px-2 bg-orange-400 cursor-pointer rounded text-white" href="/todos/edit/">Edit</a>--}}

        </li>
        @endforeach
    </ul>
</div>
@endsection