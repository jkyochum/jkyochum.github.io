const headerNav = document.querySelector('#headerNav');
const btnNavToggle = document.querySelector('#navToggle');

//Event Handlers

btnNavToggle.addEventListener('click', toggleNav);


//Helper Functions

function toggleNav() {
    if (headerNav.classList.contains('closed')) {
        headerNav.style.right = '-3%';
        headerNav.classList.add('open');
        headerNav.classList.remove('closed');
    } else {
        headerNav.style.right = '-104%';
        headerNav.classList.add('closed');
        headerNav.classList.remove('open');
    }
}