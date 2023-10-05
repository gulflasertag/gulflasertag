$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".main_menu").addClass("fixHeader");
    } else {
        $(".main_menu").removeClass("fixHeader");
    }
});
