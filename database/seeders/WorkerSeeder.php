<?php

namespace Database\Seeders;

use App\Models\Worker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WorkerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $workers = $this->getWorkersData();

        foreach ($workers as $worker){
            Worker::create($worker);
        }
    }

    private function getWorkersData(): array
    {
        return [
            ["name" => "Worker 1", "code" => generateCode(6), "email" => "worker-1@gmail.com", "phone" => "01722254546", "pin" => bcrypt('1234')],
            ["name" => "Worker 2", "code" => generateCode(6), "email" => "worker-2@gmail.com", "phone" => "01722254544", "pin" => bcrypt('1234')],
            ["name" => "Worker 3", "code" => generateCode(6), "email" => "worker-3@gmail.com", "phone" => "01722254547", "pin" => bcrypt('1234')]
        ];
    }
}
