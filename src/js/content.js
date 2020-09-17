import Swiper from 'swiper/js/swiper.js';

export default function content() {


    const gallery = new Swiper('.articles__swiper-container', {
        slidesPerView: 'auto',
        // spaceBetween: 10,
        updateOnWindowResize: false,
        // freeMode: true,
        // loop: true,
        slidesOffsetAfter: 10,
        navigation: {
            nextEl: '.articles__swiper-button-next',
            prevEl: '.articles__swiper-button-prev',
        }
    });

    const others = new Swiper('.others__swiper-container', {
        slidesPerView: 'auto',
        // spaceBetween: 10,
        updateOnWindowResize: false,
        // freeMode: true,
        // loop: false,
        slidesOffsetAfter: 0,
        navigation: {
            nextEl: '.others__swiper-button-next',
            prevEl: '.others__swiper-button-prev',
        }
    });
}
