import {
    $,
    jQuery
} from 'jquery';

import 'lazysizes';
import Swiper from 'swiper/js/swiper.js';
import ionRangeSlider from 'ion-rangeSlider/js/ion.rangeSlider.min.js'
import leaflet from 'leaflet/dist/leaflet.js';

// import marquee from 'libs/jquery.marquee.min.js';




import page from 'page';
import header from 'header';
// import forms from 'forms';
import sliders from 'sliders';
import filters from 'filters';
import svgReplace from 'svgReplace';
import expand from 'expand';
import hovers from 'hovers';
import modals from 'modals';
import cardHeight from 'cardHeight';
import customCursor from 'customCursor';
import product from 'product';
import catalog from 'catalog';
import vacancies from 'vacancies';
import validation from 'validation';
import news from 'news';
import content from 'content';
import notFound from 'notFound';
import contacts from 'contacts';
import services from 'services';
// import forms from 'forms'

// import fancybox from '@fancyapps/fancybox';



let app = {

    // параметры, изменяемые в appConfig

    breakpoints: {
        sm: 320,
        md: 768,
        lg: 1280
    },
    media: 320,
    resizeEventName: 'app_resize',
    submitEventName: 'app_submit',
    popupLoadedEventName: 'app_popup_loaded',
    popupClosedEventName: 'app_popup_closed',
    tabChangedEventName: 'app_tab_changed',
    scrollToOffset: 200, // оффсет при скролле до элемента
    scrollToSpeed: 500, // скорость скролла 

    init: function () {
        // read config
        if (typeof appConfig === 'object') {
            Object.keys(appConfig).forEach(key => {
                if (Object.prototype.hasOwnProperty.call(app, key)) {
                    app[key] = appConfig[key];
                }
            });
        }

        app.currentID = 0;

        // Init page
        this.page = page;
        this.page.init.call(this);

        // Init page
        // this.forms = forms;
        // this.forms.init.call(this);

        app.checkMedia();
        app.window.on('resize', app.checkMedia);
        window.jQuery = $;
        window.app = app;


        app.document.ready(() => {
            document.querySelector('.content').style.marginTop = `${document.querySelector('.header').offsetHeight}px`;
            header();
            // modals();
            validation();
            // forms();
            if (document.querySelector('.content').id == 'main') {
                expand();
                sliders();
                filters();
                customCursor();
                hovers();
                cardHeight();

                window.$mq = window.$('.discounts__marquee').marquee({
                    startVisible: true,
                    speed: 100
                });
            } else if (document.querySelector('.content').id == 'catalog') {
                expand();
                catalog();
                cardHeight();

            } else if (document.querySelector('.content').id == 'product') {
                product();
                customCursor();
                if (window.innerWidth < 1920) {

                    cardHeight();
                }
            } else if (document.querySelector('.content').id == 'vacancies') {
                vacancies();
            } else if (document.querySelector('.content').id == 'news') {
                news();
            } else if (document.querySelector('.content').id == 'contentPage') {
                content();
            } else if (document.querySelector('.content').id == 'notFound') {
                notFound();
            } else if (document.querySelector('.content').id == 'contacts') {
                contacts();
            } else if (document.querySelector('.content').id == 'questions') {
                vacancies();
            } else if (document.querySelector('.content').id == 'services') {
                services();
            }

            svgReplace();

        });

        // app.window.on('load', () => {
        // });

        this.document.on(app.resizeEventName, () => {

            // if (document.querySelector('.content').id == 'main') {
            //     sliders();
            //     hovers();
            //     expand();

            // } else if (document.querySelector('.content').id == 'catalog') {
            //     catalog();
            //     expand();
            // }
            location.reload();
        });

    },


    initScrollTo: function () {
        app.document.on('click', '.js-scrollto', function () {
            let target = $(this).data('href');
            if (target) {
                let $target = $(target);
                if ($target.length) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top - app.scrollToOffset
                    }, app.scrollToSpeed);
                }
            }
        });
    },

    formatPrice: function (price) {
        return this.formatNumber(price, 0, ',', ' ');
    },

    formatNumber: function (number, decimals, dec_point, thousands_sep) {
        // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // bugfix by: Michael White (http://crestidg.com)
        let i, j, kw, kd, km;

        // input sanitation & defaults
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ',';
        }
        if (thousands_sep == undefined) {
            thousands_sep = '.';
        }

        i = parseInt(number = (+number || 0).toFixed(decimals)) + '';

        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }

        km = j ?
            i.substr(0, j) + thousands_sep :
            '';
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands_sep);
        kd = (decimals ?
            dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, '0').slice(2) :
            '');

        return km + kw + kd;
    },

    /**
     * Проверяет размер окна и пишет его в app.media
     * @returns void
     */
    checkMedia: function () {
        let current = app.media;
        for (let key in app.breakpoints) {
            if (app.window.outerWidth() >= app.breakpoints[key]) {
                app.media = app.breakpoints[key];
            }
        }
        if (app.media != current) {
            app.document.trigger(app.resizeEventName, {
                media: app.media
            });
        }
    },

    uniqID: function () {
        return `app_id_${app.currentID++}`;
    },

    /**
     * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний
     * param  iNumber Integer Число на основе которого нужно сформировать окончание
     * param  aEndings Array Массив слов или окончаний для чисел (1, 4, 5),
     *         например ['яблоко', 'яблока', 'яблок']
     * return String
     * 
     * https://habrahabr.ru/post/105428/
     */
    getNumEnding: function (iNumber, aEndings) {
        let sEnding, i;
        iNumber = iNumber % 100;
        if (iNumber >= 11 && iNumber <= 19) {
            sEnding = aEndings[2];
        } else {
            i = iNumber % 10;
            switch (i) {
                case (1):
                    sEnding = aEndings[0];
                    break;
                case (2):
                case (3):
                case (4):
                    sEnding = aEndings[1];
                    break;
                default:
                    sEnding = aEndings[2];
            }
        }
        return sEnding;
    },

    getKeyByValue: function (object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

};
app.init();

// import $ from 'jquery';

// window.jQuery = $;
