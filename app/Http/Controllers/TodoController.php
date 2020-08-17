<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoRequest;
use App\Todo;


class TodoController extends Controller
{
    public function Index()
    {
        $todo=Todo::all();
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
    public function Edit($id)
    {
        $tampil=Todo::find($id);
        //return $todo;
        return view('todos.edit', compact('tampil'));
    }
}
