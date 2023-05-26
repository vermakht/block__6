const servicesBtnes = document.querySelectorAll('.services__btn');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const servicesList = document.querySelector('.services__list');

document.addEventListener('DOMContentLoaded', (e) => {
  servicesBtnes.forEach(function(servicesBtn) {
    servicesBtn.addEventListener('click', function(event) {
      // Убираем класс активной кнопки у всех кнопок
      servicesBtnes.forEach(function(btn) {
        btn.classList.remove('services__btn--active');
      });
      // Добавляем класс активной кнопке, на которую кликнули
      servicesBtn.classList.add('services__btn--active');
    });
  });

  /** Добавляем класс активной кнопке при загрузке страницы.
   * Обозначаем раздел, в котором находииться пользователь  */
  servicesBtnes[0].classList.add('services__btn--active');

  /** дабавляем перенос кнопок при определённой ширине экрна */
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
