import Logo from './assets/images/logo-clear.png'
import ChickenDishImage from './assets/images/menu/chicken-dish.jpg'
import PastaDishImage from './assets/images/menu/pasta-dish.jpg'
import RibsDishImage from './assets/images/menu/ribs-dish.jpg'
import ShrimpDishImage from './assets/images/menu/shrimp-dish.jpg'
import VegetableSandwichImage from './assets/images/menu/vegetable-sandwich.jpg'

class MenuItem {
    constructor(name, image, price = 0) {
        this.name = name;
        this.image = image;
        this.price = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(price);
    }

    appendToMenu() {
        let itemCard = document.createElement("div")
        itemCard.classList.add('menu-card')
    
        const cardContainer = document.querySelector('.card-container')
    
        cardContainer.appendChild(itemCard);
    
        itemCard.innerHTML =`
                                <div class="card-img-container"><img src="${this.image}" alt="${this.name}" class="card-image"></div>
                                <h1 class="card-title"> ${this.name} </h1>
                                <span class="card-price"> ${this.price} </span>
                            `
    }
}

const items = [];

items.push(new MenuItem('Grilled Asian Chicken',ChickenDishImage))
items.push(new MenuItem('Pasta',PastaDishImage))
items.push(new MenuItem('Ribs',RibsDishImage))
items.push(new MenuItem('Shrimp Soup',ShrimpDishImage))
items.push(new MenuItem('Vegetable Sandwich',VegetableSandwichImage))

export default function menu() {
    console.log('test menu');

    const body = document.querySelector('body');
    body.className = ''
    body.classList.add('menu-bg');

    const contentDiv = document.querySelector('.content')

    contentDiv.innerHTML = `
    <header>
       <div class="logo">
           <img src="${Logo}" alt="">
       </div>
       <nav class="navbar">
           <ul class="nav-list">
                <li class="nav-item"><a href="#" data-tab="home" class="nav-links">Home</a></li>
                <li class="nav-item"><a href="#" data-tab="menu" class="nav-links">Menu</a></li>
                <li class="nav-item"><a href="#" data-tab="contact" class="nav-links">Contact</a></li>
           </ul>
       </nav>
   </header> 

   <main>
       <section class="menu-section">
            <div class="card-container">

            </div>
      </section>
   </main>

   <footer>
<div class="footer-upper-information">
    <div class="footer-opening-hours">
        <h3 class="footer-title">OPENING HOURS</h3>
        <div class="days">
            <ul>
                <li>Weekdays</li>
                <li>Weekends</li>
            </ul>
        </div>
        <div class="hours">
            <ul>
                <li>18:00 - 22:00</li>
                <li>16:00 - 00:00</li>
            </ul>
        </div>
    </div>
    <div class="footer-location">
        <h3 class="footer-title">LOCATION</h3>
        <p class="location">3878 Spring Street<br>Springfield, IL 62701</p>
    </div>
    <div class="footer-navbar">
        <h3 class="footer-title">WEBSITE</h3>
        <ul>
            <li><a class="footer-link">Menu</a></li>
            <li><a class="footer-link">Contacts</a></li>
        </ul>
    </div>
    <div class="footer-social-media">
        <h3 class="footer-title">SOCIAL MEDIA</h3>
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-instagram-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-whatsapp-square"></i></a>
    </div>
</div>
<div class="footer-disclaimer">
    © 2021 Murillo Mendes
</div>
   </footer>
    `
    const tabs = document.querySelectorAll("[data-tab]")
    tabs.forEach(tab => tab.className = 'nav-links')

    const focusTab = document.querySelector("[data-tab='menu']")
    focusTab.classList.add('nav-focus')

    items.forEach(item => item.appendToMenu())
}