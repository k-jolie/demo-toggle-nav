// Step 1: Select the element the user will click on
const btn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

// Step 2: Add a click event to the button
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    // if (nav.classList.contains('show-nav')) {
    //     nav.classList.remove('show-nav');
    // } else {
    //     nav.classList.add('show-nav');
    // }
    nav.classList.toggle('show-nav');
});