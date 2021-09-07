/*globals window: false, document: false, $: false, navLogo: false*/
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth <= 767) {
    $(navLogo).attr("src", "images/mmjLogo80px.png");
} else {
    $(navLogo).attr("src", "images/mmjLogo140px.png");
}






/*$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        /*alert("bottom!");*/
/*$("#footerImg").fadeIn(1000);*/
/*var popupFooter = document.getElementsByClassName("#customFooter");
        
        
        var height = $("#customFooter").height();
        
        $("#customFooter").show();
       
        $("#customFooter").css({
            transform: "translate(0px, -" + height + "px)",
            transform: "translate(-" + width +"px, 0px)",
            transition: "2s"
        });
    }
});*/







$(window).resize(function () {

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 767) {
        $(navLogo).attr("src", "images/mmjLogo80px.png");
    } else {
        $(navLogo).attr("src", "images/mmjLogo140px.png");
    }

});


/*$(".navbar-toggler").change(function () {
    $(".navbar-toggler").css("transform", "rotate(90)");
});*/

$(".bigFont").mouseenter(function (event) {
    $(event.currentTarget).animate({
        left: "-=10"
    }, 100);
});
$(".bigFont").mouseleave(function (event) {
    $(event.currentTarget).animate({
        left: "+=10"
    }, 100);
});

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
