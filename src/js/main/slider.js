document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.slide-container');
  const cards = document.querySelector('.slides');
  // eslint-disable-next-line no-unused-vars
  const dotsContainer = document.querySelector('.navigation');
  const dots = document.querySelectorAll('.dot');

  // Обновляем активную точку при прокрутке контейнера
  // eslint-disable-next-line require-jsdoc
  function updateActiveDot() {
    const scrollLeft = cardsContainer.scrollLeft;
    const visibleWidth = cardsContainer.offsetWidth;
    const totalWidth = cards.scrollWidth;
    const activeDotIndex = Math.floor(scrollLeft / (totalWidth - visibleWidth) * dots.length);

    dots.forEach((dot, index) => {
      dot.classList.toggle('dot--active', index === activeDotIndex);
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
        behavior: 'smooth'
      });
    });
  });

  // Обновляем активную точку при прокрутке контейнера
  cardsContainer.addEventListener('scroll', updateActiveDot);

  // Вызываем функцию обновления активной точки при загрузке страницы
  updateActiveDot();
});

