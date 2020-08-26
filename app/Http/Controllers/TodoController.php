<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoRequest;
use App\Todo;

class TodoController extends Controller
{
    public function Index()
    {
        $todo = Todo::orderBy('completed')->get();
        return view('todos.index')->with(['todo' => $todo]);
    }
    public function Create()
    {
        return view('todos.create');
    }
    public function Store(TodoRequest $request)
    {

        Todo::Create($request->all());
        return redirect()->back()->with('message', 'Todo Created Succesfully');
    }
    public function Edit(Todo $tampil)
    {
        return view('todos.edit', compact('tampil'));
    }
    public function Update(TodoRequest $request, Todo $tampil)
    {
        $tampil->update(['title' => $request->title]);
        return redirect(route('todo.index'))->with('message','Update');
    }
     public function completed(Todo $tampil)
    {
        $tampil->update(['completed'=>true]);
        return redirect()->back()->with('message','Task Mark Completed');
    }
}
