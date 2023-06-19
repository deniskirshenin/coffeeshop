const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const pagination = document.querySelector('.swiper-pagination');

const menuOpenButton = document.querySelector('.header__nav-menu-toggle');
const menu = document.querySelector('.header__nav-menu-list');

const staticImageMap = document.querySelector('.map__static');
const interactiveMap = document.querySelector('.map__interactive');

staticImageMap.classList.remove('map__static--nojs');
interactiveMap.classList.add('map__interactive--active');

menuOpenButton.classList.remove('header__nav-menu-toggle--nojs');
menu.classList.remove('header__nav-menu-list--nojs');

menuOpenButton.addEventListener('click', () => {
    if (menu.classList.contains('header__nav-menu-list--closed')) {
        menuOpenButton.classList.add('header__nav-menu-toggle--close');
        menuOpenButton.classList.remove('header__nav-menu-toggle--open');
        menu.classList.remove('header__nav-menu-list--closed');
        menu.classList.add('header__nav-menu-list--opened');
    } else if (menu.classList.contains('header__nav-menu-list--opened')) {
        menuOpenButton.classList.remove('header__nav-menu-toggle--close');
        menuOpenButton.classList.add('header__nav-menu-toggle--open');
        menu.classList.remove('header__nav-menu-list--opened');
        menu.classList.add('header__nav-menu-list--closed');
    }
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: nextButton,
        prevEl: prevButton
    },
    pagination: {
        clickable: true,
        el: pagination,
        type: 'bullets',
    }
});

const map = L.map('map').setView([59.968435975884354, 30.317528294049186], 20);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mark = L.icon({iconUrl: '../img/icons/stack.svg#map-pin', iconSize: [38, 50],});

const marker = L.marker([59.968435975884354, 30.317528294049186], {icon: mark})
  .bindPopup('Drink2Go - Интернет магазин кофейных напитков').addTo(map);
