// ELEMENTS by ID
const body = document.body;
const menu = document.getElementById("menu");
const mainHeader = document.getElementById("main-header");
const headerBackDrop = document.getElementById("header-backdrop");

const mobileNav = document.getElementById("mobile-nav");
const mobileNavHeader = document.getElementById("mobile-nav-header");
const mobileNavBody = document.getElementById("mobile-nav-body");
const smallLogo = document.getElementById("small-logo");
const bannerLogo = document.getElementById("banner-logo");

const allButtons = document.getElementsByTagName("button");

// MENU BUTTONS by ID
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

// NAVIGATION BUTTONS by ID
const homeButton = document.getElementById("home-button");
const aboutButton = document.getElementById("about-button");
const methodButton = document.getElementById("method-button");
const lessonsButton = document.getElementById("lessons-button");
const pricingButton = document.getElementById("pricing-button");
const contactButton = document.getElementById("contact-button");

// NAVIGATION BUTTONS by CLASSNAME
const navButtons = document.getElementsByClassName('menu-button');

// ARTICLES by ID
const home = document.getElementById('home');
const about = document.getElementById('about');
const method = document.getElementById('method');
const lessons = document.getElementById('lessons');
const pricing = document.getElementById('pricing');
const contact = document.getElementById('contact');

// ARTICLE by tagname
const articles = document.getElementsByTagName('article');

// BUTTONS by ClassName
// CTA CONTACT BUTTONS
const ctaContactButtons = document.getElementsByClassName("cta-contact-button");

// FUNCTIONS
function toggleMenu() {
    body.classList.toggle("menu-is-open");
    mainHeader.classList.toggle("menu-is-open");
    mobileNav.classList.toggle("menu-is-open");
    mobileNavBody.classList.toggle("is-open");
    openMenuButton.classList.toggle("is-displayed");
    closeMenuButton.classList.toggle("is-displayed");
    smallLogo.classList.toggle("is-displayed");
}

// EVENT LISTENERS

// Open/Close menu
openMenuButton.addEventListener('click', toggleMenu);
mobileNavBody.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

// highlighting the buttons texts when clicked (deselecting any previously selected)
for (const button of navButtons) {
    button.addEventListener('click', (event) => {
        for (const button of navButtons) {
            if (button.classList.contains('is-active')) {
                button.classList.toggle('is-active');
            }
        }
        event.target.classList.toggle('is-active');
    });
}

homeButton.addEventListener('click', () => {
    for (const article of articles) {
        if (article.classList.contains('is-visible')) {
            article.classList.toggle('is-visible');
        }
    }
    home.classList.toggle('is-visible');

    if (bannerLogo.classList.contains('is-hidden')) {
        bannerLogo.classList.toggle('is-hidden');
    }

    mainHeader.classList.add('extra-padded');
});

aboutButton.addEventListener('click', () => {
    for (const article of articles) {
        if (article.classList.contains('is-visible')) {
            article.classList.toggle('is-visible');
        }
    }
    about.classList.toggle('is-visible');
    bannerLogo.classList.add('is-hidden');
    mainHeader.classList.remove('extra-padded');
});

methodButton.addEventListener('click', () => {
    for (const article of articles) {
        if (article.classList.contains('is-visible')) {
            article.classList.toggle('is-visible');
        }
    }
    method.classList.toggle('is-visible');
    bannerLogo.classList.add('is-hidden');
});

lessonsButton.addEventListener('click', () => {
    for (const article of articles) {
        if (article.classList.contains('is-visible')) {
            article.classList.toggle('is-visible');
        }
    }
    lessons.classList.toggle('is-visible');
    bannerLogo.classList.add('is-hidden');
});

pricingButton.addEventListener('click', () => {
    for (const article of articles) {
        if (article.classList.contains('is-visible')) {
            article.classList.toggle('is-visible');
        }
    }
    pricing.classList.toggle('is-visible');
    bannerLogo.classList.add('is-hidden');
});

contactButton.addEventListener('click', () => {
    for (const article of articles) {
        if (article.classList.contains('is-visible')) {
            article.classList.toggle('is-visible');
        }
    }
    contact.classList.toggle('is-visible');
    bannerLogo.classList.add('is-hidden');
    mainHeader.classList.remove('extra-padded');
});

for (const ctaContactButton of ctaContactButtons) {
    ctaContactButton.addEventListener('click', () => {
        for (const article of articles) {
            if (article.classList.contains('is-visible')) {
                article.classList.toggle('is-visible');
            }
        }
        for (const navButton of navButtons) {
            navButton.classList.remove('is-active');
        }
        contactButton.classList.toggle('is-active');
        contact.classList.toggle('is-visible');
        bannerLogo.classList.add('is-hidden');
        mainHeader.classList.remove('extra-padded');
    });
}

for (const button of allButtons) {
    if (!button.classList.contains('open-menu-button') && !button.classList.contains('close-menu-button')) {
        button.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }
}