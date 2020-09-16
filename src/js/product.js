import $ from 'jquery';
import Swiper from 'swiper/js/swiper.js';

export default function product() {
    if (window.innerWidth >= 1280) {
        console.log('hello');
        const hero = new Swiper('.productHero__swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween: 0,
            // slidesOffsetAfter: 100,
            // updateOnWindowResize: false,
            loop: true,
            navigation: {
                nextEl: '.productHero__swiper-button-next',
                prevEl: '.stages__swiper-button-prev',
            }
        });

    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        const benefits = new Swiper('.productBenefits__swiper-container', {
            slidesPerView: 'auto',
            slidesOffsetAfter: 0,
            updateOnWindowResize: false,
            freeMode: true
        });
    }

    if (window.innerWidth < 768) {
        const benefits = new Swiper('.benefits__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 0,
        });

        const charsImage = new Swiper('.chars-image__swiper-container', {
            updateOnWindowResize: false,
            freeMode: true,
            slidesOffsetAfter: 150,
            scrollbar: {
                el: '.chars-image__swiper-scrollbar',
                draggable: false,
            }
        });
    } else {
        const charsImage = new Swiper('.chars__swiper-container', {
            updateOnWindowResize: false,
            freeMode: true,
            slidesOffsetAfter: 400,
            scrollbar: {
                el: '.chars__swiper-scrollbar',
                draggable: false,
            }
        });

        const benefits = new Swiper('.benefits__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 100,
        });
    }

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

    const expand = document.querySelectorAll('.questions__expand-button')

    expand.forEach(elem => {
        elem.addEventListener('click', event => {
            const content = event.target.nextElementSibling;
            elem.classList.toggle('questions__expand-button--active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });


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


    bonuses.translateTo(document.querySelector('.bonuses__swiper-wrapper').offsetWidth);

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


    // others.translateTo(document.querySelector('.others__swiper-wrapper').offsetWidth);

    // console.log(document.querySelector('.others__swiper-slide').style.marginRight);


}
