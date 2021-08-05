/*  eslint no-unused-vars: 0 prefer-template: 0 */
const project1 = {
  image: 'img/program1.png',
  title: 'Lecture',
  description: 'Listen to the speakers from various countries about the messages of sharing and opening.',
};
const project2 = {
  image: 'img/program2.png',
  title: 'CC Exhibition',
  description: 'Appreciate various creations applying CC license of artists, organized from Art Center Nabi.',
};
const project3 = {
  image: 'img/program3.png',
  title: 'Forum',
  description: 'Have the time to share your thoughts and opinions with experts for each topic.',
};
const project4 = {
  image: 'img/program4.png',
  title: 'Workshop',
  description: 'Try creating your own work using open source license rather than just watching.',
};
const project5 = {
  image: 'img/program5.png',
  title: 'CC Ignite',
  description: 'Get opportunities to network with CC affiliates around the world, also after the summit.',
};

const projects = [project1, project2, project3, project4, project5];

const speaker1 = {
  image: 'yochai.png',
  name: 'Yochai Benkler',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies common-based peer production, and published his seminal book The Wealth of Networks in 2006.',
};

const speaker2 = {
  image: 'kilnam.png',
  name: 'Kilnam Chon',
  profession: 'Retired',
  desc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society (ISOC) Internet Hall of Fame.',
};

const speaker3 = {
  image: 'sohyeong.png',
  name: 'SohYeong Noh',
  profession: 'Director of Art Centre Nabi and a board member of CC Korea',
  desc: 'As the main venue for new media art pruduction in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
};

const speaker4 = {
  image: 'julia.png',
  name: 'Julia Leda',
  profession: 'President of Young Pirates of Europe',
  desc: 'European ingentration, political democracy and partecipation of youth through online as her major condern, Redas report outlining potential changes to EU copyright law was approved by the Parliament in July.',
};

const speaker5 = {
  image: 'lila.png',
  name: 'Lila Tretikov',
  profession: 'Executive Director of the Wikimedia Foundation',
  desc: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
};

const speaker6 = {
  image: 'ryan.png',
  name: 'Ryan Merkley',
  profession: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
  desc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
};

const speakers = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];
let counter = 0;

function fillProgram(programArray) {
  const defimg = 'img/program';
  const parent = document.querySelector('#program-parent');
  parent.innerHTML = '';
  for (let i = 0; i < programArray.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('program-content');
    div.classList.add('visible');
    div.classList.add('moving-normal');
    div.id = 'program-' + i;
    div.innerHTML = `<img class="program-img" src="${programArray[i].image}"><h2 class="program-title color2">${programArray[i].title}</h2><p class="program-desc">${programArray[i].description}`;
    parent.appendChild(div);
  }
}
function fill() {
  const vw = document.documentElement.clientWidth;
  const parentsp = document.getElementById('speakers-parent');
  const menu = document.getElementById('main-menu');
  if (vw <= 768 && !(menu.classList.contains('hidden'))) {
    menu.classList.toggle('hidden');
  } else if (vw >= 768 && menu.classList.contains('hidden')) {
    menu.classList.toggle('hidden');
  }
  if (vw <= 768) { // Show only first 2 if mobile
    for (let k = 0; k < 2; k += 1) {
      const main = document.createElement('div');
      main.classList.add('speaker-content');
      main.innerHTML = `<img class="speaker-img" src="img/${speakers[k].image}"><div class="speaker-second"><h2 class="speaker-title color1">${speakers[k].name}</h2><p class="speaker-job color2">${speakers[k].profession}<hr class="line2 color1"><p class="speaker-desc">${speakers[k].desc}</div>`;

      parentsp.appendChild(main);

      counter += 1;
    }
    const button = document.createElement('button');
    button.id = 'show-more';
    button.setAttribute('onclick', 'showmore()');
    button.innerHTML = 'MORE <i class="fas fa-chevron-down color2"></i>';
    parentsp.appendChild(button);
  } else {
    for (let k = 0; k < speakers.length; k += 1) {
      const main = document.createElement('div');
      main.classList.add('speaker-content');
      main.innerHTML = `<img class="speaker-img" src="img/${speakers[k].image}"><div class="speaker-second"><h2 class="speaker-title color1">${speakers[k].name}</h2><p class="speaker-job color2">${speakers[k].profession}<hr class="line2 color1"><p class="speaker-desc">${speakers[k].desc}</div>`;
      parentsp.appendChild(main);
    }
  }
}
function showmore() {
  const parentsp = document.getElementById('speakers-parent');
  for (let p = counter; p < speakers.length; p += 1) { // Resume for cycle
    const main = document.createElement('div');
    main.classList.add('speaker-content');
    main.classList.add('invisible');
    main.id = 'speaker-fade' + p;
    main.innerHTML = `<img class="speaker-img" src="img/${speakers[p].image}"><div class="speaker-second"><h2 class="speaker-title color1">${speakers[p].name}</h2><p class="speaker-job color2">${speakers[p].profession}<hr class="line2 color1"><p class="speaker-desc">${speakers[p].desc}</div>`;
    parentsp.appendChild(main);
    setTimeout(() => {
      const blob = document.getElementById('speaker-fade' + p);
      blob.classList.remove('invisible');
      blob.classList.add('visible');
    }, 250);
  }
  parentsp.removeChild(document.getElementById('show-more'));
}

function store() { // Function to store locally the changes made to the program section
  const parent = document.querySelector('#program-parent');
  const childDivs = parent.getElementsByTagName('div');
  const project = [];
  let counter = 0;
  const finalArr = [];
  setTimeout(() => {
    for (let i = 0; i < childDivs.length; i += 1) {
      const imgb = childDivs[i].getElementsByTagName('img');
      const titlesb = childDivs[i].getElementsByTagName('h2');
      const descb = childDivs[i].getElementsByTagName('p');
      for (let k = 0; k < imgb.length; k += 1) {
        const image = imgb[k].getAttribute('src');
        const title = titlesb[k].innerHTML;
        const description = descb[k].innerHTML;
        project[counter] = {
          image,
          title,
          description,
        };
        counter += 1;
      }
    }
    localStorage.setItem('storage', JSON.stringify(project));
  }, 1000);
}

function check() {
  if (localStorage.getItem('storage')) {
    const newArray = [];
    const items = localStorage.getItem('storage');
    const parsed = JSON.parse(items);
    for (let i = 0; i < parsed.length; i += 1) {
      newArray.push(parsed[i]);
    }
    fillProgram(newArray);
  } else {
    fillProgram(projects);
  }
}

window.onload = function () {
  fill();
  check();
};
