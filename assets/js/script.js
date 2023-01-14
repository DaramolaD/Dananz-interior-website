


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

const Btn = document.getElementById("submit")
const alertCont = document.getElementById("alert")
const alertTextCont = document.getElementById("alertTextCont")
const cancelBtn = document.getElementById("cancel")
const bodyId = document.getElementById("bodyCont") 
const overLay = document.getElementById("overlay") 

const alertDisplay = function () {
    console.log("there");
    bodyId.classList.add("relative");
    alertCont.classList.add("active");
    alertTextCont.style.display = "flex"
    overLay.classList.add("active");
}

Btn.addEventListener("click", alertDisplay)

window.addEventListener("click", e => {
    if(e.target === alertCont || e.target === alertTextCont || e.target === overLay || e.target === cancelBtn) {
        alertCont.classList.remove("active")
        alertTextCont.style.display = "none"
        overLay.classList.remove("active")
        console.log("more den conqueror");
    }
})

webkitURL.addEventListener("click", e => {
    if(e.target === childRen) {
        console.log("Alright Done");
    }
})