import $ from 'jquery';

export default function modals() {

    $('.modal').on('click', event => {

        if (event.target.classList.contains('modal') || event.target.classList.contains('modal__close')) {
            $('.modal').fadeOut('slow');
        }

    });
}
