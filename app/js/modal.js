  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************

     
  
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup;
    var close;

    
    $('.js-btn-modal-description').click(function(event){
          event.preventDefault(); 
          popup = document.querySelector('.js-modal-description');
          close = popup.querySelector('.modal_close');          
          //popup.style.top = event.pageY - 50 + 'px'; 
          popup.style.height = '835px';
          PopupShow(event);

          var owlSlider = $("#owl-slider");
          var owlCarousel = $("#owl-carousel");

          owlSlider.owlCarousel({
            loop:true,//Зацикливаем слайдер
            items : 1,
            singleItem : true,
            slideSpeed : 1000,
            navigation: true,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200
           
          });

          owlCarousel.owlCarousel({
            margin:20,
            items : 4,
            pagination:false,
            navigation: false,
            nav: false,
            responsiveRefreshRate: 100,
           
            afterInit : function(el){
              el.find(".owl-item").eq(0).addClass("active");
            }
          });

          function syncPosition(){
            var current = this.currentItem;
            owlCarousel
              .find(".owl-item")
              .removeClass("active")
              .eq(current)
              .addClass("active")
            if(owlCarousel.data("owl-carousel") !== undefined){
              center(current)
            }
          }

          owlCarousel.on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owl-item");
            owlSlider.trigger("owl.goTo",number);
          });

          function center(number){
            var owlCarouselvisible = owlCarousel.data("owl-carousel").owl.visibleItems();
            var num = number;
            var found = false;
            for(var i in owlCarouselvisible){
              if(num === owlCarouselvisible[i]){
                var found = true;
              }
            }

            if(found===false){
              if(num>owlCarouselvisible[owlCarouselvisible.length-1]){
                owlCarousel.trigger("owl.goTo", num - owlCarouselvisible.length+2)
              }else{
                if(num - 1 === -1){
                  num = 0;
                }
                owlCarousel.trigger("owl.goTo", num);
              }
            } else if(num === owlCarouselvisible[owlCarouselvisible.length-1]){
              owlCarousel.trigger("owl.goTo", owlCarouselvisible[1])
            } else if(num === owlCarouselvisible[0]){
              owlCarousel.trigger("owl.goTo", num-1)
            } 
          }
    }); 


    $('.js-btn-modal-2').click(function(event){
          event.preventDefault(); 
          var text =  popup.querySelector('h3').innerText + " - " + this.innerText; 
          closePopup();
          setTimeout(function(){
            popup = document.querySelector('.js-modal');
            close = popup.querySelector('.modal_close');
            popup.querySelector('.modal__title').innerText = text;
            popup.style.top = '50%'; 
            popup.style.marginTop = '-150px';  
               
          PopupShow(event);
          }, 150);
          
    });

    $('.js-btn-modal').click(function(event){
          event.preventDefault();

          popup = document.querySelector('.js-modal');
          close = popup.querySelector('.modal_close');
          popup.style.height = 'auto';
          popup.style.top = '50%'; 
          popup.style.marginTop = '-150px'; 
             
          popup.querySelector('.modal__title').innerText = this.innerText;    
          PopupShow(event);
         
    });

    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
    };
   

    function closePopup() {
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 100);
                
          };
          
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

    popup_wrapper.addEventListener('click', function(event) {
          closePopup();
          
    });
 
    $('.modal_close').click(function(event) {
          event.preventDefault();
          closePopup();
    });


});