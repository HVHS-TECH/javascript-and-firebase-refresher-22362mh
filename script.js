
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "<h1>You've connected to the JavaScript!<h1>";

function getFormInput(){
  const NAME = document.getElementById("input");
  let userName = NAME.value;
  messageSpace.innerHTML = "<h1> Your name is " + userName + " </p>"
}

const app = initializeApp(firebaseConfig);
var fb_db = getDatabase(app);
console.info(fb_db);

function fb_writeRec(){
    const whereToWriteTo = "/"
    const dataToWrite = {yellow: true};
    var reference = ref(fb_db, whereToWriteTo);
    set(reference, dataToWrite).then(() => {
        console.log("success!");
    }).catch((error) => {
        console.log(error);
    });
}