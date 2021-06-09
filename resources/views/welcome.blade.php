<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>BSALE</title>
        <link rel="shortcut icon" href="https://dojiw2m9tvv09.cloudfront.net/16738/2/favicon.ico?353" type="image/x-icon">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
        function hideURLbar(){ window.scrollTo(0,1); } </script>
        <!-- Custom Theme files -->
        <link href="{{asset('css/bootstrap.css')}}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css" media="all" /> 
        <link href="{{asset('css/menu.css')}}" rel="stylesheet" type="text/css" media="all" /> <!-- menu style -->  
        <link href="{{asset('css/animate.min.css')}}" rel="stylesheet" type="text/css" media="all" />   
        <link href="{{asset('css/owl.carousel.css')}}" rel="stylesheet" type="text/css" media="all"> <!-- carousel slider -->  
        <!-- //Custom Theme files -->
        <!-- font-awesome icons -->
        <link href="{{asset('css/font-awesome.css')}}" rel="stylesheet"> 
        <!-- //font-awesome icons -->
        <!-- js -->
        <script src="{{asset('js/jquery-2.2.3.min.js')}}"></script> 
        <!--<script crossorigin="anonymous" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" src="https://code.jquery.com/jquery-3.1.0.min.js">-->
        </script>
        <script src="{{asset('js/owl.carousel.js')}}"></script>
        <!-- //js --> 
        <!-- web-fonts -->
        <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Lovers+Quarrel' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Offside' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Tangerine:400,700' rel='stylesheet' type='text/css'>
        <!-- web-fonts --> 
        <!-- scroll to fixed--> 
        <script src="{{asset('js/jquery-scrolltofixed-min.js')}}" type="text/javascript"></script>
        <script>
            $(document).ready(function() {

                // Dock the header to the top of the window when scrolled past the banner. This is the default behaviour.

                $('.header-two').scrollToFixed();  
                // previous summary up the page.

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
        <!-- //scroll to fixed--> 
        <!-- start-smooth-scrolling -->
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
        <!-- //end-smooth-scrolling -->
        <!-- smooth-scrolling-of-move-up -->
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
        <!-- //smooth-scrolling-of-move-up -->  
        <!-- the jScrollPane script -->
        <script type="text/javascript" src="{{asset('js/jquery.jscrollpane.min.js')}}"></script>
        <script type="text/javascript" id="sourcecode">
            $(function()
            {
                $('.scroll-pane').jScrollPane();
            });
        </script>
        <!-- //the jScrollPane script -->
        <script type="text/javascript" src="{{asset('js/jquery.mousewheel.js')}}"></script>
        <!-- the mousewheel plugin --> 
    </head>
    <body class="antialiased">
        <!-- header -->
        <div class="header">
            
            <div class="header-two"><!-- header-two -->
                <div class="container">
                    <div class="header-logo">
                        <h1><a href="{{url('/')}}"><span>B</span>SALE<i>TEST </i> </a></h1>
                        <!--<h6>Your stores. Your place.</h6> -->
                    </div>  
                    <div class="header-search">
                        <form id="frmbuscar" method="get" action="{{URL::to('/')}}/api/buscar" autocomplete='off' >
                            <input id="buscar" type="search" name="searchText" placeholder="Ingresa el nombre del producto..." autofocus="">
                            <button id="idbuscar" type="submit" class="btn btn-default" aria-label="Left Align">
                                <i class="fa fa-search" aria-hidden="true"> </i>
                            </button>
                        </form>
                    </div>
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
                    <div class="clearfix"> </div>
                </div>      
            </div><!-- //header-two -->
            <div class="header-three"><!-- header-three -->
                <div class="container">
                    <div class="menu">
                        <div class="cd-dropdown-wrapper">
                            <a class="cd-dropdown-trigger" href="#0">Categorías</a>
                            <nav id="categorias" class="cd-dropdown"> 
                             <a id="close" href="#0" class='cd-close'>Close</a>   
                            </nav> <!-- .cd-dropdown -->
                        </div> <!-- .cd-dropdown-wrapper -->     
                    </div>
                    <div class="move-text">
                        <div class="marquee"><a> Encuentra desde un 10 hasta un 30% en nuestros productos <span>No te lo pierdas!!!</span></a></div>
                        <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                        <script>
                          $('.marquee').marquee({ pauseOnHover: true });
                          //@ sourceURL=pen.js
                        </script>
                    </div>
                </div>
            </div>
        </div>
        <!-- //header -->   
        <!-- products -->
        <div class="products">   
            <div class="container">
                <div class="col-md-9 product-w3ls-right">
                <div id="productos">                                     
                    
                    
                </div>
                </div>
                 
                

                <div class="col-md-3 rsidebar">
                    <div class="rsidebar-top">
                        <div class="slider-left">
                            <h4>Filtrar por Precio</h4>            
                            <div id="check" class="row row1 scroll-pane">
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>S/.0 - S/.5000 <input type="hidden" name="min" value="0"><input type="hidden" name="max" value="5000"></label>

                                <label class="checkbox"><input type="checkbox" name="checkbox" value="5000"><i></i>S/.5,000 - S/.10,000 <input type="hidden" name="min" value="5000"><input type="hidden" name="max" value="10000"></label> 
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>S/.10,000 - S/.15,000 <input type="hidden" name="min" value="10000"><input type="hidden" name="max" value="15000"></label> 
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>S/.15,000 - S/.20,000 <input type="hidden" name="min" value="15000"><input type="hidden" name="max" value="20000"></label> 
                                 
                            </div> 
                        </div>
                        
                        <div class="sidebar-row">
                            <h4>DISCOUNTS</h4>
                            <div class="row row1 scroll-pane">
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Upto - 10% (20)</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>70% - 60% (5)</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>50% - 40% (7)</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>30% - 20% (2)</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>10% - 5% (5)</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>30% - 20% (7)</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>10% - 5% (2)</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Other(50)</label>
                            </div>
                        </div>                               
                    </div>
                    
                </div>
                <div class="clearfix"> </div>
                
            </div>
        </div>
        <!--//products-->  
        
        <!-- subscribe -->
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
        <!-- //subscribe --> 
        <!-- footer -->
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
        <!-- //footer -->       
        <div class="copy-right"> 
            <div class="container">
                <p>© 2021 BSALE . Derechos Rservados | Diseñado por <a href="https://www.bsale.com.pe/"> BSALE.</a></p>
            </div>
        </div> 
        <script src="{{asset('js/bsale.js')}}" async="async"></script>
        <!-- cart-js -->

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
        <!-- //cart-js -->  
        <!-- menu js aim -->
        <script src="{{asset('js/jquery.menu-aim.js')}}"> </script>
        <script src="{{asset('js/main.js')}}"></script> <!-- Resource jQuery -->
        <!-- //menu js aim --> 
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="{{asset('js/bootstrap.js')}}"></script>
        
    </body>
</html>
