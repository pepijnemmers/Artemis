$(document).ready(function() {

    // Change header once scrolled
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20) {
            $("header").addClass("scrolled")
        } else {
            $("header").removeClass("scrolled")
        }
    })
});

// contact form
function submitForm() {
    document.getElementById("contact-form").reset();
}

// footer year 
document.getElementById("currentYear").innerHTML = new Date().getFullYear();