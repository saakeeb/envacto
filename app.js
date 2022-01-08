const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinksFade = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');
        //animation
        navLinksFade.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }

        });
        // burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();



let swiper = new Swiper('.top-content.swiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 500
    },
});

let swiper2 = new Swiper('.lower-content.swiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 500
    },
    reverseDirection: true,
    changeDirection: false,
});

let swiper3 = new Swiper('.tab.top-content.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 500
    },
});

let swiper4 = new Swiper('.tab.lower-content.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 500
    },
    reverseDirection: true,
    changeDirection: false,
});