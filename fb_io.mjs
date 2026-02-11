import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { signOut }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { ref, set }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

var fb_gamedb;

function fb_initialise(){
  const firebaseConfig = {
    apiKey: "AIzaSyDbYQyRprjQJLj_2AHnmsySQA30YWAMo7o",
    authDomain: "miohoffman-13comp.firebaseapp.com",
    databaseURL: "https://miohoffman-13comp-default-rtdb.firebaseio.com",
    projectId: "miohoffman-13comp",
    storageBucket: "miohoffman-13comp.firebasestorage.app",
    messagingSenderId: "588356098707",
    appId: "1:588356098707:web:5bd99a74caeae5c6388b66",
    measurementId: "G-YMVSCX6JL9"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  fb_gamedb = getDatabase(app);
  console.info(fb_gamedb)
}

//Note, you actually have to press the initialise button before authenticating.
function fb_authenticate(){
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    // The following makes Google ask the user to select the account
PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log("Success!");
        console.log(result.user);
    })
    .catch((error) => {
        console.log(error);
    });
}

//ASC is onAuthStateChanged
function ASC(){
    const AUTH = getAuth();
    onAuthStateChanged(AUTH, (user) => {
        if (user) {
            console.log("User is logged IN!");
        } else {
            console.log("User has logged OUT.");
        }
    }, (error) => {
        console.log(error);
    });
}

function fb_signOut(){
    const AUTH = getAuth();
    signOut(AUTH).then(() => {
        console.log("Successful logout!");
    })
    .catch((error) => {
        console.log(error);
    });
}

function write(){
    var whereToWriteTo = '/';
    var message = {Name: 'Mio'};
    const dbReference= ref(fb_gamedb, whereToWriteTo);
    set(dbReference, message).then(() => {
        console.log("Write was a success!");
    }).catch((error) => {
        console.log(error);
    });
}

export {
    fb_initialise, fb_authenticate, ASC, fb_signOut, write
};