// work.html functions
$(".work-file-link").hover(function () {
    $(this).find(".work-file-img").addClass('filter-invert');
}, function () {
    $(this).find(".work-file-img").removeClass('filter-invert');
});