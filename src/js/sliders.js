import Swiper from 'swiper/js/swiper.js';

export default function sliders() {
    if (window.innerWidth < 768) {
        const benefits = new Swiper('.benefits__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 2,
        });

        const discounts = new Swiper('.discounts__swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween: 10,
            updateOnWindowResize: false,
            // freeMode: true,
            // loop: false,
            slidesOffsetAfter: 110,
        });

        discounts.translateTo(269);

        const social = new Swiper('.social__swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween: 10,
            updateOnWindowResize: false,
            // freeMode: true,
            // loop: false,
            slidesOffsetAfter: 110,
        });

        social.translateTo(270);


    }

    const models = new Swiper('.models__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: false,
        slidesOffsetAfter: 0,
    });

    const stages = new Swiper('.stages__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesOffsetAfter: 400,
        updateOnWindowResize: false,
        loop: false,
        navigation: {
            nextEl: '.stages__swiper-button-next',
            prevEl: '.stages__swiper-button-prev',
        },
    });

    stages.translateTo(270);

    const feedback = new Swiper('.feedback__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesOffsetAfter: 400,
        updateOnWindowResize: false,
        loop: false,
        parallax: true,
        navigation: {
            nextEl: '.feedback__swiper-button-next',
            prevEl: '.feedback__swiper-button-prev',
        },
    });

    feedback.translateTo(270);


    const banner = new Swiper('.banner__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: false,
        slidesOffsetAfter: 2,
    });

}
