<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>BSALE</title>
        <link rel="shortcut icon" href="https://dojiw2m9tvv09.cloudfront.net/16738/2/favicon.ico?353" type="image/x-icon">
        
        <!-- Styles -->
        <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
        function hideURLbar(){ window.scrollTo(0,1); } </script>

        <!-- Hojas de Estilos -->
        <link href="{{asset('css/bootstrap.css')}}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css" media="all" />

        <!-- Estilo de Menú -->  
        <link href="{{asset('css/menu.css')}}" rel="stylesheet" type="text/css" media="all" /> 
        <link href="{{asset('css/animate.min.css')}}" rel="stylesheet" type="text/css" media="all" />

        <!-- carousel slider -->  
        <link href="{{asset('css/owl.carousel.css')}}" rel="stylesheet" type="text/css" media="all"> 
        <!-- //Hojas de Estilos -->

        <!-- Iconos -->
        <link href="{{asset('css/font-awesome.css')}}" rel="stylesheet"> 
        <!-- //Iconos -->

        <!-- Archivos Java Script -->
        <script src="{{asset('js/jquery-2.2.3.min.js')}}"></script>         
        <script src="{{asset('js/owl.carousel.js')}}"></script>
        <!-- //Archivos Java Script --> 

        <!-- Fuentes Web -->
        <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Lovers+Quarrel' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Offside' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Tangerine:400,700' rel='stylesheet' type='text/css'>
        <!-- //Fuentes Web --> 

        <!-- Fijación de la Cabecera--> 
        <script src="{{asset('js/jquery-scrolltofixed-min.js')}}" type="text/javascript"></script>
        <script>
            $(document).ready(function() {

                // Fija la cabecera al momento de desplazar la página hacia abajo.
                $('.header-two').scrollToFixed();  
                
                var summaries = $('.summary');
                summaries.each(function(i) {
                    var summary = $(summaries[i]);
                    var next = summaries[i + 1];

                    summary.scrollToFixed({
                        marginTop: $('.header-two').outerHeight(true) + 10, 
                        zIndex: 999
                    });
                });
            });
        </script>
        <!-- //Fijación de la Cabecera--> 

        <!-- Inicio - Desplazamiento Suave-->
        <script type="text/javascript" src="{{asset('js/move-top.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/easing.js')}}"></script> 
        <script type="text/javascript">
                jQuery(document).ready(function($) {
                    $(".scroll").click(function(event){     
                        event.preventDefault();
                        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
                    });
                });
        </script>
        <!-- //Fin - Desplazamiento Suave-->

        <!-- Desplazamiento Suave hacia Arriba -->
        <script type="text/javascript">
            $(document).ready(function() {
            
                var defaults = {
                    containerID: 'toTop', // fading element id
                    containerHoverID: 'toTopHover', // fading element hover id
                    scrollSpeed: 1200,
                    easingType: 'linear' 
                };
                
                $().UItoTop({ easingType: 'easeOutQuart' });
                
            });
        </script>
        <!-- //Desplazamiento Suave hacia Arriba -->  

        <!-- Panel de Desplazamiento -->
        <script type="text/javascript" src="{{asset('js/jquery.jscrollpane.min.js')}}"></script>
        <script type="text/javascript" id="sourcecode">
            $(function()
            {
                $('.scroll-pane').jScrollPane();
            });
        </script>
        <!-- //Panel de Desplazamiento -->

        <!-- Rueda del Mouse -->
        <script type="text/javascript" src="{{asset('js/jquery.mousewheel.js')}}"></script>
        <!-- //Rueda del Mouse --> 
    </head>

    <body class="antialiased">
        <!-- Cabecera -->
        <div class="header">
            <!-- Cabecera Fija -->
            <div class="header-two">
                <div class="container">
                    <div class="header-logo">
                        <h1><a href="{{url('/')}}"><span>B</span>SALE<i>TEST </i> </a></h1>                        
                    </div> 

                    <!-- Buscador -->
                    <div class="header-search">
                        <form id="frmbuscar" method="get" action="{{URL::to('/')}}/api/buscar" autocomplete='off' >
                            <input id="buscar" type="search" name="searchText" placeholder="Ingresa el nombre del producto..." autofocus="">
                            <button id="idbuscar" type="submit" class="btn btn-default" aria-label="Left Align">
                                <i class="fa fa-search" aria-hidden="true"> </i>
                            </button>
                        </form>
                    </div>
                    <!-- //Buscador -->

                    <!-- Carrito de Compras -->
                    <div class="header-cart"> 
                        <div class="my-account">
                            <a href="https://www.bsale.com.pe/"><i class="fa fa-map-marker" aria-hidden="true"></i> Contáctanos</a>                       
                        </div>
                        <div class="cart"> 
                            <form action="#" method="post" class="last"> 
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="display" value="1" />
                                <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                            </form>  
                        </div>
                        <div class="clearfix"> </div> 
                    </div>
                    <!-- //Carrito de Compras -->

                    <div class="clearfix"> </div>
                </div>      
            </div>
            <!-- //Cabecera Fija -->

            <!-- Cabecera Banner -->
            <div class="header-three"><!-- header-three -->
                <div class="container">

                    <!-- Menú Categorías -->
                    <div class="menu">
                        <div class="cd-dropdown-wrapper">
                            <a class="cd-dropdown-trigger" href="#0">Categorías</a>
                            <nav id="categorias" class="cd-dropdown"> 
                             <a id="close" href="#0" class='cd-close'>Close</a>   
                            </nav> <!-- .cd-dropdown -->
                        </div> <!-- .cd-dropdown-wrapper -->     
                    </div>
                    <!-- //Menú Categorías -->

                    <!-- Banner en Movimiento -->
                    <div class="move-text">
                        <div class="marquee"><a> Encuentra desde un 10 hasta un 30% en nuestros productos <span>No te lo pierdas!!!</span></a></div>
                        <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                        <script>
                          $('.marquee').marquee({ pauseOnHover: true });
                          //@ sourceURL=pen.js
                        </script>
                    </div>
                    <!-- //Banner en Movimiento -->
                </div>
            </div>
            <!-- //Cabecera Banner -->

        </div>
        <!-- //Cabecera -->   

        <!-- Productos -->
        <div class="products">   
            <div class="container">

                <!-- Columna ubicada a la derecha -->                               
                <div class="col-md-9 product-w3ls-right">

                    <!-- Cabecera de Productos -->
                    <div id="cabecera" class="product-top"></div>
                    <!-- //Cabecera de Productos -->

                    <!-- Contenedor de Productos -->
                    <div id="productos" class="products-row"></div> 
                    <div class='clearfix'> </div>    
                    <!-- //Contenedor de Productos -->

                    <!-- Paginación de Productos -->
                    <nav id="paginacion" aria-label='Page navigation example'></nav>
                    <div class='clearfix'> </div> 
                    <!-- //Paginación de Productos -->

                </div>
                <!-- //Columna ubicada a la derecha -->

                <!-- Columna ubicada a la izquierda -->      
                <div class="col-md-3 rsidebar">
                    <div class="rsidebar-top">

                        <!-- Filtro por Precios --> 
                        <div class="slider-left">
                            <h4>Filtrar por Precio</h4>
                            <div class="row row1 scroll-pane">
                                
                                <!-- Checkbox de Filtro por Precios -->  
                                <label class="checkbox"><input type="radio" name="checkbox[]" class="chk" value="0,5000"><i></i>S/.0 - S/.5000 </label>
                                <label class="checkbox"><input id="check-2" type="radio" name="checkbox[]" class="chk" value="5000,10000"><i></i>S/.5,000 - S/.10,000 </label> 
                                <label class="checkbox"><input id="check-3" type="radio" name="checkbox[]" class="chk" value="10000,15000"><i></i>S/.10,000 - S/.15,000 </label> 
                                <label class="checkbox"><input id="check-4" type="radio" name="checkbox[]" class="chk" value="15000,20000"><i></i>S/.15,000 - S/.20,000 </label> 

                                <!-- Boton Borrar de Filtro por Precios -->  
                                <button id="borrarprec" type="submit" class="btn btn-default" style="display:none;">
                                <i class="fa fa-close" aria-hidden="true" > </i>  Borrar</button>
                                <!-- /Boton Borrar de Filtro de Precios -->

                                <!-- //Checkbox de Filtro por Precios --> 

                            </div> 
                        </div>
                        <!-- //Filtro por Precios --> 
                        
                        <!-- Filtro por Descuento --> 
                        <div class="sidebar-row">
                            <h4>Filtrar por Descuento</h4>
                            <div class="row row1 scroll-pane">
                                <label class="checkbox"><input type="radio" name="checkbox2[]" class="chk2" value="20,30"><i></i>20% - 30%</label>
                                <label class="checkbox"><input type="radio" name="checkbox2[]" class="chk2" value="10,20"><i></i>10% - 20%</label>
                                <label class="checkbox"><input type="radio" name="checkbox2[]" class="chk2" value="5,10"><i></i>5% - 10%</label>
                                <button id="borrardesc" type="submit" class="btn btn-default" style="display:none;">
                                <i class="fa fa-close" aria-hidden="true" > </i>  Borrar</button>
                            </div>
                        </div>
                        <!-- //Filtro por Descuento --> 

                    </div>
                    
                </div>
                <!-- //Columna ubicada a la izquierda -->      
                <div class="clearfix"> </div>
                
            </div>
        </div>
        <!--//Productos-->  
        
        <!-- Suscripción -->
        <div class="subscribe"> 
            <div class="container">
                <div class="col-md-6 social-icons w3-agile-icons">
                   
                    <h4>Síguenos</h4>  
                    <ul>
                        <li><a href="https://www.facebook.com/BsalePeru" target="_blank" rel="noopener noreferrer" title="@bsalews" class="fa fa-facebook icon facebook"></a></li>
                        <li><a href="https://twitter.com/BsalePeru" target="_blank" rel="noopener noreferrer" class="fa fa-twitter icon twitter" title="@bsaleWS"></a></li>
                        <li><a href="https://www.instagram.com/bsaleperu" target="_blank" rel="noopener noreferrer" title="@bsale_chile" class="fa fa-instagram icon instagram"></a></li>
                        <li><a href="https://www.youtube.com/channel/UCmyWtBJ0dH5R8Y7CR_9OOog" target="_blank" rel="noopener noreferrer" title="/bsale" class="fa fa-youtube icon youtube"></a></li>
                        <li><a href="https://www.linkedin.com/company/bsale-peru/" target="_blank" rel="noopener noreferrer" title="/bsale" class="fa fa-lindkedin icon lindkedin"></a></li> 
                    </ul>
                    
                </div> 
               
                <div class="clearfix"> </div>
            </div>
        </div>
        <!-- //Suscripción --> 

        <!-- Pie de Página -->
        <div class="footer">
            <div class="container">
                <div class="footer-info w3-agileits-info">
                    <div class="col-md-4 address-left agileinfo">
                        <div class="footer-logo header-logo">                            
                            <h2><a href="{{url('/')}}"><span>B</span>SALE<i>TEST </i> </a></h2>
                            
                        </div>
                        <ul>
                            <li><i class="fa fa-map-marker"></i>  Av. José Pardo 434, piso 16, Miraflores. </br>Departamento de Lima.</li>
                            <li><i class="fa fa-mobile"></i> <a href="tel:tel:+5117062990">+51 1 706 29 90</a> </li>
                            <li>Descarga nuestra app <a href="https://play.google.com/store/apps/details?id=io.bsale&amp;hl=es_CL" target="_blank" rel="noopener noreferrer"><i class="fa fa-play-circle-o fa-lg" aria-hidden="true"></i></a><a href="https://apps.apple.com/us/app/bsale/id1456781218" target="_blank" rel="noopener noreferrer"><i class="fa fa-apple fa-lg" aria-hidden="true"></i></a> </li>
                            <li><i class="fa fa-envelope-o"></i> <a href="mailto:ayuda@bsale.io"> ayuda@bsale.io</a></li>
                        </ul> 
                    </div>
                    <div class="col-md-8 ">
                        <div class="col-md-4 footer-grids">
                            <h3>Empresa</h3>
                            <ul >
                                <li><a href="/sheet/nosotros">Nosotros</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/sheet/prensa">Prensa</a></li>
                                <li><a href="/sheet/recomiendanos">Recomiéndanos</a></li>
                                <li><a href="/sheet/embajadores">Embajadores</a></li>
                                <li><a href="/sheet/sitemap">Mapa del sitio</a></li>
                            </ul>
                            
                        </div>
                        <div class="col-md-4 footer-grids">
                            <h3>Services</h3>
                            <ul >
                                <li><a href="/sheet/api-factura-electronica">API Bsale</a></li>
                                <li><a href="/sheet/integraciones">Integraciones</a></li>
                                <li><a href="/sheet/bsale-labs">Bsale Labs</a></li>
                                <li><a href="/sheet/servicios-adicionales">Servicios Adicionales</a></li>
                                <li><a href="https://bsalehelp.zendesk.com/hc/es" target="_blank" rel="noopener noferrer">Preguntas Frecuentes</a></li>
                                <li><a href="/sheet/condiciones-uso">Condiciones de uso</a></li>
                                <li><a href="/sheet/politica-privacidad">Política de privacidad</a></li>
                            </ul>
                             
                        </div>
                        <div class="col-md-4 footer-grids">
                            <h3>Métodos de Pago</h3>
                            <ul>
                                <li><i class="fa fa-money" aria-hidden="true"></i> Pago en Efectivo</li>
                                <li><i class="fa fa-pie-chart" aria-hidden="true"></i> Pago por Internet</li>            
                                <li><i class="fa fa-credit-card" aria-hidden="true"></i> Tarjeta de Débito/Crédito</li>
                            </ul>  
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        

        <div class="copy-right"> 
            <div class="container">
                <p>© 2021 BSALE . Derechos Rservados | Diseñado por <a href="https://www.bsale.com.pe/"> BSALE.</a></p>
            </div>
        </div> 
        <!-- //Pie de Página --> 
        
        <!-- Archivos Script -->

        <!-- BSale JS -->
        <script src="{{asset('js/bsale.js')}}" async="async"></script>
        <!-- //BSale JS -->

        <!-- Carrito de Compras JS -->
        <script src="{{asset('js/minicart.js')}}"></script>
        <script>
            w3ls.render();
            w3ls.cart.on('w3sb_checkout', function (evt) {
                var items, len, i;

                if (this.subtotal() > 0) {
                    items = this.items();

                    for (i = 0, len = items.length; i < len; i++) {
                        items[i].set('shipping', 0);
                        items[i].set('shipping2', 0);
                    }
                }
            });
        </script>
        <script>
          // Configuración inicial del carrito 
          w3ls.render({
          strings:{
            button:'Pagar'
           ,buttonAlt: "Total"
           ,subtotal: 'SubTotal:'
           ,empty: 'Tu carrito está vacío'
          }
          });          
          
        </script>  
        <!-- //Carrito de Compras JS --> 

        <!-- Menu JS -->
        <script src="{{asset('js/jquery.menu-aim.js')}}"> </script>
        <script src="{{asset('js/main.js')}}"></script> <!-- Resource jQuery -->
        <!-- //Menu JS --> 

        <!-- Bootstrap core JavaScript-->        
        <script src="{{asset('js/bootstrap.js')}}"></script>
        <!-- //Bootstrap core JavaScript-->  

        <!-- //Archivos Script -->
    </body>
</html>
