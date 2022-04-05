$(document).ready(function() {

    // Change header once scrolled
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20) {
            $("header").addClass("scrolled")
        } else {
            $("header").removeClass("scrolled")
        }
    });

    // Change hamburger / mobile menu onclick
    $(".hamburger").click(function() {
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
    });    

    // open footer col on mobile
    $("footer .footer-col h3").click(function() { 
        let clickedCol = $(this).parent();
        if ($(window).width() <= 768) {
            clickedCol.toggleClass("open");
        }
    });
});

// contact form
function submitForm() {
    document.getElementById("contact-form").reset();
}

// footer year 
document.getElementById("currentYear").innerHTML = new Date().getFullYear();