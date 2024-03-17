<?php

namespace Database\Seeders;

use App\Models\CatalogCategory;
use App\Models\CatalogProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CatalogProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = $this->getProductsData();

        foreach ($products as $product){
            $productName = $product['name'];
            $productSlug = Str::slug($product['name']);

            CatalogProduct::query()->firstOrCreate(
                [ "slug" => $productSlug ],
                [
                    "name" => $productName,
                    "category_id" => $product['category_id']
                ]
            );
        }

    }

    private function getProductsData()
    {
        $categoryChocolateItems = CatalogCategory::query()->where('slug', 'chocolate-items')->first();
        $categoryFlourItems = CatalogCategory::query()->where('slug', 'flour-items')->first();
        $categoryColdItems = CatalogCategory::query()->where('slug', 'cold-items')->first();

        return [
            [ "name" => 'White choco', 'category_id' =>  $categoryChocolateItems->id],
            [ "name" => 'Dark choco', 'category_id' =>  $categoryChocolateItems->id ],
            [ "name" => 'milk choco', 'category_id' =>  $categoryChocolateItems->id ],
            [ "name" => 'circle choco', 'category_id' =>  $categoryChocolateItems->id ],
            [ "name" => 'block choco', 'category_id' =>  $categoryChocolateItems->id ],
            [ "name" => 'light choco', 'category_id' =>  $categoryChocolateItems->id ],
            [ "name" => 'diet choco', 'category_id' =>  $categoryChocolateItems->id ],
            [ "name" => 'Ice cream choco', 'category_id' =>  $categoryColdItems->id ],
            [ "name" => 'Ice cream vanilla', 'category_id' =>  $categoryColdItems->id ],
            [ "name" => 'Ice cream pistachio', 'category_id' =>  $categoryColdItems->id ],
            [ "name" => 'White flour', 'category_id' =>  $categoryFlourItems->id ],
            [ "name" => 'Brown flour', 'category_id' =>  $categoryFlourItems->id ],
            [ "name" => 'Self-raising flour', 'category_id' =>  $categoryFlourItems->id ],
        ];
    }
}
