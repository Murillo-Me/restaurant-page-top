import headerTemplate from './header.html'
import footerTemplate from './footer.html'
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

items.push(new MenuItem('Grilled Asian Chicken',ChickenDishImage, 15))
items.push(new MenuItem('Pasta',PastaDishImage, 12))
items.push(new MenuItem('Ribs',RibsDishImage, 15))
items.push(new MenuItem('Shrimp Soup',ShrimpDishImage, 20))
items.push(new MenuItem('Vegetable Sandwich',VegetableSandwichImage, 10))

export default function menu() {
    console.log('test menu');

    const body = document.querySelector('body');
    body.className = ''
    body.classList.add('menu-bg');

    const contentDiv = document.querySelector('.content')

    contentDiv.innerHTML = headerTemplate

    contentDiv.innerHTML += `
   <main>
       <section class="menu-section">
            <div class="card-container">

            </div>
      </section>
   </main>`

    contentDiv.innerHTML += footerTemplate

    const logoElement = document.querySelector('.logo img')
    logoElement.src = Logo

    const tabs = document.querySelectorAll("[data-tab]")
    tabs.forEach(tab => tab.className = 'nav-links')

    const focusTab = document.querySelector("[data-tab='menu']")
    focusTab.classList.add('nav-focus')

    items.forEach(item => item.appendToMenu())
}