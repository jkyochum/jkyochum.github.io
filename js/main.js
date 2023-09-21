const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('header');
const menuOverlay = document.querySelector('#menuOverlay');
const slidingMenu = document.querySelector('#slidingMenu');
const btnNavToggle = document.querySelector('#navToggle');
const burger = document.querySelector('.navLine');
const welcomeWrapper = document.querySelector('#welcomeWrapper');
const scrollArrow = document.querySelector('#scrollArrow');
const projects = document.querySelector('#projects');
const contactModal = document.querySelector('#contactModal');
const contactExit = document.querySelector('#contactExitBtn');
const messageSentCard = document.querySelector('#messageSent');
const messageSentExit = document.querySelector('#messageSentBtn');
const resumeModal = document.querySelector('#resumeModal');
const resume = document.querySelector('.resume');
const fixedMenu = document.querySelector('#fixedMenu');
const welcomeResume = document.querySelector('#welcomeResume');
const footerNav = document.querySelector('#footerNav');
const footerResume = document.querySelector('#resume');


//Event Handlers

btnNavToggle.addEventListener('click', toggleNav);

scrollArrow.addEventListener('click', arrowScroll);

menuOverlay.addEventListener('click', toggleNav);

//Event listener for links in the slide-out menu
slidingMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.className === 'navLink') {
        toggleNav();
    }

    //clicking inside of sliding menu empty space will trigger toggle button focus
    if (target.id === 'slidingMenu' || e.target.tagName === 'LI' || e.target.tagName === 'UL') {
        btnNavToggle.focus();
    }

    if (target.id === 'headerContact') {
        contactModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }

    if (target.id === 'headerResume') {
        resumeModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }
});

contactModal.addEventListener('click', (e) => {
    closeContactModal(e);
    const target = e.target;

    console.log(target);
    if (target.id === 'contactHeader' || target.id === 'contactForm' || target.id === 'contactCard') {
        contactExit.focus();
    }
});

resumeModal.addEventListener('click', (e) => {
    closeResumeModal(e);
});

//Click events for the footer SVG elements
footerNav.addEventListener('click', (e) => {
    if (e.target.parentElement.parentElement.parentElement.parentElement.id === 'footerResume' || e.target.parentElement.parentElement.parentElement.id === 'footerResume' || e.target.parentElement.parentElement.id === 'footerResume' || e.target.parentElement.id === 'footerResume' || e.target.id === 'footerResume') {
        resumeModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }

    if (e.target.parentElement.parentElement.parentElement.parentElement.id === 'footerContact' || e.target.parentElement.parentElement.parentElement.id === 'footerContact' || e.target.parentElement.parentElement.id === 'footerContact' || e.target.parentElement.id === 'footerContact' || e.target.id === 'footerContact') {
        contactModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }
});

//Opening links on the fixed welcome menu
fixedMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.id === 'welcomeContact') {
        contactModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }

    if (target.id === 'welcomeResume') {
        resumeModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }
});


//Listener to activate header toggle
document.addEventListener('scroll', (e) => {
    if (window.scrollY > 90) {
        header.classList.add('open');
        header.classList.remove('closed');
    }
    else {
        header.classList.add('closed');
        header.classList.remove('open');
    }
});

//Setting tab order for page elements
document.addEventListener('keydown', (e) => {
    const activeElement = document.activeElement;

    const target = e.target;
    checkForOpenHeader();

    if (e.key === 'Enter') {
        if (target.id === 'scrollArrow') {
            arrowScroll();
        }

        if (target.id === 'navToggle') {
            toggleNav();
        }

        if (target.id === 'headerContact') {
            contactModal.classList.remove('closed');
            toggleScrollbar(true);
            html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
            toggleNav();
        }

        if (target === contactExit) {
            closeContactModal(e);
            btnNavToggle.focus();
        }

        if (target.id === 'headerResume') {
            resumeModal.classList.remove('closed');
            toggleScrollbar(true);
            html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
            toggleNav();
        }
    }


    //making sliding menu tabbable upon opening
    if (slidingMenu.classList.contains('open')) {

        const menu = slidingMenu.firstElementChild;
        const menuItems = menu.children;
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].firstChild.setAttribute('tabindex', '0');
        }

        if (e.key === 'Tab') {
            e.preventDefault();
            if (activeElement.id === 'navToggle') {
                menu.firstElementChild.firstElementChild.focus();
            } else {
                if (activeElement === menu.lastElementChild.firstElementChild) {
                    btnNavToggle.focus();
                } else {
                    activeElement.parentElement.nextElementSibling.firstElementChild.focus();
                }
            }
        }

        if (e.shiftKey) {
            if (e.key === 'Tab') {
                if (activeElement.id === 'navToggle') {
                    menu.lastElementChild.firstElementChild.focus();
                } else {
                    if (activeElement === menu.firstElementChild.firstElementChild) {
                        btnNavToggle.focus();
                    } else {
                        activeElement.parentElement.previousElementSibling.firstElementChild.focus();
                    }
                }
            }
        }
    } else if (slidingMenu.classList.contains('closed')) {
        const menu = slidingMenu.firstElementChild;
        const menuItems = menu.children;
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].firstChild.setAttribute('tabindex', '-1');
        }
    }

    //making contact page tabbable upon opening
    if (!contactModal.classList.contains('closed')) {
        const contactExit = document.querySelector('#contactExitBtn');
        const contactForm = document.querySelector('#contactForm');
        contactExit.setAttribute('tabindex', '0');
        if (e.key === 'Tab') {
            e.preventDefault();
            console.log(activeElement);

            if (activeElement.classList.contains('navLink') || activeElement === contactExit) {
                contactForm.firstElementChild.focus();
            } else if (activeElement === contactForm.lastElementChild) {
                contactExit.focus();
            } else {
                activeElement.nextElementSibling.focus();
            }
        }

        if (e.shiftKey) {
            if (e.key === 'Tab') {
                if (activeElement === contactExit) {
                    contactForm.lastElementChild.focus();
                } else if (activeElement === contactForm.firstElementChild) {
                    contactExit.focus();
                } else {
                    activeElement.previousElementSibling.focus();
                }
            }
        }
    }

    //making message sent page tabbable upon opening
    if (!msgSentCard.classList.contains('closed')) {
        const sendAnotherBtn = document.querySelector('#btnSendAnother');
        messageSentExit.setAttribute('tabindex', '0');
        sendAnotherBtn.setAttribute('tabindex', '0');

        if (e.key === 'Tab') {
            e.preventDefault();
            if (activeElement.id === 'btnSendMessage') {
                sendAnotherBtn.focus();
            } else if (activeElement === sendAnotherBtn) {
                messageSentExit.focus();
            } else if (activeElement === messageSentExit) {
                sendAnotherBtn.focus();
            }
        }
    }

});

//If window size is so large, close the side navigation menu to allow for fixed menu to display
window.addEventListener('resize', (e) => {
    let width = document.documentElement.clientWidth + 17;

    if (slidingMenu.classList.contains('open')) {
        if (width >= 1024) {
            toggleNav();
        }
    }

});


//Helper Functions

//Function to eliminate scrollbar action
function toggleScrollbar(open) {
    if (open) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

function checkForOpenHeader() {
    if (header.classList.contains('open')) {
        header.firstElementChild.firstElementChild.firstElementChild.setAttribute('tabindex', '0');
    } else {
        header.firstElementChild.firstElementChild.firstElementChild.setAttribute('tabindex', '-1');
    }
}

function arrowScroll() {
    projects.scrollIntoView();
}

//Function to toggle sliding navigation menu when used in the event listener
function toggleNav() {
    if (slidingMenu.classList.contains('closed')) {
        slidingMenu.classList.add('open');
        slidingMenu.classList.remove('closed');
        menuOverlay.classList.remove('closed');
        burger.classList.add('open');
        burger.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = '#a33c3c';

    } else {
        slidingMenu.classList.add('closed');
        slidingMenu.classList.remove('open');
        menuOverlay.classList.add('closed');
        burger.classList.add('closed');
        burger.classList.remove('open');
        toggleScrollbar(false);
        html.style.backgroundColor = '#ffffff';
    }
}

//Alternate ways to close contact modal screen
function closeContactModal(e) {
    if (e.target.id === 'contactModal' || e.target.id === 'contactExitBtn' || e.target.id === 'messageSentExitBtn') {
        contactModal.classList.add('closed');
        toggleScrollbar(false);
    }
}

//Alternate ways to close resume modal screen
function closeResumeModal(e) {
    if (e.target.parentElement.id !== 'resumeCard' || e.target.id === 'resumeExitBtn') {
        resumeModal.classList.add('closed');
        toggleScrollbar(false);
    }
}
