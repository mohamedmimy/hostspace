$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar-default").css("background-color", "#2A1945");
            $(".navbar-default").css("padding", "15px");
        } else {
            $(".navbar-default").css("background-color", "transparent");
            $(".navbar-default").css("padding", "25px");
        }
    });
});