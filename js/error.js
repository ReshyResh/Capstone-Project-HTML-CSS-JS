/* eslint no-unused-vars: 0 */
function error() {
  const error = document.createElement('aside');
  const parent = document.getElementById('menu-top');
  error.textContent = 'Links not working, this is just a demo!';
  error.id = 'error-popup';
  setTimeout(() => {
    error.classList.add('fade');
  }, 500);
  parent.appendChild(error);
  setTimeout(() => {
    parent.removeChild(document.getElementById('error-popup'));
  }, 3500);
}
