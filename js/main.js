const body = document.querySelector('body');
const headerNav = document.querySelector('#headerNav');
const btnNavToggle = document.querySelector('#navToggle');
const burger = document.querySelector('.navLine');

//Event Handlers

btnNavToggle.addEventListener('click', toggleNav);

headerNav.addEventListener('click', (e) => {
    console.log(e);
    const className = e.target.parentElement.className;
    if (className === 'navLink') {
        toggleNav();
    }
});


//Helper Functions

function toggleScrollbar(open) {
    if (open) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

function toggleNav() {
    if (headerNav.classList.contains('closed')) {
        headerNav.classList.add('open');
        headerNav.classList.remove('closed');
        burger.classList.add('open');
        burger.classList.remove('closed');
        navToggle.style.right = '2.05rem';
        toggleScrollbar(true);

    } else {
        headerNav.classList.add('closed');
        headerNav.classList.remove('open');
        burger.classList.add('closed');
        burger.classList.remove('open');
        navToggle.style.right = '1rem';
        toggleScrollbar(false);

    }
}