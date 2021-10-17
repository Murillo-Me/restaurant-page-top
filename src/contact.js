import headerTemplate from './header.html'
import footerTemplate from './footer.html'
import Logo from './assets/images/logo-clear.png'

export default function contact() {

    const body = document.querySelector('body');
    body.className = ''
    body.classList.add('contact-bg');

    const contentDiv = document.querySelector('.content')

    contentDiv.innerHTML = headerTemplate;

    contentDiv.innerHTML += `
                            <main>
                                <section class="contact-section">
                                    <div class="contact-container">
                                        <div class="form-container">
                                            <form action="#">
                                        
                                                <label for="name">Name</label>
                                                <input type="text" id="name" name="fullname" placeholder="Your name...">
                                        
                                                <label for="email">E-mail</label>
                                                <input type="text" id="email" name="fullemail" placeholder="your_email@...">
                                        
                                                <label for="subject">Subject</label>
                                                <textarea id="subject" name="subject" placeholder="Write something..." style="height:250px"></textarea>
                                        
                                                <input type="submit" value="Submit">
                                        
                                            </form>
                                        </div>
                                        <div class="location-container">
                                            <h1 class="address">Map</h1>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8675.951022704136!2d-89.6597131216959!3d39.75285940495792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88753922507abc23%3A0x8a0df04c5be3ebca!2s3878%20S%20Spring%20St%2C%20Springfield%2C%20IL%2062703%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1634139432516!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                        </div>
                                    </div>
                                </section>
                            </main>`

    contentDiv.innerHTML += footerTemplate;

    const logoElement = document.querySelector('.logo img')
    logoElement.src = Logo

    const tabs = document.querySelectorAll("[data-tab]")
    tabs.forEach(tab => tab.className = 'nav-links')

    const focusTab = document.querySelector("[data-tab='contact']")
    focusTab.classList.add('nav-focus')
}