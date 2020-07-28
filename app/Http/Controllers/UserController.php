<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function uploadAvatar(Request $request)
    {
        if ($request->hasFile('image')) {
            User::uploadAvatar($request->image);
            return redirect()->back()->with('msg','Image Uploaded');
        }
        return redirect()->back()->with('err','Image Not Upload');
    }
}
