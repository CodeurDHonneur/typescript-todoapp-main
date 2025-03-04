import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig: FirebaseOptions = {

    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
  };

  //Initialisation de Firebase
  const app = initializeApp(firebaseConfig);

  // initialiser Firebase Authentification et récupérer le service
  const auth = getAuth(app);


  export { auth };