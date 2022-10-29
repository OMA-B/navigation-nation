// Grabbing elements to be used
const menu_bar = document.querySelector('.menu-bar');
const bars = document.querySelectorAll('.menu-bar div');
const overlay_nav = document.querySelector('.overlay-nav');
const nav_items = document.querySelectorAll('.overlay-nav li');

const displayNav = () => {
    // to remove hidden effect of the nav overlay after page loads
    overlay_nav.hidden = false;
    // Animating the menu_bar on click
    bars.forEach(bar => bar.classList.toggle('change'));
    // displaying nav menu
    overlay_nav.classList.contains('overlay-nav') ? overlay_nav.classList.replace('overlay-nav', 'show-nav') : overlay_nav.classList.replace('show-nav', 'overlay-nav');
    // to cause slide in out effect on each nav items
    nav_items.forEach(item => item.classList.toggle('change'));
}

// Animating the menu_bar on click and  displaying nav menu
menu_bar.addEventListener('click', displayNav);

// Eventlistener for when any of the nav items is clicked to take off the nav overlay
nav_items.forEach(item => {
    item.addEventListener('click', () => {
        if (overlay_nav.classList.contains('show-nav')) {
            overlay_nav.classList.replace('show-nav', 'overlay-nav');
            // to remove slide in effect on each nav items
            nav_items.forEach(item => item.classList.remove('change'));
        }
        bars.forEach(bar => bar.classList.toggle('change'));
    })
});