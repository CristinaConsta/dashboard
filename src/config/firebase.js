// const firebaseConfig = {
//     apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     authDomain: "web-dev-practical.firebaseapp.com",
//     databaseURL: "https://web-dev-practical.firebaseio.com",
//     projectId: "web-dev-practical",
//     storageBucket: "web-dev-practical.appspot.com",
//     messagingSenderId: "1030945380946",
//     appId: "1:1030945380946:web:ae1bca104338f617df9d8b",
//     measurementId: "G-321SW2SPSG"
// };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrrgB6x_aQAAPBiJTxoPmZCs2huhqtE5o",
  authDomain: "grades-dashboard.firebaseapp.com",
  projectId: "grades-dashboard",
  storageBucket: "grades-dashboard.appspot.com",
  messagingSenderId: "833555876156",
  appId: "1:833555876156:web:a950b5dc3b381ae2203639",
  measurementId: "G-NYX63R2XYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;