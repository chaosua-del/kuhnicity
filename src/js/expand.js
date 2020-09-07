import $ from 'jquery';
import Swiper from 'swiper/js/swiper.js';

export default function expand() {
    // making collapsible text in section leader
    const coll = document.querySelector('.leader__button')

    coll.addEventListener('click', event => {
        const content = event.target.previousElementSibling;
        coll.classList.toggle('leader__button--active')
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });

    const headerButton = document.querySelector('.header__about');

    headerButton.addEventListener('click', event => {
        headerButton.classList.toggle('header__about--active');

    });

    // $('.header__location').on('click', (event) => {
    //     event.target.classList.toggle('header__location--active');

    //     if (event.target.classList.contains('header__location--selected')) {
    //         $('.header__location').toggleClass('header__location--active');
    //     }
    // });



    const headerMenu = document.querySelector('.header__block-open');
    const headerExpand = document.querySelector('.header__expand');

    headerMenu.addEventListener('click', event => {

        if (headerExpand.dataset.isopen == 'false') {

            headerExpand.dataset.isopen = 'true';
            $('.header__expand').fadeIn();

        } else {
            $('.header__expand').fadeOut();
            headerExpand.dataset.isopen = 'false';
        }
    });

    const headerSwiper = $('.expand__swiper-container');

    $('.expand__collapsible').on('click', event => {

        const content = event.target.nextElementSibling;
        // coll.classList.toggle('leader__button--active')
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            // event.target.style.backgroundImage = 'url("../img/header/white.svg")';
            event.target.style.backgroundPosition = `72% -200px`;
            event.target.style.color = '#272727';
        } else {
            document.querySelectorAll('.expand__swiper-container').forEach(elem => {
                elem.style.maxHeight = null;
            });
            document.querySelectorAll('.expand__collapsible').forEach(elem => {
                elem.style.backgroundPosition = `72% -200px`;
                elem.style.color = '#272727';
            });
            content.style.maxHeight = content.scrollHeight + 'px';

            event.target.style.backgroundImage = `url("${event.target.dataset.bg}")`;
            event.target.style.backgroundPosition = `72% 92%`;
            event.target.style.color = '#ffffff';
            // event.target.style.backgroundColor = 'rgba(#ffffff, 0)';
            console.log(event.target.dataset.bg);

            const expandSwiper = new Swiper('.expand__swiper-container', {
                slidesPerView: 'auto',
                slidesOffsetAfter: window.innerWidth / 2,
                updateOnWindowResize: false,
                scrollbar: {
                    el: '.expand__swiper-scrollbar',
                },
                // freeMode: true,
                // loop: true,

            });

            if (window.innerWidth >= 1280) {
                $('.expand__swiper-wrapper').addClass('swiper-disabled');
                // $('.expand__swiper-scrollbar').addClass("disabled");

            } else {
                $('.expand__swiper-wrapper').removeClass('swiper-disabled');
            }


        }

    });
}
