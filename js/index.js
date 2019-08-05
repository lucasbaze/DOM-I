const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png',
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png',
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content':
            'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content':
            'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content':
            'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content':
            'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content':
            'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io',
    },
    footer: {
        copyright: 'Copyright Great Idea! 2018',
    },
};

//Helper Functions
let counter = () => {
    i = 0;
    return () => {
        console.log(i);
        return i++;
    };
};

linkCounter = counter();

//
//Header
//

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let siteContentNav = Object.entries(siteContent.nav);

let navLinks = document.querySelectorAll('a');
navLinks.forEach(element => {
    let i = linkCounter();
    element.textContent = siteContentNav[i][1];
});

//New Nav Items
let navMenu = document.querySelector('nav');

let pricing = document.createElement('a');
pricing.textContent = 'Pricing';
pricing.href = 'https://facebook.com';
pricing.setAttribute('target', '_blank');

let stories = document.createElement('a');
stories.textContent = 'Stories';

navMenu.appendChild(pricing);
navMenu.prepend(stories);

//Change Colors of Links
document.querySelectorAll('nav a').forEach(e => (e.style.color = 'green'));

//
//CTAs
//

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

//
//Main content Top
//

let featuresHeader = document.querySelector('.top-content > .text-content h4');
featuresHeader.textContent = siteContent['main-content']['features-h4'];

let featuresParagraph = document.querySelector(
    '.top-content .text-content:first-child p'
);
featuresParagraph.textContent = siteContent['main-content']['features-content'];

let aboutHeader = document.querySelector(
    '.top-content .text-content:last-child h4'
);
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutParagraph = document.querySelector(
    '.top-content .text-content:last-child p'
);
aboutParagraph.textContent = siteContent['main-content']['about-content'];

//
// IMG
//

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//
//Main Content bottom
//

let servicesHeader = document.querySelector(
    '.bottom-content .text-content:first-child h4'
);
servicesHeader.textContent = siteContent['main-content']['services-h4'];

let servicesParagraph = document.querySelector(
    '.bottom-content .text-content:first-child p'
);
servicesParagraph.textContent = siteContent['main-content']['services-content'];

let productHeader = document.querySelector(
    '.bottom-content .text-content:nth-child(2) h4'
);
productHeader.textContent = siteContent['main-content']['product-h4'];

let productParagraph = document.querySelector(
    '.bottom-content .text-content:nth-child(2) p'
);
productParagraph.textContent = siteContent['main-content']['product-content'];

let visionHeader = document.querySelector(
    '.bottom-content .text-content:last-child h4'
);
visionHeader.textContent = siteContent['main-content']['vision-h4'];

let visionParagraph = document.querySelector(
    '.bottom-content .text-content:last-child p'
);
visionParagraph.textContent = siteContent['main-content']['vision-content'];

//
// Contact Section
//

let contactNav = Object.entries(siteContent.contact);
let contactSection = document.querySelectorAll('.contact *');

contactCounter = counter();

contactSection.forEach(element => {
    let i = contactCounter();
    element.textContent = contactNav[i][1];
});

//footer

let footer = document.querySelector('footer p:only-child');
footer.textContent = siteContent.footer.copyright;

//Event Listeners
ctaButton.addEventListener('click', function() {
    this.classList.toggle('greenBg');
});

let body = document.querySelector('body');

window.addEventListener('load', e => {
    console.log('page loaded');
});

window.addEventListener('scroll', function(e) {
    console.log(window.scrollY);
});
