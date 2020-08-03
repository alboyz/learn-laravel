@if(session()->has('message'))
<div class="p-2 bg-green-400">{{session()->get('message')}}</div>
@endif
@if ($errors->any())
<div class="p-2 bg-red-400">
    <ul>
        @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif      