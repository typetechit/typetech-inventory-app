<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\CatalogCategory;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $branches = Branch::query()->latest()->paginate(25);

        return inertia('Branches/Index', [
            'branches' => $branches
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Branches/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request['code'] = generateCode(6);

        $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|unique:branches,email',
            'phone' => 'required|unique:branches,phone',
            'code' => 'required|unique:branches,code'
        ]);

        $newBranch = Branch::create($request->all());

        return to_route('branches.show', ['branch' => $newBranch->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
