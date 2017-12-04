import firebase from 'firebase';
require("firebase/auth");
require("firebase/database");

const config = {
  apiKey: "AIzaSyBtFM5kjtP5EWl-ShmNOi2b4ba70NHTzSY",
  authDomain: "testproject-74ee8.firebaseapp.com",
  databaseURL: "https://testproject-74ee8.firebaseio.com",
  projectId: "testproject-74ee8",
  storageBucket: "testproject-74ee8.appspot.com",
  messagingSenderId: "1016861785580"
};

export const fire = firebase.initializeApp(config);

export const database = fire.database();
