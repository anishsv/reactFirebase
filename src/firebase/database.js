import { database } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  // database.ref(`users/${id}`).set({
  //   username,
  //   email,
  // });
  database.collection("users").add({
    first: username,
    last: "",
    email: email,
	});


export const onceGetUsers = () =>
  // database.ref('users').once('value');
	database.collection("users").get();
// Other Entity APIs ...