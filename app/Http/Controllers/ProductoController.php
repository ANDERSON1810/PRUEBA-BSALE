<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Models\Categoria;

//use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Collection;
class ProductoController extends Controller
{
    //Función que realiza la petición de todos los productos
    public function index(Request $request)    
    {   
        $categorias=Categoria::select('id','name')->orderBy('name')->get();
        $query=trim($request->input('searchText'));
        //if($request->ajax()){                    
            
            $productos=Producto::join('category as c','product.category','=','c.id')
            ->select('product.id','product.name','product.url_image','product.price','product.discount','product.category')
            ->orderBy('c.name','asc')
            ->orderBy('product.name','asc')                
            ->paginate(10);

            $total_productos=Producto::join('category as c','product.category','=','c.id')
            ->select(\DB::raw('count(*) as total_productos'))    
            ->get();
          
            return response()->json([$productos,$total_productos,$query,$categorias]);
            
        //}
    }

    //Función que realiza la petición de búsqueda por nombre de productos o categoría
    public function buscar(Request $request)    
    {
        $categorias=Categoria::select('id','name')->orderBy('name')->get();
        $query=trim($request->input('searchText'));

        $validator = Validator::make(['searchText' => $query], [
            'searchText' => 'required|string'
        ]);

        if ($validator->fails()) {
            abort(404);
        }else {
            //if($request->ajax()){                    
            
            $productos=Producto::join('category as c','product.category','=','c.id')
            ->select('product.id','product.name','product.url_image','product.price','product.discount','product.category')
            ->where('product.name','LIKE','%'.$query.'%')  
            ->orwhere('c.name','LIKE','%'.$query.'%')               
            ->orderBy('c.name','asc')
            ->orderBy('product.name','asc')                
            ->paginate(10);

            $total_productos=Producto::join('category as c','product.category','=','c.id')
            ->select(\DB::raw('count(*) as total_productos')) 
            ->where('product.name','LIKE','%'.$query.'%')  
            ->orwhere('c.name','LIKE','%'.$query.'%')        
            ->get();
          
            return response()->json([$productos,$total_productos,$query,$categorias]);
            
            //}
        }
        
        
    }

    //Función que realiza la petición de categorías
    public function categorias(Request $request,$id)    
    {
        $categorias=Categoria::select('id','name')->orderBy('name')->get();
        $query=trim($request->input('searchText'));

        $validator = Validator::make(['id' => $id], [
            'id' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            abort(404);
        }else {
            //if($request->ajax()){                    
                
            $productos=Producto::join('category as c','product.category','=','c.id')
            ->select('product.id','product.name','product.url_image','product.price','product.discount','product.category')
            ->where('product.category','= ?',$id)                          
            ->orderBy('c.name','asc')
            ->orderBy('product.name','asc')                
            ->paginate(10);

            $total_productos=Producto::join('category as c','product.category','=','c.id')
            ->select(\DB::raw('count(*) as total_productos')) 
            ->where('product.category','= ?',$id)      
            ->get();
            
            return response()->json([$productos,$total_productos,$query,$categorias]);
                
            //}
        }
    }

    //Función que realiza la petición del filtro por precios
    public function precios(Request $request){
        $categorias=Categoria::select('id','name')->orderBy('name')->get();
        $query=trim($request->input('searchText'));
        
        $min=trim($request->min);
        $max=trim($request->max);
        
        $validator = Validator::make(['min' => $min,'max' => $max], [
            'min' => 'required|numeric',
            'max' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            abort(404);
        }else {

            //if($request->ajax()){                    
        
            $productos=Producto::join('category as c','product.category','=','c.id')
            ->select('product.id','product.name','product.url_image','product.price','product.discount','product.category')
            ->whereBetween('product.price', [$min, $max])                    
            ->orderBy('c.name','asc')
            ->orderBy('product.name','asc')                
            ->paginate(10);

            $total_productos=Producto::join('category as c','product.category','=','c.id')
            ->select(\DB::raw('count(*) as total_productos')) 
            ->whereBetween('product.price', [$min, $max])           
            ->get();

            return response()->json([$productos,$total_productos,$query,$categorias]);        
          
            //}   
        }
          
    }

    //Función que realiza la petición del filtro por descuento
    public function descuento(Request $request){
        $categorias=Categoria::select('id','name')->orderBy('name')->get();
        $query=trim($request->input('searchText'));
        
        $min=trim($request->min);
        $max=trim($request->max);
        
        $validator = Validator::make(['min' => $min,'max' => $max], [
            'min' => 'required|numeric',
            'max' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            abort(404);
        }else {

            //if($request->ajax()){                    
            
            $productos=Producto::join('category as c','product.category','=','c.id')
            ->select('product.id','product.name','product.url_image','product.price','product.discount','product.category')
            ->whereBetween('product.discount', [$min, $max])                    
            ->orderBy('c.name','asc')
            ->orderBy('product.name','asc')                
            ->paginate(10);

            $total_productos=Producto::join('category as c','product.category','=','c.id')
            ->select(\DB::raw('count(*) as total_productos')) 
            ->whereBetween('product.discount', [$min, $max])           
            ->get();

            return response()->json([$productos,$total_productos,$query,$categorias]);   
              
            //}
        }    
    }

}
