

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAqaUjoGMq4W6rh41VJdm0bjQzbvtn_MWo",
//   authDomain: "contactform-interior-website.firebaseapp.com",
//   databaseURL: "https://contactform-interior-website-default-rtdb.firebaseio.com",
//   projectId: "contactform-interior-website",
//   storageBucket: "contactform-interior-website.appspot.com",
//   messagingSenderId: "173387960007",
//   appId: "1:173387960007:web:f70428042fe06ad9b178e2"
// };

  

  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // var firestore = firebase.firestore()
  
  // Variables to acces database collection
  // const db = firestore.collection("formData")
  
  //Get submit Form
  // let submitButton = document.getElementById('submit')


  // //create Event Listerner to allow form submission
  // submitButton.addEventListener('click', (e) => {
  //   //Prevent the Default form submission behavior
  //   e.preventDefault()
   
  //   // Get form values
  //   let firstName = document.getElementById("name").value;
  //   let lastName = document.getElementById("last-name").value;
  //   let email = document.getElementById("email").value;
  //   let phone = document.getElementById("phone").value;
  //   let msg = document.getElementById("messsage").value;
  //   let warning = document.getElementById("warning");

  //   if (firstName.value === "" || lastName.value === "" || email.value === "" || phone.value === "" || msg.value === "") {
  //     warning.classList.add("active");
  //     warning.style.display = 'block';
  //     console.log("magic");
  //   }else {
  //     warning.classList.remove("active");
  //     console.log("then-mail-js");
  //   }
  //   // Save form Data to Firebase
  //   db.doc().set({
  //     fname: firstName,
  //     lastName: lastName,
  //     email: email,
  //     phone: phone,
  //     msg: msg,
  //   }).then( () => {
  //     console.log("Data Saved");
  //   }).catch((error) => {
  //     console.log(error);
  //   })

    
    
  // })