<?php

namespace App\Http\Controllers;

use App\Models\CatalogCategory;
use App\Models\CatalogProduct;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = CatalogProduct::query()
            ->with('category')
            ->latest()
            ->paginate(25);

        return inertia('Catalog/Products/Index', [
            "products" => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = CatalogCategory::query()
            ->select(['id', 'name'])
            ->latest()
            ->get();

        return inertia('Catalog/Products/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:100',
            'slug' => 'required|unique:catalog_categories,slug',
            'category_id' => 'required|exists:catalog_categories,id',
            'image' => 'nullable|file'
        ]);

        $newProduct = CatalogProduct::create($request->all());

        if($request->hasFile('image')){
            $path = $request->image->store('images');
            $newProduct->update([
                'image' => $path
            ]);
        }

        return to_route('catalog.products.show', ['product' => $newProduct->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(CatalogProduct $product)
    {
        return inertia('Catalog/Categories/Show', [
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CatalogProduct $product)
    {
        return inertia('Catalog/Products/Show', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
