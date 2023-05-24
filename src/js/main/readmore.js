const btnReadmore = document.getElementsByClassName('btn-readmore').item(0);
const txtShow = document.querySelector('.main__text-desktop');


document.addEventListener('DOMContentLoaded', (e) => {
  btnReadmore.addEventListener('click', (e) => {
    if (document.querySelector('.btn-readmore__text').textContent === 'Читать далее') {
      txtShow.style.display ='block';
      document.querySelector('.main__text-span').style.display ='inline';
      document.querySelector('.btn-readmore__text').textContent = 'Скрыть все';
      document.querySelector('.btn-readmore__img').classList.add('btn-readmore__img--hide');
    } else {
      txtShow.style.display ='none';
      document.querySelector('.btn-readmore__text').textContent = 'Читать далее';
      document.querySelector('.btn-readmore__img').classList.remove('btn-readmore__img--hide');
    }
  });
});
