import $ from 'jquery';

export default function customCursor() {
const innerCursor = document.querySelector('.discounts__hover-cursor');
const card = $('.discounts__hover-wrap');
const block = $('#customcursor');

block.on('mousemove', event => {
  let parentOffset = block.parent().offset();
  let clientX = (event.pageX - parentOffset.left);
  let clientY = (event.pageY - parentOffset.top);
  // console.log(clientX - parentOffset.left, clientY - parentOffset.top);
  innerCursor.style.transform = `translate(${clientX - 100}px, ${clientY - 100}px)`;
  // innerCursor.style.opacity = '1'; 
  // innerCursor.style.opacity = '1';
  innerCursor.style.display = 'block';


  if(clientX > block.width() || clientX < 0 || clientY > block.innerHeight() || clientY < 0) {
    innerCursor.style.display = 'none';
  }

  // console.log(clientX, block.width(), clientY, block.innerHeight());
});

block.on('mouseleave', event => {
  innerCursor.style.display = 'none';
});

}
  
  

 