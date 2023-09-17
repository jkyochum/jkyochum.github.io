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

slidingMenu.addEventListener('click', (e) => {
    console.log(e);
    const target = e.target;
    if (target.className === 'navLink') {
        toggleNav();
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
    console.log(e);
    closeContactModal(e);
});

resumeModal.addEventListener('click', (e) => {
    closeResumeModal(e);
});

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

fixedMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.parentElement.id === 'welcomeContact' || target.id === 'welcomeContact') {
        contactModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }

    if (target.parentElement.id === 'welcomeResume' || target.id === 'welcomeResume') {
        resumeModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
    }
})

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


//Helper Functions

function toggleScrollbar(open) {
    if (open) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

function arrowScroll() {
    projects.scrollIntoView();
}

function toggleNav() {
    if (slidingMenu.classList.contains('closed')) {
        slidingMenu.classList.add('open');
        slidingMenu.classList.remove('closed');
        menuOverlay.classList.remove('closed');
        burger.classList.add('open');
        burger.classList.remove('closed');
        // navToggle.style.right = '2.1rem';
        toggleScrollbar(true);
        html.style.backgroundColor = '#a33c3c';

    } else {
        slidingMenu.classList.add('closed');
        slidingMenu.classList.remove('open');
        menuOverlay.classList.add('closed');
        burger.classList.add('closed');
        burger.classList.remove('open');
        // navToggle.style.right = '1rem';
        toggleScrollbar(false);
        html.style.backgroundColor = '#ffffff';
    }
}

function closeContactModal(e) {
    if (e.target.id === 'contactModal' || e.target.id === 'contactExitBtn' || e.target.id === 'messageSentExitBtn') {
        contactModal.classList.add('closed');
        toggleScrollbar(false);
    }
}

function closeResumeModal(e) {
    if (e.target.parentElement.id !== 'resumeCard' || e.target.id === 'resumeExitBtn') {
        resumeModal.classList.add('closed');
        toggleScrollbar(false);
    }
}

// window.onload = (e) => {
//     window.scrollY = 0;
// };

