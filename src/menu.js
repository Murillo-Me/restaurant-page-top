import Logo from './assets/images/logo-clear.png'

export default function menu() {
    console.log('test menu');

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
       <section class="menu-section">
       
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