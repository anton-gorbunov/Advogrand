import hamburger from './modules/hamburger';
import modal from './modules/modal';
import phoneMask from './modules/mask';
import comparsion from  './modules/comparsion';
import filter from './modules/filter';
import forms from './modules/forms';
import slider from './modules/slider';
import playVideo from './modules/playVideo';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded',() => {
    hamburger({
        hamburgerSelector: '.header__hamburger',
        menuSelector: '.header__menu',
        menuLinksSelector: '.header__link',
        menuActiveClass: 'header__menu_active',
        hamburgerActiveClass: 'header__hamburger_active'
    });
    modal();
    phoneMask('[name="phone"]');
    comparsion();
    filter();
    forms();
    slider();
    playVideo('.comments-block', '.modalVideo');
    scrolling('.pageup');
});