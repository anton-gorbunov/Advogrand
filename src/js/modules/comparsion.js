const comparsion = () => {
    const tabs = document.querySelectorAll('.rate__item'),
          wrapper = document.querySelector('.rate__wrapper'),
          tabsParent = document.querySelector('.rate__list');

    tabs.forEach(item => {
        if (item.classList.contains('rate__comparsion')){
            item.addEventListener('click',() => {
                wrapper.classList.add('rate__wrapper_active');
            });
        } else {
            item.addEventListener('click',() => {
                wrapper.classList.remove('rate__wrapper_active');
            });
        }
    });

    tabsParent.addEventListener('click',(event) => {
        if (event.target.classList.contains('rate__item')){
            tabs.forEach(item => {
                item.classList.remove('rate__item_active');
            });
            event.target.classList.add('rate__item_active');
        }
    });
};

export default comparsion;