import headerTemplate from './header.html'
import footerTemplate from './footer.html'
import Logo from './assets/images/logo-clear.png'
import restaurantImage1 from './assets/images/restaurant1.jpg'
import chefImage from './assets/images/chef.jpg'
import ingredientsImage from './assets/images/ingredients1.jpg'
import ambientImage from './assets/images/ambient.jpg'

export default function home() {

    const body = document.querySelector('body');
    body.className = ''
    body.classList.add('home-bg');

    const contentDiv = document.querySelector('.content')

    contentDiv.innerHTML = headerTemplate;

    contentDiv.innerHTML += `
   <main>
       <section class="hero-section">
       <div class="hero-text-container">
           <h1 class="hero-title">Directly from your dreams, we present</h1>
           <p class="hero-text">The best food experience you will have in a lifetime.<br>Come to enjoy your dinner, stay to enjoy your night.<br>Inviting and cozy ambients, built for our most special element:<strong class="highlight-text"> you.</strong></p>
       </div>
       <div class="hero-img-container">
           <img src="${restaurantImage1}" alt="">
       </div>
      </section> 
      <section class="fixed-background">

      </section>
      <section class="more-info-section">
          <div class="more-info-container">
              <div class="more-info-subcontainer">
                  <img src="${chefImage}" alt="" class="more-info-image">
                  <h2 class="more-info-title">The chef</h2>
                  <p class="more-info-text">Our clients will be delighted to know that what comes to their table has just been prepared by <strong>Simon Gerto</strong>.<br><br>The most awarded chef in the area.</p>
              </div>
              <div class="more-info-subcontainer">
                  <img src="${ingredientsImage}" alt="" class="more-info-image">
                  <h2 class="more-info-title">The ingredients</h2>
                  <p class="more-info-text">We work with only the freshest produce.<br>The house's main dishes are prepared with vegetables from our own garden.</p>
              </div>
              <div class="more-info-subcontainer">
                  <img src="${ambientImage}" alt="" class="more-info-image">
                  <h2 class="more-info-title">The ambient</h2>
                  <p class="more-info-text">To make you comfortable.<br>To bring you joy.<br><br>Everything was prepared with <strong>you</strong> in mind.</p>
              </div>
          </div>
      </section>
   </main>`

    contentDiv.innerHTML += footerTemplate;

    const logoElement = document.querySelector('.logo img')
    logoElement.src = Logo

    const tabs = document.querySelectorAll("[data-tab]")
    tabs.forEach(tab => tab.className = 'nav-links')

    const focusTab = document.querySelector("[data-tab='home']")
    focusTab.classList.add('nav-focus')
}