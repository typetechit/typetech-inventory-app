<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Worker;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $workers = Worker::query()->latest()->paginate(25);

        return inertia('Workers/Index', [
            'workers' => $workers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Workers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|max:100',
            'code' => 'required|unique:workers,code',
            'pin' => 'required',
        ]);

        $newWorker = Worker::create($request->all());

        return to_route('workers.show', ['worker' => $newWorker->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Worker $worker)
    {
        return inertia('Workers/Show', [
            'worker' => $worker
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Worker $worker)
    {
        return inertia('Workers/Show', [
            'worker' => $worker
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
