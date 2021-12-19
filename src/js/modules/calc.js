import tabs from "./tabs";
import {openModal, closeModal, modal} from "./modal";

const calc = (headerSelector, tabSelector, contentSelector, activeClass, triggerSelector, modalSelector) => {
    tabs(headerSelector, tabSelector, contentSelector, activeClass);
    modal(triggerSelector, modalSelector);

    function calcProfile(btnSelector, inputSelector, preSelector, nextSelector) {
        const btn = document.querySelector(btnSelector);
        const modal = document.querySelector(preSelector);
        btn.addEventListener('click', () => {
            console.log('click');
            closeModal(preSelector);
            openModal(nextSelector);
        });
        modal.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-close') == '') {
                closeModal(preSelector);
            }
        });
    }
    calcProfile('.popup_calc_button', '.popup_calc input', '.popup_calc', '.popup_calc_profile');
    calcProfile('.popup_calc_profile_button', '.popup_calc input', '.popup_calc_profile', '.popup_calc_end');
    calcProfile('.popup_calc_end_btn', '', '.popup_calc_end', '');
};



export default calc;