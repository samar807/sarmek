// preload

// scrooltop
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 300) {
        $('.nav-bar').addClass('add');
    } else {
        $('.nav-bar').removeClass('add')
    }
});
// search
$(document).ready(function() {
    $('#search').click(function() {
        $('.search').addClass('active');

    });
    // $('.close-search').click(function() {
    //     $('.search').removeClass('active');

    // });
    $('#searchse').click(function() {
        $('.search').addClass('active');

    });

    $('.close-search').click(function() {
        $('.search').removeClass('active');
    });

    $('.toggle').click(function() {
        $('.slide-bar').addClass('active');
        $('.slide-bar').addClass('transform-origin');

    });
    $('.close-nav').click(function() {
        $('.slide-bar').removeClass('active');
        $('.slide-bar').removeClass('transform-origin');

    });
});

var swiper = new Swiper('.header .swiper-container', {
    pagination: {
        el: '.header .swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.header .swiper-button-next',
        prevEl: '.header .swiper-button-prev',
    },
});
// scrooltop
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 300) {
        $('.nav-bar').addClass('add');
    } else {
        $('.nav-bar').removeClass('add')
    }
});
// button
$(".scroll-btn").on("click", function() {
    $("html, body").animate({
        scrollTop: $(".about-us").offset().top
    }, 1000)
});
// laste
var swiper = new Swiper('.laste-new .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.laste-new .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.laste-new .swiper-button-next',
        prevEl: '.laste-new .swiper-button-prev',
    },
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        577: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})