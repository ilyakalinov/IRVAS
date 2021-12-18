function tabs (headerSelector, tabSelector, contentSelector, activeClass){
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTab(){
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTab(i = 0){
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTab();
    showTab();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains(tabSelector.replace(/\./g,'')) ||
         target.parentNode.classList.contains(tabSelector.replace(/\./g,''))){
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hideTab();
                    showTab(i);
                }
            });
        }
    });
}

export default tabs;