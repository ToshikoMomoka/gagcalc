  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBWMoxOoUl24sVUjJgs7QK6H9V-J7doXNI",
    authDomain: "gagcalc.firebaseapp.com",
    projectId: "gagcalc",
    storageBucket: "gagcalc.firebasestorage.app",
    messagingSenderId: "133487171649",
    appId: "1:133487171649:web:d196dad18e0613709dcec0",
    measurementId: "G-VWBNN28ST0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
