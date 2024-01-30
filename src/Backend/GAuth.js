// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup,SignInWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default function GAuth(){
    const firebaseConfig = {
        apiKey: "AIzaSyBEMct0SvOwsZCMjmTUU-t_n3r98F1St3U",
        authDomain: "frissson.firebaseapp.com",
        projectId: "frissson",
        storageBucket: "frissson.appspot.com",
        messagingSenderId: "240739354609",
        appId: "1:240739354609:web:45b56932b6c2ce41636650",
        measurementId: "G-915B2RJRQ3"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      let auth=getAuth();
      let gAuth=new GoogleAuthProvider();
      signInWithPopup(auth,gAuth).then(result=>console.log("Authenticated")).catch(err=>console.log(err));
}
export function EmailAuth(email,password){
  const firebaseConfig = {
    apiKey: "AIzaSyBEMct0SvOwsZCMjmTUU-t_n3r98F1St3U",
    authDomain: "frissson.firebaseapp.com",
    projectId: "frissson",
    storageBucket: "frissson.appspot.com",
    messagingSenderId: "240739354609",
    appId: "1:240739354609:web:45b56932b6c2ce41636650",
    measurementId: "G-915B2RJRQ3"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  let auth=getAuth();
  signInWithEmailAndPassword(auth).then(alert("SigIn SuccessFully")).catch(err=>console.log("Error At Login"))
}
