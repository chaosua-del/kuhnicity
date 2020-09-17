import Swiper from 'swiper/js/swiper.js';

export default function header() {
    const headerButton = document.querySelector('.header__about');

    headerButton.addEventListener('click', event => {
        headerButton.classList.toggle('header__about--active');
        const content = document.querySelector('.header__about-menu');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }

    });

    const headerLocation = document.querySelector('.header__location');
    // console.dir(headerLocation);
    headerLocation.style.width = `${headerLocation.offsetWidth}px`;

    headerLocation.addEventListener('click', event => {
        headerLocation.classList.toggle('header__location--active');
        const content = document.querySelector('.header__location-block');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });

    const locationSelected = document.querySelector('.header__location-selected');
    const locationOption = document.querySelectorAll('.header__location-option');
    locationOption.forEach(elem => {
        elem.addEventListener('click', event => {
            let temp = event.target.textContent;
            event.target.textContent = locationSelected.textContent;
            locationSelected.textContent = temp;
        });
    });





    const headerMenu = document.querySelector('.header__block-open');
    const headerExpand = document.querySelector('.header__expand');

    headerMenu.addEventListener('click', event => {
        // headerExpand.style.height = headerExpand.scrollHeight;
        $('.header__expand').fadeToggle();
        const content = document.querySelector('.header__about-menu');
        $('body').toggleClass('overflow-hidden');
        $('.header').toggleClass('overflow-auto');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            headerButton.classList.remove('header__about--active');
        }

    });


    // const headerSwiper = $('.expand__swiper-container');

    $('.expand__collapsible').on('click', event => {
        const content = event.target.nextElementSibling;
        // coll.classList.toggle('leader__button--active')
        if (content.style.maxHeight) {
            headerExpand.classList.remove('header__expand--active');
            content.style.maxHeight = null;
            // event.target.style.backgroundImage = 'url("../img/header/white.svg")';
            event.target.style.backgroundPosition = `72% -200px`;
            event.target.style.color = '#272727';
        } else {
            headerExpand.classList.add('header__expand--active');
            document.querySelectorAll('.expand__swiper-container').forEach(elem => {
                elem.style.maxHeight = null;
            });
            document.querySelectorAll('.expand__collapsible').forEach(elem => {
                elem.style.backgroundPosition = `72% -200px`;
                elem.style.color = '#272727';
            });

            // content.style.opacity = '1';
            content.style.maxHeight = content.scrollHeight + 'px';
            event.target.style.backgroundImage = `url("${event.target.dataset.bg}")`;
            event.target.style.backgroundPosition = `72% 92%`;
            event.target.style.color = '#ffffff';
            // event.target.style.backgroundColor = 'rgba(#ffffff, 0)';
            // console.log(event.target.dataset.bg);

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
                document.querySelectorAll('.expand__swiper-container').forEach(elem => {
                    elem.style.opacity = '0';
                });
                content.style.opacity = '1';

            } else {
                $('.expand__swiper-wrapper').removeClass('swiper-disabled');
            }


        }

    });
}
