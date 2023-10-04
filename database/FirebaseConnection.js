import firebase from "firebase/app";
import "firebase/database"
import "firebase/auth"

let firebaseConfig = {
    apiKey: "AIzaSyD4cbpTVUgWMgFhIPrGAVbJl3f4oh3Fb1Y",
    authDomain: "investeduca-28809.firebaseapp.com",
    projectId: "investeduca-28809",
    storageBucket: "investeduca-28809.appspot.com",
    messagingSenderId: "169805620677",
    appId: "1:169805620677:web:ffac454fa029e46a92d7ac"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase