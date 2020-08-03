<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use Validator;

class TodoController extends Controller
{
    public function Index()
    {
        return view('todos.index');
    }
    public function Create()
    {
        return view('todos.create');
    }
    public function Store(Request $request)
    {
        $rules = [
            'title' => 'required|max:255'
        ];
        $messages = [
            'title.max' => 'todo title should 255 char.',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
        Todo::Create($request->all());
        return redirect()->back()->with('message', 'Todo Created Succesfully');
    }
    public function Edit()
    {
        return view('todos.edit');
    }
}