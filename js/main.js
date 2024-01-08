/*Burger menu*/
const $burgerBtn = document.querySelector('.burger'),
$menu = document.querySelector('.header__menu');

$burgerBtn.addEventListener('click', () => {
    $burgerBtn.classList.toggle('open');
    $menu.classList.toggle('open');
})