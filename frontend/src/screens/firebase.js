import firebase from 'firebase';
import 'firebase/firestore';


var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
    apiKey: "AIzaSyDZ8IslVCQxNz3Ev4Cg1uaQaiRBXPqkg0w",
    authDomain: "event-management-57e2d.firebaseapp.com",
    projectId: "event-management-57e2d",
    storageBucket: "event-management-57e2d.appspot.com",
    messagingSenderId: "575805881249",
    appId: "1:575805881249:web:4271082feba539eaae69e0",
});

var db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const fs = firebase

export { auth,storage,db,fs };

