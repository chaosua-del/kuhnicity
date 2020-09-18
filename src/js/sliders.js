import Swiper from 'swiper/js/swiper.js';

export default function sliders() {
    const stages = new Swiper('.stages__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesOffsetAfter: 20,
        updateOnWindowResize: false,
        // loop: true,
        navigation: {
            nextEl: '.stages__swiper-button-next',
            prevEl: '.stages__swiper-button-prev',
        },
        breakpoints: {
            450: {
                slidesOffsetAfter: 500,
            },
            800: {
                slidesOffsetAfter: 700,
            },
            1000: {
                slidesOffsetAfter: 900,
            },
            1200: {
                slidesOffsetAfter: 1000,
            }
        }
    });

    if (window.innerWidth < 768) {
        const benefits = new Swiper('.benefits__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 0,
        });

        const discounts = new Swiper('.discounts__swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween: 10,
            updateOnWindowResize: false,
            // freeMode: true,
            // loop: false,
            slidesOffsetAfter: 0,
        });

        discounts.translateTo(269);

        const social = new Swiper('.social__swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween: 10,
            updateOnWindowResize: false,
            // freeMode: true,
            // loop: false,
            slidesOffsetAfter: 0,
        });

        social.translateTo(270);




        const banner = new Swiper('.banner__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 2,
        });

    } else {
        const discounts2 = new Swiper('.discounts__swiper-container2', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            slidesOffsetAfter: 200,
            updateOnWindowResize: false,
            freeMode: true,
        });
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {



        const banner = new Swiper('.banner__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 2,
        });


    }

    const models = new Swiper('.models__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: false,
        slidesOffsetAfter: 0,
    });


    const feedback = new Swiper('.feedback__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesOffsetAfter: 20,
        updateOnWindowResize: false,
        loop: false,
        parallax: true,
        navigation: {
            nextEl: '.feedback__swiper-button-next',
            prevEl: '.feedback__swiper-button-prev',
        },
    });

    feedback.translateTo(270);




    const articles = new Swiper('.articles__swiper-container', {
        slidesPerView: 'auto',
        // spaceBetween: 10,
        updateOnWindowResize: false,
        // freeMode: true,
        // loop: false,
        slidesOffsetAfter: 0,
        navigation: {
            nextEl: '.articles__swiper-button-next',
            prevEl: '.articles__swiper-button-prev',
        }
    });

    articles.translateTo(270);

    const bonuses = new Swiper('.bonuses__swiper-container', {
        slidesPerView: 'auto',
        // spaceBetween: 10,
        updateOnWindowResize: false,
        // freeMode: true,
        // loop: false,
        slidesOffsetAfter: 20,
        navigation: {
            nextEl: '.bonuses__swiper-button-next',
            prevEl: '.bonuses__swiper-button-prev',
        }
    });

    bonuses.translateTo(270);



}
