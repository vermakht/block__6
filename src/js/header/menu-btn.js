const menuBtn = document.getElementsByClassName('menu-btn').item(0);

document.addEventListener('DOMContentLoaded', (e) => {
  menuBtn.addEventListener('click', function(event) {
    menuBtn.classList.toggle('menu-btn--active');
  });
});
