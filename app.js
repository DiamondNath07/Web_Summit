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

// speaker seection

const speaker = document.querySelector('.speakers-container');

const eventSpeakers = [
  {
    img: './image1/nich.jpg',
    fullName: 'Diamond Nicholas',
    position: 'Full Stack Engineer || Cloud Engineer || Mathematician ',
    contributions:
      'He will be talking about the  next big thing about the tech industry as well as the future of tech',
  },
  {
    img: './image1/pic1.jpg',
    fullName: 'Diamond Nathaniel',
    position: 'Software engineer || Frontend dev || Accountant || Youth Influencer',
    contributions:
      'He will be talking about the simplicity but powerful weapon of tech and how it impacts us today.',
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
            <p class="positionA">
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

// speakers

const speakerB = document.querySelector('.speakers-container2');

const eventSpeakers2 = [
  {
    img: './image1/evans.jpg',
    fullName: 'Ubah Evans',
    position: 'Economist ',
    contributions:
      'He will be addressing how we can effectively manage the downsides tech bring with respect to company downsizing and computers replacing us',
  },
  {
    img: './image1/inno.jpg',
    fullName: 'Diamond Innocent',
    position: 'Data Scientist || Physicist ',
    contributions:
      'He will be sharing exclusive thoughts on the importance of effective data storage for all tech advancement both now and future',
  },
  {
    img: './image1/blackstan.jpg',
    fullName: 'Sunday Stanley',
    position: 'Q.A Engineer || Frontend developer',
    contributions:
      'He will share his thoughts on the subject of quality assurance and how viable it is to texh productions both future wise and even now',
  },
  {
    img: './image1/john.jpg',
    fullName: 'Omachi John',
    position: 'Frontend dev || Digital Markerter',
    contributions:
      'He will be saring the recent techs and frameworks that will match up the next phase the tech world is looming into',
  },
];

eventSpeakers2.forEach(({ img, fullName, position, contributions }) => {
  const element = document.createElement('div');
  const attr = document.createAttribute('class');
  attr.value = 'the-speakers2';
  element.setAttributeNode(attr);

  element.innerHTML = `
    <div class="speaker1 see-more">
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

  speakerB.appendChild(element);
});

// drop down interaction

const specialSpeakers = document.querySelector('.speakers-container2');

const homeFooter = document.querySelectorAll('.home-footer');
const showLess = `
<span>SHOW LESS </span> <span class='arrow-up'>⬆</span>
`;
const showMore = `
<span>SHOW MORE </span> <span class='arrow-down'>⬇</span>
`;

const dropDown = document.querySelector('.drop-down');
dropDown.addEventListener('click', () => {
  specialSpeakers.classList.toggle('show');
  console.log(specialSpeakers);

  if (specialSpeakers.classList.contains('show')) {
    dropDown.innerHTML = showLess;
  } else {
    dropDown.innerHTML = showMore;
  }
  homeFooter.forEach((footer) => {
    footer.classList.toggle('open');
  });
});
