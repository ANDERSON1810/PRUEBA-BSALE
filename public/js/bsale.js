 $(document).ready(function(){ 

 principal(); 
 categorias(); 
 buscar(); 
 })
    
function principal(){
    var fila='';     
    var fila2=''; 
    $.get("api/productos", function(res){
       
    if (res[1][0].total_productos > 0){   
    
        $("#productos").html('');
        $("#paginacion").remove('');        
        fila="<div class='product-top'>";
        fila+="<h4>Productos</h4>";
        fila+="<ul>";         
        fila+="<li class='dropdown head-dpdn'>";
        fila+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
        fila+="</li>";
        
        fila+="</ul>"; 
        
        fila+="<div class='clearfix'></div>";
        fila+="</div>";
        fila+="<div id='idproductos' class='products-row'>";
        for (var i = 0; i < res[0].data.length; i++) {              
                        
            fila+="<div class='col-md-4 product-grids'>"; 
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
                fila+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
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
                fila+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                fila+="</form>"; 
                fila+="</div>";
                
            }

            
            
            fila+="</div>";
            fila+="</div>";             
           

        }

        fila+="<div class='clearfix'> </div>";
        fila+="</div>";
            
        var fila3="<div id='paginacion'>"; 

        if (res[0].links.length==3) {

        }   

        else{  
            fila3+="<nav aria-label='Page navigation example'>";
            fila3+="<ul class='pagination justify-content-center'>";
            fila3+="<li class='page-item'>"
            fila3+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
            fila3+="<span aria-hidden='true'>&laquo;</span>";
            fila3+="</a>";
            fila3+="</li>";

            for (var i = 1; i < res[0].links.length-1; i++) {
                if (res[0].links[i].label==1) {
                    fila3+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                }

                else{
                  fila3+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                }
                
                    
            }        
            fila3+="<li class='page-item'>"
            fila3+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
            fila3+="<span aria-hidden='true'>&raquo;</span>";
            fila3+="</a>";
            fila3+="</li>";

            fila3+="</ul>";
            fila3+="</nav>"; 
            fila3+="<div class='clearfix'> </div>";       
            fila3+="</div>";
        }
        $("#productos").append(fila);                  
        $("#productos").after(fila3);    
    }
       
    else
    {
     alert('NO HAY PRODUCTOS');
    }

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
                    fila2="<div class='product-top'>";
                    fila2+="<h4>Productos</h4>";
                    fila2+="<ul>";         
                    fila2+="<li class='dropdown head-dpdn'>";
                    fila2+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+data[1][0].total_productos+"</a>"; 
                    fila2+="</li>";
                    
                    fila2+="</ul>"; 
                    
                    fila2+="<div class='clearfix'></div>";
                    fila2+="</div>";
                    fila2+="<div id='idproductos' class='products-row'>";
                    for (var i = 0; i < data[0].data.length; i++) {              
                        
                        
                        
                        
                        fila2+="<div class='col-md-4 product-grids'>"; 
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
                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
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
                            fila2+="<form action='#' method='post' class='form'>";
                            fila2+="<input type='hidden' name='cmd' value='_cart' />";
                            fila2+="<input type='hidden' name='add' value='1' />"; 
                            fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                            fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                            fila2+="</form>"; 
                            fila2+="</div>";
                            
                        }
                        
                        
                        fila2+="</div>";
                        fila2+="</div>";              

                    }

                    fila2+="<div class='clearfix'> </div>";                                                                                
                    fila2+="</div>";        

                    $("#productos").append(fila2);         
                   
                    
                }
            })
            
            $('li').removeClass('active');
            $(this).parent('li').addClass('active');
                
        }
    })   
    });  
}

 function categorias(){
    var categorias='';

    $.get("/api/productos", function(res){
    
        if (res[3].length > 0) {
            //categorias="";
            categorias="<ul class='cd-dropdown-content'>";

            categorias+="<form id='frmbuscarcat-0' autocomplete='off'>";               
            categorias+="<li><a><button type='submit' data-id='0' class='buscarcat' style='border:none; background: rgba(29, 49, 42, 0.0);text-transform:capitalize;'>Todos</button></a></li>";
            categorias+="</form>";

            for (var i = 0; i < res[3].length ; i++) {
               categorias+="<form id='frmbuscarcat-"+res[3][i].id+"' method='get' autocomplete='off' action='api/categorias/"+res[3][i].id+"'>";               
               categorias+="<li><a><button type='submit' data-id='"+res[3][i].id+"' class='buscarcat' style='border:none; background: rgba(29, 49, 42, 0.0);text-transform:capitalize;'>"+res[3][i].name+"</button></a></li>";
               categorias+="</form>";
            }
            categorias+="</ul>";
            $("#close").after(categorias);
        }

        else{
            alert('NO HAY CATEGORIAS');
        }

        $(".buscarcat").click(function (e) {                   
                        
            var fila='';
            var fila2='';    
            var id= $(this).data("id");   

            e.preventDefault();         
            $("#buscar").val('');
            $.ajaxSetup({
                headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
            });          

            var datastring = $('#frmbuscarcat-'+id).serialize();
            $.ajax({ 

                url: $('#frmbuscarcat-'+id).attr('action'),
                type: $('#frmbuscarcat-'+id).attr('method'),
                data: datastring,
                
                success: function (res) {   
                    
                    if (res[1][0].total_productos > 0){ 
                        $("#productos").html('');
                        $("#paginacion").remove('');
                        fila="<div class='product-top'>";
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
                                    })
                        
                        fila+="<h4 style='text-transform:capitalize'>"+result+"</h4>";                         
                        fila+="<ul>"; 
                        fila+="<li class='dropdown head-dpdn'>";
                        fila+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
                        fila+="</li>";                        
                        fila+="</ul>"; 
                        
                        fila+="<div class='clearfix'></div>";
                        fila+="</div>";
                        fila+="<div class='products-row'>"; 

                        for (var i = 0; i < res[0].data.length; i++) {                             
                              
                                        
                            fila+="<div class='col-md-4 product-grids'>"; 
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
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                                fila+="</form>"; 
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
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                                fila+="</form>"; 
                                
                            }

                            
                            fila+="</div>";
                            fila+="</div>";
                            fila+="</div>";             
                           

                        }

                        fila+="<div class='clearfix'> </div>";
                        fila+="</div>";
                        
                        var fila3="<div id='paginacion'>"; 

                        if (res[0].links.length==3) {

                        }   

                        else{  
                            fila3+="<nav aria-label='Page navigation example'>";
                            fila3+="<ul class='pagination justify-content-center'>";
                            fila3+="<li class='page-item'>"
                            fila3+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
                            fila3+="<span aria-hidden='true'>&laquo;</span>";
                            fila3+="</a>";
                            fila3+="</li>";

                            for (var i = 1; i < res[0].links.length-1; i++) {
                                if (res[0].links[i].label==1) {
                                    fila3+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                                }

                                else{
                                  fila3+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                                }
                                
                                    
                            }        
                            fila3+="<li class='page-item'>"
                            fila3+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
                            fila3+="<span aria-hidden='true'>&raquo;</span>";
                            fila3+="</a>";
                            fila3+="</li>";

                            fila3+="</ul>";
                            fila3+="</nav>"; 
                            fila3+="<div class='clearfix'> </div>";       
                            fila3+="</div>";
                        }
                        $("#productos").append(fila);                  
                        $("#productos").after(fila3);       
                                                         
                        
                    }
                       
                    else
                        {                           
                             if (id == 0) {
                                principal();
                             }

                             else{
                                alert('NO HAY PRODUCTOS EN ÉSTA CATEGORIA');
                                principal();
                             }
                         
                        }

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
                                    fila2="<div class='product-top'>";
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
                                                })
                                    
                                    fila2+="<h4 style='text-transform:capitalize'>"+result+"</h4>";   
                                    fila2+="<ul>";         
                                    fila2+="<li class='dropdown head-dpdn'>";
                                    fila2+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+data[1][0].total_productos+"</a>"; 
                                    fila2+="</li>";
                                    
                                    fila2+="</ul>"; 
                                    
                                    fila2+="<div class='clearfix'></div>";
                                    fila2+="</div>";
                                    fila2+="<div id='idproductos' class='products-row'>";
                                    for (var i = 0; i < data[0].data.length; i++) {                
                                        fila2+="<div class='col-md-4 product-grids'>"; 
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
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
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
                                            fila2+="<form action='#' method='post' class='form'>";
                                            fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                            fila2+="<input type='hidden' name='add' value='1' />"; 
                                            fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                            fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                                            fila2+="</form>"; 
                                            fila2+="</div>";
                                            
                                        }
                                        
                                        
                                        fila2+="</div>";
                                        fila2+="</div>";              

                                    }

                                    fila2+="<div class='clearfix'> </div>";                                                                                
                                    fila2+="</div>";        

                                    $("#productos").append(fila2);         
                                   
                                    
                                }
                            })
                            
                            $('li').removeClass('active');
                            $(this).parent('li').addClass('active');
                                
                        }
                    })   
                }        
            });    
        })
    })  
 }

 function oferta($precio,$dscto){
    $oferta= $precio-($precio*$dscto/100);
    return $oferta;
 }

 function buscar(){
        
    $("#idbuscar").click(function (e) {
        var fila='';
        var fila2='';
        var inputbuscar = document.getElementById('buscar');
        
        if (inputbuscar.value=="") {
            e.preventDefault();  
            alert('INGRESAR UN VALOR');
            $("#buscar").focus();
            principal();
        }
        else{
            e.preventDefault();  

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
                        $("#productos").html('');
                        $("#paginacion").remove('');
                        fila="<div class='product-top'>";
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
                                    })
                        
                        fila+="<h4 style='text-transform:capitalize'>"+result+"</h4>";                         
                        fila+="<ul>"; 
                        fila+="<li class='dropdown head-dpdn'>";
                        fila+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+res[1][0].total_productos+"</a>"; 
                        fila+="</li>";                        
                        fila+="</ul>"; 
                        
                        fila+="<div class='clearfix'></div>";
                        fila+="</div>";
                        fila+="<div class='products-row'>"; 

                        for (var i = 0; i < res[0].data.length; i++) {                             
                              
                                        
                            fila+="<div class='col-md-4 product-grids'>"; 
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
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                                fila+="</form>"; 
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
                                fila+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                                fila+="</form>"; 
                                
                            }

                            
                            fila+="</div>";
                            fila+="</div>";
                            fila+="</div>";             
                           

                        }

                        fila+="<div class='clearfix'> </div>";
                        fila+="</div>";
                        
                        var fila3="<div id='paginacion'>"; 

                        if (res[0].links.length==3) {

                        }   

                        else{  
                            fila3+="<nav aria-label='Page navigation example'>";
                            fila3+="<ul class='pagination justify-content-center'>";
                            fila3+="<li class='page-item'>"
                            fila3+="<a class='page-link' href='"+res[0].first_page_url +"' aria-label='Previous'>";
                            fila3+="<span aria-hidden='true'>&laquo;</span>";
                            fila3+="</a>";
                            fila3+="</li>";

                            for (var i = 1; i < res[0].links.length-1; i++) {
                                if (res[0].links[i].label==1) {
                                    fila3+="<li class='page-item active'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";
                                }

                                else{
                                  fila3+="<li class='page-item'><a class='page-link' href='"+res[0].links[i].url+"'>"+res[0].links[i].label+"</a></li>";  
                                }
                                
                                    
                            }        
                            fila3+="<li class='page-item'>"
                            fila3+="<a class='page-link' href='"+res[0].last_page_url +"' aria-label='Next'>";
                            fila3+="<span aria-hidden='true'>&raquo;</span>";
                            fila3+="</a>";
                            fila3+="</li>";

                            fila3+="</ul>";
                            fila3+="</nav>"; 
                            fila3+="<div class='clearfix'> </div>";       
                            fila3+="</div>";
                        }
                        $("#productos").append(fila);                  
                        $("#productos").after(fila3); 
                              
                                                           
                    }
                       
                    else
                        {
                         alert('PRODUCTO NO ENCONTRADO');
                         $("#buscar").val('');
                         $("#buscar").focus();
                         principal();
                        }

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
                                    fila2="<div class='product-top'>";
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
                                                })
                                    
                                    fila2+="<h4 style='text-transform:capitalize'>"+result+"</h4>";    
                                    fila2+="<ul>";         
                                    fila2+="<li class='dropdown head-dpdn'>";
                                    fila2+="<a class='dropdown-toggle' data-toggle='dropdown'>Total de Productos: "+data[1][0].total_productos+"</a>"; 
                                    fila2+="</li>";
                                    
                                    fila2+="</ul>"; 
                                    
                                    fila2+="<div class='clearfix'></div>";
                                    fila2+="</div>";
                                    fila2+="<div id='idproductos' class='products-row'>";
                                    for (var i = 0; i < data[0].data.length; i++) {              
                                        
                                        
                                        
                                        
                                        fila2+="<div class='col-md-4 product-grids'>"; 
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
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
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
                                            fila2+="<form action='#' method='post' class='form'>";
                                            fila2+="<input type='hidden' name='cmd' value='_cart' />";
                                            fila2+="<input type='hidden' name='add' value='1' />"; 
                                            fila2+="<input type='hidden' name='w3ls_item' value='"+data[0].data[i].name+"'/>";
                                            fila2+="<input type='hidden' name='amount' value='"+oferta(data[0].data[i].price,data[0].data[i].discount)+".00'/>";
                                            fila2+="<button type='submit' class='w3ls-cart pw3ls-cart' aria-hidden='true'></i> Agregar al Carrito</button>";
                                            fila2+="</form>"; 
                                            fila2+="</div>";
                                            
                                        }
                                        
                                        
                                        fila2+="</div>";
                                        fila2+="</div>";              

                                    }

                                    fila2+="<div class='clearfix'> </div>";                                                                                
                                    fila2+="</div>";        

                                    $("#productos").append(fila2);         
                                   
                                    
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


