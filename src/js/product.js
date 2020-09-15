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
            slidesOffsetAfter: 150,
            scrollbar: {
                el: '.chars__swiper-scrollbar',
                draggable: false,
            }
        });
    }

    const coll = document.querySelector('.chars__expand-button')

    coll.addEventListener('click', event => {
        const content = event.target.nextElementSibling;
        coll.classList.toggle('chars__expand-button--active');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });

}
