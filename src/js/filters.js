export default function filters() {
    const filter = document.querySelectorAll('.models__filter');

    filter.forEach(element => {
        element.addEventListener('click', event => {
            filter.forEach(el => {
                el.classList.remove('models__filter--active');
            });
            event.target.classList.add('models__filter--active');
        });
    });

}
