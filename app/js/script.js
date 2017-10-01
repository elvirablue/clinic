$(document).on('ready', function(){ 
	
  //$("input[name^='user-phone']").mask("+7 (999) 999-9999");

     $("a.fancyimage").fancybox({
        'centerOnScroll' : true, //Если true, FancyBox центрируется, когда страница прокручивается.
        'titleShow' : false,    //Включает/ выключает отображение title
        onComplete  : function(){
            $('.fancybox-wrap').css({'top':'2000px'});
        }
     });

     $('.sales-block__text').click(function(event){
        event.preventDefault();        
         var target = $(event.target);
         if (target.hasClass('js-sale-open-info')) {
            $(this).next().show();
            target.hide();
         } else return;                                 
     });

     $('.js-sale-hidden-info').click(function(event){
        event.preventDefault();        
        $(this).parent().prev().find(".js-sale-open-info").show();
        $(this).parent().hide();
    });

    var owl1 = $('#owl-fs');

    owl1.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:0,
        dots:true,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2500, //Время движения слайда
        autoplayTimeout:100, //Время смены слайда
        responsiveClass:true,        
        responsive:{
             0:{
                 items:1,
                 nav:false
             },
             600:{
                 items:1,
                 nav:false
             },
             1230:{
                 items:1,
                 nav:false,
                 loop:true
             }
        }
    });

    var owl2 = $('#owl-cases');

    owl2.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:0,
        dots:true,
        nav: true,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2500, //Время движения слайда
        autoplayTimeout:100, //Время смены слайда
        responsiveClass:true,        
        responsive:{
             0:{
                 items:1,
                 nav:false
             },
             500:{
                 items:1
             },
             1230:{
                 items:1                
             }
        }
    });

    var owl3 = $('#owl-photos');

    owl3.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:10,
        dots:true,
        nav: true,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2500, //Время движения слайда
        autoplayTimeout:100, //Время смены слайда
        responsiveClass:true,        
        responsive:{
             0:{
                 items:1,
                 nav:false
             },
             500:{
                 items:1
             },
             1230:{
                 items:1                
             }
        }
    });

    var owl4 = $('#owl-vacancy');

    owl4.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:0,
        dots:true,
        nav: true,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2500, //Время движения слайда
        autoplayTimeout:100, //Время смены слайда
        responsiveClass:true,        
        responsive:{
             0:{
                 items:1,
                 nav:false
             },
             500:{
                 items:1
             },
             1230:{
                 items:1                
             }
        }
    });

    var owl5 = $('#owl-reviews');

    owl5.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:0,
        dots:true,
        nav: true,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2500, //Время движения слайда
        autoplayTimeout:100, //Время смены слайда
        responsiveClass:true,        
        responsive:{
             0:{
                 items:1,
                 nav:false
             },
             500:{
                 items:1
             },
             1230:{
                 items:1                
             }
        }
    });


});