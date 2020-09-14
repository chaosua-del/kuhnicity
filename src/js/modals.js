import $ from 'jquery';

export default function modals() {
    $('.header__contacts-button').on('click', () => {
        $('.modal').fadeIn('slow');
    });

    $('.designers__button').on('click', () => {
        $('.modal').fadeIn('slow');
    });

    $('.navigation__button').on('click', () => {
        $('.modal').fadeIn('slow');
    });

    $('.header__block-button').on('click', () => {
        $('.modal').fadeIn('slow');
    });

    $('.modal').on('click', event => {

        if (event.target.classList.contains('modal') || event.target.classList.contains('modal__close')) {
            $('.modal').fadeOut('slow');
        }

    });
}
