import * as firebase from 'firebase';
require("firebase/firestore");
// Initialize Firebase
var config = {
	//Firebase config details
};
firebase.initializeApp(config);
const auth = firebase.auth();
// const database = firebase.database();
const database = firebase.firestore();

export {database,auth};