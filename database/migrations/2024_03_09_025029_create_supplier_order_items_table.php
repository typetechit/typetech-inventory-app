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
        Schema::create('supplier_order_items', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')->constrained()->references('id')->on('supplier_orders')->cascadeOnDelete();
            $table->foreignId('category_id')->constrained()->references('id')->on('catalog_categories');
            $table->foreignId('product_id')->constrained()->references('id')->on('catalog_products');
            $table->string('product_sku');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('suppliers_order_items');
    }
};
