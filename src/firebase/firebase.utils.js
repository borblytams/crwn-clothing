import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyCodEjm7T3Pin8gsgcWeTYkRvV06CjlB-4",
    authDomain: "crwn-db-5d368.firebaseapp.com",
    projectId: "crwn-db-5d368",
    storageBucket: "crwn-db-5d368.appspot.com",
    messagingSenderId: "52688848017",
    appId: "1:52688848017:web:18239fe90147a897ba6b30"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error){
            console.log("error created "+error)

        }
   }
   return userRef;


};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;