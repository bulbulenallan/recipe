// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKbFUROHfeTViNeCIZM1SRSejv8ris8w",
  authDomain: "recipeauth-cb063.firebaseapp.com",
  projectId: "recipeauth-cb063",
  storageBucket: "recipeauth-cb063.appspot.com",
  messagingSenderId: "173575261838",
  appId: "1:173575261838:web:61acc6f51dcd14dd7e43df"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };