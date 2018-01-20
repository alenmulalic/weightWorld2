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
  })
})
});
