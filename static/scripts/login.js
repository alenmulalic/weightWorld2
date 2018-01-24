<<<<<<< HEAD

 (function() {
	// Initialize Firebase
	  var config = {
		apiKey: "AIzaSyC4veNMKpc2XyEtQJxg_5ZGNwmfBAexu8c",
		authDomain: "weightworld-67d35.firebaseapp.com",
		databaseURL: "https://weightworld-67d35.firebaseio.com",
		projectId: "weightworld-67d35",
		storageBucket: "weightworld-67d35.appspot.com",
		messagingSenderId: "360326042761"
	  };
	  firebase.initializeApp(config);


 }());
 // Get elements
 const txtEmail = document.getElementById('inputEmail');
 const txtPassword = document.getElementById('inputPassword');
 const btnLogin = document.getElementById('btnLogin');
 const btnSignUp = document.getElementById('btnSignUp');

 // Add login event
 btnLogin.addEventListener('click', e=> {
	 // Get email and password
   console.log("in login");
	 const email = txtEmail.value;
	 const pass = txtPassword.value;
	 const auth = firebase.auth();
	 //Sign in
	 const promise = auth.signInWithEmailAndPassword(email, pass);
	 promise.catch(e => console.log(e.message));
 });

  // Add SignUp event
 btnSignUp.addEventListener('click', e=> {
   console.log("in sign up");
	 // TODO: CHECK FOR A REAL EMAIL
	 // Get email and password
	 const email = txtEmail.value;
	 const pass = txtPassword.value;
	 const auth = firebase.auth();
	 //Sign in
	 const promise = auth.createUserWithEmailAndPassword(email, pass);
	 promise.catch(e => console.log(e.message));
 });

 // Add a realtime listener
 firebase.auth().onAuthStateChanged(firebaseUser => {
	 if(firebaseUser) {
		 console.log(firebaseUser);
	 } else {
		 console.log('not logged in');
	 }
 });

window.onload=function(){
  //variable intilization
  const txtEmail = document.getElementById('newEmail');
  const txtPassword = document.getElementById('newPassword');
  const loginEmail =document.getElementById('inputEmail');
  const loginPassword = document.getElementById('inputPassword');
  const btnSignUp = document.getElementById('newSignUp');
  const btnLogin = document.getElementById('newSignIn');



  //signup
  btnSignUp.addEventListener('click', e=>{
<<<<<<< HEAD
    console.log('Button has been clicked');
    const email = txtEmail.value;
 	  const pass = txtPassword.value;
 	  const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
=======
>>>>>>> cc2891d15ee8e70728d0a7a5ede75238e0055aa9

=======
>>>>>>> 83552c7dfe85a6551bff76f7fac97d1ed404073e
(function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC4veNMKpc2XyEtQJxg_5ZGNwmfBAexu8c",
    authDomain: "weightworld-67d35.firebaseapp.com",
    databaseURL: "https://weightworld-67d35.firebaseio.com",
    projectId: "weightworld-67d35",
    storageBucket: "weightworld-67d35.appspot.com",
    messagingSenderId: "360326042761"
    };

    firebase.initializeApp(config);
    //Get elements
    const txtEmail = document.getElementById("Email");
    const txtPassword = document.getElementById("Password");
    const btnLogin = document.getElementById("btnLogin");

    //add login event
    btnLogin.addEventListener('click', e=> {
    //get email and Password
<<<<<<< HEAD

=======
>>>>>>> 83552c7dfe85a6551bff76f7fac97d1ed404073e
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    console.log('button click');

    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.then(user => {
      if (user.emailVerified) {
      //Add a realtime listener
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      // User is signed in.
      console.log("user signed in")
      } else {
      // No user is signed in.
      console.log("no user signed in")
      }
      });
      } else {
      console.log("error");
    }
<<<<<<< HEAD

  });

})



 // // Add login event
 // btnSignUp.addEventListener('click', e=> {
	//  // Get email and password
	//  const email = txtEmail.value;
	//  const pass = txtPassword.value;
	//  const auth = firebase.auth();
	//  //Sign in
	//  const promise = auth.signInWithEmailAndPassword(email, pass);
	//  promise.catch(e => console.log(e.message));
 // });

  // Add SignUp event
 // btnSignUp.addEventListener('click', e=> {
	//  // TODO: CHECK FOR A REAL EMAIL
	//  // Get email and password
	//  const email = txtEmail.value;
	//  const pass = txtPassword.value;
	//  const auth = firebase.auth();
	//  //Sign in
	//  const promise = auth.createUserWithEmailAndPassword(email, pass);
	//  promise.catch(e => console.log(e.message));
 // });
 //
 // // Add a realtime listener
 // firebase.auth().onAuthStateChanged(firebaseUser => {
	//  if(firebaseUser) {
	// 	 console.log(firebaseUser);
	//  } else {
	// 	 console.log('not logged in');
	//  }
 // });
=======
  })
})
});
>>>>>>> 83552c7dfe85a6551bff76f7fac97d1ed404073e
