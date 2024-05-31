<?php

namespace App\Http\Controllers\api\payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class indexController extends Controller
{
    public function index(Request $request)
    {
        $basketData = $request->basketData;

        $basketData = [
           [ "Macbook Pro M2",50000,1],
           [ "Laptop Standı",1000,1]
        ];


        $totalPrice = 0;
        foreach ($basketData as $basket){
            $totalPrice += $basket[1];
        }


        $data = [
            "totalPrice" => $totalPrice,
            "basketData"=>$basketData
        ];

        $view =  view('payment.index',$data)->render();

        return response()->json([
            "success" => true,
            "message" => "Form Getirildi",
            "view" => $view
        ],200);
    }
}
