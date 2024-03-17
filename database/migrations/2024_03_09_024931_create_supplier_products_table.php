<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('supplier_products', function (Blueprint $table) {
            $table->id();

            $table->foreignId('supplier_id')->constrained()->references('id')->on('suppliers')->cascadeOnDelete();
            $table->foreignId('category_id')->constrained()->references('id')->on('catalog_categories')->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->references('id')->on('catalog_products')->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('suppliers_products');
    }
};
