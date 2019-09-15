import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //Steps to get your api key on google firebase 
  //Just follow this url for more info : https://www.appypie.com/faqs/how-can-i-get-api-key-auth-domain-database-url-and-storage-bucket-from-my-firebase-account
  apiKey: "your_api_key_goes_here",
  authDomain: "firebase_auth_domain",
  databaseURL: "your_database_url_goes_here"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
