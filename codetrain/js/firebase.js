 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDRaBn9AK2bVJsjFd-wXI9ayX2PJIEadUg",
    authDomain: "infinite-hope-350500.firebaseapp.com",
    databaseURL: "https://infinite-hope-350500-default-rtdb.firebaseio.com",
    projectId: "infinite-hope-350500",
    storageBucket: "infinite-hope-350500.appspot.com",
    messagingSenderId: "259834278365",
    appId: "1:259834278365:web:df08fd0867a249303e8634",
    measurementId: "G-8C3S9F6KLS"
  };

  const app = initializeApp(firebaseConfig);
  export {app}