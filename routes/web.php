<?php

use Illuminate\Support\Facades\Route;

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
//Ruta de la página principal
Route::get('/', function () {
    return view('welcome');
});

//Ruta de petición de productos
Route::get('productos', 'ProductoController@index');

//Ruta de petición de búsqueda de producto o categoria
Route::get('buscar', 'ProductoController@buscar');

//Ruta de petición de categorias
Route::get('categorias/{id}', 'ProductoController@categorias');

//Ruta de petición de filtro por precios
Route::get('precios', 'ProductoController@precios');

//Ruta de petición de filtro por descuento
Route::get('descuento', 'ProductoController@descuento');



