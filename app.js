const navlinks = document.querySelector('.slide-menu-container');
const closeBtn = document.querySelector('.close-btn');
const menuBar = document.querySelector('.mobile_menu');

menuBar.addEventListener('click', () => {
  navlinks.classList.toggle('show-menu');
});

closeBtn.addEventListener('click', (e) => {
  if (navlinks.classList.contains('show-menu')) {
    navlinks.classList.remove('show-menu');
    console.log(closeBtn);
  }
});
