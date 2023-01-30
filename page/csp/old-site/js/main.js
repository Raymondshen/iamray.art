$(document).scroll(function () {
    //stick nav to top of page
    var x = $(this).scrollTop();
    var navMain = $('.cover-img').offset().top;
    if (x > navMain) {
        $('.main-nav').addClass('hide-nav');
    } else {
        $('.main-nav').removeClass('hide-nav');
    }

    var y = $(this).scrollTop();
    var navWrap = $('#objective').offset().top;
    if (y > navWrap) {
        $('.aside-container').addClass('sticky');
        $('.aside-container').removeClass('unsticky');
    } else {
        $('.aside-container').removeClass('sticky');
        $('.aside-container').addClass('unsticky');
    }
});

$(".project-block").hover(function () {
    $(this).find(".img-logo").addClass('img-scale');
}, function () {
    $(this).find(".img-logo").removeClass('img-scale');
});

$(".hero-txt-headline").hover(function () {
    $(".hero-img-me").addClass('img-show');
    $(".hero-img-shape").addClass('hide');
}, function () {
    $(".hero-img-me").removeClass('img-show');
    $(".hero-img-shape").removeClass('hide');
});

$(".hero-streetartist").hover(function () {
    $(".hero-img-streetartist").addClass('img-show');
    $(".hero-img-shape").addClass('hide');
}, function () {
    $(".hero-img-streetartist").removeClass('img-show');
    $(".hero-img-shape").removeClass('hide');
});

$(".about-me-img").hover(function () {
    $(".about-img-baby").addClass('img-show');
}, function () {
    $(".about-img-baby").removeClass('img-show');
});