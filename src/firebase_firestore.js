import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc  } from "firebase/firestore";

  // Your web app's Firebase configuration
  // This is apparently safe to upload to VC and web because api permissions are set in firebase console. Approve list IP or domains.
  // for example : IP restriction could be something like 2601:601::/32 (match the first 32 bits of IP)
  // https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
  //https://console.cloud.google.com/apis/credentials?project=fir-auth-deaa9
const firebaseConfig = {
  apiKey: "AIzaSyDWHBqQBEBpA0U7Kl9GUtk10BYNhpoz3OM",
  authDomain: "reactfirebasefirestorevideo.firebaseapp.com",
  projectId: "reactfirebasefirestorevideo",
  storageBucket: "reactfirebasefirestorevideo.appspot.com",
  messagingSenderId: "562177322328",
  appId: "1:562177322328:web:6b8490f00bd3baac17892d"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const getHighscore = async () => {
	try {
		const docRef = doc(db, "Highscore", "Current");
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
		  console.log("Document data:", docSnap.data());
		  return docSnap.data().score;
		} else {
		  // docSnap.data() will be undefined in this case
		  console.log("No such document!");
		}
	} catch (e) {
		console.log('Error reading document', e);
	}
}

const uploadHighscore = async (newScore) => {
	try {

		 const docRef = doc(db, "Highscore", "Current")

		 let result = await updateDoc(docRef, {
		    score: parseInt(newScore)
		  });
		  
		 return newScore;
	} catch (e) {
  		console.error("Error adding document: ", e);
  		return e;
	}
}


export {
getHighscore
, uploadHighscore
};