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

}
