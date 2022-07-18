let button = document.querySelector('.content__show-more');
let list = document.querySelector('.content__list');
let slider = document.querySelector('.image-slider');

function showFullText(ev) {
    var transform;
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "Скрыть";
        ev.setAttribute('data-show', "false"); 
        list.style.height = list.scrollHeight + "px";
        transform = 'rotate(225deg)';
        button.style.setProperty('--sq-transform', transform);
    }
    else {
        ev.innerText = "Показать все";
        ev.setAttribute('data-show', "true"); 
        list.style.height = '160px';
        transform = 'rotate(45deg)';
        button.style.setProperty('--sq-transform', transform);
    } 
}

new Swiper('.image-slider', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',

});

let mql = window.matchMedia('(max-width: 768px)');
 
window.addEventListener('resize', () => {
  if (mql.matches) {
   list.classList.add('hidden');
   slider.classList.remove('hidden');
    
  } else {
    list.classList.remove('hidden');
   slider.classList.add('hidden');
  }
}
)
