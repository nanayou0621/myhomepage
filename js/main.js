'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  
  open.addEventListener('click',()=> {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click',() =>{
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

const pagetop = document.getElementById("pagetop");

// .pagetopをクリックしたら
pagetop.addEventListener("click",()=>{
// ページ上部へスムーズに移動
    window.scroll({
      top:0,
      behavior:"smooth"
  });
});

const sub = document.querySelector('.sub-title');

const keyframes = {
  opacity:[0,1],
  translate:['0 50px',0],
};
const options = {
  duration:2000,
  easing:'ease',
};
sub.animate(keyframes,options);


// ギャラリー カルーセル

const ul = document.querySelector('.gallery-ul');
const slides = ul.children;
const dots =[];
let currentIndex = 0;

function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
}
function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click' ,() =>{
        currentIndex = i;
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.nav-button').appendChild(button);
    }
    dots[0].classList.add('current');
  }
  setupDots();
}