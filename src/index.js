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

home();
// menu();

function loadPage() {
    const contentDiv = document.querySelector('.content')
    contentDiv.innerHTML = ''
    Handler[this.getAttribute('data-tab')]();
    const tabBtns = document.querySelectorAll('.nav-links')
    tabBtns.forEach(btn => btn.addEventListener('click', loadPage))
}

const tabBtns = document.querySelectorAll('.nav-links')
// const menuBtn = document.querySelector('.menu--btn')
// const contactBtn = document.querySelector('.contact--btn')

tabBtns.forEach(btn => btn.addEventListener('click', loadPage))