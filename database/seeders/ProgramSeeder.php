<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Program;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $program = new Program();
        $program->name = 'Electrica';
        $program->description = 'CARRERA';
        $program->key = 'ELEC';
        $program->save();

        $program = new Program();
        $program->name = 'Quimica';
        $program->description = 'CARRERA';
        $program->key = 'QUIM';
        $program->save();

        $program = new Program();
        $program->name = 'Industrial';
        $program->description = 'CARRERA';
        $program->key = 'INDU';
        $program->save();
        
    }
}
