import {openModal, closeModal} from "./modal";
import {postData} from '../services';

const forms = (formSelector, modalSelector, modalTimerId) => {
    const forms = document.querySelectorAll(formSelector),
        inputPhone = document.querySelectorAll('input[name="user_phone"]');

    inputPhone.forEach(item => {
        item.addEventListener('input', () => {
        if (item.value.match(/\D/g)) {
            item.style.border = '1px solid red';
        } else {
            item.style.border = '1px solid #ccc';
        }
        });
       
    });

    const message = {
        load: './img/spinner.svg',
        success: 'Спасибо! Скоро наш специалист с Вами свяжется',
        error: 'Что то пошло не так...'
    };
    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const loadModal = document.createElement('img');
            loadModal.src = message.load;
            loadModal.style.cssText = 'margin: 0 auto;';

            form.insertAdjacentElement('afterend', loadModal);

            const formData = new FormData(form);
            const toJson = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/posts', toJson)
                .then(data => {
                    console.log(data);
                    // успешно
                    document.querySelector('.popup_engineer').classList.remove('show');
                    showModal(message.success);
                    loadModal.remove();
                })
                .catch(() => {
                    //  неудача
                    document.querySelector('.popup_engineer').classList.remove('show');
                    showModal(message.failure);
                    loadModal.remove();
                })
                .finally(() => {
                    form.reset();
                });
        });
    }
    function showModal(message) {
        document.querySelector('.popup_form').classList.add('hide');
        document.querySelector('.popup_form').classList.remove('show');

        
        openModal(modalSelector, modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('popup_form');
        thanksModal.innerHTML = `
                    <form class="form" action="#">
                    <h2>${message}</h2>
                    </form>
            `;

        document.querySelector('.popup_content').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            document.querySelector('.popup_form').classList.add('show');
            document.querySelector('.popup_form').classList.remove('hide');
            document.querySelector('form input').value = '';
            closeModal('.popup');
        }, 3000);
    }
};

export default forms;