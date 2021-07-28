import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'

const config ={
    apiKey: "AIzaSyDtz9WPNSlnuCdpOk-GLSfqIlUX_-yaQ7I",
    authDomain: "netflix-movie-ce249.firebaseapp.com",
    projectId: "netflix-movie-ce249",
    storageBucket: "netflix-movie-ce249.appspot.com",
    messagingSenderId: "1015301980163",
    appId: "1:1015301980163:web:5062322a1d454ac2bf8e36",
    measurementId: "G-R40B8KPWS3"
  
};


const firebase =Firebase.initializeApp(config);

// seedDatabase(firebase); --->uncomment rewrite data into firebase
export {firebase};