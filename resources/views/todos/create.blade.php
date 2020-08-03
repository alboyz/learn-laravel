<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href={{ asset('css/tw.css') }} rel="stylesheet" />
    <title>Todos</title>
</head>

<body>
    <div class="text-center pt-10">
        <h1 class="text-2xl">What next you needTo-Do</h1>
        @include('layouts.flashCreate')
        <form action="/todos/create" method="post" class="py-5">
            @csrf
            <input type="text" name="title" class="p-2 border rounded">
            <input type="submit" value="create" class="p-2 border rounded">
        </form>
    </div>
</body>

</html>