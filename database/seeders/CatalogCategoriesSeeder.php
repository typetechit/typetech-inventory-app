<?php

namespace Database\Seeders;

use App\Models\CatalogCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CatalogCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = $this->getCategoriesData();

        foreach ($categories as $category){
            $categoryName = $category['name'];
            $categorySlug = Str::slug($category['name']);

            CatalogCategory::query()->firstOrCreate(
                [ "slug" => $categorySlug ],
                [ "name" => $categoryName ]
            );
        }

    }

    private function getCategoriesData()
    {
        return [
            [ "name" => 'Cold Items' ],
            [ "name" => 'Dairy Items' ],
            [ "name" => 'Chocolate Items' ],
            [ "name" => 'Flour Items' ],
            [ "name" => 'Butter Items' ],
        ];
    }
}
