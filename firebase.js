// firebase.js
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
      apiKey: "AIzaSyBhaYOcLMXuobCT-vaXr-zXTZnBfaheAIY",
      authDomain: "vitra-ai-712ea.firebaseapp.com",
      projectId: "vitra-ai-712ea",
      storageBucket: "vitra-ai-712ea.appspot.com",
      messagingSenderId: "306868103753",
      appId: "1:306868103753:web:e2d7700f8ad34c1e17ed98",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
