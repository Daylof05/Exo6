import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV-tJK_n58EGevSFp47Y2Mw7aowybOVeA",
  authDomain: "exo5-26c5c.firebaseapp.com",
  projectId: "exo5-26c5c",
  storageBucket: "exo5-26c5c.appspot.com",
  messagingSenderId: "34100606487",
  appId: "1:34100606487:web:6ba470e7b1b81708e94e52",
  measurementId: "G-3M247MR0WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);