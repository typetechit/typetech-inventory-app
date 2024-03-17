<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::query()->latest()->paginate(25);
        return Inertia::render('Client/Index', [
            "clients" => $clients
        ]);
    }

    public function create()
    {
        return Inertia::render('Client/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:clients,email',
            'phone' => 'required',
            'country' => 'required|max:100',
            'address' => 'required|max:100',
        ]);

        $newClient = Client::query()->create($request->all());

        return to_route('clients.index');
    }
}
