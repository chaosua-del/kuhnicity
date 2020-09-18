import Swiper from 'swiper/js/swiper.js';

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

export default function vacancies() {
    const coll = document.querySelectorAll('.chars__expand-button')

    coll.forEach(elem => {
        elem.addEventListener('click', event => {
            const content = event.target.nextElementSibling;
            elem.classList.toggle('chars__expand-button--active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    if (window.innerWidth < 768) {
        const benefits = new Swiper('.benefits__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 0,
        });
    }
}
