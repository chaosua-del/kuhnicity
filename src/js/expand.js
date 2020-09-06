// import $ from 'jquery';

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
}
