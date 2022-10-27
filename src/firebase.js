import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBzzpq1IDkFs8MO17x80wNHUnImj_nhiKA",
  authDomain: "todoapp-ccf45.firebaseapp.com",
  projectId: "todoapp-ccf45",
  storageBucket: "todoapp-ccf45.appspot.com",
  messagingSenderId: "912243571285",
  appId: "1:912243571285:web:de339b64bfbd5b0a7ef2dc"
};

const fire = initializeApp(firebaseConfig);
const auth = getAuth(fire)
export default auth;

// export default fire;
