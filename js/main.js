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
  
}
