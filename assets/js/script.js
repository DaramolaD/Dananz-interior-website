


const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
    if( window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active")
    }
}

window.addEventListener("scroll", activeElementOnScroll)


const navbar = document.querySelector("[data-navbar]");

const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    if( window.scrollY < 50) {
        header.classList.toggle("active");
    }
}

navToggler.addEventListener("click", toggleNavbar)