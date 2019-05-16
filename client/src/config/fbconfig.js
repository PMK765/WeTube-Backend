import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCF7UxAj2QM6tdcqqEQ5gcXm80Us9Oxu38",
    authDomain: "wetubechat.firebaseapp.com",
    databaseURL: "https://wetubechat.firebaseio.com",
    projectId: "wetubechat",
    storageBucket: "wetubechat.appspot.com",
    messagingSenderId: "679105531798",
    appId: "1:679105531798:web:d817ed482e7d8de5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;