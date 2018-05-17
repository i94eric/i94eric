'use strict';

$(document).ready(function () {

    var imgs = document.querySelectorAll('.productButton');
    var imgLenth = imgs.length;
    for (var i = 0; i < imgLenth; i++) {
        $(imgs[i]).addClass('img0' + (i + 1));
        $(imgs[i]).css("background-image", 'url(Images/000' + (i + 1) + '.jpg)');
    };
    $('.menu').click(function () {
        event.preventDefault();
        $('.wrap').addClass('menu-on');
        $('.menuOpen').addClass('active');
    });
    $('.closeButton').click(function () {
        event.preventDefault();
        $('.wrap').removeClass('menu-on');
        $('.menuOpen').removeClass('active');
    });
    $('.anchorPoint').click(function () {
        $('.wrap').removeClass('menu-on');
        $('.menuOpen').removeClass('active');
    });
    $('.logo').mouseenter(function () {
        $('.logo').css("background-image", "url(Images/logoPink.png)");
    });
    $('.logo').mouseleave(function () {
        $('.logo').css("background-image", "url(Images/logo.png)");
    });
    $('.productInfo').click(function () {
        event.preventDefault();
        $('.header').addClass('modalSetting');
        $('.main').addClass('modalSetting');
        $('.collection').addClass('modalSetting');
        $('.aboutMe').addClass('modalSetting');
    });
    $('.close').click(function () {
        event.preventDefault();
        $('.header').removeClass('menu-on');
        $('.main').removeClass('menu-on');
        $('.collection').removeClass('menu-on');
        $('.aboutMe').removeClass('menu-on');
    });
    $('.productButton').mouseenter(function () {
        $(this).addClass('infoOn').siblings().css("display", "block");
    });
    $('.productInfo').mouseenter(function () {
        $(this).siblings().addClass('infoOn');
        $(this).css("display", "block");
    });
    $('.productButton').mouseleave(function () {
        $(this).removeClass('infoOn').siblings().css("display", "none");
    });
    $('.productInfo').mouseleave(function () {
        $(this).css("display", "none");
        $(this).siblings().removeClass('infoOn');
    });
    $(document).mouseup(function (e) {
        var _con = $('.menuList'); // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            // Mark 1
            $('.wrap').removeClass('menu-on');
            $('.menuOpen').removeClass('active');
        }
    });
});
//# sourceMappingURL=all.js.map
