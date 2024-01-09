/*Burger menu*/
const $burgerBtn = document.querySelector('.burger'),
$menu = document.querySelector('.header__menu');

$burgerBtn.addEventListener('click', () => {
    $burgerBtn.classList.toggle('open');
    $menu.classList.toggle('open');
})

// Swiper
const swiper = new Swiper('.project__swiper', {   
   
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

// Галерея секции Интерьер
Fancybox.bind('[data-fancybox="gallery"]', {
    
});