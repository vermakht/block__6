const headerBtnFeedbackOpen = document.getElementsByClassName('request').item(0);
const feedbackBlockForm = document.getElementsByClassName('feedback').item(0);
const feedbackBtnCloseMob = document.querySelector('.feedback__btn-mobile');
const feedbackBtnCloseDec = document.querySelector('.feedback__btn-desktop');
let overlayElement;

document.addEventListener('DOMContentLoaded', (e) => {
  headerBtnFeedbackOpen.addEventListener('click', function(event) {
    feedbackBlockForm.classList.toggle('feedback--show');
    if (feedbackBlockForm.classList.contains('feedback--show')) {
      overlay();
    } else {
      hideOverlay();
    }
  });

  feedbackBtnCloseMob.addEventListener('click', function(event) {
    feedbackBlockForm.classList.remove('feedback--show');
    hideOverlay();
  });
  feedbackBtnCloseDec.addEventListener('click', function(event) {
    feedbackBlockForm.classList.remove('feedback--show');
    hideOverlay();
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

