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

window.onload=function(){
  var loginBtn = document.getElementById('btnLogin');
  const txtEmail =document.getElementById('Email');
  const txtPassword = document.getElementById('Password');


  loginBtn.addEventListener('click', function(){
    console.log("test");
    var email = txtEmail.value;
    var pass = txtPassword.value;
    const auth = firebase.auth();
    
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.then(user => {
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
    })
    });
}
