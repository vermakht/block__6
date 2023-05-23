document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.price__container');
  const cards = document.querySelector('.price__slides');
  // eslint-disable-next-line no-unused-vars
  const dotsContainer = document.querySelector('.price__navigation');
  const dots = document.querySelectorAll('.price__dot');

  // Обновляем активную точку при прокрутке контейнера
  // eslint-disable-next-line require-jsdoc
  function updateActiveDot() {
    const scrollLeft = cardsContainer.scrollLeft;
    const visibleWidth = cardsContainer.offsetWidth;
    const totalWidth = cards.scrollWidth;
    const activeDotIndex = Math.floor(scrollLeft / (totalWidth - visibleWidth) * dots.length);

    dots.forEach((dot, index) => {
      dot.classList.toggle('price__dot--active', index === activeDotIndex);
    });
  }

  // Обработчик события клика по точке
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      const totalWidth = cards.scrollWidth;
      const visibleWidth = cardsContainer.offsetWidth;
      const scrollLeft = index / dots.length * (totalWidth - visibleWidth);
      cardsContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    });
  });

  // Обновляем активную точку при прокрутке контейнера
  cardsContainer.addEventListener('scroll', updateActiveDot);

  // Вызываем функцию обновления активной точки при загрузке страницы
  updateActiveDot();
});
