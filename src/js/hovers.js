export default function hovers() {
    if (window.innerWidth >= 1280) {
        const card = document.querySelectorAll('.stages__swiper-slide');
        card.forEach(function (elem) {
            elem.addEventListener('mouseenter', function (event) {
                if (window.innerWidth >= 1280) {
                    event.target.classList.add('swiper-slide-active');
                }
            });

            elem.addEventListener('mouseleave', function (event) {
                if (window.innerWidth >= 1280) {
                    event.target.classList.remove('swiper-slide-active');
                }
            });
        });
    }
}
