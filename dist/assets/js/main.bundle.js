!function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={0:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/js/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([6,1]),n()}({11:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(0);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n\n// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js\nvar lazysizes = __webpack_require__(7);\n\n// EXTERNAL MODULE: ./node_modules/swiper/js/swiper.js\nvar swiper = __webpack_require__(1);\nvar swiper_default = /*#__PURE__*/__webpack_require__.n(swiper);\n\n// EXTERNAL MODULE: ./node_modules/ion-rangeSlider/js/ion.rangeSlider.min.js\nvar ion_rangeSlider_min = __webpack_require__(2);\n\n// EXTERNAL MODULE: ./node_modules/svg4everybody/dist/svg4everybody.js\nvar svg4everybody = __webpack_require__(3);\nvar svg4everybody_default = /*#__PURE__*/__webpack_require__.n(svg4everybody);\n\n// EXTERNAL MODULE: ./node_modules/browser-detect/dist/browser-detect.es5.js\nvar browser_detect_es5 = __webpack_require__(4);\n\n// CONCATENATED MODULE: ./src/js/page.js\n//import FastClick from 'fastclick'; // incopatibility with select2\nvar page={init:function init(){var app=this;// Base components\napp.window=jquery_default()(window);app.document=jquery_default()(document);app.html=jquery_default()('html');app.body=jquery_default()('body');// App params\napp.browser=Object(browser_detect_es5[\"a\" /* default */])();app.mobile=app.browser.mobile;app.html.removeClass('no-js').addClass(app.mobile?'mobile':'desktop').addClass(app.browser.name);if(app.browser.os.indexOf('OS')===0||app.browser.os.indexOf('iOS')===0){app.html.addClass('huapple');}// svg4everybody | Init\nif(!app.mobile){svg4everybody_default()();}// FastClick | Init\n//        if (app.mobile) {\n//            FastClick.attach(document.body);\n//        }\n}};/* harmony default export */ var js_page = (page);\n// EXTERNAL MODULE: ./node_modules/inputmask/index.js\nvar inputmask = __webpack_require__(5);\nvar inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);\n\n// CONCATENATED MODULE: ./src/js/forms.js\nvar forms_forms={init:function init(){forms_forms.app=this;this.document.ready(function(){forms_forms.initMask();});},initMask:function initMask(){var selector=document.querySelectorAll('.js-mask__tel');inputmask_default()({mask:'+7 (999) 999 99 99',showMaskOnHover:false}).mask(selector);}};/* harmony default export */ var js_forms = (forms_forms);\n// CONCATENATED MODULE: ./src/js/sliders.js\nfunction sliders(){if(window.innerWidth<768){var benefits=new swiper_default.a('.benefits__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:0});var discounts=new swiper_default.a('.discounts__swiper-container',{slidesPerView:'auto',// spaceBetween: 10,\nupdateOnWindowResize:false,// freeMode: true,\n// loop: false,\nslidesOffsetAfter:0});discounts.translateTo(269);var social=new swiper_default.a('.social__swiper-container',{slidesPerView:'auto',// spaceBetween: 10,\nupdateOnWindowResize:false,// freeMode: true,\n// loop: false,\nslidesOffsetAfter:0});social.translateTo(270);var stages=new swiper_default.a('.stages__swiper-container',{slidesPerView:'auto',spaceBetween:0,slidesOffsetAfter:100,updateOnWindowResize:false,loop:false,navigation:{nextEl:'.stages__swiper-button-next',prevEl:'.stages__swiper-button-prev'}});stages.translateTo(270);var banner=new swiper_default.a('.banner__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:2});}else{var discounts2=new swiper_default.a('.discounts__swiper-container2',{slidesPerView:'auto',spaceBetween:0,slidesOffsetAfter:200,updateOnWindowResize:false,freeMode:true});}if(window.innerWidth>=768&&window.innerWidth<1280){var _stages=new swiper_default.a('.stages__swiper-container',{slidesPerView:'auto',spaceBetween:0,slidesOffsetAfter:450,updateOnWindowResize:false,loop:false,navigation:{nextEl:'.stages__swiper-button-next',prevEl:'.stages__swiper-button-prev'}});_stages.translateTo(318);var _banner=new swiper_default.a('.banner__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:2});}var models=new swiper_default.a('.models__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:0});var feedback=new swiper_default.a('.feedback__swiper-container',{slidesPerView:'auto',spaceBetween:0,slidesOffsetAfter:20,updateOnWindowResize:false,loop:false,parallax:true,navigation:{nextEl:'.feedback__swiper-button-next',prevEl:'.feedback__swiper-button-prev'}});feedback.translateTo(270);var articles=new swiper_default.a('.articles__swiper-container',{slidesPerView:'auto',// spaceBetween: 10,\nupdateOnWindowResize:false,// freeMode: true,\n// loop: false,\nslidesOffsetAfter:0,navigation:{nextEl:'.articles__swiper-button-next',prevEl:'.articles__swiper-button-prev'}});articles.translateTo(270);var bonuses=new swiper_default.a('.bonuses__swiper-container',{slidesPerView:'auto',// spaceBetween: 10,\nupdateOnWindowResize:false,// freeMode: true,\n// loop: false,\nslidesOffsetAfter:20,navigation:{nextEl:'.bonuses__swiper-button-next',prevEl:'.bonuses__swiper-button-prev'}});bonuses.translateTo(270);}\n// CONCATENATED MODULE: ./src/js/filters.js\nfunction filters(){var filter=document.querySelectorAll('.models__filter');filter.forEach(function(element){element.addEventListener('click',function(event){filter.forEach(function(el){el.classList.remove('models__filter--active');});event.target.classList.add('models__filter--active');});});}\n// CONCATENATED MODULE: ./src/js/svgReplace.js\nfunction svgReplace(){jquery_default()('img.stages__card-number').each(function(){// console.log('hello');\nvar $img=jquery_default()(this);var imgClass=$img.attr('class');var imgURL=$img.attr('src');jquery_default.a.get(imgURL,function(data){var $svg=jquery_default()(data).find('svg');if(typeof imgClass!=='undefined'){$svg=$svg.attr('class',imgClass+' replaced-svg');}$svg=$svg.removeAttr('xmlns:a');if(!$svg.attr('viewBox')&&$svg.attr('height')&&$svg.attr('width')){$svg.attr('viewBox','0 0 '+$svg.attr('height')+' '+$svg.attr('width'));}$img.replaceWith($svg);},'xml');});jquery_default()('img.feedback__card-arrow').each(function(){// console.log('hello');\nvar $img=jquery_default()(this);var imgClass=$img.attr('class');var imgURL=$img.attr('src');jquery_default.a.get(imgURL,function(data){var $svg=jquery_default()(data).find('svg');if(typeof imgClass!=='undefined'){$svg=$svg.attr('class',imgClass+' replaced-svg');}$svg=$svg.removeAttr('xmlns:a');if(!$svg.attr('viewBox')&&$svg.attr('height')&&$svg.attr('width')){$svg.attr('viewBox','0 0 '+$svg.attr('height')+' '+$svg.attr('width'));}$img.replaceWith($svg);},'xml');});jquery_default()('.social__block-img').each(function(){// console.log('hello');\nvar $img=jquery_default()(this);var imgClass=$img.attr('class');var imgURL=$img.attr('src');jquery_default.a.get(imgURL,function(data){var $svg=jquery_default()(data).find('svg');if(typeof imgClass!=='undefined'){$svg=$svg.attr('class',imgClass+' replaced-svg');}$svg=$svg.removeAttr('xmlns:a');if(!$svg.attr('viewBox')&&$svg.attr('height')&&$svg.attr('width')){$svg.attr('viewBox','0 0 '+$svg.attr('height')+' '+$svg.attr('width'));}$img.replaceWith($svg);},'xml');});}\n// CONCATENATED MODULE: ./src/js/expand.js\nfunction expand(){// making collapsible text in section leader\nvar coll=document.querySelector('.leader__button');coll.addEventListener('click',function(event){var content=event.target.previousElementSibling;coll.classList.toggle('leader__button--active');if(content.style.maxHeight){content.style.maxHeight=null;}else{content.style.maxHeight=content.scrollHeight+'px';}});var headerButton=document.querySelector('.header__about');headerButton.addEventListener('click',function(event){headerButton.classList.toggle('header__about--active');var content=document.querySelector('.header__about-menu');if(content.style.maxHeight){content.style.maxHeight=null;}else{content.style.maxHeight=content.scrollHeight+'px';}});var headerLocation=document.querySelector('.header__location');console.dir(headerLocation);headerLocation.style.width=\"\".concat(headerLocation.offsetWidth,\"px\");headerLocation.addEventListener('click',function(event){headerLocation.classList.toggle('header__location--active');var content=document.querySelector('.header__location-block');if(content.style.maxHeight){content.style.maxHeight=null;}else{content.style.maxHeight=content.scrollHeight+'px';}});var locationSelected=document.querySelector('.header__location-selected');var locationOption=document.querySelectorAll('.header__location-option');locationOption.forEach(function(elem){elem.addEventListener('click',function(event){var temp=event.target.textContent;event.target.textContent=locationSelected.textContent;locationSelected.textContent=temp;});});var headerMenu=document.querySelector('.header__block-open');var headerExpand=document.querySelector('.header__expand');headerMenu.addEventListener('click',function(event){// headerExpand.style.height = headerExpand.scrollHeight;\njquery_default()('.header__expand').fadeToggle();var content=document.querySelector('.header__about-menu');if(content.style.maxHeight){content.style.maxHeight=null;headerButton.classList.remove('header__about--active');}// if (headerExpand.dataset.isopen == 'false') {\n//     headerExpand.dataset.isopen = 'true';\n//     $('.header__expand').fadeIn();\n// } else {\n//     $('.header__expand').fadeOut();\n// }\n});// const headerSwiper = $('.expand__swiper-container');\njquery_default()('.expand__collapsible').on('click',function(event){var content=event.target.nextElementSibling;// coll.classList.toggle('leader__button--active')\nif(content.style.maxHeight){headerExpand.classList.remove('header__expand--active');content.style.maxHeight=null;// event.target.style.backgroundImage = 'url(\"../img/header/white.svg\")';\nevent.target.style.backgroundPosition=\"72% -200px\";event.target.style.color='#272727';}else{headerExpand.classList.add('header__expand--active');document.querySelectorAll('.expand__swiper-container').forEach(function(elem){elem.style.maxHeight=null;});document.querySelectorAll('.expand__collapsible').forEach(function(elem){elem.style.backgroundPosition=\"72% -200px\";elem.style.color='#272727';});// content.style.opacity = '1';\ncontent.style.maxHeight=content.scrollHeight+'px';event.target.style.backgroundImage=\"url(\\\"\".concat(event.target.dataset.bg,\"\\\")\");event.target.style.backgroundPosition=\"72% 92%\";event.target.style.color='#ffffff';// event.target.style.backgroundColor = 'rgba(#ffffff, 0)';\n// console.log(event.target.dataset.bg);\nvar expandSwiper=new swiper_default.a('.expand__swiper-container',{slidesPerView:'auto',slidesOffsetAfter:window.innerWidth/2,updateOnWindowResize:false,scrollbar:{el:'.expand__swiper-scrollbar'}// freeMode: true,\n// loop: true,\n});if(window.innerWidth>=1280){jquery_default()('.expand__swiper-wrapper').addClass('swiper-disabled');// $('.expand__swiper-scrollbar').addClass(\"disabled\");\ndocument.querySelectorAll('.expand__swiper-container').forEach(function(elem){elem.style.opacity='0';});content.style.opacity='1';}else{jquery_default()('.expand__swiper-wrapper').removeClass('swiper-disabled');}}});}\n// CONCATENATED MODULE: ./src/js/hovers.js\nfunction hovers(){if(window.innerWidth>=1280){var card=document.querySelectorAll('.stages__swiper-slide');card.forEach(function(elem){elem.addEventListener('mouseenter',function(event){if(window.innerWidth>=1280){event.target.classList.add('swiper-slide-active');}});elem.addEventListener('mouseleave',function(event){if(window.innerWidth>=1280){event.target.classList.remove('swiper-slide-active');}});});}}\n// CONCATENATED MODULE: ./src/js/modals.js\nfunction modals(){jquery_default()('.header__contacts-button').on('click',function(){jquery_default()('.modal').fadeIn('slow');});jquery_default()('.designers__button').on('click',function(){jquery_default()('.modal').fadeIn('slow');});jquery_default()('.navigation__button').on('click',function(){jquery_default()('.modal').fadeIn('slow');});jquery_default()('.header__block-button').on('click',function(){jquery_default()('.modal').fadeIn('slow');});jquery_default()('.modal').on('click',function(event){if(event.target.classList.contains('modal')||event.target.classList.contains('modal__close')){jquery_default()('.modal').fadeOut('slow');}});}\n// CONCATENATED MODULE: ./src/js/customCursor.js\nfunction customCursor(){if(window.innerWidth>=1280){var card=jquery_default()('.discounts__hover-wrap');var block=jquery_default()('.customcursor');jquery_default.a.each(block,function(i,elem){var innerCursor=elem.querySelector('.discounts__hover-cursor');jquery_default()(elem).on('mousemove',function(event){console.log('hello');var parentOffset=jquery_default()(elem).parent().offset();var clientX=event.pageX-parentOffset.left;var clientY=event.pageY-parentOffset.top;// console.log(clientX - parentOffset.left, clientY - parentOffset.top);\ninnerCursor.style.transform=\"translate(\".concat(clientX-100,\"px, \").concat(clientY-100,\"px)\");// innerCursor.style.opacity = '1'; \n// innerCursor.style.opacity = '1';\ninnerCursor.style.display='block';if(clientX>block.width()||clientX<0||clientY>block.innerHeight()||clientY<0){innerCursor.style.display='none';}// console.log(clientX, block.width(), clientY, block.innerHeight());\n});// $(elem).on('mouseleave', event => {\n//     innerCursor.style.display = 'none';\n// });\n});}}\n// CONCATENATED MODULE: ./src/js/catalog.js\nfunction catalog(){var feedback=new swiper_default.a('.feedback__swiper-container',{slidesPerView:'auto',spaceBetween:0,slidesOffsetAfter:20,updateOnWindowResize:false,loop:false,parallax:true,navigation:{nextEl:'.feedback__swiper-button-next',prevEl:'.feedback__swiper-button-prev'}});feedback.translateTo(270);if(window.innerWidth<768){var benefits=new swiper_default.a('.benefits__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:0});var stages=new swiper_default.a('.stages__swiper-container',{slidesPerView:'auto',spaceBetween:0,slidesOffsetAfter:100,updateOnWindowResize:false,loop:false,navigation:{nextEl:'.stages__swiper-button-next',prevEl:'.stages__swiper-button-prev'}});stages.translateTo(270);}if(window.innerWidth>=768&&window.innerWidth<1280){var _stages=new swiper_default.a('.stages__swiper-container',{slidesPerView:'auto',spaceBetween:0,slidesOffsetAfter:450,updateOnWindowResize:false,loop:false,navigation:{nextEl:'.stages__swiper-button-next',prevEl:'.stages__swiper-button-prev'}});_stages.translateTo(318);}// stages-hover \nif(window.innerWidth>=1280){var card=document.querySelectorAll('.stages__swiper-slide');card.forEach(function(elem){elem.addEventListener('mouseenter',function(event){if(window.innerWidth>=1280){event.target.classList.add('swiper-slide-active');}});elem.addEventListener('mouseleave',function(event){if(window.innerWidth>=1280){event.target.classList.remove('swiper-slide-active');}});});}// leader-expand\n// // making collapsible text in section leader\n// const coll = document.querySelector('.leader__button')\n// coll.addEventListener('click', event => {\n//     const content = event.target.previousElementSibling;\n//     coll.classList.toggle('leader__button--active')\n//     if (content.style.maxHeight) {\n//         content.style.maxHeight = null;\n//     } else {\n//         content.style.maxHeight = content.scrollHeight + 'px';\n//     }\n// });\n// filter expand\njquery_default()('.filter__button').on('click',function(){jquery_default()('.filter__menu').fadeToggle('fast');});jquery_default()('.filter__expand-confirm').on('click',function(){jquery_default()('.filter__menu').fadeOut('slow');});var filterButton=document.querySelectorAll('.filter__expand-button');var filterItem=document.querySelectorAll('.filter__expand-item');var filterType=document.querySelectorAll('.type__item');var filterActive=document.querySelector('.type__item--active');var tabsButton=document.querySelectorAll('.tabs__button');var tabs=document.querySelector('.filter__tabs');var tabsCancel=document.querySelector('.tabs__cancel');filterButton.forEach(function(elem){elem.addEventListener('click',function(event){if(event.target.classList.contains('filter__expand-button')){var content=event.target.children[0];if(content.style.maxHeight){content.style.maxHeight=null;}else{document.querySelectorAll('.filter__expand-list').forEach(function(elem){elem.style.maxHeight=null;});filterButton.forEach(function(elem){elem.classList.remove('filter__expand-button--active');});content.style.maxHeight=content.scrollHeight+'px';event.target.classList.toggle('filter__expand-button--active');}}});});document.querySelectorAll('.filter__expand-item').forEach(function(elem){elem.addEventListener('click',function(event){event.target.classList.toggle('filter__expand-item--active');});});// filterItem.\ntabsButton.forEach(function(elem){elem.addEventListener('click',function(event){// tabsButton.forEach(elem => {\n//     elem.classList.remove('tabs__button--active');\n// });\nevent.target.classList.toggle('tabs__button--active');});});filterActive.addEventListener('click',function(event){if(event.target.classList.contains('active-text')){document.querySelector('.type-list').classList.toggle('type-list--active');}});jquery_default()('.filter__expand-price').on('click',function(event){// range slider\njquery_default()('.filter__expand-range').fadeToggle('fast');var range=jquery_default()(\".js-range-slider\").ionRangeSlider({type:\"double\",min:0,max:150000,from:20000,to:150000,grid:true,skin:'round'});});document.querySelector('.tabs__more.hidden-768').addEventListener('click',function(event){var content=event.target.previousElementSibling;if(content.style.maxHeight){content.style.maxHeight=null;}else{content.style.maxHeight=content.scrollHeight+'px';}});document.querySelector('.tabs__more.visible-768').addEventListener('click',function(event){// console.log('he');\nvar content=document.querySelector('.tabs__expand');if(content.style.maxHeight){content.style.maxHeight=null;}else{content.style.maxHeight=content.scrollHeight+'px';}event.target.style.display='none';tabs.style.maxHeight=tabs.scrollHeight+'px';tabsCancel.style.order='2';tabsCancel.style.marginLeft='auto';});document.querySelector('.tabs__cancel').addEventListener('click',function(event){tabsButton.forEach(function(elem){elem.classList.remove('tabs__button--active');});filterItem.forEach(function(elem){elem.classList.remove('filter__expand-item--active');});document.querySelectorAll('.filter__expand-list').forEach(function(elem){elem.style.maxHeight=null;});document.querySelectorAll('.tabs__expand').forEach(function(elem){elem.style.maxHeight=null;});document.querySelectorAll('.tabs__more').forEach(function(elem){elem.style.display='block';});filterButton.forEach(function(elem){elem.classList.remove('filter__expand-button--active');});tabs.style.maxHeight=72+'px';tabsCancel.style.order='0';tabsCancel.style.marginLeft='0';});document.querySelector('.tabs__cancel2').addEventListener('click',function(event){tabsButton.forEach(function(elem){elem.classList.remove('tabs__button--active');});filterItem.forEach(function(elem){elem.classList.remove('filter__expand-item--active');});document.querySelectorAll('.filter__expand-list').forEach(function(elem){elem.style.maxHeight=null;});filterButton.forEach(function(elem){elem.classList.remove('filter__expand-button--active');});});var range=jquery_default()(\".js-range-slider\").ionRangeSlider({type:\"double\",min:0,max:150000,from:20000,to:150000,grid:true,skin:'round'});}\n// CONCATENATED MODULE: ./src/js/app.js\nfunction _typeof(obj){\"@babel/helpers - typeof\";if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}// import marquee from 'libs/jquery.marquee.min.js';\n// import fancybox from '@fancyapps/fancybox';\nvar app_app={// параметры, изменяемые в appConfig\nbreakpoints:{sm:320,md:768,lg:1280},media:320,resizeEventName:'app_resize',submitEventName:'app_submit',popupLoadedEventName:'app_popup_loaded',popupClosedEventName:'app_popup_closed',tabChangedEventName:'app_tab_changed',scrollToOffset:200,// оффсет при скролле до элемента\nscrollToSpeed:500,// скорость скролла \ninit:function init(){// read config\nif((typeof appConfig===\"undefined\"?\"undefined\":_typeof(appConfig))==='object'){Object.keys(appConfig).forEach(function(key){if(Object.prototype.hasOwnProperty.call(app_app,key)){app_app[key]=appConfig[key];}});}app_app.currentID=0;// Init page\nthis.page=js_page;this.page.init.call(this);// Init page\nthis.forms=js_forms;this.forms.init.call(this);app_app.checkMedia();app_app.window.on('resize',app_app.checkMedia);window.jQuery=jquery[\"$\"];window.app=app_app;app_app.document.ready(function(){document.querySelector('.content').style.marginTop=\"\".concat(document.querySelector('.header').offsetHeight,\"px\");if(document.querySelector('.content').id=='main'){// console.log('main');\nexpand();sliders();filters();customCursor();hovers();modals();window.$mq=window.$('.discounts__marquee').marquee({startVisible:true,speed:100});}else if(document.querySelector('.content').id=='catalog'){expand();catalog();modals();}svgReplace();});// app.window.on('load', () => {\n// });\nthis.document.on(app_app.resizeEventName,function(){expand();if(document.querySelector('.content').id=='main'){sliders();hovers();}else if(document.querySelector('.content').id=='catalog'){catalog();}location.reload();// console.log('rezising');\n});},initScrollTo:function initScrollTo(){app_app.document.on('click','.js-scrollto',function(){var target=Object(jquery[\"$\"])(this).data('href');if(target){var $target=Object(jquery[\"$\"])(target);if($target.length){Object(jquery[\"$\"])('html, body').animate({scrollTop:$target.offset().top-app_app.scrollToOffset},app_app.scrollToSpeed);}}});},formatPrice:function formatPrice(price){return this.formatNumber(price,0,',',' ');},formatNumber:function formatNumber(number,decimals,dec_point,thousands_sep){// original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)\n// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)\n// bugfix by: Michael White (http://crestidg.com)\nvar i,j,kw,kd,km;// input sanitation & defaults\nif(isNaN(decimals=Math.abs(decimals))){decimals=2;}if(dec_point==undefined){dec_point=',';}if(thousands_sep==undefined){thousands_sep='.';}i=parseInt(number=(+number||0).toFixed(decimals))+'';if((j=i.length)>3){j=j%3;}else{j=0;}km=j?i.substr(0,j)+thousands_sep:'';kw=i.substr(j).replace(/(\\d{3})(?=\\d)/g,'$1'+thousands_sep);kd=decimals?dec_point+Math.abs(number-i).toFixed(decimals).replace(/-/,'0').slice(2):'';return km+kw+kd;},/**\r\n     * Проверяет размер окна и пишет его в app.media\r\n     * @returns void\r\n     */checkMedia:function checkMedia(){var current=app_app.media;for(var key in app_app.breakpoints){if(app_app.window.outerWidth()>=app_app.breakpoints[key]){app_app.media=app_app.breakpoints[key];}//            console.log(app.media);\n}if(app_app.media!=current){app_app.document.trigger(app_app.resizeEventName,{media:app_app.media});}},uniqID:function uniqID(){return\"app_id_\".concat(app_app.currentID++);},/**\r\n     * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний\r\n     * param  iNumber Integer Число на основе которого нужно сформировать окончание\r\n     * param  aEndings Array Массив слов или окончаний для чисел (1, 4, 5),\r\n     *         например ['яблоко', 'яблока', 'яблок']\r\n     * return String\r\n     * \r\n     * https://habrahabr.ru/post/105428/\r\n     */getNumEnding:function getNumEnding(iNumber,aEndings){var sEnding,i;iNumber=iNumber%100;if(iNumber>=11&&iNumber<=19){sEnding=aEndings[2];}else{i=iNumber%10;switch(i){case 1:sEnding=aEndings[0];break;case 2:case 3:case 4:sEnding=aEndings[1];break;default:sEnding=aEndings[2];}}return sEnding;},getKeyByValue:function getKeyByValue(object,value){return Object.keys(object).find(function(key){return object[key]===value;});}};app_app.init();// import $ from 'jquery';\n// window.jQuery = $;\n\n//# sourceURL=webpack:///./src/js/app.js_+_10_modules?")},6:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(11);\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?")}});