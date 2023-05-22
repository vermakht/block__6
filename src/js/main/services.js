const servicesBtnes = document.querySelectorAll('.services__btn');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const servicesList = document.querySelector('.services__list');

document.addEventListener('DOMContentLoaded', (e) => {
  servicesBtnes.forEach(function(servicesBtn) {
    servicesBtn.addEventListener('click', function(event) {
      removeActiveClass();
      servicesBtn.classList.add('services__btn--active');
    });
    servicesBtn.addEventListener('mouseover', function() {
      servicesBtn.classList.add('services__btn--active');
    });
    servicesBtn.addEventListener('mouseout', function() {
      servicesBtn.classList.remove('services__btn--active');
    });
  });
  /**
   * Удаляем класс при закрытии меню или переходе
   * на следующую кнопку.
   * Возвращаем исходное оформление кнопки при наведении при закрытии меню
   */
  function removeActiveClass() {
    servicesBtnes.forEach(function(servicesBtn) {
      servicesBtn.classList.remove('services__btn--active');
    });
  }
  // Добавляем класс активной кнопке при загрузке страницы
  servicesBtnes[0].classList.add('services__btn--active');
  // eslint-disable-next-line require-jsdoc
  function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      servicesList.style.flexWrap = 'wrap';
    } else {
      servicesList.style.flexWrap = 'nowrap';
    }
  }

  // Изменение стиля при загрузке страницы
  handleMediaQueryChange(mediaQuery);

  // Обработчик изменения размера окна браузера
  window.addEventListener('resize', () => {
    handleMediaQueryChange(mediaQuery);
  });
});
