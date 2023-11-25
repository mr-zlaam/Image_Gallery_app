import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDomU-Lmim_K7iA8o5Zc1sGuV3wd68nNjI",
  authDomain: "myblogspheres.firebaseapp.com",
  projectId: "myblogspheres",
  storageBucket: "myblogspheres.appspot.com",
  messagingSenderId: "1054026657069",
  appId: "1:1054026657069:web:22df8b8b08dbf2576937a4",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
