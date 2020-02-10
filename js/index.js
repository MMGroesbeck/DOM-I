const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"]);

let navLinks = document.getElementsByTagName('a');
Array.from(navLinks).forEach(function(item, index){
  navLinks[index].textContent = siteContent.nav[`nav-item-${index + 1}`];
});

const ctaTextItem = document.querySelector('.cta-text');
const ctaImage = document.querySelector('#cta-img');
const midImg = document.querySelector('#middle-img');

ctaTextItem.querySelector('h1').textContent = siteContent.cta['h1'];
ctaTextItem.querySelector('button').textContent = siteContent.cta['button'];
ctaImage.src = siteContent.cta['img-src'];
midImg.src = siteContent['main-content']['middle-img-src'];

//Main text boxes:
const textDivs = document.querySelectorAll('.text-content');
const mainCont = siteContent['main-content'];
//Array to address individual boxes:
const textBoxes = ['features-','about-','services-','product-','vision-'];
Array.from(textDivs).forEach(function(item,index){
  textDivs[index].querySelector('h4').innerText = mainCont[`${textBoxes[index]}h4`];
  textDivs[index].querySelector('p').innerText = mainCont[`${textBoxes[index]}content`];
})

//Contact section:
const contSection = document.querySelector('.contact');
contSection.querySelector('h4').innerText = siteContent['contact']['contact-h4'];
const contPs = contSection.querySelectorAll('p');
contPs[0].innerText = siteContent['contact']['address'];
contPs[1].innerText = siteContent['contact']['phone'];
contPs[2].innerText = siteContent['contact']['email'];

