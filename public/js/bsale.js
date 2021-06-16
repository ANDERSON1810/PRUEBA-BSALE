 $(document).ready(function(){ 

 principal(); 
 categorias(); 
 buscar();
 precios(); 
 descuento();
 })
 
/*Función Principal*/
/*-- Realiza el llamado de todos los productos y la carga respectiva de la cabecera, productos y paginacion*/
function principal(){
    var cabecera='';
    var fila='';     
    var fila2=''; 
    var paginacion=''; 

    //Método Get de Productos
    $.get("api/productos", function(res){
       
        if (res[1][0].total_productos > 0){   
            $("#cabecera").html('');
            $("#productos").html('');
            $("#paginacion").html('');                                                            

            cabecera="<h4 style='text-transform:capitalize'>Productos</h4>";
            cabecera+="<ul>";         
            cabecera+="<li class='dropdown head-dpdn'>";
            cabecera+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
            cabecera+="</li>";        
            cabecera+="</ul>";         
            cabecera+="<div class='clearfix'> </div>";          
            
            for (var i = 0; i < res[0].data.length; i++) {              
                            
                fila="<div class='col-md-4 product-grids'>"; 
                fila+="<div class='agile-products'>";

                if (res[0].data[i].discount== null || res[0].data[i].discount== 0) {
                    
                    if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                        fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                        
                    }
                    else{
                        fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                    }

                    fila+="<div class='agile-product-text'>";              
                    fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                    fila+="<h6>S/. "+res[0].data[i].price+"</h6>";
                    fila+="<form action='#' method='post'>";
                    fila+="<input type='hidden' name='cmd' value='_cart' />";
                    fila+="<input type='hidden' name='add' value='1' />"; 
                    fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                    fila+="<input type='hidden' name='amount' value='"+res[0].data[i].price+".00'/> ";
                    fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                    fila+="</form>"; 
                    fila+="</div>";

                }

                else{

                    fila+="<div class='new-tag'><h6>" + res[0].data[i].discount + "%<br>Dscto</h6></div>"
                    if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                        fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                        
                    }
                    else{
                        fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                    }

                    fila+="<div class='agile-product-text'>";              
                    fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                    fila+="<h6><del>S/. "+res[0].data[i].price+"</del>S/. "+ oferta(res[0].data[i].price,res[0].data[i].discount); +"</h6>";
                    fila+="<form action='#' method='post'>";
                    fila+="<input type='hidden' name='cmd' value='_cart' />";
                    fila+="<input type='hidden' name='add' value='1' />"; 
                    fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                    fila+="<input type='hidden' name='amount' value='"+oferta(res[0].data[i].price,res[0].data[i].discount)+".00'/>";
                    fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                    fila+="</form>"; 
                    fila+="</div>";
                    
                }
                            
                fila+="</div>";
                fila+="</div>";             
                $("#productos").append(fila);

            }
                       
            if (res[0].links.length==3) {
                $("#paginacion").html('');
            }   

            else{  
                
                paginacion="<ul class='pagination justify-content-center'>";
                paginacion+="<li class='page-item'>"
                paginacion+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
                paginacion+="<span aria-hidden='true'>&laquo;</span>";
                paginacion+="</a>";
                paginacion+="</li>";

                for (var i = 1; i < res[0].links.length-1; i++) {
                    if (res[0].links[i].label==1) {
                        paginacion+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                    }

                    else{
                      paginacion+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                    }
                    
                        
                }        
                paginacion+="<li class='page-item'>"
                paginacion+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
                paginacion+="<span aria-hidden='true'>&raquo;</span>";
                paginacion+="</a>";
                paginacion+="</li>";

                paginacion+="</ul>";
                $("#paginacion").append(paginacion);
                   
                
            }

            $("#cabecera").append(cabecera);                    
            
            //$.getScript("js/minicart.js"); 

            $('.producto').click(function(e){
               e.preventDefault();
                w3ls.cart.add({
                
                w3ls_item: $(this).attr("_data"),
                amount: $(this).attr("_amount"),
                currency_code: 'PEN',
                
                });
           });    
        }
           
        else
        {
         alert('NO HAY PRODUCTOS');
        }

        //Paginación de Productos
        $(".pagination a").click(function (e) { 
            e.preventDefault();
            var page= $(this).attr('href').split('page=')[1];
            var route="productos?page=" + page;
            

            if ($(this).parent('li').hasClass("active")) {
                
            }

            else{
                $.ajax({ 

                    url: route,
                    type: 'get',               
                    
                    success: function (data) { 
                            
                        $("#productos").html('');   
                        
                        for (var i = 0; i < data[0].data.length; i++) {              
                            
                            fila2="<div class='col-md-4 product-grids'>"; 
                            fila2+="<div class='agile-products'>";

                            if (data[0].data[i].discount== null || data[0].data[i].discount== 0) {
                                
                                if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                    fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                    
                                }
                                else{
                                    fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                }

                                fila2+="<div class='agile-product-text'>";              
                                fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                fila2+="<h6>S/. "+data[0].data[i].price+"</h6>";
                                fila2+="<form action='#' method='post'>";
                                fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                fila2+="<input type='hidden' name='add' value='1' />"; 
                                fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                fila2+="<input type='hidden' name='amount' value='"+data[0].data[i].price+".00'/> ";
                                fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                fila2+="</form>"; 
                                fila2+="</div>";

                            }

                            else{

                                fila2+="<div class='new-tag'><h6>" + data[0].data[i].discount + "%<br>Dscto</h6></div>"
                                if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                    fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                    
                                }
                                else{
                                    fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                }

                                fila2+="<div class='agile-product-text'>";              
                                fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                fila2+="<h6><del>S/. "+data[0].data[i].price+"</del>S/. "+ oferta(data[0].data[i].price,data[0].data[i].discount); +"</h6>";
                                fila2+="<form action='#' method='post'>";
                                fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                fila2+="<input type='hidden' name='add' value='1' />"; 
                                fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                                fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                fila2+="</form>"; 
                                fila2+="</div>";
                                
                            }
                                        
                            fila2+="</div>";
                            fila2+="</div>";             
                            $("#productos").append(fila2);
                            $('.producto').click(function(e){
                               e.preventDefault();
                                w3ls.cart.add({
                                
                                w3ls_item: $(this).attr("_data"),
                                amount: $(this).attr("_amount"),
                                currency_code: 'PEN',
                                
                                });
                           });    

                        }
                                    
                    }
                })
                
                $('li').removeClass('active');
                $(this).parent('li').addClass('active');
                    
            }
        })  
    });  
}
/*//Función Principal*/


/*Función Categorias*/ 
/*-- Realiza el llenado en el Menú Categorías y la carga de productos de cada una*/
function categorias(){
    var categorias='';
    var cabecera='';
    var fila='';     
    var fila2=''; 
    var paginacion=''; 

    //Método Get de Categorías
    $.get("api/productos", function(res){
    
        if (res[3].length > 0) {
            
            categorias="<ul class='cd-dropdown-content'>";                    
            categorias+="<li><a href='api/categorias/0' >Todos</a></li>";            

            for (var i = 0; i < res[3].length ; i++) {
               categorias+="<li style='text-transform:capitalize;'><a href='api/categorias/"+res[3][i].id+"'>"+res[3][i].name+"</a></li>";
               
            }
            categorias+="</ul>";
            $("#close").after(categorias);
        }

        else{
            alert('NO HAY CATEGORIAS');
        }

        //Función de Filtro por Categoría
        $(".cd-dropdown a").click(function (e) {               
            
            e.preventDefault();         
            $("#buscar").val('');
            limpiarchkprec();
            limpiarchkdesc();
            $.ajaxSetup({
                headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
            });          

            var route= $(this).attr('href');
            var id=$(this).attr('href').split('categorias/')[1];;

            $.ajax({ 

                url: route,
                type: 'get',              
                
                success: function (res) {    

                    if (id == 0) {
                        principal();
                    }

                    else if (res[1][0].total_productos > 0 && id != 0){ 

                        $("#cabecera").html('');
                        $("#productos").html('');
                        $("#paginacion").html('');
                        
                        var cat=[];
                        var objcat;
                        
                        for (var i = 0; i < res[0].data.length; i++) {    
                            for (var j = 0; j < res[3].length; j++) {
                                
                                if (res[0].data[i].category==res[3][j].id) {
                                    objcat=res[3][j].name;
                                    cat.push(objcat);                                                                                                        
                                }          
                            }
                        }

                        let result = cat.filter((item,index)=>{return cat.indexOf(item) === index;
                                    });
                        

                        cabecera="<h4 style='text-transform:capitalize'>"+result+"</h4>";                         
                        cabecera+="<ul>"; 
                        cabecera+="<li class='dropdown head-dpdn'>";
                        cabecera+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
                        cabecera+="</li>";        
                        cabecera+="</ul>";  
                        cabecera+="<div class='clearfix'> </div>";                                                               

                        for (var i = 0; i < res[0].data.length; i++) {              
                    
                            fila="<div class='col-md-4 product-grids'>"; 
                            fila+="<div class='agile-products'>";

                            if (res[0].data[i].discount== null || res[0].data[i].discount== 0) {
                                
                                if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                    fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                    
                                }
                                else{
                                    fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                }

                                fila+="<div class='agile-product-text'>";              
                                fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                                fila+="<h6>S/. "+res[0].data[i].price+"</h6>";
                                fila+="<form action='#' method='post'>";
                                fila+="<input type='hidden' name='cmd' value='_cart' />";
                                fila+="<input type='hidden' name='add' value='1' />"; 
                                fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                                fila+="<input type='hidden' name='amount' value='"+res[0].data[i].price+".00'/> ";
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                fila+="</form>"; 
                                fila+="</div>";

                            }

                            else{

                                fila+="<div class='new-tag'><h6>" + res[0].data[i].discount + "%<br>Dscto</h6></div>"
                                if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                    fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                    
                                }
                                else{
                                    fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                }

                                fila+="<div class='agile-product-text'>";              
                                fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                                fila+="<h6><del>S/. "+res[0].data[i].price+"</del>S/. "+ oferta(res[0].data[i].price,res[0].data[i].discount); +"</h6>";
                                fila+="<form action='#' method='post'>";
                                fila+="<input type='hidden' name='cmd' value='_cart' />";
                                fila+="<input type='hidden' name='add' value='1' />"; 
                                fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                                fila+="<input type='hidden' name='amount' value='"+oferta(res[0].data[i].price,res[0].data[i].discount)+".00'/>";
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                fila+="</form>"; 
                                fila+="</div>";
                                
                            }
                                        
                            fila+="</div>";
                            fila+="</div>";             
                            $("#productos").append(fila);
                            $('.producto').click(function(e){
                                e.preventDefault();
                                w3ls.cart.add({
                                
                                w3ls_item: $(this).attr("_data"),
                                amount: $(this).attr("_amount"),
                                currency_code: 'PEN',
                                
                                });
                            });    
                        }
                        
                        
                        if (res[0].links.length==3) {
                            $("#paginacion").html('');
                        }   

                        else{  
                            
                            paginacion="<ul class='pagination justify-content-center'>";
                            paginacion+="<li class='page-item'>"
                            paginacion+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
                            paginacion+="<span aria-hidden='true'>&laquo;</span>";
                            paginacion+="</a>";
                            paginacion+="</li>";

                            for (var i = 1; i < res[0].links.length-1; i++) {
                                if (res[0].links[i].label==1) {
                                    paginacion+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                                }

                                else{
                                  paginacion+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                                }
                                
                                    
                            }        
                            paginacion+="<li class='page-item'>"
                            paginacion+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
                            paginacion+="<span aria-hidden='true'>&raquo;</span>";
                            paginacion+="</a>";
                            paginacion+="</li>";

                            paginacion+="</ul>";
                            $("#paginacion").append(paginacion);
                               
                            
                        }

                        $("#cabecera").append(cabecera);                                                                                                  
                    }

                    else if(res[1][0].total_productos == 0 && id != 0){                           
                        alert('NO HAY PRODUCTOS EN ÉSTA CATEGORIA');
                        principal();                         
                    }
                          
                    //Paginación de Filtro por Categoría
                    $(".pagination a").click(function (e) { 
                        e.preventDefault();
                        var page= $(this).attr('href').split('page=')[1];
                        var categoria= $(this).attr('href').split('categorias/')[1];
                        var categoriaid= categoria.split("?page=")[0];
                        var route="categorias/"+categoriaid+"?page=" + page;
                        

                        if ($(this).parent('li').hasClass("active")) {
                            
                        }

                        else{
                            $.ajax({ 

                                url: route,
                                type: 'get',
                                
                                
                                success: function (data) {                                                                         
                                                                        
                                    $("#productos").html('');   
                    
                                    for (var i = 0; i < data[0].data.length; i++) {              
                                        
                                        fila2="<div class='col-md-4 product-grids'>"; 
                                        fila2+="<div class='agile-products'>";

                                        if (data[0].data[i].discount== null || data[0].data[i].discount== 0) {
                                            
                                            if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                                fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                                
                                            }
                                            else{
                                                fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            }

                                            fila2+="<div class='agile-product-text'>";              
                                            fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                            fila2+="<h6>S/. "+data[0].data[i].price+"</h6>";
                                            fila2+="<form action='#' method='post'>";
                                            fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                            fila2+="<input type='hidden' name='add' value='1' />"; 
                                            fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                            fila2+="<input type='hidden' name='amount' value='"+data[0].data[i].price+".00'/> ";
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                            fila2+="</form>"; 
                                            fila2+="</div>";

                                        }

                                        else{

                                            fila2+="<div class='new-tag'><h6>" + data[0].data[i].discount + "%<br>Dscto</h6></div>"
                                            if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                                fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                                
                                            }
                                            else{
                                                fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            }

                                            fila2+="<div class='agile-product-text'>";              
                                            fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                            fila2+="<h6><del>S/. "+data[0].data[i].price+"</del>S/. "+ oferta(data[0].data[i].price,data[0].data[i].discount); +"</h6>";
                                            fila2+="<form action='#' method='post'>";
                                            fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                            fila2+="<input type='hidden' name='add' value='1' />"; 
                                            fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                            fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                            fila2+="</form>"; 
                                            fila2+="</div>";
                                            
                                        }
                                                    
                                        fila2+="</div>";
                                        fila2+="</div>";             
                                        $("#productos").append(fila2);

                                        $('.producto').click(function(e){
                                            e.preventDefault();
                                            w3ls.cart.add({
                                            
                                            w3ls_item: $(this).attr("_data"),
                                            amount: $(this).attr("_amount"),
                                            currency_code: 'PEN',
                                            
                                            });
                                        });    
                                    }     
                                    
                                }
                            })
                            
                            $('li').removeClass('active');
                            $(this).parent('li').addClass('active');
                                
                        }
                    })                              
                }        
            }); 

            $('#categorias').removeClass('dropdown-is-active');

        })
    })  
}
/*//Función Categorias*/ 


/*Función Oferta*/ 
/*-- Realiza el cálculo del descuento para cada producto*/
function oferta($precio,$dscto){
    $oferta= $precio-($precio*$dscto/100);
    return $oferta;
}
/*//Función Oferta*/ 


/*Función Buscar*/ 
/*-- Realiza la búsqueda por nombre de producto o nombre de categoría*/
function buscar(){
        
    $("#idbuscar").click(function (e) {
        var categorias='';
        var cabecera='';
        var fila='';     
        var fila2=''; 
        var paginacion=''; 
        var inputbuscar = document.getElementById('buscar');
        
        if (inputbuscar.value=="") {
            e.preventDefault();  
            alert('INGRESAR UN VALOR');
            $("#buscar").focus();
            limpiarchkprec();
            limpiarchkdesc();
            principal();
        }
        else{
            e.preventDefault();  
            limpiarchkprec();
            limpiarchkdesc();
            $.ajaxSetup({
                headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
            });          

            var datastring = $('#frmbuscar').serialize();
            $.ajax({ 

                url: $('#frmbuscar').attr('action'),
                type: $('#frmbuscar').attr('method'),
                data: datastring,
                
                success: function (res) {    
                    
                    if (res[1][0].total_productos > 0){ 
                        $("#cabecera").html('');
                        $("#productos").html('');
                        $("#paginacion").html('');

                        var cat=[];
                        var objcat;
                        
                        for (var i = 0; i < res[0].data.length; i++) {    
                            for (var j = 0; j < res[3].length; j++) {
                                
                                if (res[0].data[i].category==res[3][j].id) {
                                    objcat=res[3][j].name;
                                    cat.push(objcat);                                                                                                        
                                }          
                            }
                        }

                        let result = cat.filter((item,index)=>{return cat.indexOf(item) === index;
                                    });
                        

                        cabecera="<h4 style='text-transform:capitalize'>"+result+"</h4>";                         
                        cabecera+="<ul>"; 
                        cabecera+="<li class='dropdown head-dpdn'>";
                        cabecera+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
                        cabecera+="</li>";        
                        cabecera+="</ul>";  
                        cabecera+="<div class='clearfix'> </div>";                                                               

                        for (var i = 0; i < res[0].data.length; i++) {              
                    
                            fila="<div class='col-md-4 product-grids'>"; 
                            fila+="<div class='agile-products'>";

                            if (res[0].data[i].discount== null || res[0].data[i].discount== 0) {
                                
                                if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                    fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                    
                                }
                                else{
                                    fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                }

                                fila+="<div class='agile-product-text'>";              
                                fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                                fila+="<h6>S/. "+res[0].data[i].price+"</h6>";
                                fila+="<form action='#' method='post'>";
                                fila+="<input type='hidden' name='cmd' value='_cart' />";
                                fila+="<input type='hidden' name='add' value='1' />"; 
                                fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                                fila+="<input type='hidden' name='amount' value='"+res[0].data[i].price+".00'/> ";
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                fila+="</form>"; 
                                fila+="</div>";

                            }

                            else{

                                fila+="<div class='new-tag'><h6>" + res[0].data[i].discount + "%<br>Dscto</h6></div>"
                                if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                    fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                    
                                }
                                else{
                                    fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                }

                                fila+="<div class='agile-product-text'>";              
                                fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                                fila+="<h6><del>S/. "+res[0].data[i].price+"</del>S/. "+ oferta(res[0].data[i].price,res[0].data[i].discount); +"</h6>";
                                fila+="<form action='#' method='post'>";
                                fila+="<input type='hidden' name='cmd' value='_cart' />";
                                fila+="<input type='hidden' name='add' value='1' />"; 
                                fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                                fila+="<input type='hidden' name='amount' value='"+oferta(res[0].data[i].price,res[0].data[i].discount)+".00'/>";
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                fila+="</form>"; 
                                fila+="</div>";
                                
                            }
                                        
                            fila+="</div>";
                            fila+="</div>";             
                            $("#productos").append(fila);
                            $('.producto').click(function(e){
                                e.preventDefault();
                                w3ls.cart.add({
                                
                                w3ls_item: $(this).attr("_data"),
                                amount: $(this).attr("_amount"),
                                currency_code: 'PEN',
                                
                                });
                            });    

                        }

                        if (res[0].links.length==3) {
                            $("#paginacion").html('');
                        }   

                        else{  
                            
                            paginacion="<ul class='pagination justify-content-center'>";
                            paginacion+="<li class='page-item'>"
                            paginacion+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
                            paginacion+="<span aria-hidden='true'>&laquo;</span>";
                            paginacion+="</a>";
                            paginacion+="</li>";

                            for (var i = 1; i < res[0].links.length-1; i++) {
                                if (res[0].links[i].label==1) {
                                    paginacion+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                                }

                                else{
                                  paginacion+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                                }
                                
                                    
                            }        
                            paginacion+="<li class='page-item'>"
                            paginacion+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
                            paginacion+="<span aria-hidden='true'>&raquo;</span>";
                            paginacion+="</a>";
                            paginacion+="</li>";
                            paginacion+="</ul>";
                            $("#paginacion").append(paginacion);
                               
                            
                        }

                        $("#cabecera").append(cabecera);                    
                        
                              
                                                           
                    }
                       
                    else
                        {
                         alert('PRODUCTO NO ENCONTRADO');
                         $("#buscar").val('');
                         $("#buscar").focus();
                         principal();
                        }

                    //Paginación por Búsqueda
                    $(".pagination a").click(function (e) { 
                        e.preventDefault();
                        var page= $(this).attr('href').split('page=')[1];
                        var route="buscar?searchText="+inputbuscar.value+"&page=" + page;
                        

                        if ($(this).parent('li').hasClass("active")) {
                            
                        }

                        else{
                            $.ajax({ 

                                url: route,
                                type: 'get',               
                                
                                success: function (data) { 
                                    $("#productos").html('');   
                    
                                    for (var i = 0; i < data[0].data.length; i++) {              
                                        
                                        fila2="<div class='col-md-4 product-grids'>"; 
                                        fila2+="<div class='agile-products'>";

                                        if (data[0].data[i].discount== null || data[0].data[i].discount== 0) {
                                            
                                            if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                                fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                                
                                            }
                                            else{
                                                fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            }

                                            fila2+="<div class='agile-product-text'>";              
                                            fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                            fila2+="<h6>S/. "+data[0].data[i].price+"</h6>";
                                            fila2+="<form action='#' method='post'>";
                                            fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                            fila2+="<input type='hidden' name='add' value='1' />"; 
                                            fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                            fila2+="<input type='hidden' name='amount' value='"+data[0].data[i].price+".00'/> ";
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                            fila2+="</form>"; 
                                            fila2+="</div>";

                                        }

                                        else{

                                            fila2+="<div class='new-tag'><h6>" + data[0].data[i].discount + "%<br>Dscto</h6></div>"
                                            if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                                fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                                
                                            }
                                            else{
                                                fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            }

                                            fila2+="<div class='agile-product-text'>";              
                                            fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                            fila2+="<h6><del>S/. "+data[0].data[i].price+"</del>S/. "+ oferta(data[0].data[i].price,data[0].data[i].discount); +"</h6>";
                                            fila2+="<form action='#' method='post'>";
                                            fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                            fila2+="<input type='hidden' name='add' value='1' />"; 
                                            fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                            fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                            fila2+="</form>"; 
                                            fila2+="</div>";
                                            
                                        }
                                                    
                                        fila2+="</div>";
                                        fila2+="</div>";             
                                        $("#productos").append(fila2);
                                        $('.producto').click(function(e){
                                            e.preventDefault();
                                            w3ls.cart.add({
                                            
                                            w3ls_item: $(this).attr("_data"),
                                            amount: $(this).attr("_amount"),
                                            currency_code: 'PEN',
                                            
                                            });
                                        });    

                                    }                                                                  
                                }
                            })
                            
                            $('li').removeClass('active');
                            $(this).parent('li').addClass('active');
                                
                        }
                    })   
                }        
            }); 
        }       
    })
}
/*//Función Buscar*/ 


/*Función Filtro por Precio*/ 
/*-- Realiza el Filtro por Precio*/
function precios(){
    $(".chk").click(function (e) {
        var precio=[];
        var check=$(".chk");        
        var min;
        var max;

        
        for (var i=0; i < check.length; i++) {
             if (check[i].checked) {   

                precio.push(parseFloat(check[i].value.split(',')[0])); 
                precio.push(parseFloat(check[i].value.split(',')[1]));            
                
              
             }
        }
                
        min=Math.min.apply(null, precio);
        max=Math.max.apply(null, precio)
        
        limpiarchkdesc();
        $("#buscar").val('');
        $.ajaxSetup({
            headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
        });          

        
        $.ajax({ 

            url: 'api/precios?min='+min+'&max='+max,
            type: 'get',
            data: {min:min,max:max},
            
            success: function (res) {  
                
                if (res[1][0].total_productos > 0){  
                    $('#borrarprec').show();
                    $("#cabecera").html('');
                    $("#productos").html('');
                    $("#paginacion").html('');                                                            

                    cabecera="<h4 style='text-transform:capitalize'>Productos</h4>";
                    cabecera+="<ul>";         
                    cabecera+="<li class='dropdown head-dpdn'>";
                    cabecera+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
                    cabecera+="</li>";        
                    cabecera+="</ul>";         
                    cabecera+="<div class='clearfix'> </div>";


                    for (var i = 0; i < res[0].data.length; i++) {              
                        
                        fila="<div class='col-md-4 product-grids'>"; 
                        fila+="<div class='agile-products'>";

                        if (res[0].data[i].discount== null || res[0].data[i].discount== 0) {
                            
                            if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                
                            }
                            else{
                                fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                            }

                            fila+="<div class='agile-product-text'>";              
                            fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                            fila+="<h6>S/. "+res[0].data[i].price+"</h6>";
                            fila+="<form action='#' method='post'>";
                            fila+="<input type='hidden' name='cmd' value='_cart' />";
                            fila+="<input type='hidden' name='add' value='1' />"; 
                            fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                            fila+="<input type='hidden' name='amount' value='"+res[0].data[i].price+".00'/> ";
                            fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                            fila+="</form>"; 
                            fila+="</div>";

                        }

                        else{

                            fila+="<div class='new-tag'><h6>" + res[0].data[i].discount + "%<br>Dscto</h6></div>"
                            if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                
                            }
                            else{
                                fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                            }

                            fila+="<div class='agile-product-text'>";              
                            fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                            fila+="<h6><del>S/. "+res[0].data[i].price+"</del>S/. "+ oferta(res[0].data[i].price,res[0].data[i].discount); +"</h6>";
                            fila+="<form action='#' method='post'>";
                            fila+="<input type='hidden' name='cmd' value='_cart' />";
                            fila+="<input type='hidden' name='add' value='1' />"; 
                            fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                            fila+="<input type='hidden' name='amount' value='"+oferta(res[0].data[i].price,res[0].data[i].discount)+".00'/>";
                            fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                            fila+="</form>"; 
                            fila+="</div>";
                            
                        }
                                    
                        fila+="</div>";
                        fila+="</div>";             
                        $("#productos").append(fila);

                    }  

                    if (res[0].links.length==3) {
                        $("#paginacion").html('');
                    }       

                    else{  
                        
                        paginacion="<ul class='pagination justify-content-center'>";
                        paginacion+="<li class='page-item'>"
                        paginacion+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
                        paginacion+="<span aria-hidden='true'>&laquo;</span>";
                        paginacion+="</a>";
                        paginacion+="</li>";

                        for (var i = 1; i < res[0].links.length-1; i++) {
                            if (res[0].links[i].label==1) {
                                paginacion+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                            }

                            else{
                              paginacion+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                            }
                            
                                
                        }        
                        paginacion+="<li class='page-item'>"
                        paginacion+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
                        paginacion+="<span aria-hidden='true'>&raquo;</span>";
                        paginacion+="</a>";
                        paginacion+="</li>";

                        paginacion+="</ul>";
                        $("#paginacion").append(paginacion);
                           
                        
                    }

                    $("#cabecera").append(cabecera);                    
                    
                    //$.getScript("js/minicart.js"); 

                    $('.producto').click(function(e){
                        e.preventDefault();
                        w3ls.cart.add({
                        
                        w3ls_item: $(this).attr("_data"),
                        amount: $(this).attr("_amount"),
                        currency_code: 'PEN',
                        
                        });
                    });    

                } 

                else
                {
                 alert('NO HAY PRODUCTOS');
                 principal();
                 limpiarchkprec();
                }

                //Paginación de Filtro por Precio
                $(".pagination a").click(function (e) { 
                    e.preventDefault();
                    var page= $(this).attr('href').split('page=')[1];
                    var route="api/precios?min="+ min +"&max="+max+"&page=" + page;                    
                    
                    if ($(this).parent('li').hasClass("active")) {
                        
                    }

                    else{
                        $.ajax({ 

                            url: route,
                            type: 'get',               
                            
                            success: function (data) { 
                                $("#productos").html('');   
                
                                for (var i = 0; i < data[0].data.length; i++) {              
                                    
                                    fila2="<div class='col-md-4 product-grids'>"; 
                                    fila2+="<div class='agile-products'>";

                                    if (data[0].data[i].discount== null || data[0].data[i].discount== 0) {
                                        
                                        if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                            fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            
                                        }
                                        else{
                                            fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                        }

                                        fila2+="<div class='agile-product-text'>";              
                                        fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                        fila2+="<h6>S/. "+data[0].data[i].price+"</h6>";
                                        fila2+="<form action='#' method='post'>";
                                        fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                        fila2+="<input type='hidden' name='add' value='1' />"; 
                                        fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                        fila2+="<input type='hidden' name='amount' value='"+data[0].data[i].price+".00'/> ";
                                        fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                        fila2+="</form>"; 
                                        fila2+="</div>";

                                    }

                                    else{

                                        fila2+="<div class='new-tag'><h6>" + data[0].data[i].discount + "%<br>Dscto</h6></div>"
                                        if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                            fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            
                                        }
                                        else{
                                            fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                        }

                                        fila2+="<div class='agile-product-text'>";              
                                        fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                        fila2+="<h6><del>S/. "+data[0].data[i].price+"</del>S/. "+ oferta(data[0].data[i].price,data[0].data[i].discount); +"</h6>";
                                        fila2+="<form action='#' method='post'>";
                                        fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                        fila2+="<input type='hidden' name='add' value='1' />"; 
                                        fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                        fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                                        fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                        fila2+="</form>"; 
                                        fila2+="</div>";
                                        
                                    }
                                                
                                    fila2+="</div>";
                                    fila2+="</div>";             
                                    $("#productos").append(fila2);
                                    $('.producto').click(function(e){
                                        e.preventDefault();
                                        w3ls.cart.add({
                                        
                                        w3ls_item: $(this).attr("_data"),
                                        amount: $(this).attr("_amount"),
                                        currency_code: 'PEN',
                                        
                                        });
                                    });    

                                }                                                                  
                            }
                        })
                        
                        $('li').removeClass('active');
                        $(this).parent('li').addClass('active');
                            
                    }
                }) 

             }
        })
    
   }) 

    $("#borrarprec").click(function (e) {
        limpiarchkprec();
        principal();
    })
}
/*//Función Filtro por Precio*/ 


/*Función Limpiar Filtros por Precio*/ 
/*-- Realiza la limpieza de los checkbox del Filtro por Precio*/
function limpiarchkprec()
{
    $(".chk").prop('checked',false);
    $("#borrarprec").hide();
    
}
/*//Función Filtro por Precio*/ 


/*Función Filtro por Descuento*/ 
/*-- Realiza el Filtro por Descuento*/
function descuento(){
    $(".chk2").click(function (e) {
        var precio=[];
        var check=$(".chk2");        
        var min;
        var max;

        
        for (var i=0; i < check.length; i++) {
             if (check[i].checked) {   

                precio.push(parseFloat(check[i].value.split(',')[0])); 
                precio.push(parseFloat(check[i].value.split(',')[1]));            
                
              
             }
        }
                
        min=Math.min.apply(null, precio);
        max=Math.max.apply(null, precio)
        
        limpiarchkprec();
        $("#buscar").val('');
        $.ajaxSetup({
            headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
        });          

        
        $.ajax({ 

            url: 'api/descuento?min='+min+'&max='+max,
            type: 'get',
            data: {min:min,max:max},
            
            success: function (res) {  
                
                if (res[1][0].total_productos > 0){  
                    $('#borrardesc').show();
                    $("#cabecera").html('');
                    $("#productos").html('');
                    $("#paginacion").html('');                                                            

                    cabecera="<h4 style='text-transform:capitalize'>Productos</h4>";
                    cabecera+="<ul>";         
                    cabecera+="<li class='dropdown head-dpdn'>";
                    cabecera+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
                    cabecera+="</li>";        
                    cabecera+="</ul>";         
                    cabecera+="<div class='clearfix'> </div>";


                    for (var i = 0; i < res[0].data.length; i++) {              
                        
                        fila="<div class='col-md-4 product-grids'>"; 
                        fila+="<div class='agile-products'>";

                        if (res[0].data[i].discount== null || res[0].data[i].discount== 0) {
                            
                            if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                
                            }
                            else{
                                fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                            }

                            fila+="<div class='agile-product-text'>";              
                            fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                            fila+="<h6>S/. "+res[0].data[i].price+"</h6>";
                            fila+="<form action='#' method='post'>";
                            fila+="<input type='hidden' name='cmd' value='_cart' />";
                            fila+="<input type='hidden' name='add' value='1' />"; 
                            fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                            fila+="<input type='hidden' name='amount' value='"+res[0].data[i].price+".00'/> ";
                            fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                            fila+="</form>"; 
                            fila+="</div>";

                        }

                        else{

                            fila+="<div class='new-tag'><h6>" + res[0].data[i].discount + "%<br>Dscto</h6></div>"
                            if (res[0].data[i].url_image == null || res[0].data[i].url_image == '') {
                                fila+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                
                            }
                            else{
                                fila+="<a href=''><img src='"+res[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                            }

                            fila+="<div class='agile-product-text'>";              
                            fila+="<h5><a href=''>"+res[0].data[i].name+"</a></h5>";
                            fila+="<h6><del>S/. "+res[0].data[i].price+"</del>S/. "+ oferta(res[0].data[i].price,res[0].data[i].discount); +"</h6>";
                            fila+="<form action='#' method='post'>";
                            fila+="<input type='hidden' name='cmd' value='_cart' />";
                            fila+="<input type='hidden' name='add' value='1' />"; 
                            fila+="<input type='hidden' name='w3ls_item' value='"+res[0].data[i].name+"'/>";
                            fila+="<input type='hidden' name='amount' value='"+oferta(res[0].data[i].price,res[0].data[i].discount)+".00'/>";
                            fila+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                            fila+="</form>"; 
                            fila+="</div>";
                            
                        }
                                    
                        fila+="</div>";
                        fila+="</div>";             
                        $("#productos").append(fila);

                    }  

                    if (res[0].links.length==3) {
                        $("#paginacion").html('');
                    }       

                    else{  
                        
                        paginacion="<ul class='pagination justify-content-center'>";
                        paginacion+="<li class='page-item'>"
                        paginacion+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
                        paginacion+="<span aria-hidden='true'>&laquo;</span>";
                        paginacion+="</a>";
                        paginacion+="</li>";

                        for (var i = 1; i < res[0].links.length-1; i++) {
                            if (res[0].links[i].label==1) {
                                paginacion+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                            }

                            else{
                              paginacion+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                            }
                            
                                
                        }        
                        paginacion+="<li class='page-item'>"
                        paginacion+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
                        paginacion+="<span aria-hidden='true'>&raquo;</span>";
                        paginacion+="</a>";
                        paginacion+="</li>";

                        paginacion+="</ul>";
                        $("#paginacion").append(paginacion);
                           
                        
                    }

                    $("#cabecera").append(cabecera);                    
                    
                    //$.getScript("js/minicart.js"); 

                    $('.producto').click(function(e){
                       e.preventDefault();
                        w3ls.cart.add({
                        
                        w3ls_item: $(this).attr("_data"),
                        amount: $(this).attr("_amount"),
                        currency_code: 'PEN',
                        
                        });
                   });    

                } 

                else
                {
                 alert('NO HAY PRODUCTOS');
                 principal();
                 limpiarchkdesc();
                }

                //Paginación de Filtro por Descuento
                $(".pagination a").click(function (e) { 
                    e.preventDefault();
                    var page= $(this).attr('href').split('page=')[1];
                    var route="api/descuento?min="+ min +"&max="+max+"&page=" + page;                    
                    
                    if ($(this).parent('li').hasClass("active")) {
                        
                    }

                    else{
                        $.ajax({ 

                            url: route,
                            type: 'get',               
                            
                            success: function (data) { 
                                $("#productos").html('');   
                
                                for (var i = 0; i < data[0].data.length; i++) {              
                                    
                                    fila2="<div class='col-md-4 product-grids'>"; 
                                    fila2+="<div class='agile-products'>";

                                    if (data[0].data[i].discount== null || data[0].data[i].discount== 0) {
                                        
                                        if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                            fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            
                                        }
                                        else{
                                            fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                        }

                                        fila2+="<div class='agile-product-text'>";              
                                        fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                        fila2+="<h6>S/. "+data[0].data[i].price+"</h6>";
                                        fila2+="<form action='#' method='post'>";
                                        fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                        fila2+="<input type='hidden' name='add' value='1' />"; 
                                        fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                        fila2+="<input type='hidden' name='amount' value='"+data[0].data[i].price+".00'/> ";
                                        fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                        fila2+="</form>"; 
                                        fila2+="</div>";

                                    }

                                    else{

                                        fila2+="<div class='new-tag'><h6>" + data[0].data[i].discount + "%<br>Dscto</h6></div>"
                                        if (data[0].data[i].url_image == null || data[0].data[i].url_image == '') {
                                            fila2+="<a href=''><img src='images/prod-default.png' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                            
                                        }
                                        else{
                                            fila2+="<a href=''><img src='"+data[0].data[i].url_image+"' class='img-responsive' alt='img' width='300px' height='300px'></a>";
                                        }

                                        fila2+="<div class='agile-product-text'>";              
                                        fila2+="<h5><a href=''>"+data[0].data[i].name+"</a></h5>";
                                        fila2+="<h6><del>S/. "+data[0].data[i].price+"</del>S/. "+ oferta(data[0].data[i].price,data[0].data[i].discount); +"</h6>";
                                        fila2+="<form action='#' method='post'>";
                                        fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                        fila2+="<input type='hidden' name='add' value='1' />"; 
                                        fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                        fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                                        fila2+="<button type='submit' class='w3ls-cart pw3ls-cart producto'><i class='fa fa-cart-plus' aria-hidden='true'></i> Agregar</button>";
                                        fila2+="</form>"; 
                                        fila2+="</div>";
                                        
                                    }
                                                
                                    fila2+="</div>";
                                    fila2+="</div>";             
                                    $("#productos").append(fila2);
                                    $('.producto').click(function(e){
                                        e.preventDefault();
                                        w3ls.cart.add({
                                        
                                        w3ls_item: $(this).attr("_data"),
                                        amount: $(this).attr("_amount"),
                                        currency_code: 'PEN',
                                        
                                        });
                                    });    

                                }                                                                  
                            }
                        })
                        
                        $('li').removeClass('active');
                        $(this).parent('li').addClass('active');
                            
                    }
                }) 

             }
        })
    
   }) 

    $("#borrardesc").click(function (e) {
        limpiarchkdesc();
        principal();
    })
}
/*//Función Filtro por Descuento*/ 


/*Función Limpiar Filtros por Descuento*/ 
/*-- Realiza la limpieza de los checkbox del Filtro por Descuento*/
function limpiarchkdesc()
{
    $(".chk2").prop('checked',false);
    $("#borrardesc").hide();
    
}
/*//Función Limpiar Filtros por Descuento*/ 

