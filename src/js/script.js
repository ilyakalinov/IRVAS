import './slider';
import modal from './modules/modal';
import{openModal} from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calc from './modules/calc';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 50000);
    
    let modalState = {};

    changeModalState(modalState);
    modal('.popup_engineer_btn', '.popup_engineer', modalTimerId);
    modal('.phone_link', '.popup', modalTimerId);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content__item', 'after_click');
    forms('form', '.popup', modalTimerId, modalState);
    calc('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more', '.glazing_price_btn', '.popup_calc',
    '.popup_calc_button', '.popup_calc_content input');
    timer('.container1', '2021-12-29', '40%', '29 декабря');
    images();
});
    
