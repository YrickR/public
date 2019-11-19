$(document).ready(function() {
    new WOW().init();
    var windowWidth = $(window).width();

    // slider arrow navigation ------------->
    
    var arraySliders = [],
        lengthLine = 0,
        lengthLine= '',
        containerArrow = $('.containerSliderProducts__slider ').hasClass('slider');

    if(containerArrow === true){
        lengthLine = document.querySelector(".containerArrowSlider__lineGray").getTotalLength()+11;
    }

    function sliderNavigationActiveLi (){
        $(".slider").each(function(y){
            let lengthSlider = $(this).find('li').length;
            arraySliders[y] = lengthLine / lengthSlider ;
            $(this).find('li').each(function(i){
                $(this).attr('data-nav-index',i + 1);
            });
        });
        $('.containerArrowSlider').each(function(i){
            $(this).attr('data-nav-index','r' + (i + 1));
            let arrayStroke = lengthLine - arraySliders[i];
            $('.containerArrowSlider[data-nav-index="r' + (i + 1) + '"]').find('.sliderLine').find('.containerArrowSlider__lineBlack').css('stroke-dasharray', arraySliders[i] +','+ arrayStroke).css('stroke-dashoffset', arraySliders[i]);
        });
    }

    sliderNavigationActiveLi ();

    var slide = '',
        distans = 0,
        distansT = 50,
        distansF = -50,
        not;


    $(window).mousedown(function(e) {
        x1 = e.pageX;	
        $(window).mousemove(function(e){
            distans = e.pageX - x1 ;
            if (distans >= 0){
                distans = 50;
            }else if (distans <= 0){
                distans = -50;
            }
        });
    });

    document.body.addEventListener('touchstart', function(e){
        x1 = e.changedTouches[0].pageX;	
        document.body.addEventListener('touchmove',function(e){
            distans = e.changedTouches[0].pageX - x1 ; 
            if (distans >= 0){
                distans = 50;
            }else if (distans <= 0){
                distans = -50;
            }
        });
    });

    $(".slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        slide = $(this).attr('data-nav-index');
        sliderSlick = slick;
        not = nextSlide;
        lastSlider = slick.slideCount; 
        heightBoxText();
        if(currentSlide == nextSlide){
            return
        }
        if(distans == distansT){
            leftClick(slide);
        }
        if(distans == distansF){
            rightClick(slide);
        }
    });
    

    function heightBoxText (){
        var height = $('.sliderGallery').find('.slick-center').find('.sliderGallery__boxText').height();
        $('.sliderGallery').css('margin-bottom', height + 50 + 'px' );  
    }

    $('.containerArrowSlider__left').click(function(){
        var idSlider = $(this).parent().attr('data-nav-index').slice(1);
        let notInfinite = $(this).parent().parent().find('.slider').hasClass('notInfinite');
        let lastSliderActive = Math.abs($(this).parent().parent().find('.slider').find('.slick-active').attr('data-slick-index'));
        let lastSliderCenter = Math.abs($(this).parent().parent().find('.slider').find('.slick-center').attr('data-slick-index'));
        $('.slider[data-nav-index="' + idSlider + '"]').children('.slick-prev').trigger('click');
        if(notInfinite == true){
            if(lastSliderActive === 0){
                return
            }else if(lastSliderCenter === 0){
                return
            }else{
                heightBoxText();
                leftClick(idSlider);
            }
        }else{
            heightBoxText();
            leftClick(idSlider);
        }
    });
    $('.containerArrowSlider__right').click(function(){
        var idSlider = $(this).parent().attr('data-nav-index').slice(1);
        let notInfinite = $(this).parent().parent().find('.slider').hasClass('notInfinite');
        let lastSliderActive = Math.abs($(this).parent().parent().find('.slider').find('.slick-active').attr('data-slick-index'));
        let lastSliderCenter = Math.abs($(this).parent().parent().find('.slider').find('.slick-center').attr('data-slick-index'));
        $('.slider[data-nav-index="' + idSlider + '"]').children('.slick-next').trigger('click');
        if(notInfinite == true){
            if (not === lastSliderActive) {
                return
            }else if(not === lastSliderCenter){
                return
            }else{
                heightBoxText();
                rightClick(idSlider);
            }
        }else{
            heightBoxText();
            rightClick(idSlider);
        }
    });
    
    $('.slider').each(function(i){
        $(this).attr('data-nav-index', i + 1);
        $('.sliderGallery').find('.slick-center').find('.sliderGallery__boxText').addClass('active');
        heightBoxText();
    });

    $(".slider").on('afterChange', function(event, slick, currentSlide){
        $('.sliderGallery__boxText').removeClass('active');
        $('.sliderGallery').find('.slick-center').find('.sliderGallery__boxText').addClass('active');
        heightBoxText();
    });

    $('.containerArrowSlider').click(function(){
        $('.sliderGallery__boxText').removeClass('active');
        $('.sliderGallery').find('.slick-center').find('.sliderGallery__boxText').addClass('active');
    });
   
// --------------------------------------------------------

    $('.box-burger').click(function(){
        $('.line').toggleClass('active');
        $('.menu').toggleClass('active');        
        if(windowWidth <= 1200){
            $('.title-site__header').toggleClass('active');
        }
    });

    
    $(document).ready(function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('.btnBack').fadeIn();
            } else {
                $('.btnBack').fadeOut();
            }
            if ($(this).scrollTop() > 500){
                let burgerActive =  $('.menu').hasClass('active');
                if(burgerActive == true){
                    $('.menu').removeClass('active');
                    $('.line').removeClass('active')
                }
            }
        });
        $('.btnBack').click(function () {
            $('body,html').animate({scrollTop: 0}, 1000); return false;
        });
        
    });
    
    function exhibitorsRows(){
        var vendor = $('.exhibitors').length;
        var rowsVendor = vendor / 5;
        $('.container-exhibitors').css('grid-template-rows','repeat('+ Math.ceil(rowsVendor) +', 15px)');
    }
    window.addEventListener("resize", function(){
        setTimeout(function(){
            exhibitorsRows();
            sliderNavigationActiveLi ();
        },50);
    });
    exhibitorsRows();
    
    
    $(function(){
        $('.box-nav2').each(function(i){
            $(this).attr('data-nav-index','m' + (i + 1));
        });
        $('.nav-liUl').each(function(i){
            $(this).attr('id','m' + (i + 1));
        });

        $('.nav-liUl').click(function(){
            var idNav = $(this).attr('id');
            var nav2 =$('.box-nav2[data-nav-index="' + idNav + '"]');
            $(this).find('.navArrow').toggleClass('active');

            if (nav2.hasClass('active')) {
                nav2.slideUp(300);
                nav2.removeClass('active');
            } else {
                nav2.slideDown(300);
                nav2.addClass('active');
            }
        });
    });
   
    $('.sliderGallery__show_videoPlay').click(function(){
        $(this).toggleClass('none');
        let video = $(this).parent().find('.sliderGallery__show_video');
        video[0].play();
    });
    $('.sliderGallery__show_video').click(function(){
        let videoPlay = $(this).parent().find('.sliderGallery__show_videoPlay').hasClass('none');
        if(videoPlay == true){
            $(this).parent().find('.sliderGallery__show_videoPlay').toggleClass('none');
            let video = $(this);
            video[0].pause();
        }
    });
    
    if (windowWidth <= 425){
        $('.containerShow__boxMask').removeClass('active');
        $('.header .container-header').removeClass('active');
        $('.containerShow__titleSection1').find('.wow').attr('data-wow-offset','100')
        $('.containerShow__titleSection1').find('.wow').attr('data-wow-delay','0s');
        $('.container-header').find('.box-logo').attr('data-wow-delay','0.3s');
        $('.container-header').find('.title-site__header').attr('data-wow-delay','0.5s');
        $('.container-header').find('.box-burger').attr('data-wow-delay','0.7s');
    }
    var container = $('.container').children().first().attr('class');
    if(container != 'main__sectionSlider'){
        $('.container-header').addClass('active');
        $('.container-header').find('.box-logo').attr('data-wow-delay','0.3s');
        $('.container-header').find('.title-site__header').attr('data-wow-delay','0.5s');
        $('.container-header').find('.box-burger').attr('data-wow-delay','0.7s');
    }
    function modalController(action){
        if(action === 'close'){
            $('.modalRegestration').removeClass('active');
        }else{
            $('.modalRegestration').addClass('active');
        }
    }
    
    function leftClick(idSlider){
        let id = idSlider -1;
        let lengthStroke = arraySliders[id];
        let lengthStrokeline = 
        $('.containerArrowSlider[data-nav-index="r' + idSlider  + '"]').find('.sliderLine').find('.containerArrowSlider__lineBlack').css('stroke-dashoffset');
        let sumlengthStroke = parseFloat(lengthStrokeline) - lengthStroke;
        $('.containerArrowSlider[data-nav-index="r' + idSlider  + '"]').find('.sliderLine').find('.containerArrowSlider__lineBlack').css('stroke-dashoffset',sumlengthStroke);
    }
    
    function rightClick(idSlider){
        let id = idSlider -1;
        let lengthStroke = arraySliders[id];
        let lengthStrokeline = 
        $('.containerArrowSlider[data-nav-index="r' + idSlider  + '"]').find('.sliderLine').find('.containerArrowSlider__lineBlack').css('stroke-dashoffset');
        let sumlengthStroke =   parseFloat(lengthStrokeline) + lengthStroke;
        $('.containerArrowSlider[data-nav-index="r' + idSlider  + '"]').find('.sliderLine').find('.containerArrowSlider__lineBlack').css('stroke-dashoffset',sumlengthStroke);
        
    }

    // select options-----------

    $('.formRegestration__select').select2({
        AttachContainer: $('.formRegestration__boxSelect'),
        minimumResultsForSearch:Infinity,
    });
    // $('.formRegestration__selectCheckbox').select2({
    //     maximumSelectionLength: 3,
    //     closeOnSelect : false,
    // });
    // $('.formRegestration__selectCheckbox').on('change', function() {
    //     var none = $(this).find('option:selected').length;
    //     if (none == 3) {
    //         $('.formRegestration__selectCheckbox').select2('close');
    //     } 
    // });
    
    
    // modal-------------

    $('[data-modal]').click(function(){
        var action = $(this).attr('data-modal');
        modalController(action);
    });

    // -----------------------------

    // regestration form-------------------

    $(".formRegestration__boxInput").on("input",function() {
        $('.formRegestration__formContainer.slider.sliderRegestration').each(function(){
            let inputVal = $(this).find('.formRegestration__boxInput').find('.formRegestration__input').val();
        });
    });

    $(".formRegestration__input").focus(
        function(){
            $(this).parent('.formRegestration__boxInput').find('.formRegestration__svgBorder').find('.formRegestration__svgBorder_black').attr('class','formRegestration__svgBorder_black active');
    }).blur(
        function(){
            $(this).parent('.formRegestration__boxInput').find('.formRegestration__svgBorder').find('.formRegestration__svgBorder_black').attr('class','formRegestration__svgBorder_black');
    });

    $(".formRegestration__select").focus(
        function(){
            $(this).parent('.formRegestration__boxSelect').find('.formRegestration__svgBorder').find('.formRegestration__svgBorder_black').attr('class','formRegestration__svgBorder_black active');
    }).blur(
        function(){
            $(this).parent('.formRegestration__boxSelect').find('.formRegestration__svgBorder').find('.formRegestration__svgBorder_black').attr('class','formRegestration__svgBorder_black');
    });

    $('.formRegestration__select').on('select2:open', function (e) { 
        $(this).closest('.formRegestration__boxSelect').find('.formRegestration__svgBorder').find('.formRegestration__svgBorder_black').attr('class','formRegestration__svgBorder_black active'); 
    });
    $('.formRegestration__select').on('select2:close', function (e) { 
        $(this).closest('.formRegestration__boxSelect').find('.formRegestration__svgBorder').find('.formRegestration__svgBorder_black').attr('class','formRegestration__svgBorder_black');
    });
    
    // ------------------------------------
    $(document).ready(function(){
        $('.btn__form').trigger('click');
    });

    $('.btn__form').click(function(){
        $(this).toggleClass('active');
        let formRegistrationActiv = $(this).hasClass('active');
        if (formRegistrationActiv == true) {
            $('.formRegestration_displayNone').slideUp(300);
            $(this).find('.btn__a').removeClass('btn__up');
            $(this).find('.btn__a').addClass('btn__down');
        } else {
            $('.formRegestration_displayNone').slideDown(300);
            $(this).find('.btn__a').addClass('btn__up');
            $(this).find('.btn__a').removeClass('btn__down');
        }
    });



    $('.exhibitors').mouseover(function(e) {
        let x = e.pageX;
        let y = e.pageY;
        let thisE = $(this);
        $('.exhibitors').mousemove(function(e){
            distansX = e.pageX - x;
            distansY = e.pageY - y;
            if(distansX <= -50){
                distansX == -50;
            }
            if(50 >= distansX){
                distansX == 100;
            }
            thisE.find('.exhibitorsImg_logo').css('transform','translate(' + distansX + 'px,' + distansY + 'px)');
        });
    });
});
