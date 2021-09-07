/*globals window: false, document: false, $: false, navLogo: false*/
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth <= 767) {
    $(navLogo).attr("src", "images/mmjLogo80px.png");
} else {
    $(navLogo).attr("src", "images/mmjLogo140px.png");
}




//window.onload(window.location.hash = 'hu');

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






/*var aspectRation = $('.animationTag').width();
$(window).resize(function () {
    /*AnimationResize
    
    $('.animationTag').css({'height': aspectRation + 'px'});
    
    
    
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 767) {
        $(navLogo).attr("src", "images/mmjLogo80px.png");
    } else {
        $(navLogo).attr("src", "images/mmjLogo140px.png");
    }

});*/


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

function toggle2(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup2');
    popup.classList.toggle('active')
}
$(document).ready(function() {
    initialLoad = false;
     
    $('.animationTag').css({'height': aspectRation + 'px'});

});

if(initialLoad){
    document.getElementById("navLogo").click();
}


function nameUpdate(){
    $(nameButton).text("Címzett: " + $(inputReceiverName).val());
}

function nameUpdate2(){
    $(nameButton2).text("Feladó: " + $(inputSenderName).val());
}




//Sending data to the other side
function dataSending(){
    $("#submitbtn").css("color", "yellow");
   
    $("#database").css("color", "yellow");
     $('#database').update("new dialog title");
}


