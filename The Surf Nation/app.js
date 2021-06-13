// Add animation to navbar hamburger button

// Find HTML div with the id of mobile-menu which contains hamburger lines
const menu = document.querySelector("#mobile-menu");

// HTML div with all menu items and links
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");

// Display mobile menu
const mobileMenu = () => {
    // add is-active class to span elements when they are toggled 
    menu.classList.toggle("is-active");

    // add active class to menu links when they are toggled
    menuLinks.classList.toggle('active');

};

// Activate mobileMenu functioon 
menu.addEventListener("click", mobileMenu);