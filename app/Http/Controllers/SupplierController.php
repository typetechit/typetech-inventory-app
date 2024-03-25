<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::query()->latest()->paginate('25');

        return inertia()->render('Suppliers/Index', [
            'suppliers' => $suppliers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Suppliers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|max:100|unique:suppliers,email',
            'phone' => 'required|max:15',
            'address' => 'required|max:200',
            'photo' => 'required|file',
        ]);

        $request['code'] = generateCode(8);

        $newSupplier = Supplier::create($request->all());

        $updatableData = [];

        if($request->hasFile('photo')){
            $path = $request
                ->file('photo')
                ->store('supplier_images', 'public');

            $updatableData['photo'] = $path;
        }

        $newSupplier->update($updatableData);

        return to_route('suppliers.show', ["supplier" => $newSupplier->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {
        return inertia()->render('Suppliers/Show', [
            "supplier" => $supplier
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
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
