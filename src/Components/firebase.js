import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp79Agap1EdgLhd2PiqvKQy-v0FQ8AqE4",
  authDomain: "personal-website-1f6f1.firebaseapp.com",
  projectId: "personal-website-1f6f1",
  storageBucket: "personal-website-1f6f1.appspot.com",
  messagingSenderId: "949987170246",
  appId: "1:949987170246:web:c99780ab730e08078b44c7",
  measurementId: "G-DVCXDW436Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };
  
