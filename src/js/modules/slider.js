const slider = () => {
    const slidesField = document.querySelector('.partners__inner'),
          prevBtn = document.querySelector('.partners__prev'),
          nextBtn = document.querySelector('.partners__next'),
          slides = slidesField.children;

    nextBtn.addEventListener('click',(event) => {
        event.preventDefault();
        slidesField.appendChild(slides[0]);
    });
    prevBtn.addEventListener('click',(event) => {
        event.preventDefault();
        let active = slides[slides.length - 1];
        slidesField.insertBefore(active,slides[0]);
    });
    
    

};

export default slider;