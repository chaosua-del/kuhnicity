import $ from 'jquery';
import Swiper from 'swiper/js/swiper.js';
import leaflet from 'leaflet/dist/leaflet.js';

export default function contacts() {

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

    const mymap = L.map('centralMap', {
        zoom: 15,
        scrollWheelZoom: false,
        center: [55.729636, 37.587501]
    });
    // setView([51.505, -0.09], 13);



    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        scrollWheelZoom: false,
        accessToken: 'pk.eyJ1IjoiY2hhb3N1YS1kZWwiLCJhIjoiY2tkbjBqY3dqMGlmaDJxcW4xbnljb2V1aiJ9.lKJeJfZMCU8J2h9G8aMbVg'
    }).addTo(mymap);
}


// 
