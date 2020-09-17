export default function vacancies() {
    const coll = document.querySelectorAll('.chars__expand-button')

    coll.forEach(elem => {
        elem.addEventListener('click', event => {
            const content = event.target.nextElementSibling;
            elem.classList.toggle('chars__expand-button--active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}
