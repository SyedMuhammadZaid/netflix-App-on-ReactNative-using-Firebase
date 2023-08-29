// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqf2StQirw622Zi_ORQ934v3uLze6xqM",
  authDomain: "netflix-app-1db74.firebaseapp.com",
  projectId: "netflix-app-1db74",
  storageBucket: "netflix-app-1db74.appspot.com",
  messagingSenderId: "588658086529",
  appId: "1:588658086529:web:0742fd2e55bacad27bf380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
