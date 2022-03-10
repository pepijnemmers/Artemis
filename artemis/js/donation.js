$(document).ready(function() {
    // test for change slides
    $(".donate-right .logo").click(function() {
        if (!$(".first-slide").hasClass("hidden")) {
            $(".first-slide").addClass("hidden");
            $(".second-slide").removeClass("hidden");
        } 
        else if ($(".first-slide").hasClass("hidden") && $(".third-slide").hasClass("hidden")) {
            $(".second-slide").addClass("hidden");
            $(".third-slide").removeClass("hidden");
        } 
        else if ($(".first-slide").hasClass("hidden") && $(".second-slide").hasClass("hidden")) {
            $(".first-slide").removeClass("hidden");
            $(".third-slide").addClass("hidden");
        }
    });
});