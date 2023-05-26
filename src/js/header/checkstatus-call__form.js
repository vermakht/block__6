const headerBtnCheckstatusOpen = document.getElementsByClassName('checkstatus').item(0);
const checkstatusCallForm = document.getElementsByClassName('checkstatus-call').item(0);
const checkstatusCallBtnCloseMob = document.querySelector('.checkstatus-call__btn-mobile');
const checkstatusCallBtnCloseDec = document.querySelector('.checkstatus-call__btn-desktop');
let overlayElement;

document.addEventListener('DOMContentLoaded', (e) => {
  headerBtnCheckstatusOpen.addEventListener('click', function(event) {
    checkstatusCallForm.classList.toggle('checkstatus-call--show');
    if (checkstatusCallForm.classList.contains('checkstatus-call--show')) {
      overlay();
    } else {
      hideOverlay();
    }
  });

  checkstatusCallBtnCloseMob.addEventListener('click', function(event) {
    event.preventDefault();
    checkstatusCallForm.classList.remove('checkstatus-call--show');
    hideOverlay();
  });
  checkstatusCallBtnCloseDec.addEventListener('click', function(event) {
    event.preventDefault();
    checkstatusCallForm.classList.remove('checkstatus-call--show');
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
