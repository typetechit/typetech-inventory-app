<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminUser = [
            "name" => "TypeTech",
            "email" => "typetechit@gmail.com",
            "password" => bcrypt('password'),
            "role" => "admin"
        ];

        User::firstOrCreate(
            ["email" => $adminUser['email']],
            $adminUser
        );
    }
}
