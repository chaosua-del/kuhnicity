import $ from 'jquery';

export default function notFound() {
    const block = $('.customcursor');

    $.each(block, (i, elem) => {
        const innerCursor = elem.querySelector('.hover-cursor');
        $(elem).on('mousemove', event => {
            // console.log(innerCursor);
            let parentOffset = $(elem).offset();
            let clientX = (event.pageX - parentOffset.left);
            let clientY = (event.pageY - parentOffset.top);
            // console.log(clientX - parentOffset.left, clientY - parentOffset.top);
            innerCursor.style.transform = `translate(${clientX - 100}px, ${clientY - 100}px)`;
            // innerCursor.style.opacity = '1'; 
            // innerCursor.style.opacity = '1';
            innerCursor.style.display = 'block';


            if (clientX > block.width() || clientX < 100 || clientY > block.innerHeight() || clientY < 0) {
                innerCursor.style.display = 'none';
            }

            // console.log(clientX, block.width(), clientY, block.innerHeight());
        });

        $(elem).on('mouseleave', event => {
            innerCursor.style.display = 'none';
        });
    });
}
