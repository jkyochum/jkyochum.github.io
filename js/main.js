const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('header');
const headerMenu = document.querySelector('#headerMenu');
const btnNavToggle = document.querySelector('#navToggle');
const burger = document.querySelector('.navLine');
const welcomeWrapper = document.querySelector('#welcomeWrapper');
const scrollArrow = document.querySelector('#scrollArrow');
const projects = document.querySelector('#projects');

//Event Handlers

btnNavToggle.addEventListener('click', toggleNav);

headerMenu.addEventListener('click', (e) => {
    console.log(e);
    const className = e.target.parentElement.className;
    if (className === 'navLink') {
        toggleNav();
    }
});

scrollArrow.addEventListener('click', arrowScroll);

document.addEventListener('scroll', (e) => {
    if (window.scrollY > 90) {
        // header.style.top = '0';
        header.classList.add('open');
        header.classList.remove('closed');
    }
    else {
        // header.style.top = '-70px';
        // header.style.position = 'fixed';
        header.classList.add('closed');
        header.classList.remove('open');
    }
});


//Helper Functions

function toggleScrollbar(open) {
    // if (open) {
    //     setTimeout(() => {
    //         body.style.overflow = 'hidden';
    //     }, '800');
    if (open) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }

    // } else {
    //     setTimeout(() => {
    //         body.style.overflow = '';
    //     }, '800');

    // }
}

function arrowScroll() {
    projects.scrollIntoView();
}

function toggleNav() {
    if (headerMenu.classList.contains('closed')) {
        headerMenu.classList.add('open');
        headerMenu.classList.remove('closed');
        burger.classList.add('open');
        burger.classList.remove('closed');
        // navToggle.style.right = '2.1rem';
        toggleScrollbar(true);
        html.style.backgroundColor = '#a33c3c';

    } else {
        headerMenu.classList.add('closed');
        headerMenu.classList.remove('open');
        burger.classList.add('closed');
        burger.classList.remove('open');
        navToggle.style.right = '1rem';
        toggleScrollbar(false);
        html.style.backgroundColor = '#ffffff';
    }
}


// window.onload = (e) => {
//     window.scrollY = 0;
// };

