<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(){
        
        $data=[
            'name'=>'otong',
            'email'=>'otong1@email.com',
            'password'=>('password')
        ];
        //User::create($data);

        //$user = new User();
        //$user->name = 'sueb';
        //$user->email = 'sueb@email.com';
        //$user->password = bcrypt('password');
        //$user->save();

        
        //User::where('id',13)->delete();
        $user=User::all();
        return $user;

        //DB::insert('insert into users (name, email, password)
        //values(?,?,?)',[
        //    'ali','email@email.com','password'
        //]);
        
       // DB::update('update users set name =? where id =1',['ali oke']);
        //DB::delete('delete from users where id = 15');
        //$user=DB::select('select * from users');
        //return $user;
        return view('home');
    }
}
