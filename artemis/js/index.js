const tl = gsap.timeline({ defaults: { ease: "Power3.easeOut", duration: 2 } });
tl.delay(1);

tl.to(".hero-text h1", { 'clip-path': 'polygon(0 0, 105% 0, 105% 105%, 0% 105%)', opacity: 1, y: 0 });
tl.to(".hero-text p", { opacity: 1, y: 0 }, "-=1");
tl.to(".hero .btns", { opacity: 1, y: 0, 'clip-path': 'polygon(0 0, 105% 0, 105% 105%, 0% 105%)' }, "<"); 