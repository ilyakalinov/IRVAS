const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');

    imgPopup.classList.add('popupImg');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.classList.remove('fade_tabs');

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            imgPopup.classList.add('fade_tabs');
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if(target && target.matches('div.popupImg')){
            imgPopup.style.display = 'none';
            imgPopup.classList.remove('fade_tabs');
            document.body.style.overflow = '';
        }
    });
};

export default images;