// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqOvi8nUjsPpYaWhVMkh4fFlVsCRD076w",
  authDomain: "aramshnews.firebaseapp.com",
  projectId: "aramshnews",
  storageBucket: "aramshnews.firebasestorage.app",
  messagingSenderId: "549026809444",
  appId: "1:549026809444:web:4b29d9c52cba6304ca0171"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };