import Swiper from 'swiper/js/swiper.js';

export default function news() {
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

    const articles = new Swiper('.articles__swiper-container', {
        slidesPerView: 'auto',
        // spaceBetween: 10,
        updateOnWindowResize: false,
        // freeMode: true,
        // loop: false,
        slidesOffsetAfter: 20,
        navigation: {
            nextEl: '.articles__swiper-button-next',
            prevEl: '.articles__swiper-button-prev',
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
    } else {
        const news = new Swiper('.news__swiper-container', {
            // updateOnWindowResize: false,
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: false,
            loop: false,
            slidesOffsetAfter: 0,
            navigation: {
                nextEl: '.news__swiper-button-next',
                prevEl: '.news__swiper-button-prev',
            }
        });
    }
}
