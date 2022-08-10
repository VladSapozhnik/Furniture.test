const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        320: {
            slidesPerView: 1,
            slideToClickedSlide: true,
        },
        920: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },



});