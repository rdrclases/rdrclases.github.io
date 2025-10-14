// ELEMENTS by ID
const body = document.body;
const menu = document.getElementById("menu");
const mainHeader = document.getElementById("main-header");
const headerBackDrop = document.getElementById("header-backdrop");

const mobileNav = document.getElementById("mobile-nav");
const mobileNavHeader = document.getElementById("mobile-nav-header");
const mobileNavBody = document.getElementById("mobile-nav-body");
const smallLogo = document.getElementById("small-logo");

// MENU BUTTONS by ID
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const homeButton = document.getElementById("home-button");
const aboutButton = document.getElementById("about-button");
const methodButton = document.getElementById("method-button");
const lessonsButton = document.getElementById("lessons-button");
const pricingButton = document.getElementById("pricing-button");
const contactButton = document.getElementById("contact-button");

// BUTTONS by ClassName
const ctaContactButtons = document.getElementsByClassName("cta-contact-button");


// Open/Close menu
openMenuButton.addEventListener('click', (event) => {
    body.classList.toggle("menu-is-open");
    mainHeader.classList.toggle("menu-is-open");
    mobileNav.classList.toggle("menu-is-open");
    mobileNavBody.classList.toggle("is-open");
    openMenuButton.classList.toggle("is-displayed");
    closeMenuButton.classList.toggle("is-displayed");
    smallLogo.classList.toggle("is-displayed");
    // headerBackDrop.classList.toggle("is-displayed");
});

closeMenuButton.addEventListener('click', () => {
    body.classList.toggle("menu-is-open");
    mainHeader.classList.toggle("menu-is-open");
    mobileNav.classList.toggle("menu-is-open");
    mobileNavBody.classList.toggle("is-open");
    openMenuButton.classList.toggle("is-displayed");
    closeMenuButton.classList.toggle("is-displayed");
    smallLogo.classList.toggle("is-displayed");
    // headerBackDrop.classList.toggle("is-displayed");
});

