/*globals window: false, document: false, $: false, navLogo: false*/
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth <= 767) {
    $(navLogo).attr("src", "images/mmjLogo80px.png");
} else {
    $(navLogo).attr("src", "images/mmjLogo140px.png");
}


var type = "first";
/*
function tvVideo(type) {
    if (type == "first") {
        var tvOffset = $(".tvPng").offset();
        var tvHeight = $(".tvPng").height();
        var tvWidth = $(".tvPng").width();
        $(".videoTV").offset({
            top: tvOffset.top + tvHeight / 3.5,
            left: tvOffset.left + tvWidth / 14
        });
        $(".videoTV").height(tvHeight / 1.9);
        $(".videoTV").width(tvWidth / 1.3);
    } else {
        var monitorOffset = $(".monitorPng").offset();
        var monitorHeight = $(".monitorPng").height();
        var monitorWidth = $(".monitorPng").width();
        $(".videoMonitor").offset({
            top: monitorOffset.top + monitorHeight / 20,
            left: monitorOffset.left + monitorWidth / 14
        });
        $(".videoMonitor").height(monitorHeight / 1.86);
        $(".videoMonitor").width(monitorWidth / 1.25);
    }
}
*/
//tvVideo(type);
type = "second";
//tvVideo(type);

/*$(".moreLessBtn").click(function () {
    $(this).text(function (i, old) {
        return old == "Kevesebb" ? "Bővebben" : "Kevesebb";
    });
})*/


function footerAdjust() {
    var viewportWidth2 = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth2 <= 1400) {
        $(".footerHeightDiv").show();
        var footerOffset = $("#footerImg").offset();
        $(".footerHeightDiv").offset({
            top: footerOffset.top + $("#footerImg").height(),
            left: footerOffset.left
        });
        $(".footerHeightDiv").width($("#footerImg").width());
    } else {
        $(".footerHeightDiv").hide();
        $("#footerImg").offset({
            bottom: 0
        });
    }
}

footerAdjust();

/*
$(window).resize(function () {

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 767) {
        $(navLogo).attr("src", "images/mmjLogo80px.png");
    } else {
        $(navLogo).attr("src", "images/mmjLogo140px.png");
    }
    type = "first";
    tvVideo(type);
    type = "second";
    tvVideo(type);
    footerAdjust();

});
*/

$("#fbIcon").mouseenter(function () {
    $("#fbLink").finish().animate({
        left: "-=5px"
    }, 200).animate({
        left: "+=5px"
    }, 200);
});
$("#mailIcon").mouseenter(function () {
    $("#mailLink").finish().animate({
        left: "-=5px"
    }, 200).animate({
        left: "+=5px"
    }, 200);
});
$("#ytIcon").mouseenter(function () {
    $("#ytLink").finish().animate({
        left: "-=5px"
    }, 200).animate({
        left: "+=5px"
    }, 200);
});

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});


function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}
