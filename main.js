const menulist = document.querySelector('.menulist');
const ham = document.querySelector('.hamburger');
const buttoms = document.querySelector('.buttoms');
const exit = document.querySelector('#exit');

function toggleMenu() {
  if (menulist.classList.contains('showMenu')) {
    menulist.classList.remove('showMenu');
    exit.style.display = 'none';
    buttoms.style.display = 'block';
  } else {
    menulist.classList.add('showMenu');
    exit.style.display = 'block';
    buttoms.style.display = 'none';
  }
}

ham.addEventListener('click', toggleMenu);
