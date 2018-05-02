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
        // $('.header').addClass('menu-on');
        // $('.main').addClass('menu-on');
        // $('.collection').addClass('menu-on');
        // $('.aboutMe').addClass('menu-on');
    });
    // $('.close').click(function(){
    //     event.preventDefault();
    //     $('.header').removeClass('menu-on');
    //     $('.main').removeClass('menu-on');
    //     $('.collection').removeClass('menu-on');
    //     $('.aboutMe').removeClass('menu-on');
    // });
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
});
//# sourceMappingURL=all.js.map
