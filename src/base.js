import Rebase from 're-base';
import firebase from 'firbase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDARKvIrhlFbwuo1KmI7wEIgHt6uitMPaQ",
    authDomain:"freshseafood-a70d6.firebaseio.com/",
    databaseURL: "https://freshseafood-a70d6.firebaseio.com/"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };


export default base;