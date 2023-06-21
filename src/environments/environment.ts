export const environment = {
  firebase: {
    projectId: 'atf-app-98c14',
    appId: '1:604366992653:web:0bb65f217daf3f59d32c44',
    databaseURL: 'https://atf-app-98c14-default-rtdb.firebaseio.com',
    storageBucket: 'atf-app-98c14.appspot.com',
    apiKey: 'AIzaSyAURGyC2vzRoCGK8c9yAOPMiQQMf59CiZM',
    authDomain: 'atf-app-98c14.firebaseapp.com',
    messagingSenderId: '604366992653',
    measurementId: 'G-3MDP1JTB7C',
  },
    production: false
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAURGyC2vzRoCGK8c9yAOPMiQQMf59CiZM",
  authDomain: "atf-app-98c14.firebaseapp.com",
  databaseURL: "https://atf-app-98c14-default-rtdb.firebaseio.com",
  projectId: "atf-app-98c14",
  storageBucket: "atf-app-98c14.appspot.com",
  messagingSenderId: "604366992653",
  appId: "1:604366992653:web:0bb65f217daf3f59d32c44",
  measurementId: "G-3MDP1JTB7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);