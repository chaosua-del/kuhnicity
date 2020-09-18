import $ from 'jquery';

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
}
