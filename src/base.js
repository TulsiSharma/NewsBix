import  Rebase  from "re-base";
import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyC-aKyynf-N809pdgcAS0eDcByAjdSIiE0",
    authDomain: "newsbix-b4f7a.firebaseapp.com",
    databaseURL: "https://newsbix-b4f7a.firebaseio.com"
});

const base= Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;