import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

function fb_authenticate(){
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    // The following makes Google ask the user to select the account
PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log("Success!");
    })
    .catch((error) => {
        console.log(error);
    });
}

export {
    fb_initialise, fb_authenticate
};