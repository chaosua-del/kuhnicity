import $ from 'jquery';
import Swiper from 'swiper/js/swiper.js';
import ionRangeSlider from 'ion-rangeSlider/js/ion.rangeSlider.min.js';

export default function catalog() {


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

    if (window.innerWidth < 768) {
        const benefits = new Swiper('.benefits__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: false,
            slidesOffsetAfter: 0,
        });

        const stages = new Swiper('.stages__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            slidesOffsetAfter: 100,
            updateOnWindowResize: false,
            loop: false,
            navigation: {
                nextEl: '.stages__swiper-button-next',
                prevEl: '.stages__swiper-button-prev',
            },
        });

        stages.translateTo(270);
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {


        const stages = new Swiper('.stages__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            slidesOffsetAfter: 450,
            updateOnWindowResize: false,
            loop: false,
            navigation: {
                nextEl: '.stages__swiper-button-next',
                prevEl: '.stages__swiper-button-prev',
            },
        });

        stages.translateTo(318);
    }

    // stages-hover 
    if (window.innerWidth >= 1280) {
        const card = document.querySelectorAll('.stages__swiper-slide');
        card.forEach(function (elem) {
            elem.addEventListener('mouseenter', function (event) {
                if (window.innerWidth >= 1280) {
                    event.target.classList.add('swiper-slide-active');
                }
            });

            elem.addEventListener('mouseleave', function (event) {
                if (window.innerWidth >= 1280) {
                    event.target.classList.remove('swiper-slide-active');
                }
            });
        });
    }

    // leader-expand
    // // making collapsible text in section leader
    // const coll = document.querySelector('.leader__button')

    // coll.addEventListener('click', event => {
    //     const content = event.target.previousElementSibling;
    //     coll.classList.toggle('leader__button--active')
    //     if (content.style.maxHeight) {
    //         content.style.maxHeight = null;
    //     } else {
    //         content.style.maxHeight = content.scrollHeight + 'px';
    //     }
    // });




    // filter expand
    $('.filter__button').on('click', () => {

        $('.filter__menu').fadeToggle('fast');
    });

    $('.filter__expand-confirm').on('click', () => {

        $('.filter__menu').fadeOut('slow');
    });


    const filterButton = document.querySelectorAll('.filter__expand-button');
    const filterItem = document.querySelectorAll('.filter__expand-item');
    const filterType = document.querySelectorAll('.type__item');
    const filterActive = document.querySelector('.type__item--active');
    const tabsButton = document.querySelectorAll('.tabs__button');
    const tabs = document.querySelector('.filter__tabs');
    const tabsCancel = document.querySelector('.tabs__cancel');

    filterButton.forEach(elem => {
        elem.addEventListener('click', event => {
            if (event.target.classList.contains('filter__expand-button')) {
                const content = event.target.children[0];

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    document.querySelectorAll('.filter__expand-list').forEach(elem => {
                        elem.style.maxHeight = null;
                    });
                    filterButton.forEach(elem => {
                        elem.classList.remove('filter__expand-button--active');
                    });
                    content.style.maxHeight = content.scrollHeight + 'px';
                    event.target.classList.toggle('filter__expand-button--active');
                }

            }

        });
    });

    document.querySelectorAll('.filter__expand-item').forEach(elem => {
        elem.addEventListener('click', event => {
            event.target.classList.toggle('filter__expand-item--active');
        });
    });


    // filterItem.

    tabsButton.forEach(elem => {
        elem.addEventListener('click', event => {
            // tabsButton.forEach(elem => {
            //     elem.classList.remove('tabs__button--active');
            // });
            event.target.classList.toggle('tabs__button--active');
        });
    });

    filterActive.addEventListener('click', event => {
        if (event.target.classList.contains('active-text')) {

            document.querySelector('.type-list').classList.toggle('type-list--active');
        }
    });



    $('.filter__expand-price').on('click', event => {
        // range slider
        $('.filter__expand-range').fadeToggle('fast');
        const range = $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 150000,
            from: 20000,
            to: 150000,
            grid: true,
            skin: 'round'
        });
    });


    document.querySelector('.tabs__more.hidden-768').addEventListener('click', event => {
        const content = event.target.previousElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });

    document.querySelector('.tabs__more.visible-768').addEventListener('click', event => {
        // console.log('he');
        const content = document.querySelector('.tabs__expand');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        event.target.style.display = 'none';
        tabs.style.maxHeight = tabs.scrollHeight + 'px';
        tabsCancel.style.order = '2';
        tabsCancel.style.marginLeft = 'auto';
    });


    document.querySelector('.tabs__cancel').addEventListener('click', event => {
        tabsButton.forEach(elem => {
            elem.classList.remove('tabs__button--active');
        });
        filterItem.forEach(elem => {
            elem.classList.remove('filter__expand-item--active');
        });
        document.querySelectorAll('.filter__expand-list').forEach(elem => {
            elem.style.maxHeight = null;
        });
        document.querySelectorAll('.tabs__expand').forEach(elem => {
            elem.style.maxHeight = null;
        });
        document.querySelectorAll('.tabs__more').forEach(elem => {
            elem.style.display = 'block';
        });
        filterButton.forEach(elem => {
            elem.classList.remove('filter__expand-button--active');
        });
        tabs.style.maxHeight = 57 + 'px';
        tabsCancel.style.order = '0';
        tabsCancel.style.marginLeft = '0';
    });

    document.querySelector('.tabs__cancel2').addEventListener('click', event => {
        tabsButton.forEach(elem => {
            elem.classList.remove('tabs__button--active');
        });
        filterItem.forEach(elem => {
            elem.classList.remove('filter__expand-item--active');
        });
        document.querySelectorAll('.filter__expand-list').forEach(elem => {
            elem.style.maxHeight = null;
        });
        filterButton.forEach(elem => {
            elem.classList.remove('filter__expand-button--active');
        });



    });

    const range = $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 150000,
        from: 20000,
        to: 150000,
        grid: true,
        skin: 'round'
    });

}
