@if(session()->has('msg'))
<div class="alert alert-success">{{session()->get('msg')}}</div>
@elseif(session()->has('err'))
<div class="alert alert-danger">{{session()->get('err')}}</div>
@endif
