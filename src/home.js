import Logo from './assets/images/logo-clear.png'
import restaurantImage1 from './assets/images/restaurant1.jpg'
import chefImage from './assets/images/chef.jpg'
import ingredientsImage from './assets/images/ingredients1.jpg'
import ambientImage from './assets/images/ambient.jpg'

export default function home() {
    console.log('test home');

    const contentDiv = document.querySelector('.content')
    contentDiv.innerHTML = `
    <header>
       <div class="logo">
           <img src="${Logo}" alt="">
       </div>
       <nav class="navbar">
           <ul class="nav-list">
               <li class="nav-item nav-focus"><a href="#" data-tab="home" class="nav-links">Home</a></li>
               <li class="nav-item"><a href="#" data-tab="menu" class="nav-links">Menu</a></li>
               <li class="nav-item"><a href="#" data-tab="contact" class="nav-links">Contact</a></li>
           </ul>
       </nav>
   </header> 

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
}