<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users', [UserController::class, 'store']);
Route::post('/student_store', [StudentController::class, 'store']);
Route::get('/show_token', [StudentController::class, 'showToken']);
Route::post('/show_students', [ProgramController::class, 'show_students_by_program']);
Route::post('/update_program', [ProgramController::class, 'update']);
Route::post('/update_student', [StudentController::class, 'update']);
Route::post('/destroy_student', [StudentController::class, 'destroy']);
Route::post('/destroy_program', [ProgramController::class, 'destroy']);
Route::post('/show_test', [StudentController::class, 'show_test']);


