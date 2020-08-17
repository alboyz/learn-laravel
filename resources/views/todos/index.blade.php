<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href={{ asset('css/tw.css') }} rel="stylesheet" />
    <title>All Todos</title>
</head>

<body>
    <div class="text-center pt-10">
        <div class="flex justify-center">
            <h1 class="text-2xl">All Todo</h1>
            <a class="mx-5 py-2 px-1 bg-blue-400 cursor-pointer rounded text-white" href="/todos/create/">Create New</a>
        </div>
        <ul class="my-2 py-2">
            @foreach ($todo as $tampil)
            <li class="flex justify-center py-2">
                <p> {{$tampil->title}} </p>
                <a class=" mx-5 px-2 bg-orange-400 cursor-pointer rounded text-white"
                    href="{{'/todos/'.$tampil->id.'/edit'}}">Edit</a>
                {{--<a class=" mx-5 px-2 bg-orange-400 cursor-pointer rounded text-white" href="/todos/edit/">Edit</a>--}}
            </li>
            @endforeach
        </ul>
    </div>
</body>

</html>



{{--all todos
--}}