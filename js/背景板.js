var menu = $(".menu")[0];
touch.on(menu, 'tap', function() {
    $(".menu").removeClass("recover");
    if ($(".menu").is('.menu_close')) {
        $(".menu").toggleClass("recover");

    }
    $(".menu").toggleClass("menu_close");
    $("nav").toggleClass("nav_click");
    $(".menu_ul").toggleClass("menu_hid");
});

var icon_search = $(".icon_search")[0];
touch.on(icon_search, 'tap', function() {
    $(".search").css("height", "100%");
    $(".search>input").css("opacity", "1");
});
$(document).click(function(event) {
    var _con = $('.search'); // 设置目标区域
    if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
        $(".search").css("height", "0");
        $(".search>input").css("opacity", "0");
    }
});