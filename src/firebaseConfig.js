// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtTLZEyxeAwAxsRvP7p1Hx4ohQiSLIMP4",
  authDomain: "my-app-name-9bc3a.firebaseapp.com",
  projectId: "my-app-name-9bc3a",
  storageBucket: "my-app-name-9bc3a.appspot.com",
  messagingSenderId: "696849048831",
  appId: "1:696849048831:web:a7b66361315c3d51cb18ca",
  measurementId: "G-WE3W684CV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };