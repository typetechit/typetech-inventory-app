<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\WorkerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function(){

    Route::resource('suppliers', SupplierController::class);
    Route::resource('branches', BranchController::class);
    Route::resource('workers', WorkerController::class);
    Route::get('reports', [ReportController::class, 'index'])->name('reports.index');
    Route::get('warehouse', [WarehouseController::class, 'index'])->name('warehouse.index');

    Route::prefix('catalog')
        ->name('catalog.')
        ->group(function() {
            Route::resource('categories', CategoryController::class);
            Route::resource('products', ProductController::class);
        });
});

//Route::inertia('/example/dashboard', 'Example/Dashboard');

require __DIR__.'/auth.php';
