import home from './home.js';
import menu from './menu.js'
import contact from './contact.js'
import './style.css';

const Handler= {
    home,
    menu,
    contact
  };

console.log('test index');

contact();

function loadPage() {
    const contentDiv = document.querySelector('.content')
    contentDiv.innerHTML = ''
    Handler[this.getAttribute('data-tab')]();
    const tabBtns = document.querySelectorAll('.nav-links')
    tabBtns.forEach(btn => btn.addEventListener('click', loadPage))
}

const tabBtns = document.querySelectorAll('.nav-links')

tabBtns.forEach(btn => btn.addEventListener('click', loadPage))