const navBtnes = document.querySelectorAll('.nav__btn');
const navLine = document.querySelectorAll('.nav__line');
const menuBtn = document.querySelector('.menu-btn');

document.addEventListener('DOMContentLoaded', (e) => {
  navBtnes.forEach(function(navBtn, index) {
    navBtn.addEventListener('click', function(event) {
      event.preventDefault();
      removeActiveClass();
      navBtn.classList.add('nav__btn--active');
      navLine[index].classList.add('nav__line--active');
    });
    // При наведении мыши идет смена цвета
    navBtn.addEventListener('mouseover', function() {
      navLine[index].classList.add('nav__line--active');
      navBtn.style.color = '#7E7E82';
    });
    navBtn.addEventListener('mouseout', function() {
      navLine[index].classList.remove('nav__line--active');
      navBtn.style.color = '';
    });
  });
  menuBtn.addEventListener('click', function() {
    removeActiveClass();
  });

  /**
   * Удаляляем класс при закрытии меню или переходе
   * на следующуюю кнопку.
   * Возвращаем исходное оформление кнопки при наведении при закрытии меню
   */
  function removeActiveClass() {
    navBtnes.forEach(function(navBtn, index) {
      navBtn.classList.remove('nav__btn--active');
      navBtn.style.color = '';
    });
    navLine.forEach(function(line) {
      line.classList.remove('nav__line--active');
    });
  }
  // Добавляем класс активной кнопке при загрузке страницы
  navBtnes[0].classList.add('nav__btn--active');
  navLine[0].classList.add('nav__line--active');
});
