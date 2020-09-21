import $ from 'jquery';
import Swiper from 'swiper/js/swiper.js';
import leaflet from 'leaflet/dist/leaflet.js';


export default function contacts() {
    // window.jQuery = $;
    const benefits = new Swiper('.benefits__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: false,
        slidesOffsetAfter: 100,
    });

    const regionSelected = document.querySelector('.region__select-selected');
    const regionOption = document.querySelectorAll('.region__select-option');
    const regionSelect = document.querySelector('.region__select');
    const regionSelect2 = document.querySelector('.region__select2');
    // console.dir(headerLocation);

    if (window.innerWidth > 768) {

        regionSelect.style.width = `${regionSelect.offsetWidth}px`;
        regionSelect2.style.width = `${regionSelect.offsetWidth}px`;
    }

    regionSelect.addEventListener('click', event => {
        regionSelect.classList.toggle('region__select--active');
        const content = document.querySelector('.region__select-block');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = 100 + 'px';
        }
    });


    regionOption.forEach(elem => {
        elem.addEventListener('click', event => {
            let temp = event.target.textContent;
            event.target.textContent = regionSelected.textContent;
            regionSelected.textContent = temp;
        });
    });

    const regionSelected2 = document.querySelector('.region__select2-selected');
    const regionOption2 = document.querySelectorAll('.region__select2-option');

    // console.dir(headerLocation);


    regionSelect2.addEventListener('click', event => {
        regionSelect2.classList.toggle('region__select2--active');
        const content = document.querySelector('.region__select2-block');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = 100 + 'px';
        }
    });


    regionOption2.forEach(elem => {
        elem.addEventListener('click', event => {
            let temp2 = event.target.textContent;
            event.target.textContent = regionSelected2.textContent;
            regionSelected2.textContent = temp2;
        });
    });

    const salon = new Swiper('.salon__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 4,
        updateOnWindowResize: false,
        loop: true,
        navigation: {
            nextEl: '.salon__swiper-button-next',
            prevEl: '.salon__swiper-button-prev',
        },
    });

    function mapInit(mapId, centerX, centerY, zoom, markerX, markerY, adress, phoneLink, phone, email, label) {
        const mymap = L.map(`${mapId}`, {
            zoom: 15,
            scrollWheelZoom: false,
            center: [centerX, centerY]
        });
        // setView([51.505, -0.09], 13);


        var customIcon = L.icon({
            iconUrl: 'assets/img/contacts/marker.svg',

            iconSize: [41, 56], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        var marker = L.marker([55.729645, 37.587495], {
            icon: customIcon
        }).addTo(mymap);

        // var marker = L.marker([55.729636, 37.587501]).addTo(mymap);

        marker.bindPopup(`<div class="location__info">
        <div class="location__info-logo"></div>
        <div class="location__info-title">${adress}</div>
        <div class="location__info-block"><a class="location__info-title" href="tel:${phoneLink}">${phone}</a>
            <p class="location__info-subtitle">Ежедневно с 10.00 до 21.00</p>
        </div><a class="location__info-title" href="mailto:${email}">${email}</a>
        <div class="location__info-label location__info-title">${label}</div>
        <div class="social__block location__social"><a class="social__block-link" href="#"><img class="social__block-img" src="assets/img/contacts/wa.svg" alt="whatsApp"/></a><a class="social__block-link" href="#"><img class="social__block-img" src="assets/img/contacts/viber.svg" alt="viber"/></a>
            <a
                class="social__block-link" href="#"><img class="social__block-img" src="assets/img/contacts/telegram.svg" alt="telegram" /></a>
        </div>
    </div>`).openPopup();


        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            zoomControl: false,
            scrollWheelZoom: false,
            accessToken: 'pk.eyJ1IjoiY2hhb3N1YS1kZWwiLCJhIjoiY2tkbjBqY3dqMGlmaDJxcW4xbnljb2V1aiJ9.lKJeJfZMCU8J2h9G8aMbVg'
        }).addTo(mymap);
    }

    mapInit(map.central.id, map.central.centerX, map.central.centerY, map.central.zoom, map.central.markerX, map.central.markerY, map.central.adress, map.central.phoneLink, map.central.phone, map.central.email, map.central.label);
    mapInit(map.krasnodar.id, map.krasnodar.centerX, map.krasnodar.centerY, map.krasnodar.zoom, map.krasnodar.markerX, map.krasnodar.markerY, map.krasnodar.adress, map.krasnodar.phoneLink, map.krasnodar.phone, map.krasnodar.email, map.krasnodar.label);
    mapInit(map.kazan.id, map.kazan.centerX, map.kazan.centerY, map.kazan.zoom, map.kazan.markerX, map.kazan.markerY, map.kazan.adress, map.kazan.phoneLink, map.kazan.phone, map.kazan.email, map.kazan.label);

    const mymap = L.map('mainMap', {
        zoom: 15,
        scrollWheelZoom: false,
        center: [55.729645, 37.587495]
    });
    // setView([51.505, -0.09], 13);


    var customIcon = L.icon({
        iconUrl: 'assets/img/contacts/marker2.svg',

        iconSize: [172, 74], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker([55.729645, 37.587495], {
        icon: customIcon
    }).addTo(mymap);

    // var marker = L.marker([55.729636, 37.587501]).addTo(mymap);




    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        zoomControl: false,
        scrollWheelZoom: false,
        accessToken: 'pk.eyJ1IjoiY2hhb3N1YS1kZWwiLCJhIjoiY2tkbjBqY3dqMGlmaDJxcW4xbnljb2V1aiJ9.lKJeJfZMCU8J2h9G8aMbVg'
    }).addTo(mymap);

}



// 
