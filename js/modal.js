/* eslint no-unused-vars: 0 no-undef: 0 */
function modal() {
  const mod = document.getElementById('addelement');
  const parent = document.querySelector('#program-parent');
  const parentgrid = document.querySelector('#grid-container');
  parentgrid.innerHTML = '';
  setTimeout(() => {
    mod.classList.replace('invisible', 'visible');
  }, 1);
  const imgarray = [];
  const idarray = [];
  const namearray = [];
  const grid = document.createElement('div');
  grid.classList.add('program-grid');

  const childDivs = parent.getElementsByTagName('div'); // Code to get the name of the images
  for (let i = 0; i < childDivs.length; i += 1) {
    idarray.push(childDivs[i].getAttribute('id').replace(/\D/g, ''));
    const img = childDivs[i].getElementsByTagName('img');
    const titles = childDivs[i].getElementsByTagName('h2');
    for (let k = 0; k < img.length; k += 1) {
      const value = img[k].getAttribute('src');
      const titl = titles[k].innerHTML;
      namearray.push(titl);
      imgarray.push(value);
    }

    const gridelem = document.createElement('div');
    gridelem.classList.add('grid-element');
    gridelem.classList.add('visible');
    gridelem.id = `grid-element-${i}`;
    gridelem.innerHTML = `<span class="grid-title white">${namearray[i]}</span><img class="grid-img" src="${imgarray[i]}"><button type="button" onclick="delp(${idarray[i]}),toggle(),error('Item removed succesfully','green')"><i class="fas fa-times"></i></button>`;
    grid.appendChild(gridelem);
  }
  parentgrid.appendChild(grid);
}

function delp(number) {
  const todelete = document.getElementById(`grid-element-${number}`);
  const todelete2 = document.getElementById(`program-${number}`);
  const parent1 = document.querySelector('.program-grid');
  const parent2 = document.querySelector('#program-parent');
  const children = parent2.getElementsByTagName('div');
  todelete.classList.replace('visible', 'invisible');
  todelete2.classList.replace('moving-normal', 'moving-out');
  todelete2.classList.toggle('visible');
  for (let j = number; j < children.length; j += 1) {
    children[j].id = `program-${j - 1}`;
  }
  setTimeout(() => {
    parent1.removeChild(todelete);
    parent2.removeChild(todelete2);
  }, 500);
}

function toggle() {
  const mod = document.getElementById('addelement');
  mod.classList.replace('visible', 'invisible');
}

function fillnew() {
  const parent = document.querySelector('#program-parent');
  const div = document.createElement('div');
  const form = document.getElementById('add-form');
  const img = form.image.value;
  if (img.endsWith('.png') || img.endsWith('.jpg') || img.endsWith('.svg')) {
    div.classList.add('program-content');
    div.classList.add('moving-normal');
    let counter = 0;
    for (let i = 0; i < 100; i += 1) {
      const childDivs = parent.getElementsByTagName('div');
      if (typeof childDivs[i] !== 'undefined') {
        counter += 1;
      }
    }
    div.id = `program-${counter}`;
    div.innerHTML = `<img class="program-img" src="${form.image.value}"><h2 class="program-title color2">${form.title.value}</h2><p class="program-desc">${form.desc.value}`;
    parent.appendChild(div);
  } else {
    error('Image must be .png, .jpg or .svg!');
  }
}

document.addEventListener('click', (e) => { // Close modal menu with click outside modal
  if (document.getElementById('addelement').classList.contains('visible')) {
    if (!(document.getElementById('addelement').contains(e.target))) {
      toggle();
    }
  }
});
