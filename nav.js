// Grabbing elements to be used
const menu_bar = document.querySelector('.menu-bar');
const bars = document.querySelectorAll('.menu-bar div');
const overlay_nav = document.querySelector('.overlay-nav');
const nav_items = document.querySelectorAll('.overlay-nav li');

const displayNav = () => {
    bars.forEach(bar => bar.classList.toggle('change'));
    overlay_nav.classList.contains('overlay-nav') ? overlay_nav.classList.replace('overlay-nav', 'show-nav') : overlay_nav.classList.replace('show-nav', 'overlay-nav');
}

// Animating the menu_bar on click and  displaying nav menu
menu_bar.addEventListener('click', displayNav);

// Eventlistener for when any of the nav items is clicked to take off the nav overlay
nav_items.forEach(item => {
    item.addEventListener('click', () => {
        if (overlay_nav.classList.contains('show-nav')) {
            overlay_nav.classList.replace('show-nav', 'overlay-nav');
        }
        bars.forEach(bar => bar.classList.toggle('change'));
    })
})

