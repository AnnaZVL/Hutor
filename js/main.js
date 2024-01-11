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
    effect: "fade",
    slidesPerView: 1,  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

//   Сдвиг фотов секции Интерьер
// const $images = document.querySelector('.interior__images');
// $images.classList.remove('transform')

// $images.addEventListener('click', () => {
//     $images.classList.toggle('transform')
// })

// // Галерея секции Интерьер
// Fancybox.bind('[data-fancybox="gallery"]', {
    
// });

// Смена языка
const $select = document.querySelectorAll('.btn-lang'),
$btn = document.querySelector('.dropbtn'),
    $blockRu = document.querySelectorAll('.ru'),
    $blockEn = document.querySelectorAll('.en');

$btn.textContent = 'RU';
$select.forEach(button => {
    button.addEventListener('click', () => {
    
    if (button.id === 'en') {
            $blockRu.forEach(elem => {
                elem.style.display = 'none'
                $blockEn.forEach(elem => {
                    elem.style.display = 'block'
                })
                $btn.textContent = 'EN'
            })        
        } else {
            $blockRu.forEach(elem => {
                elem.style.display = 'block'
                $blockEn.forEach(elem => {
                    elem.style.display = 'none'
                })

                $btn.textContent = 'RU'
            })       
        }
    })
});