import './slider';
import modal from './modules/modal';
import{openModal} from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 50000);
    
    modal('.popup_engineer_btn', '.popup_engineer', modalTimerId);
    modal('.phone_link', '.popup', modalTimerId);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content__item', 'after_click');
    forms('form', '.popup', modalTimerId);
});
    
