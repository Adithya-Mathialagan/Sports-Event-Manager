import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0rpZBMRdpqyFhe6Do2mlAPgK_Q4X76gE",
    authDomain: "login-1b1b3.firebaseapp.com",
    projectId: "login-1b1b3",
    storageBucket: "login-1b1b3.appspot.com",
    messagingSenderId: "638502049286",
    appId: "1:638502049286:web:06c6024715d64dca3b9587"
  };

const fire =  firebase.initializeApp(firebaseConfig);

export default fire;