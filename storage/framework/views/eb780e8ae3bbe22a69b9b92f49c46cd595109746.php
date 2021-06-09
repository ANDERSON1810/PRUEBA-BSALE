<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
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
        <link href="<?php echo e(asset('css/bootstrap.css')); ?>" rel="stylesheet" type="text/css" media="all" />
        <link href="<?php echo e(asset('css/style.css')); ?>" rel="stylesheet" type="text/css" media="all" /> 
        <link href="<?php echo e(asset('css/menu.css')); ?>" rel="stylesheet" type="text/css" media="all" /> <!-- menu style -->  
        <link href="<?php echo e(asset('css/animate.min.css')); ?>" rel="stylesheet" type="text/css" media="all" />   
        <link href="<?php echo e(asset('css/owl.carousel.css')); ?>" rel="stylesheet" type="text/css" media="all"> <!-- carousel slider -->  
        <!-- //Custom Theme files -->
        <!-- font-awesome icons -->
        <link href="<?php echo e(asset('css/font-awesome.css')); ?>" rel="stylesheet"> 
        <!-- //font-awesome icons -->
        <!-- js -->
        <script src="<?php echo e(asset('js/jquery-2.2.3.min.js')); ?>"></script> 
        <!--<script crossorigin="anonymous" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" src="https://code.jquery.com/jquery-3.1.0.min.js">-->
        </script>
        <script src="<?php echo e(asset('js/owl.carousel.js')); ?>"></script>
        <!-- //js --> 
        <!-- web-fonts -->
        <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Lovers+Quarrel' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Offside' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Tangerine:400,700' rel='stylesheet' type='text/css'>
        <!-- web-fonts --> 
        <!-- scroll to fixed--> 
        <script src="<?php echo e(asset('js/jquery-scrolltofixed-min.js')); ?>" type="text/javascript"></script>
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
        <script type="text/javascript" src="<?php echo e(asset('js/move-top.js')); ?>"></script>
        <script type="text/javascript" src="<?php echo e(asset('js/easing.js')); ?>"></script> 
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
        <script type="text/javascript" src="<?php echo e(asset('js/jquery.jscrollpane.min.js')); ?>"></script>
        <script type="text/javascript" id="sourcecode">
            $(function()
            {
                $('.scroll-pane').jScrollPane();
            });
        </script>
        <!-- //the jScrollPane script -->
        <script type="text/javascript" src="<?php echo e(asset('js/jquery.mousewheel.js')); ?>"></script>
        <!-- the mousewheel plugin --> 
    </head>
    <body class="antialiased">
        <!-- header -->
        <div class="header">
            
            <div class="header-two"><!-- header-two -->
                <div class="container">
                    <div class="header-logo">
                        <h1><a href="<?php echo e(url('/')); ?>"><span>B</span>SALE<i>TEST </i> </a></h1>
                        <!--<h6>Your stores. Your place.</h6> -->
                    </div>  
                    <div class="header-search">
                        <form id="frmbuscar" method="get" action="<?php echo e(URL::to('/')); ?>/api/buscar" autocomplete='off' >
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

                <div id="productos" class="col-md-9 product-w3ls-right">                    
                    
                    
                    
                    
                </div>
                <div class="col-md-3 rsidebar">
                    <div class="rsidebar-top">
                        <div class="slider-left">
                            <h4>Filter By Price</h4>            
                            <div class="row row1 scroll-pane">
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>0 - $100 </label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$100 - $200 </label> 
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$200 - $250  </label> 
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$250 - $300 </label> 
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$350 - $400 </label> 
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$450 - $500  </label> 
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>More</label> 
                            </div> 
                        </div>
                        <div class="sidebar-row">
                            <h4> Electronics</h4>
                            <ul class="faq">
                                <li class="item1"><a href="#">Mobile phones<span class="glyphicon glyphicon-menu-down"></span></a>
                                    <ul>
                                        <li class="subitem1"><a href="#">Smart phones</a></li>                                      
                                        <li class="subitem1"><a href="#">Accessories</a></li>                                       
                                        <li class="subitem1"><a href="#">Tabs</a></li>                                      
                                    </ul>
                                </li>
                                <li class="item2"><a href="#">Large appliances<span class="glyphicon glyphicon-menu-down"></span></a>
                                    <ul>
                                        <li class="subitem1"><a href="#">Refrigerators </a></li>                                        
                                        <li class="subitem1"><a href="#">Washing Machine </a></li>                                      
                                        <li class="subitem1"><a href="#">Kitchen Appliances </a></li>                                       
                                        <li class="subitem1"><a href="#">Air Conditioner</a></li>                                       
                                    </ul>
                                </li>
                                <li class="item3"><a href="#">Entertainment<span class="glyphicon glyphicon-menu-down"></span></a>
                                    <ul>
                                        <li class="subitem1"><a href="#"> Tv & Accessories</a></li>                                     
                                        <li class="subitem1"><a href="#">Digital Camera </a></li>                                       
                                        <li class="subitem1"><a href="#">Computer</a></li>                                      
                                    </ul>
                                </li>
                            </ul>
                            <!-- script for tabs -->
                            <script type="text/javascript">
                                $(function() {
                                
                                    var menu_ul = $('.faq > li > ul'),
                                           menu_a  = $('.faq > li > a');
                                    
                                    menu_ul.hide();
                                
                                    menu_a.click(function(e) {
                                        e.preventDefault();
                                        if(!$(this).hasClass('active')) {
                                            menu_a.removeClass('active');
                                            menu_ul.filter(':visible').slideUp('normal');
                                            $(this).addClass('active').next().stop(true,true).slideDown('normal');
                                        } else {
                                            $(this).removeClass('active');
                                            $(this).next().stop(true,true).slideUp('normal');
                                        }
                                    });
                                
                                });
                            </script>
                            <!-- script for tabs -->
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
                        <div class="sidebar-row">
                            <h4>Color</h4>
                            <div class="row row1 scroll-pane">
                                <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>White</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Pink</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Gold</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Blue</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Orange</label>
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i> Brown</label> 
                            </div>
                        </div>           
                    </div>
                    
                </div>
                <div class="clearfix"> </div>
                
            </div>
        </div>
        <!--//products-->  
        <!-- footer-top -->
        <div class="w3agile-ftr-top">
            <div class="container">
                <div class="ftr-toprow">
                    <div class="col-md-4 ftr-top-grids">
                        <div class="ftr-top-left">
                            <i class="fa fa-truck" aria-hidden="true"></i>
                        </div> 
                        <div class="ftr-top-right">
                            <h4>FREE DELIVERY</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                        </div> 
                        <div class="clearfix"> </div>
                    </div> 
                    <div class="col-md-4 ftr-top-grids">
                        <div class="ftr-top-left">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </div> 
                        <div class="ftr-top-right">
                            <h4>CUSTOMER CARE</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                        </div> 
                        <div class="clearfix"> </div>
                    </div>
                    <div class="col-md-4 ftr-top-grids">
                        <div class="ftr-top-left">
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </div> 
                        <div class="ftr-top-right">
                            <h4>GOOD QUALITY</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                        </div>
                        <div class="clearfix"> </div>
                    </div> 
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
        <!-- //footer-top -->  
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
                            <h2><a href="<?php echo e(url('/')); ?>"><span>B</span>SALE<i>TEST </i> </a></h2>
                            
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
        <script src="<?php echo e(asset('js/bsale.js')); ?>" async="async"></script>
        <!-- cart-js -->

        <script src="<?php echo e(asset('js/minicart.js')); ?>"></script>
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
        <script src="<?php echo e(asset('js/jquery.menu-aim.js')); ?>"> </script>
        <script src="<?php echo e(asset('js/main.js')); ?>"></script> <!-- Resource jQuery -->
        <!-- //menu js aim --> 
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="<?php echo e(asset('js/bootstrap.js')); ?>"></script>
        
    </body>
</html>
<?php /**PATH D:\Laravel\BSALE\resources\views/welcome.blade.php ENDPATH**/ ?>