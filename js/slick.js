$(document).ready(function(){

    $('.sliderShow1').slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        variableWidth: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        dots: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            },
        ]
    });
    $('.sliderShow4').slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        variableWidth: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        centerMode: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.sliderShow8').slick({
        infinite: true,
        speed: 500,
        rows: 2,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                rows: 2,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                rows: 2,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                rows: 2,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 770,
                settings: {
                rows: 2,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 630,
                settings: {
                rows: 1,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
        ]
    });
    $('.sliderBg').slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear', 
        slidesToShow: 1,
        slidesToScroll: 1,  
        dots: true,
    });

    $('.sliderGallery').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        dots: true,
    });

    $('.sliderTicket').slick({
        infinite: false,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
        // infinite: true,
        responsive: [
            {
                breakpoint: 1255,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },
        ]
    });

    function slickSliderExhibitors(){
        $(".sliderExhibitors").slick({
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            variableWidth: true,
            slidesToScroll: 2,
            slidesToShow: 3,
            centerMode: true,
            dots: true,
            rows: 10,
            responsive: [
                {
                    breakpoint: 2648,
                    settings: "unslick",
                },
                {
                    breakpoint: 960,
                    settings: "onslick",
                }
            ]
        });
    }
    var width = $(window).width();

    window.addEventListener("resize", function() {
        slickSliderExhibitors();
    });

    if( width <= 960){
        slickSliderExhibitors();
    }
    if( width <= 880){
        $(".sliderRegestration").slick({
            speed: 500,
            cssEase: 'linear',
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: true,
            infinite: false,
            dots: true,
            rows: 3,
            centerMode: true,
        });
        $('.containerArrowSlider_regestration').css('display','flex');
    }
});