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
                prevEl: '.productHero__swiper-button-prev',
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

        const charsCalculator = new Swiper('.chars-calculator__swiper-container', {
            updateOnWindowResize: false,
            freeMode: true,
            slidesOffsetAfter: 500,
            scrollbar: {
                el: '.chars-calculator__swiper-scrollbar',
                draggable: false,
            },
            breakpoints: {
                420: {
                    slidesOffsetAfter: 400,
                },
                520: {
                    slidesOffsetAfter: 300,
                },
                620: {
                    slidesOffsetAfter: 200,
                },
                720: {
                    slidesOffsetAfter: 100,
                },
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


    // bonuses.translateTo(document.querySelector('.bonuses__swiper-wrapper').offsetWidth);

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

    const articles = new Swiper('.articles__swiper-container2', {
        slidesPerView: 'auto',
        // spaceBetween: 10,
        updateOnWindowResize: false,
        // freeMode: true,
        // loop: false,
        slidesOffsetAfter: 0,
        navigation: {
            nextEl: '.chars-description__swiper-button-next',
            prevEl: '.chars-description__swiper-button-prev',
        },
        scrollbar: {
            el: '.chars-description__swiper-scrollbar',
            draggable: false,
        }
    });

    const feedback = new Swiper('.feedback__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesOffsetAfter: 20,
        updateOnWindowResize: false,
        loop: false,
        parallax: true,
        scrollbar: {
            el: '.chars-feedback__swiper-scrollbar',
            draggable: false,
        },
    });

    const input = document.querySelector('.chars-calculator__input');
    const plus = document.querySelector('.chars-calculator__plus');
    const minus = document.querySelector('.chars-calculator__minus');
    const calcTabs = document.querySelectorAll('.chars__table-tab');


    let multipliers = [];



    calcTabs.forEach(elem => {
        multipliers.push(parseInt(elem.textContent.replace(/\s+/g, ''), 10));
    });


    plus.addEventListener('click', event => {
        input.value = (parseInt(input.value) + 1);
        calc(multipliers);
    });

    minus.addEventListener('click', event => {
        if (input.value <= 1) {
            input.value = 1;
            calc(multipliers);
            return;
        } else {
            input.value = (parseInt(input.value) - 1);
            calc(multipliers);
        }
    });

    input.oninput = input.onpaste = input.onchange = function () {
        if (input.value <= 1 || input.value == NaN) {
            input.value = 1;
            calc(multipliers);
            return;
        } else {

            calc(multipliers);
        }
    }


    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }


    function calc(array) {
        calcTabs.forEach((elem, i) => {
            let tabValue = parseInt(elem.textContent.replace(/\s+/g, ''), 10);
            let sum = input.value * array[i];
            elem.textContent = prettify(sum);
            // console.log(parseInt(elem.textContent.replace(/\s+/g, ''), 10));
        });
    }



}
