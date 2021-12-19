 function openModal(modalSelector, modalTimerId) {
     const modal = document.querySelector(modalSelector);

     modal.classList.add('show');
     modal.classList.add('fade_tabs');
     document.body.style.overflow = 'hidden';

     if (modalTimerId) {
         clearInterval(modalTimerId);
     }
 }

 function closeModal(modalSelector) {
     const modal = document.querySelector(modalSelector);

     modal.classList.remove('show');
     modal.classList.remove('fade_tabs');
     document.body.style.overflow = '';
 }

 function modal(triggerSelector, modalSelector, modalTimerId) {
     const modalTrigger = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector);
         modalTrigger.forEach(item => {
            item.addEventListener('click', () => {
                openModal(modalSelector, modalTimerId);
                console.log('OK');
            });
         });

     modal.addEventListener('click', (e) => {
         if (e.target === modal || e.target.getAttribute('data-close') == '') {
             closeModal(modalSelector);
         }
     });

     document.addEventListener('keydown', (e) => {
         const newLocal = e.code === 'Escape' && modal.classList.contains('show');
         if (newLocal) {
             closeModal(modalSelector);
         }
     });

     function showModalByScroll() {
         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
             openModal(modalSelector, modalTimerId);
             window.removeEventListener('scroll', showModalByScroll);
         }
     }
        if(modalSelector == ".popup"){
            window.addEventListener('scroll', showModalByScroll);
        }
        
    
 }

 export default modal;
 export {
     openModal,
     closeModal,
     modal
 };