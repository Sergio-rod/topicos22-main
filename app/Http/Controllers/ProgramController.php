<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function show(Program $program)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function edit(Program $program)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Program $program)
    {

        Program::where('id'->request->id)
        ->update(['name'=>$request->name]);

        // $program = Program::find();
        // $program->name='Some Name';
        // $program->save();

        /*
        name' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'key' => $this->faker->unique()->text(5)*/ 
        
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function destroy(Program $program)
    {
        Program::where('id', $request->id)
        ->delete();

        //
    }

    public function show_students_by_program(Request $request){
        $program = Program::find($request->program_id);
        
       // return response()->json(['students'=> $program->students], 200);
         $names = [];

         foreach ($program->students as $student){
            $names[] = [
                "name"=>$student->name,
                "last_name"=>$student->last_name,
            ];
         }

         return response()->json($names);

    }
}
