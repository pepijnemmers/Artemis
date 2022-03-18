$(document).ready(function() {
    // Large slick slider with center mode
    $('.slick-center-lg').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
    });
});

const tl = gsap.timeline({ defaults: { ease: "Power3.easeOut", duration: 2 } });
tl.delay(.5);

tl.to(".hero-text h1", { 'clip-path': 'polygon(0 0, 105% 0, 105% 105%, 0% 105%)', opacity: 1, y: 0 });
tl.to(".hero-text p", { opacity: 1, y: 0 }, "-=1");
tl.to(".hero .btns", { opacity: 1, y: 0, 'clip-path': 'polygon(0 0, 105% 0, 105% 105%, 0% 105%)' }, "<"); 