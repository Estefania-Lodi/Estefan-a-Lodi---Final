import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgMex7xn_prjuAjGi1_WOFbfjpxXicodo",
  authDomain: "estefi-3d307.firebaseapp.com",
  projectId: "estefi-3d307",
  storageBucket: "estefi-3d307.appspot.com",
  messagingSenderId: "29761718526",
  appId: "1:29761718526:web:984cc81363ec51a0d33daf"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);