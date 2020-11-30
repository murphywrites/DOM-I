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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Display nav
const firstNavLink = document.querySelector('a')
firstNavLink.textContent = siteContent.nav["nav-item-1"]
const secondNavLink = firstNavLink.nextElementSibling
secondNavLink.textContent = siteContent.nav["nav-item-2"]
const thirdNavLink = secondNavLink.nextElementSibling
thirdNavLink.textContent = siteContent.nav["nav-item-3"]
const fourthNavLink = thirdNavLink.nextElementSibling
fourthNavLink.textContent = siteContent.nav["nav-item-4"]
const fifthNavLink = fourthNavLink.nextElementSibling
fifthNavLink.textContent = siteContent.nav["nav-item-5"]
const sixthNavLink = fifthNavLink.nextElementSibling
sixthNavLink.textContent = siteContent.nav["nav-item-6"]

// display h1

const ctaH1 = document.querySelector(".cta-text h1")
// ctaH1.textContent = siteContent.cta.h1
ctaH1.innerHTML = 'DOM<br> Is<br> Awesome'

//display button text

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

//add code snippet header image

const codeSnipImg = document.querySelector('#cta-img');

codeSnipImg.setAttribute("src", siteContent.cta["img-src"])

// add top content

const topContent = document.querySelector(".top-content")
const firstTop = topContent.children[0];
const secondTop = topContent.children[1];

const firstTopH4 = firstTop.querySelector('h4');
firstTopH4.textContent = siteContent["main-content"]["features-h4"]

const firstTopPara = firstTop.querySelector('p');
firstTopPara.textContent = siteContent["main-content"]["features-content"];

const secondTopH4 = secondTop.querySelector('h4');
secondTopH4.textContent = siteContent["main-content"]["about-h4"]

const secondTopPara = secondTop.querySelector('p');
secondTopPara.textContent = siteContent["main-content"]["about-content"];

// add middle img

const midImg = document.querySelector('#middle-img')
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

// add bottom content

const bottomContent = document.querySelector(".bottom-content")
const firstbottom = bottomContent.children[0];
const secondbottom = bottomContent.children[1];
const thirdbottom = bottomContent.children[2];

const firstbottomH4 = firstbottom.querySelector('h4');
firstbottomH4.textContent = siteContent["main-content"]["services-h4"]

const firstbottomPara = firstbottom.querySelector('p');
firstbottomPara.textContent = siteContent["main-content"]["services-content"];

const secondbottomH4 = secondbottom.querySelector('h4');
secondbottomH4.textContent = siteContent["main-content"]["product-h4"]

const secondbottomPara = secondbottom.querySelector('p');
secondbottomPara.textContent = siteContent["main-content"]["product-content"];

const thirdbottomH4 = thirdbottom.querySelector('h4');
thirdbottomH4.textContent = siteContent["main-content"]["vision-h4"];

const thirdbottomPara = thirdbottom.querySelector('p');
thirdbottomPara.textContent = siteContent["main-content"]["vision-content"];

// add contact

const contact = document.querySelector('.contact');

const contactH4 = contact.querySelector('h4');
contactH4.textContent = siteContent.contact["contact-h4"];

const contactMailAddress = contact.children[1];
contactMailAddress.textContent = siteContent.contact.address;

const contactPhone = contact.children[2];
contactPhone.textContent = siteContent.contact.phone;

const contactEmail = contact.children[3];
contactEmail.textContent = siteContent.contact.email;

// add footer

const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;