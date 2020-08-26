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
            parallax: true,
        });

        discounts.translateTo(269);



    }

    const models = new Swiper('.models__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: false,
        slidesOffsetAfter: 0,
    });


}
