const hamburger = ({hamburgerSelector, menuSelector, menuLinksSelector, menuActiveClass, hamburgerActiveClass}) => {
    const hamburger = document.querySelector(hamburgerSelector),
          menu = document.querySelector(menuSelector),
          links = document.querySelectorAll(menuLinksSelector);

  hamburger.addEventListener('click', () => {
      menu.classList.toggle(menuActiveClass);
      hamburger.classList.toggle(hamburgerActiveClass);
  });

  links.forEach(item => {
      item.addEventListener('click',() => {
          menu.classList.remove(menuActiveClass);
          hamburger.classList.remove(hamburgerActiveClass);
      });
  });
};

export default hamburger;