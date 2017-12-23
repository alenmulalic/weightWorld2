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
	 const email = txtEmail.value;
	 const pass = txtPassword.value;
	 const auth = firebase.auth();
	 //Sign in 
	 const promise = auth.signInWithEmailAndPassword(email, pass);
	 promise.catch(e => console.log(e.message));
 });
 
  // Add SignUp event
 btnSignUp.addEventListener('click', e=> {
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
