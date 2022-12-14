<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/users', [UserController::class, 'store']);
// Route::post('/student_store', [StudentController::class, 'store']);
// Route::get('/show_token', [StudentController::class, 'showToken']);
// Route::post('/show_students', [ProgramController::class, 'show_students_by_program']);
// Route::post('/update_program', [ProgramController::class, 'update']);
// Route::post('/update_student', [StudentController::class, 'update']);
Route::post('/destroy_student', [StudentController::class, 'destroy']);
// Route::post('/destroy_program', [ProgramController::class, 'destroy']);
Route::get('/show_token', [StudentController::class, 'showToken']);
Route::post('/show_students', [ProgramController::class, 'show_students_by_program']);
