<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Models\Categoria;

use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Collection;
class ProductoController extends Controller
{
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
          
            //dd($productos);
            return response()->json([$productos,$total_productos,$query,$categorias]);
            
        //}
    }

    public function buscar(Request $request)    
    {
        $categorias=Categoria::select('id','name')->orderBy('name')->get();
        $query=trim($request->input('searchText'));
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
          
            //dd($productos);
            return response()->json([$productos,$total_productos,$query,$categorias]);
            
        //}
    }

    public function categorias(Request $request,$id)    
    {
        $categorias=Categoria::select('id','name')->orderBy('name')->get();
        $query=trim($request->input('searchText'));
        //if($request->ajax()){                    
            
            $productos=Producto::join('category as c','product.category','=','c.id')
            ->select('product.id','product.name','product.url_image','product.price','product.discount','product.category')
            ->where('product.category','=',$id)  
                        
            ->orderBy('c.name','asc')
            ->orderBy('product.name','asc')                
            ->paginate(10);

            $total_productos=Producto::join('category as c','product.category','=','c.id')
            ->select(\DB::raw('count(*) as total_productos')) 
            ->where('product.category','=',$id)        
            ->get();
          
            //dd($productos);
            return response()->json([$productos,$total_productos,$query,$categorias]);
            
        //}
    }
}
