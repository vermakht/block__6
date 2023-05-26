const btnReadmore = document.getElementsByClassName('btn-readmore').item(1);
const brandsDekElements = document.querySelectorAll('.brands--dek');
const btnReadmoreText = document.getElementsByClassName('brands__btn-txt').item(0);
const btnReadmoreImg = document.getElementsByClassName('brands__btn-img')[0];

document.addEventListener('DOMContentLoaded', (e) => {
  btnReadmore.addEventListener('click', (e) => {
    if (btnReadmoreText.textContent === 'Показать все') {
      brandsDekElements.forEach(function(element) {
        element.style.display = 'flex';
      });
      btnReadmoreText.textContent = 'Скрыть все';
      btnReadmoreImg.classList.add('btn-readmore__img--hide');
    } else {
      brandsDekElements.forEach(function(element) {
        element.style.display = 'none';
      });
      btnReadmoreText.textContent = 'Показать все';
      btnReadmoreImg.classList.remove('btn-readmore__img--hide');
    }
  });
});
