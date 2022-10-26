const navlinks = document.querySelector('.slide-menu-container');
const closeBtn = document.querySelector('.close-btn');
const menuBar = document.querySelector('.mobile_menu');

// menu slide interaction

menuBar.addEventListener('click', () => {
  navlinks.classList.toggle('show-menu');
});

closeBtn.addEventListener('click', (e) => {
  if (navlinks.classList.contains('show-menu')) {
    navlinks.classList.remove('show-menu');
  }
});

// scroll interactions
const scrollLinks = document.querySelectorAll('.scroll-links');

scrollLinks.forEach((scroll) => {
  scroll.addEventListener('click', (a) => {
    const id = a.currentTarget.getAttribute('href');
    const element = document.getElementById(id);
    const position = element.offsetTop;

    if (id) {
      navlinks.classList.remove('show-menu');
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
