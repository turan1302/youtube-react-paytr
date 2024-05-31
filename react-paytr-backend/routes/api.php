<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix'=>'payment','namespace'=>'payment','as'=>'payment.'],function (){
    Route::post('',[\App\Http\Controllers\api\payment\indexController::class,'index'])->name('index');
});
