<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index(): \Inertia\Response
    {
        $services = Service::query()->latest()->paginate(25);

        return Inertia::render('Service/Index', [
            "services" => $services
        ]);
    }

    public function create(): \Inertia\Response
    {
        $units = ['Hourly', 'Daily', 'Quarterly', 'Annually', 'Onetime'];

        return Inertia::render('Service/Create', [
            "units" => $units
        ]);
    }

    public function store(Request $request)
    {
        $periods = ['Hourly', 'Daily', 'Monthly', 'Quarterly', 'Annually', 'Fixed'];

        $request->validate([
            'name' => 'required|unique:services',
            'description' => 'bail|max:500',
            'price' => 'required|numeric',
            'billing_type' => ['required', Rule::in($periods)],
        ]);

        $newService = Service::query()->create($request->all());

        return to_route('services.index');
    }

    public function destroy(Service $service)
    {
        $service->delete();
        return to_route('services.index');
    }
}
