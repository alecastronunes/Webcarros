import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnW7Ug0QDeFIpmehKeb2rQORJxBEdy9Tk",
  authDomain: "webcarros-a849d.firebaseapp.com",
  projectId: "webcarros-a849d",
  storageBucket: "webcarros-a849d.firebasestorage.app",
  messagingSenderId: "197758712704",
  appId: "1:197758712704:web:132712d5e6a9e88352df65",
};

const app = initializeApp(firebaseConfig);

//Inicializando o serviço de banco
const db = getFirestore(app);

//Inicializando o serviço de autenticação
const auth = getAuth(app);

//Inicializando o serviço de storage
const storage = getStorage(app);

export { db, auth, storage };
