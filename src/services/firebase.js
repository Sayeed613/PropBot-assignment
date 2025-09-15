import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeUiTQqP-AVOf5cS7Y8EAdeTV7T5DPjQg",
  authDomain: "propbot-3e00d.firebaseapp.com",
  projectId: "propbot-3e00d",
  storageBucket: "propbot-3e00d.firebasestorage.app",
  messagingSenderId: "444062958340",
  appId: "1:444062958340:web:39b4300aceac47f0d84651"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

