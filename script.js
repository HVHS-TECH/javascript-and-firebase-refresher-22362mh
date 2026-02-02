var messageSpace = getElementbyId("welcomeMessage");
messageSpace.innerHTML = "You've connected to the JavaScript!";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);