<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoRequest;
use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function Index()
    {
        $todo = Todo::all();
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
    public function Update(Request $request, Todo $tampil)
    {
        $tampil->update(['title' => $request->title]);
        return redirect(route('todo.index'))->with('message','Update');
    }
}
