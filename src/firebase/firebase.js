import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAYfzcirZ1lWlhzGsbpE50HNyG84XcvmAg",
  authDomain: "todos-ts.firebaseapp.com",
  databaseURL: "https://todos-ts.firebaseio.com",
  projectId: "todos-ts",
  storageBucket: "todos-ts.appspot.com",
  messagingSenderId: "576358977636",
  appId: "1:576358977636:web:33a62ac7e6fb8facea4f71"
};

firebase.initializeApp(config)

const database = firebase.database()

export {firebase, database as default }