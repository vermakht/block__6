/** core version + pagination modules:*/
// eslint-disable-next-line no-unused-vars
import Swiper, {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null; // Переменная для хранения экземпляра Swiper

document.addEventListener('DOMContentLoaded', (e) => {
  /** Функция для проверки ширины экрана */
  function isScreenWidthLessThan768() {
    return window.innerWidth < 768;
  }

  // Проверка ширины экрана при загрузке страницы и при изменении размеров окна
  window.addEventListener('load', () => {
    if (isScreenWidthLessThan768()) {
      initializeSwiper();
    }
  });

  window.addEventListener('resize', () => {
    if (isScreenWidthLessThan768()) {
      if (!swiperInstance) {
        initializeSwiper();
      }
    } else {
      destroySwiper();
    }
  });

  /** Функция для инициализации Swiper */
  function initializeSwiper() {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper', {
      // configure Swiper to use modules
      modules: [Pagination],
      slidesPerView: '1.3',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    // Получаем все элементы .swiper-slide
    const slides = document.querySelectorAll('.swiper-slide');
    // Изменяем ширину для каждого элемента .swiper-slide
    slides.forEach((slide) => {
      slide.style.width = '240px';
      slide.style.height = '72px';
    });
  }

  // eslint-disable-next-line require-jsdoc
  function destroySwiper() {
    if (swiperInstance) {
      swiperInstance.destroy();
      swiperInstance = null;
    }
  }

  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach((slide) => {
    slide.style.flexShrink = '1';
  });
});
