"use strict";

$(document).ready(function () {
  $(".mobileMenu").click(function () {
    $(this).toggleClass('menuClick');
    $(this).children("span:first-child").toggleClass('topLine');
    $(this).children("span:last-child").toggleClass('bottomLine');
    $('nav').toggleClass("menu-open");
  });
});
//# sourceMappingURL=all.js.map
