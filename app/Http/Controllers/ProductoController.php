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

    public function precios(){
        $cont = 0;
        $min=$request->get('min');
        $max=$request->get('max');
        
        while($cont<count($tra_dni)){
            $trabajadores= new HecTrabajador();
            $trabajadores->tra_dni=$tra_dni[$cont];
            $trabajadores->tra_ape=$tra_ape[$cont];
            $trabajadores->tra_nom=$tra_nom[$cont];
            $trabajadores->id_car_tra=$id_car_tra[$cont];
            $trabajadores->id_for_pag=$id_for_pag[$cont];
            $trabajadores->id_ban=$id_ban[$cont];
            $trabajadores->tra_num_cue=$tra_num_cue[$cont];
            $trabajadores->save();
            $cont = $cont+1;
        }
         return response()->json(['success' => 1]);            
    }

}
