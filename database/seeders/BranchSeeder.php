<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $branches = $this->getBranchesData();

        foreach ($branches as $branch) {
            Branch::create($branch);
        }
    }

    private function getBranchesData()
    {
        return [
            [
                "name" => "Al Hail Branch",
                "code" => generateCode(6),
                "email" => "al-hail-branch@gmail.com",
                "phone" => "0185658856"
            ],
            [
                "name" => "Al Maabilah Branch",
                "code" => generateCode(6),
                "email" => "al-maabilah-branch@gmail.com",
                "phone" => "0185658857"
            ],
            [
                "name" => "Al Qurm Branch",
                "code" => generateCode(6),
                "email" => "al-qurm-branch@gmail.com",
                "phone" => "0185658858"
            ],
            [
                "name" => "Salalah Branch ",
                "code" => generateCode(6),
                "email" => "al-salalah-branch@gmail.com",
                "phone" => "0185658859"
            ],
        ];
    }
}
