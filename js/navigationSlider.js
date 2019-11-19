$(document).ready(function(){
    var arraySliders = [],
    lengthLine,
    lengthLine,
    slide,
    distans,
    distansT = 50,
    distansF = -50,
    containerArrow = $('.containerSliderProducts__slider ').hasClass('slider');

    function heightBoxText (){
        var height = $('.sliderGallery').find('.slick-center').find('.sliderGallery__boxText').height();
        $('.sliderGallery').css('margin-bottom', height + 50 + 'px' );  
    }
    function sliderNavigationActiveLi (){
        $(".slider").each(function(y){
            let lengthSlider = $(this).find('li').length;
            arraySliders[y] = lengthLine / lengthSlider ;
            $(this).find('li').each(function(i){
                $(this).attr('data-nav-index',i + 1);
            });
        });
    }

    if(containerArrow === true){
        lengthLine = document.querySelector(".containerArrowSlider__lineGray").getTotalLength()+11
    }


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

    // $(window).on('touchstart',function(e) {
    //     x1 = e.timeStamp;	
    //     console.log(e.touchList);
    
    //     $(window).on('touchmove',function(e){
    //         distans = e.timeStamp - x1 ;

    //         if (distans >= 0){
    //             distans = 50;
    //         }else if (distans <= 0){
    //             distans = -50;
    //         }
    //     });
    // });

    $(".slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        slide = $(this).attr('data-nav-index');
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
    $('.containerArrowSlider__lineBlack').on('mousedown',function(){
        let lBlack = $(this).css('stroke-dasharray');
    });

    sliderNavigationActiveLi ();
    
    $('.containerArrowSlider').each(function(i){
        $(this).attr('data-nav-index','r' + (i + 1));
        let arrayStroke = lengthLine - arraySliders[i];
        $('.containerArrowSlider[data-nav-index="r' + (i + 1) + '"]').find('.sliderLine').find('.containerArrowSlider__lineBlack').css('stroke-dasharray', arraySliders[i] +','+ arrayStroke).css('stroke-dashoffset', arraySliders[i]);
    });


    $('.containerArrowSlider__left').click(function(){
        var idSlider = $(this).parent().attr('data-nav-index').slice(1);
        $('.slider[data-nav-index="' + idSlider + '"]').children('.slick-prev').trigger('click');
        heightBoxText();
        leftClick(idSlider);
    });
    $('.containerArrowSlider__right').click(function(){
        var idSlider = $(this).parent().attr('data-nav-index').slice(1);
        $('.slider[data-nav-index="' + idSlider + '"]').children('.slick-next').trigger('click');
        heightBoxText();
        rightClick(idSlider);
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

});



