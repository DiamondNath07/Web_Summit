const navlinks = document.querySelector('.slide-menu-container');
const closeBtn = document.querySelector('.close-btn');
const menuBar = document.querySelector('.mobile_menu');

// menu slide interaction

menuBar.addEventListener('click', () => {
  navlinks.classList.toggle('show-menu');
});

closeBtn.addEventListener('click', () => {
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

const homeFooter = document.querySelectorAll('.home-footer');
const showLess = `
<span>SHOW LESS </span> <span class='arrow-up'>⬆</span>
`;
const showMore = `
<span>SHOW MORE </span> <span class='arrow-down'>⬇</span>
`;

const dropDown = document.querySelector('.drop-down');
dropDown.addEventListener('click', () => {
  speakers.forEach((speaker) => {
    speaker.classList.toggle('show');
  });
  homeFooter.forEach((footer) => {
    footer.classList.toggle('open');
    if (speaker.classList.contains('show')) {
      dropDown.innerHTML = showMore;
    } else {
      dropDown.innerHTML = showLess;
    }
  });
});

// speaker seection

const speaker = document.querySelector('.speakers-container');

const eventSpeakers = [
  {
    img: './image1/pic1.jpg',
    fullName: 'Diamond Nathaniel',
    position: 'Software engineer || Frontend developer || Accountant',
    contributions:
      'He will be talking about the simplicity yet power weapon of tech and how it impacts us.',
  },
  {
    img: './images2/speaker_03.png',
    fullName: 'SohYeoung Noh',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    contributions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a ratione laborum?',
  },
  {
    img: './image1/pic1.jpg',
    fullName: 'Diamond Nathaniel',
    position: 'Software engineer || Frontend developer || Accountant',
    contributions:
      'He will be talking about the simplicity yet power weapon of tech and how it impacts us.',
  },
  {
    img: './images2/speaker_03.png',
    fullName: 'SohYeoung Noh',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    contributions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a ratione laborum?',
  },
  {
    img: './image1/pic1.jpg',
    fullName: 'Diamond Nathaniel',
    position: 'Software engineer || Frontend developer || Accountant',
    contributions:
      'He will be talking about the simplicity yet power weapon of tech and how it impacts us.',
  },
  {
    img: './images2/speaker_03.png',
    fullName: 'SohYeoung Noh',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    contributions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a ratione laborum?',
  },
];

eventSpeakers.forEach(({ img, fullName, position, contributions }) => {
  const element = document.createElement('div');
  const attr = document.createAttribute('class');
  attr.value = 'the-speakers';
  element.setAttributeNode(attr);

  element.innerHTML = `
  <div class="speaker1">
  <img src="${img}" alt="" class="speaker-pic" />
          <div class="speaker-desc">
            <h6 class="name">${fullName}</h6>
            <p class="position">
              ${position}
            </p>
            <p class="contributions">
              ${contributions}
            </p>
          </div>
          </div>
 `;

  speaker.appendChild(element);
});
