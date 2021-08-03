/* eslint no-unused-vars: 0 */
setTimeout(() => { // Delay to get DOM ready
  const vw = document.documentElement.clientWidth;
  const hamburger = document.getElementById('burger-container');
  const menu = document.getElementById('main-menu');
  const ham1 = document.getElementById('first-hamburger');
  const ham2 = document.getElementById('second-hamburger');
  const ham3 = document.getElementById('third-hamburger');
  const popup = document.getElementById('menu-container');
  function toggle() {
    ham1.classList.toggle('rotate');
    ham2.classList.toggle('rotate2');
    ham3.classList.toggle('invisible');
    menu.classList.toggle('hidden');
    popup.classList.toggle('menu-popup');
  }
  function checkSize() {
    if (vw >= 768 && !(menu.classList.contains('hidden'))) {
      menu.classList.toggle('hidden');
      if (ham1.classList.contains('rotate')) {
        ham1.classList.toggle('rotate');
        ham2.classList.toggle('rotate2');
        ham3.classList.toggle('invisible');
      }
    }
  }
  hamburger.addEventListener('click', toggle);
  window.onresize = checkSize;
}, 1);

function toggle() {
  const menu = document.getElementById('main-menu');
  const ham1 = document.getElementById('first-hamburger');
  const ham2 = document.getElementById('second-hamburger');
  const ham3 = document.getElementById('third-hamburger');
  const popup = document.getElementById('menu-container');
  ham1.classList.toggle('rotate');
  ham2.classList.toggle('rotate2');
  ham3.classList.toggle('invisible');
  menu.classList.toggle('hidden');
  popup.classList.toggle('menu-popup');
}
