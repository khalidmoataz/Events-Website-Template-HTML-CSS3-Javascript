(function ($) {
    "use strict";

    var
        $htmlbody = $('html, body'),
        mn = $(".main-nav"),
        mns = "main-nav-scrolled",
        hdr = $('head').height(),
        $window = $(window),
        $videosdiv = $(".all-videos > div"),
        $owl = $('#owl1'),
        $count = $('.counter');

 

    $(".navbar-header button").on('click', function () {
        $(".header-section h2,#particles-js").toggle();
    });

    /* Scroll to nav */

    $("#js--speakers").on('click', function () {
        $htmlbody.animate({
            scrollTop: $('#js-speakers').offset().top
        }, 1000)
    });
    $("#js--events").on('click', function () {
        $htmlbody.animate({
            scrollTop: $('#js-events').offset().top
        }, 1000)
    });
    $("#js--tickets").on('click', function () {
        $htmlbody.animate({
            scrollTop: $('#js-tickets').offset().top
        }, 1000)
    });
    $("#js--videos").on('click', function () {
        $htmlbody.animate({
            scrollTop: $('#js-videos').offset().top
        }, 1000)
    });
    $("#js--blog").on('click', function () {
        $htmlbody.animate({
            scrollTop: $('#js-blog').offset().top
        }, 1000)
    });
    $("#js--gallery").on('click', function () {
        $htmlbody.animate({
            scrollTop: $('#js-gallery').offset().top
        }, 1000)
    });
    $("#js--contact").on('click', function () {
        $htmlbody.animate({
            scrollTop: $('#js-contact').offset().top
        }, 1000)
    });
    /* Scroll to nav */
    /* Counter */

    $count.counterUp({
        delay: 10,
        time: 1000
    });

    /* Counter */

    /* Videos Pop */


    $(".left-list li").on('click', function () {
        $(this).addClass("run").siblings().removeClass("run");
        $(".tabs-content div").hide();
        $("." + $(this).data("class")).fadeIn();
    });


    $videosdiv.on('mouseenter', function () {
        $(this).addClass("hoverd");
    });
    $videosdiv.on('mouseleave', function () {
        $(this).removeClass("hoverd");
    });
    /* Videos Pop */


    /* Gallery Carousel */

    $owl.owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    /* Gallery Carousel */

})(jQuery);
