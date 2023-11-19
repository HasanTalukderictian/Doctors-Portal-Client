// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx_MnpdsXdZ1mFYp_r-t4dnfAGUI6uMxU",
  authDomain: "doctors-portal-303c4.firebaseapp.com",
  projectId: "doctors-portal-303c4",
  storageBucket: "doctors-portal-303c4.appspot.com",
  messagingSenderId: "616652111717",
  appId: "1:616652111717:web:626d664add3eb7c9f3ab8c",
  measurementId: "G-16VQF6FR9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
