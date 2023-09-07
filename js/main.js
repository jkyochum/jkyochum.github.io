const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('header');
const slidingMenu = document.querySelector('#slidingMenu');
const btnNavToggle = document.querySelector('#navToggle');
const burger = document.querySelector('.navLine');
const welcomeWrapper = document.querySelector('#welcomeWrapper');
const scrollArrow = document.querySelector('#scrollArrow');
const projects = document.querySelector('#projects');
const resumeModal = document.querySelector('#resumeModal');
const resume = document.querySelector('.resume');
const fixedMenu = document.querySelector('#fixedMenu');
const welcomeResume = document.querySelector('#welcomeResume');
const footerNav = document.querySelector('#footerNav');
const footerResume = document.querySelector('#resume');

//Event Handlers

btnNavToggle.addEventListener('click', toggleNav);

scrollArrow.addEventListener('click', arrowScroll);

slidingMenu.addEventListener('click', (e) => {
    console.log(e);
    const className = e.target.parentElement.className;
    const parentId = e.target.parentElement.id;
    if (className === 'navLink') {
        toggleNav();
    }

    if (parentId === 'headerResume') {
        resumeModal.classList.remove('closed');
        toggleScrollbar(true);
        html.style.backgroundColor = 'rgba(0, 0, 0, 0.8';

    }
});

resumeModal.addEventListener('click', (e) => {
    closeResumeModal(e);
});

footerNav.addEventListener('click', (e) => {
    if (e.target.parentElement.parentElement.parentElement.parentElement.id === 'resume' || e.target.parentElement.parentElement.parentElement.id === 'resume' || e.target.parentElement.parentElement.id === 'resume' || e.target.parentElement.id === 'resume' || e.target.id === 'resume') {
        resumeModal.classList.remove('closed');
        toggleScrollbar(true);
    }
});

fixedMenu.addEventListener('click', (e) => {
    const parentId = e.target.parentElement.id;
    if (parentId === 'welcomeResume') {
        resumeModal.classList.remove('closed');
        toggleScrollbar(true);
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
        burger.classList.add('open');
        burger.classList.remove('closed');
        // navToggle.style.right = '2.1rem';
        toggleScrollbar(true);
        html.style.backgroundColor = '#a33c3c';

    } else {
        slidingMenu.classList.add('closed');
        slidingMenu.classList.remove('open');
        burger.classList.add('closed');
        burger.classList.remove('open');
        // navToggle.style.right = '1rem';
        toggleScrollbar(false);
        html.style.backgroundColor = '#ffffff';
    }
}

function closeResumeModal(e) {
    if (e.target.parentElement.id !== 'resumeCard') {
        resumeModal.classList.add('closed');
        toggleScrollbar(false);
    }
}

// window.onload = (e) => {
//     window.scrollY = 0;
// };

