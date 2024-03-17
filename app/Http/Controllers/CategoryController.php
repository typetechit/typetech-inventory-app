<?php

namespace App\Http\Controllers;

use App\Models\CatalogCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = CatalogCategory::query()->latest()->paginate(25);

        return inertia('Catalog/Categories/Index', [
            "categories" => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Catalog/Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:100',
            'slug' => 'required|unique:catalog_categories,slug',
            'image' => 'nullable|file'
        ]);

        $newCategory = CatalogCategory::create($request->all());

        if($request->hasFile('image')){
            $path = $request->image->store('images');
            $newCategory->update([
                'image' => $path
            ]);
        }

        return to_route('catalog.categories.show', ['category' => $newCategory->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(CatalogCategory $category)
    {
        return inertia('Catalog/Categories/Show', [
            'category' => $category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CatalogCategory $category)
    {
        return inertia('Catalog/Categories/Show', [
            'category' => $category
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
