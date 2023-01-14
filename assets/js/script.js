
// -------------- Header --------------

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
    if( window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active")
    }
}

window.addEventListener("scroll", activeElementOnScroll)

// -------------- mobile start -------------- 

const navbar = document.querySelector("[data-navbar]");

const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    if( window.scrollY < 50) {
        header.classList.toggle("active");
    }
}

navToggler.addEventListener("click", toggleNavbar)

// -------------- mobile end --------------

//  -------------- fetching id end --------------

const Btn = document.getElementById("submit")
const alertCont = document.getElementById("alert")
const alertTextCont = document.getElementById("alertTextCont")
const cancelBtn = document.getElementById("cancel")
const bodyId = document.getElementById("bodyCont") 
const overLay = document.getElementById("overlay")



// Variables to acces database collection



// ---------------- Initialize Firebase ----------------


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqaUjoGMq4W6rh41VJdm0bjQzbvtn_MWo",
    authDomain: "contactform-interior-website.firebaseapp.com",
    databaseURL: "https://contactform-interior-website-default-rtdb.firebaseio.com",
    projectId: "contactform-interior-website",
    storageBucket: "contactform-interior-website.appspot.com",
    messagingSenderId: "173387960007",
    appId: "1:173387960007:web:f70428042fe06ad9b178e2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

// Variables to acces database collection
const db = firestore.collection("formData")

//Get submit Form
let submitButton = document.getElementById('submit') 
let warning = document.getElementById("warning");


// ----- form details -----


//create Event Listerner to allow form submission

submitButton.addEventListener('click', (e) => {

    //Prevent the Default form submission behavior
    e.preventDefault()
   
    // Get form values
    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("messsage").value;

    if (firstName === '' || lastName === '' || email === '' || phone === '' || msg === '') {
    //   warning.classList.add("active");
      warning.style.display = 'flex';
      console.log("magic");
    }else {
    //   warning.classList.remove("active");

        // Save form Data to Firebase
        db.doc().set({
            fname: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            msg: msg,
        }).then( () => {
            console.log("Data Saved");
        }).catch((error) => {
            console.log(error);
        })

        // fetching ends

    const alertDisplay = function () {
        // console.log("there-script-js");
        // bodyId.classList.add("relative");
        // alertCont.classList.add("active");
        // alertTextCont.style.display = "flex"
        // overLay.classList.add("active");
    }

    Btn.addEventListener("click", alertDisplay)

    window.addEventListener("click", e => {
        if(e.target === alertCont || e.target === alertTextCont || e.target === overLay || e.target === cancelBtn) {
            alertCont.classList.remove("active");
            alertTextCont.style.display = "none";
            overLay.classList.remove("active");
            console.log("more den conqueror");
        }
    })

    }

    
    

})






// webkitURL.addEventListener("click", e => {
//     if(e.target === childRen) {
//         console.log("Alright Done");
//     }
// })