/*MAIN NAVBAR TOOGLE*/
$(document).ready(function () {
        var touch = $("#touch-menu");
        var menu = $(".navbar");
        var langpanel = $(".lang-panel");
        var toppanel = $(".top-panel");
        $(touch).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle(0);
            langpanel.slideToggle(0);
            toppanel.slideToggle(0, function () {
                toppanel.toggleClass('top-panel-highter');
                $(this).toggleClass('expand').css('display', '');
            })
        })
        $(window).resize(function () {
            var wid = $(window).width();
            if (wid >= 830 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
            if (wid >= 830 && langpanel.is(':hidden')) {
                langpanel.removeAttr('style');
            }
        })
    })
    /*BLOG NAVBAR TOOGLE*/
$(document).ready(function () {
    var touch = $("#blog-menu-touch-btn");
    var menu = $(".blog-navbar");
    var toppanel = $(".blog-header");
    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle(0);
        toppanel.slideToggle(0, function () {
            toppanel.toggleClass('blog-header-highter');
            $(this).toggleClass('expand').css('display', '');
        })
    })
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid >= 830 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    })
})
$(document).ready(function () {
    var touch = $("#blog-menu-touch-btn-sec");
    var menu = $(".blog-navbar-sec");
    var toppanel = $(".blog-header-sec");
    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle(0);
        toppanel.slideToggle(0, function () {
            toppanel.toggleClass('blog-header-highter');
            $(this).toggleClass('expand').css('display', '');
        })
    })
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid >= 830 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    })
})
$(document).ready(function () {
    var touch = $("#blog-menu-touch-btn-thr");
    var menu = $(".blog-navbar-thr");
    var toppanel = $(".blog-header-thr");
    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle(0);
        toppanel.slideToggle(0, function () {
            toppanel.toggleClass('blog-header-highter');
            $(this).toggleClass('expand').css('display', '');
        })
    })
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid >= 830 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    })
})
$(document).ready(function () {
        var touch = $("#blog-menu-touch-btn-fourth");
        var menu = $(".blog-navbar-fourth");
        var toppanel = $(".blog-header-fourth");
        $(touch).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle(0);
            toppanel.slideToggle(0, function () {
                toppanel.toggleClass('blog-header-highter');
                $(this).toggleClass('expand').css('display', '');
            })
        })
        $(window).resize(function () {
            var wid = $(window).width();
            if (wid >= 830 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        })
    })
    /*SLIDER*/
$(window).bind('load', function () {
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });
});
/*rating stars*/
$(document).ready(function () {
    var rating = document.querySelector('.rating')
        , ratingItem = document.querySelectorAll('.rating-item');
    rating.onclick = function (e) {
        var target = e.target;
        if (target.classList.contains('rating-item')) {
            removeClass(ratingItem, 'current-active')
            target.classList.add('active', 'current-active');
        }
    }
    rating.onmouseover = function (e) {
        var target = e.target;
        if (target.classList.contains('rating-item')) {
            removeClass(ratingItem, 'active')
            target.classList.add('active');
            mouseOverActiveClass(ratingItem)
        }
    }
    rating.onmouseout = function () {
        addClass(ratingItem, 'active');
        mouseOutActiveClas(ratingItem);
    }

    function removeClass(arr) {
        for (var i = 0, iLen = arr.length; i < iLen; i++) {
            for (var j = 1; j < arguments.length; j++) {
                ratingItem[i].classList.remove(arguments[j]);
            }
        }
    }

    function addClass(arr) {
        for (var i = 0, iLen = arr.length; i < iLen; i++) {
            for (var j = 1; j < arguments.length; j++) {
                ratingItem[i].classList.add(arguments[j]);
            }
        }
    }

    function mouseOverActiveClass(arr) {
        for (var i = 0, iLen = arr.length; i < iLen; i++) {
            if (arr[i].classList.contains('active')) {
                break;
            }
            else {
                arr[i].classList.add('active');
            }
        }
    }

    function mouseOutActiveClas(arr) {
        for (var i = arr.length - 1; i >= 1; i--) {
            if (arr[i].classList.contains('current-active')) {
                break;
            }
            else {
                arr[i].classList.remove('active');
            }
        }
    }
})

