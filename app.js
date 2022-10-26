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
  scroll.addEventListener('click', (e) => {
    const id = e.currentTarget.firstElementChild.getAttribute('href').slice(1);
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

// drop down interaction

const speakers = document.querySelectorAll('.see-more');
// console.log(speakers);
const showLess = `
<span>SHOW LESS </span> <span class='arrow-up'>⬆</span>
`;

const dropDown = document.querySelector('.drop-down');
dropDown.addEventListener('click', () => {
  speakers.forEach(function (speaker) {
    speaker.classList.toggle('show');
    if (speaker.classList.contains('show')) {
      dropDown.innerHTML = showLess;
    } else {
      dropDown.innerHTML = ' SHOW MORE ⬇';
    }
  });
});
