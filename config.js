import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCL9CwIqt1uTO6OPLegKhRrKwZQU8gDQcs",
    authDomain: "barterapp-ffc65.firebaseapp.com",
    projectId: "barterapp-ffc65",
    storageBucket: "barterapp-ffc65.appspot.com",
    messagingSenderId: "435019266933",
    appId: "1:435019266933:web:5614d73f93f5005607f13c"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();