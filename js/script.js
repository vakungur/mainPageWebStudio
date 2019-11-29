const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (e) => {
    e.target.closest('.hamburger').classList.toggle('hamburger--active');
    e.target.closest('.menu').querySelector('.menu__list').classList.toggle('menu__list--active');
});