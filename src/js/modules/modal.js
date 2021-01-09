function closeModal(modalSelector){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.remove('modal_active', 'fade');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
}

const modal = () => {
    
    function getScrollWidth(){
        const div = document.createElement('div');
        div.style.height = '50px';
        div.style.width = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        
        return scrollWidth;
    }

    function bindModal(triggerSelector, modalSelector){
        const modalTriggers = document.querySelectorAll(triggerSelector),
              modalWindow = document.querySelector( modalSelector);
        let scroll = getScrollWidth();


    modalTriggers.forEach(item => {
        item.addEventListener('click',() => {
            modalWindow.classList.add('modal_active', 'fade');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.code == 'Escape') {
            closeModal(modalSelector);
        }
    });

    modalWindow.addEventListener('click',(event) => {
        event.stopPropagation();
        if(event.target.classList.contains('modal__close') ||
           event.target.classList.contains('modal__dialog')) {
            closeModal(modalSelector);
        }
    });

    }

    bindModal('[data-call]','.modalCall');
    bindModal('[data-question]','.modalConsult');
    
};
export default modal;
export {closeModal};