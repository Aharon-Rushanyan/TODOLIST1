import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './ToDoList';

import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
    const firebaseConfig = {
    apiKey: "AIzaSyB7BJkY4VIFxfzuvaHyGT5T6Ky3pLO_a1c",
    authDomain: "/mylittleproject-6428d.firebaseapp.com",
    databaseURL: "https://mylittleproject-6428d.firebaseio.com",
    projectId: "mylittleproject-6428d",
    storageBucket: "/mylittleproject-6428d.appspot.com",
    appID: "app-id",
};
firebase.initializeApp(firebaseConfig)
ReactDOM.render(<ToDoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
