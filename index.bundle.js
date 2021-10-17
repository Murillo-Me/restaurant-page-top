(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>f});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),l=new URL(e(197),e.b),d=new URL(e(843),e.b),p=a()(o()),h=s()(l),u=s()(d);p.push([n.id,"html {\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* HOME TAB CSS */\r\n\r\nbody {\r\n  --header-height: 80px;\r\n  --footer-height: 150px;\r\n}\r\n\r\n\r\n.home-bg {\r\n  background-image: url("+h+");\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% auto;\r\n  background-position: center center;\r\n}\r\n\r\nheader {\r\n    height: var(--header-height);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #5C3D2E;\r\n    position: relative;\r\n    z-index: 100;\r\n    border-bottom: 0.5px solid black;\r\n}\r\n\r\n.logo {\r\n  position: relative;\r\n  width: 130px;\r\n  height: 65px;\r\n  overflow: hidden;\r\n  background-color: #E0C097;\r\n  margin-left: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 1px 1px 15px black;\r\n  cursor: pointer;\r\n}\r\n\r\n.logo img {\r\n  height: calc(var(--header-height) - 20px);\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.navbar {\r\n  height: 100%;\r\n}\r\n\r\n.navbar ul {\r\n  list-style-type: none; \r\n  height: 100%;\r\n}\r\n\r\n.nav-item {\r\n  float: left;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  border-left: 1px solid white;\r\n  background-color: #5C3D2E;\r\n}\r\n\r\n.nav-item:hover {\r\n  filter: brightness(1.2);\r\n  transform: translateY(5px);\r\n}\r\n\r\n.nav-links {\r\n  display: inline-block;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  line-height: 5rem;\r\n  text-decoration-line: underline;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.nav-focus {\r\n  background-color: #B85C38;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.hero-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: calc(100vh - var(--header-height));\r\n  background-color: black;\r\n}\r\n\r\n.hero-text-container {\r\n  display: flex;\r\n  z-index:50;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: black;\r\n  box-shadow: 120px 0px 200px 100px black;\r\n  text-shadow: 0.5px 0px 35px darkgrey;\r\n}\r\n\r\n.hero-title {\r\n  margin-bottom: 40px;\r\n  font-size: 3.5rem;\r\n  color: #B85C38;\r\n}\r\n\r\n.hero-text {\r\n  font-size: 1.5rem;\r\n  text-align: center;\r\n  margin-inline: 200px;\r\n  color: #E0C097;\r\n}\r\n\r\n.highlight-text {\r\n  color:#B85C38;\r\n}\r\n\r\n.hero-img-container {\r\n  margin-right: 0px;\r\n  height: calc(100vh - var(--header-height));\r\n  overflow: hidden;\r\n}\r\n\r\n.hero-img-container img {\r\n  height: 120%;\r\n  width: auto;\r\n  object-fit: cover;\r\n}\r\n\r\n.fixed-background {\r\n  height: 80vh;\r\n}\r\n\r\n.more-info-section {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-image: linear-gradient(#5C3D2E 20%, #B85C38);\r\n  height: calc(100vh - var(--footer-height));\r\n  box-shadow: 0px -100px 180px black;\r\n}\r\n\r\n.more-info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #E0C097;\r\n  width: 90%;\r\n  height:90%;\r\n  border-radius: 40px;\r\n  box-shadow: -10px 0px 15px black;\r\n}\r\n\r\n.more-info-subcontainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: left;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  width: fit-content;\r\n  height: 30%;\r\n  margin-left: auto;\r\n  margin-right: 350px;\r\n  text-align: left;\r\n}\r\n\r\n.more-info-subcontainer:first-of-type, .more-info-subcontainer:last-of-type {\r\n  margin-right: auto;\r\n  margin-left: 50px;\r\n}\r\n\r\n.more-info-title {\r\n  margin-block: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.more-info-text {\r\n  width: 400px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.more-info-subcontainer img {\r\n  border-radius: 20px;\r\n  box-shadow: 1px 1px 15px black;\r\n  height: 100%;\r\n  margin-right: 50px;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  height: var(--footer-height);\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.footer-upper-information {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: center; \r\n}\r\n\r\n.footer-upper-information > div {\r\n  margin-inline: 100px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.footer-opening-hours {\r\n  display: flex;\r\n  width: 200px;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.footer-title {\r\n  width: 100%;\r\n  margin-block: 10px;\r\n}\r\n\r\n.days {\r\n  margin-right: 30px;\r\n}\r\n\r\n.footer-link {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 1.1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer-link:hover {\r\n  color: #B85C38;\r\n}\r\n\r\n.footer-social-media i {\r\n  font-size: 1.6rem;\r\n  margin-right: 8px;\r\n}\r\n\r\n.footer-social-media a:visited {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.fa-facebook-square:hover {\r\n  color: #4267B2;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-instagram-square:hover {\r\n  color: #C13584;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-twitter-square:hover {\r\n  color: #1DA1F2;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-whatsapp-square:hover {\r\n  color: #25D366;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* MENU SECTION */\r\n\r\n.menu-bg {\r\n  background-image: url("+u+");\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% auto;\r\n  background-position: center center;\r\n}\r\n\r\n.menu-section {\r\n  height: calc(100vh - var(--footer-height) - var(--header-height));\r\n  min-height: fit-content;\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  width: 60%;\r\n  height: fit-content;\r\n}\r\n\r\n.menu-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: left;\r\n  align-items: center;\r\n  text-align: center;\r\n  width: 300px;\r\n  height: 310px;\r\n  background-color: #E0C097;\r\n  border-radius: 30px;\r\n  margin: 30px;\r\n  padding-bottom: 15px;\r\n  box-shadow: 1px 1px 20px black, inset 2px 2px 50px -20px black;\r\n  border: 0.5px solid white;\r\n}\r\n\r\n.menu-card:hover {\r\n  transform: scale(1.03);\r\n  box-shadow: 2px 2px 30px black, inset 2px 2px 50px -20px black;\r\n}\r\n\r\n.card-img-container {\r\n  \r\n  height: 170px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.card-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n  margin-top: 15px;\r\n  border-radius: 30px;\r\n}\r\n\r\n.card-title {\r\n  margin-top: 15px;\r\n  margin-inline: 15px;\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.card-price {\r\n  margin-top: 10px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/* CONTACT PAGE */\r\n\r\n.contact-section {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: calc(100vh - var(--footer-height) - var(--header-height));\r\n}\r\n\r\n.contact-bg {\r\n  background-color: #5C3D2E;\r\n  background: repeating-linear-gradient( -45deg, #E0C097, #E0C097 20px, #5C3D2E 20px, #5C3D2E 100px );\r\n}\r\n\r\n.contact-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  background-color: #E0C097;\r\n  padding: 50px 30px;\r\n  border-radius: 40px;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n  margin-inline: 20px;\r\n  width: 350px;\r\n}\r\n\r\n.form-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.form-container form label {\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.form-container form input, .form-container form textarea {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\ninput[type='submit'] {\r\n  background-color: #5C3D2E;\r\n  color: white;\r\n  font-weight: bolder;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.location-container {\r\n  margin-inline: 20px;\r\n}\r\n\r\n.location-container h1 {\r\n  font-weight: bolder;\r\n  margin-bottom: 10px;\r\n}",""]);const f=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},963:(n,r,e)=>{e.d(r,{Z:()=>t});const t='<footer> <div class="footer-upper-information"> <div class="footer-opening-hours"> <h3 class="footer-title">OPENING HOURS</h3> <div class="days"> <ul> <li>Weekdays</li> <li>Weekends</li> </ul> </div> <div class="hours"> <ul> <li>18:00 - 22:00</li> <li>16:00 - 00:00</li> </ul> </div> </div> <div class="footer-location"> <h3 class="footer-title">LOCATION</h3> <p class="location">3878 Spring Street<br>Springfield, IL 62701</p> </div> <div class="footer-navbar"> <h3 class="footer-title">WEBSITE</h3> <ul> <li><a class="footer-link">Home</a></li> <li><a class="footer-link">Menu</a></li> <li><a class="footer-link">Contacts</a></li> </ul> </div> <div class="footer-social-media"> <h3 class="footer-title">SOCIAL MEDIA</h3> <a href="#"><i class="fab fa-facebook-square"></i></a> <a href="#"><i class="fab fa-instagram-square"></i></a> <a href="#"><i class="fab fa-twitter-square"></i></a> <a href="#"><i class="fab fa-whatsapp-square"></i></a> </div> </div> <div class="footer-disclaimer"> © 2021 Murillo Mendes </div> </footer>'},683:(n,r,e)=>{e.d(r,{Z:()=>t});const t='<header> <div class="logo"> <img src="#" alt=""> </div> <nav class="navbar"> <ul class="nav-list"> <li class="nav-item"><a href="#" data-tab="home" class="nav-links">Home</a></li> <li class="nav-item"><a href="#" data-tab="menu" class="nav-links">Menu</a></li> <li class="nav-item"><a href="#" data-tab="contact" class="nav-links">Contact</a></li> </ul> </nav> </header> '},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var h=e(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)r[h].references++,r[h].updater(u);else{var f=o(u,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},637:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(683),o=e(963),i=e(612);function a(){const n=document.querySelector("body");n.className="",n.classList.add("contact-bg");const r=document.querySelector(".content");r.innerHTML=t.Z,r.innerHTML+='\n                            <main>\n                                <section class="contact-section">\n                                    <div class="contact-container">\n                                        <div class="form-container">\n                                            <form action="#">\n                                        \n                                                <label for="name">Name</label>\n                                                <input type="text" id="name" name="fullname" placeholder="Your name...">\n                                        \n                                                <label for="email">E-mail</label>\n                                                <input type="text" id="email" name="fullemail" placeholder="your_email@...">\n                                        \n                                                <label for="subject">Subject</label>\n                                                <textarea id="subject" name="subject" placeholder="Write something..." style="height:250px"></textarea>\n                                        \n                                                <input type="submit" value="Submit">\n                                        \n                                            </form>\n                                        </div>\n                                        <div class="location-container">\n                                            <h1 class="address">Map</h1>\n                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8675.951022704136!2d-89.6597131216959!3d39.75285940495792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88753922507abc23%3A0x8a0df04c5be3ebca!2s3878%20S%20Spring%20St%2C%20Springfield%2C%20IL%2062703%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1634139432516!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>\n                                        </div>\n                                    </div>\n                                </section>\n                            </main>',r.innerHTML+=o.Z,document.querySelector(".logo img").src=i,document.querySelectorAll("[data-tab]").forEach((n=>n.className="nav-links")),document.querySelector("[data-tab='contact']").classList.add("nav-focus")}},666:(n,r,e)=>{e.d(r,{Z:()=>d});var t=e(683),o=e(963),i=e(612),a=e(403),c=e(632),s=e(362),l=e(360);function d(){const n=document.querySelector("body");n.className="",n.classList.add("home-bg");const r=document.querySelector(".content");r.innerHTML=t.Z,r.innerHTML+=`\n   <main>\n       <section class="hero-section">\n       <div class="hero-text-container">\n           <h1 class="hero-title">Directly from your dreams, we present</h1>\n           <p class="hero-text">The best food experience you will have in a lifetime.<br>Come to enjoy your dinner, stay to enjoy your night.<br>Inviting and cozy ambients, built for our most special element:<strong class="highlight-text"> you.</strong></p>\n       </div>\n       <div class="hero-img-container">\n           <img src="${a}" alt="">\n       </div>\n      </section> \n      <section class="fixed-background">\n\n      </section>\n      <section class="more-info-section">\n          <div class="more-info-container">\n              <div class="more-info-subcontainer">\n                  <img src="${c}" alt="" class="more-info-image">\n                  <h2 class="more-info-title">The chef</h2>\n                  <p class="more-info-text">Our clients will be delighted to know that what comes to their table has just been prepared by <strong>Simon Gerto</strong>.<br><br>The most awarded chef in the area.</p>\n              </div>\n              <div class="more-info-subcontainer">\n                  <img src="${s}" alt="" class="more-info-image">\n                  <h2 class="more-info-title">The ingredients</h2>\n                  <p class="more-info-text">We work with only the freshest produce.<br>The house's main dishes are prepared with vegetables from our own garden.</p>\n              </div>\n              <div class="more-info-subcontainer">\n                  <img src="${l}" alt="" class="more-info-image">\n                  <h2 class="more-info-title">The ambient</h2>\n                  <p class="more-info-text">To make you comfortable.<br>To bring you joy.<br><br>Everything was prepared with <strong>you</strong> in mind.</p>\n              </div>\n          </div>\n      </section>\n   </main>`,r.innerHTML+=o.Z,document.querySelector(".logo img").src=i,document.querySelectorAll("[data-tab]").forEach((n=>n.className="nav-links")),document.querySelector("[data-tab='home']").classList.add("nav-focus")}},83:(n,r,e)=>{e.d(r,{Z:()=>u});var t=e(683),o=e(963),i=e(612),a=e(175),c=e(113),s=e(937),l=e(709),d=e(541);class p{constructor(n,r,e=0){this.name=n,this.image=r,this.price=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}appendToMenu(){let n=document.createElement("div");n.classList.add("menu-card"),document.querySelector(".card-container").appendChild(n),n.innerHTML=`\n                                <div class="card-img-container"><img src="${this.image}" alt="${this.name}" class="card-image"></div>\n                                <h1 class="card-title"> ${this.name} </h1>\n                                <span class="card-price"> ${this.price} </span>\n                            `}}const h=[];function u(){console.log("test menu");const n=document.querySelector("body");n.className="",n.classList.add("menu-bg");const r=document.querySelector(".content");r.innerHTML=t.Z,r.innerHTML+='\n   <main>\n       <section class="menu-section">\n            <div class="card-container">\n\n            </div>\n      </section>\n   </main>',r.innerHTML+=o.Z,document.querySelector(".logo img").src=i,document.querySelectorAll("[data-tab]").forEach((n=>n.className="nav-links")),document.querySelector("[data-tab='menu']").classList.add("nav-focus"),h.forEach((n=>n.appendToMenu()))}h.push(new p("Grilled Asian Chicken",a,15)),h.push(new p("Pasta",c,12)),h.push(new p("Ribs",s,15)),h.push(new p("Shrimp Soup",l,20)),h.push(new p("Vegetable Sandwich",d,10))},360:(n,r,e)=>{n.exports=e.p+"94a8cd204d265024468a.jpg"},632:(n,r,e)=>{n.exports=e.p+"eb2e4681bc13b78b9162.jpg"},362:(n,r,e)=>{n.exports=e.p+"529bfe880d9c7ed72ffe.jpg"},612:(n,r,e)=>{n.exports=e.p+"041086a2eed6e12371f2.png"},843:(n,r,e)=>{n.exports=e.p+"686ed29dc27edb195cef.jpg"},175:(n,r,e)=>{n.exports=e.p+"ad56d456aa0b4772a536.jpg"},113:(n,r,e)=>{n.exports=e.p+"7b448826d2d84d947297.jpg"},937:(n,r,e)=>{n.exports=e.p+"18dea728ec4f3c0dba25.jpg"},709:(n,r,e)=>{n.exports=e.p+"e801d4cc2e3047d96e2b.jpg"},541:(n,r,e)=>{n.exports=e.p+"d6deeebe731f2b8c5a9f.jpg"},403:(n,r,e)=>{n.exports=e.p+"9385fbc7c72a0986caac.jpg"},197:(n,r,e)=>{n.exports=e.p+"1f1ee5e83e899631b052.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(666),r=e(83),t=e(637),o=e(379),i=e.n(o),a=e(795),c=e.n(a),s=e(569),l=e.n(s),d=e(565),p=e.n(d),h=e(216),u=e.n(h),f=e(589),m=e.n(f),g=e(426),b={};b.styleTagTransform=m(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=u(),i()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const x={home:n.Z,menu:r.Z,contact:t.Z};function v(){document.querySelector(".content").innerHTML="",x[this.getAttribute("data-tab")](),document.querySelectorAll(".nav-links").forEach((n=>n.addEventListener("click",v)))}console.log("test index"),(0,n.Z)(),document.querySelectorAll(".nav-links").forEach((n=>n.addEventListener("click",v)))})()})();