(function () {


    // ELEMENTS by ID
    const body = document.body;
    const menu = document.getElementById("menu");
    const mainHeader = document.getElementById("main-header");
    const headerBackDrop = document.getElementById("header-backdrop");

    const mobileNav = document.getElementById("mobile-nav");
    const mobileNavHeader = document.getElementById("mobile-nav-header");
    const mobileNavBody = document.getElementById("mobile-nav-body");
    const smallLogoDark = document.getElementById("small-logo-dark");
    const smallLogoLight = document.getElementById("small-logo-light");
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

    // CONTACT INFO BUTTONS
    const copyEmailButton = document.getElementById("copy-email-button");
    const openTelegramButton = document.getElementById("open-telegram-button");
    const openWhatsappButton = document.getElementById("open-whatsapp-button");

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
    const ctaAboutButtons = document.getElementsByClassName("cta-about-button");
    const ctaMethodButtons = document.getElementsByClassName("cta-method-button");
    const ctaLessonsButtons = document.getElementsByClassName("cta-lessons-button");
    const ctaPricingButtons = document.getElementsByClassName("cta-pricing-button");

    // FUNCTIONS
    function toggleMenu() {
        body.classList.toggle("menu-is-open");
        mainHeader.classList.toggle("menu-is-open");
        mobileNav.classList.toggle("menu-is-open");
        mobileNavBody.classList.toggle("is-open");
        openMenuButton.classList.toggle("is-displayed");
        closeMenuButton.classList.toggle("is-displayed");
        smallLogoDark.classList.toggle("is-displayed");
    }

    function deactivateMenuButtons() {
        for (const button of navButtons) {
            if (button.classList.contains('is-active')) {
                button.classList.toggle('is-active');
            }
        }
    }

    function activateMenuButton(button) {
        button.classList.toggle("is-active");
    }

    function gotoHome() {
        for (const article of articles) {
            if (article.classList.contains('is-visible')) {
                article.classList.toggle('is-visible');
            }
        }
        home.classList.toggle('is-visible');

        if (bannerLogo.classList.contains('is-hidden')) {
            bannerLogo.classList.toggle('is-hidden');
        }

        smallLogoLight.classList.remove('is-displayed');
    }

    function gotoAbout() {
        for (const article of articles) {
            if (article.classList.contains('is-visible')) {
                article.classList.toggle('is-visible');
            }
        }
        // smallLogoLight.classList.add('is-displayed');
        about.classList.toggle('is-visible');
        bannerLogo.classList.add('is-hidden');
        smallLogoLight.classList.add('is-displayed');
    }

    function gotoMethod() {
        for (const article of articles) {
            if (article.classList.contains('is-visible')) {
                article.classList.toggle('is-visible');
            }
        }
        // smallLogoLight.classList.add('is-displayed');
        method.classList.toggle('is-visible');
        bannerLogo.classList.add('is-hidden');
        smallLogoLight.classList.add('is-displayed');
    }

    function gotoLessons() {
        for (const article of articles) {
            if (article.classList.contains('is-visible')) {
                article.classList.toggle('is-visible');
            }
        }
        // smallLogoLight.classList.add('is-displayed');
        lessons.classList.toggle('is-visible');
        bannerLogo.classList.add('is-hidden');
        smallLogoLight.classList.add('is-displayed');
    }

    function gotoPricing() {
        for (const article of articles) {
            if (article.classList.contains('is-visible')) {
                article.classList.toggle('is-visible');
            }
        }
        // smallLogoLight.classList.add('is-displayed');
        pricing.classList.toggle('is-visible');
        bannerLogo.classList.add('is-hidden');
        smallLogoLight.classList.add('is-displayed');
    }

    function gotoContact() {
        for (const article of articles) {
            if (article.classList.contains('is-visible')) {
                article.classList.toggle('is-visible');
            }
        }
        // smallLogoLight.classList.add('is-displayed');
        contact.classList.toggle('is-visible');
        bannerLogo.classList.add('is-hidden');
        smallLogoLight.classList.add('is-displayed');
    }

    // EVENT LISTENERS

    // Open/Close menu
    openMenuButton.addEventListener('click', toggleMenu);
    mobileNavBody.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);

    // highlights the menu button's texts when clicked (deselecting any previously selected)
    for (const button of navButtons) {
        button.addEventListener('click', (event) => {
            deactivateMenuButtons();
            activateMenuButton(event.target);
        });
    }

    homeButton.addEventListener('click', gotoHome);

    aboutButton.addEventListener('click', gotoAbout);

    methodButton.addEventListener('click', gotoMethod);

    lessonsButton.addEventListener('click', gotoLessons);

    pricingButton.addEventListener('click', gotoPricing);

    contactButton.addEventListener('click', gotoContact);


    for (const ctaAboutButton of ctaAboutButtons) {
        ctaAboutButton.addEventListener('click', () => {
            gotoAbout();
            deactivateMenuButtons();
            activateMenuButton(aboutButton);
        });
    }

    for (const ctaMethodButton of ctaMethodButtons) {
        ctaMethodButton.addEventListener('click', () => {
            gotoMethod();
            deactivateMenuButtons();
            activateMenuButton(methodButton);
        });
    }

    for (const ctaLessonsButton of ctaLessonsButtons) {
        ctaLessonsButton.addEventListener('click', () => {
            gotoLessons();
            deactivateMenuButtons();
            activateMenuButton(lessonsButton);
        });
    }

    for (const ctaPricingButton of ctaPricingButtons) {
        ctaPricingButton.addEventListener('click', () => {
            gotoPricing();
            deactivateMenuButtons();
            activateMenuButton(pricingButton);
        });
    }

    for (const ctaContactButton of ctaContactButtons) {
        ctaContactButton.addEventListener('click', () => {
            gotoContact();
            deactivateMenuButtons();
            activateMenuButton(contactButton);
        });
    }

    // When any menu button or cta button is clicked, the page is scrolled back to the top
    for (const button of allButtons) {
        if (!button.classList.contains('open-menu-button') && !button.classList.contains('close-menu-button')) {
            button.addEventListener('click', () => {
                window.scrollTo(0, 0);
            });
        }
    }

    copyEmailButton.addEventListener('click', () => {
        const value = 'rdrclases@gmail.com';
        navigator.clipboard.writeText(value)
            .then(() => {
                const successMessage = 'Email copiado';
                const alert = document.createElement('div');
                alert.classList.add('alert-container');
                alert.innerHTML = `<span class="alert-message success">${successMessage}</span>`;

                // Initial state
                alert.style.opacity = '0';
                alert.style.transition = 'opacity 0.4s ease-in-out';
                body.appendChild(alert);

                // --- Force browser to render initial state first ---
                requestAnimationFrame(() => {
                    // This ensures the first frame (opacity 0) is painted
                    requestAnimationFrame(() => {
                        alert.style.opacity = '1'; // Fade in
                    });
                });

                // --- Wait 0.4s fade-in + 0.8s visible = 1.2s total ---
                setTimeout(() => {
                    alert.style.opacity = '0'; // Fade out
                    setTimeout(() => {
                        alert.remove(); // Remove after fade-out completes (0.4s)
                    }, 400);
                }, 1200);
            })
            .catch(err => console.error('Failed to copy the email to the clipboard', err));
    });

    openTelegramButton.addEventListener('click', () => {
        window.open('https://t.me/rdrclases', '_blank');
    });


    // Makes the small white logo toggle when the banner logo goes in and out of view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                smallLogoLight.classList.remove('is-displayed');
            } else {
                smallLogoLight.classList.add('is-displayed');
            }
        });
    }, {
        root: null,
        // this value is calculated as the ratio of the height of the element in and its bottom padding
        threshold: 0.267
    });

    observer.observe(bannerLogo);

})();