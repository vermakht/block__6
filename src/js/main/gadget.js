document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.gadget__container');
  const cards = document.querySelector('.gadget__slides');
  // eslint-disable-next-line no-unused-vars
  const dotsContainer = document.querySelector('.gadget__navigation');
  const dots = document.querySelectorAll('.gadget__dot');

  // Обновляем активную точку при прокрутке контейнера
  // eslint-disable-next-line require-jsdoc
  function updateActiveDot() {
    const scrollLeft = cardsContainer.scrollLeft;
    const visibleWidth = cardsContainer.offsetWidth;
    const totalWidth = cards.scrollWidth;
    const activeDotIndex = Math.floor(scrollLeft / (totalWidth - visibleWidth) * dots.length);

    dots.forEach((dot, index) => {
      dot.classList.toggle('gadget__dot--active', index === activeDotIndex);
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

const btnReadmore = document.getElementsByClassName('gadget--mob').item(0);
const btnReadmoreText = document.getElementsByClassName('btn-readmore__text').item(2);
const btnReadmoreImg = document.getElementsByClassName('btn-readmore__img').item(2);
const brandsDekElements = document.querySelectorAll('.gadget--dev');
const gadgetSlides = document.querySelectorAll('.gadget__container');

document.addEventListener('DOMContentLoaded', (e) => {
  btnReadmore.addEventListener('click', (e) => {
    if (btnReadmoreText.textContent === 'Показать все') {
      brandsDekElements.forEach(function(element) {
        element.style.display = 'flex';
      });
      gadgetSlides.flexWrap = 'wrap';
      btnReadmoreText.textContent = 'Скрыть все';
      btnReadmoreImg.classList.add('btn-readmore__img--hide');
    } else {
      brandsDekElements.forEach(function(element) {
        element.style.display = 'none';
      });
      gadgetSlides.flexWrap = 'nowrap';
      btnReadmoreText.textContent = 'Показать все';
      btnReadmoreImg.classList.remove('btn-readmore__img--hide');
    }
  });
});
