<?php

namespace Database\Factories;
use App\Models\Program;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProgramFactory extends Factory
{
    protected $model = Program::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [

            'name' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'key' => $this->faker->unique()->text(5)
            //
        ];
    }
}
