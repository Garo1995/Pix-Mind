$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});



let convectorSwiper = new Swiper(".convector-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".convector-pagination",
        clickable: true,
    }
});
let createdSwiper = new Swiper(".created-those-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".created-pagination",
        clickable: true,
    }
});





let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '991': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '680': {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


