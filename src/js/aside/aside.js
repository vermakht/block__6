const menuBtn = document.getElementsByClassName('menu-btn').item(0);
const aside = document.getElementsByClassName('aside').item(0);
const search = document.getElementsByClassName('search').item(0);
let overlayElement;

document.addEventListener('DOMContentLoaded', (e) => {
  menuBtn.addEventListener('click', function(event) {
    menuBtn.classList.add('menu-btn--active');
    if (menuBtn.classList.contains('menu-btn--active')) {
      aside.classList.add('aside--show');
      search.classList.add('search--show');
      overlay();
    } else {
      aside.classList.remove('aside--show');
      search.classList.remove('search--show');
      hideOverlay();
    }
  });
  document.addEventListener('click', function(event) {
    if (!menuBtn.contains(event.target) && !aside.contains(event.target)) {
      aside.classList.remove('aside--show');
      menuBtn.classList.remove('menu-btn--active');
      hideOverlay();
    }
  });
  /** Создаем блок, который завкрывает содержимое страницы,
   * пока открыто окно формы, меню*/
  function overlay() {
    if (!overlayElement) {
      overlayElement = document.createElement('div');
      overlayElement.classList.add('overlay');
      document.body.appendChild(overlayElement);
    }
  }
  /** Удаляем блок, который завкрывает содержимое страницы,
   * пока открыто окно формы, меню*/
  function hideOverlay() {
    if (overlayElement) {
      overlayElement.parentNode.removeChild(overlayElement);
      overlayElement = null;
    }
  }
});

