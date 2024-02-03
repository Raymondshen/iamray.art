$(function () {
    $(".img-hover").hover(function () {
        $(this).find(".img-hidden").css({ transform: 'rotate(10deg)', opacity: "1" });
        $(this).find(".work-title").css({
            textShadow: "-6px 6px var(--gold)",
            transform: "translate(2px,-2px)",
        });
    }, function () {
        $(this).find(".img-hidden").css({ transform: 'rotate(0deg)', opacity: "0" });
        $(this).find(".work-title").css({
            textShadow: "0px 0px var(--gold)",
            transform: "translate(0px,0px)",
        });
    });
});