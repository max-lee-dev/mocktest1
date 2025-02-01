// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "mocktest-946ec.firebaseapp.com",
  projectId: "mocktest-946ec",
  storageBucket: "mocktest-946ec.firebasestorage.app",
  messagingSenderId: "165470783924",
  appId: "1:165470783924:web:78ca6aa68b5975ebbe0ae1",
  measurementId: "G-24HVNXF9C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
// Firestore Emulator
if (
  typeof window !== "undefined" &&
  window.location.hostname === "localhost"
) {
  connectFirestoreEmulator(db, "localhost", 8080);
}
// Auth Emulator
if (
  typeof window !== "undefined" &&
  window.location.hostname === "localhost"
) {
  connectAuthEmulator(auth, "http://localhost:9099");
}

export { auth, db };
export default app;