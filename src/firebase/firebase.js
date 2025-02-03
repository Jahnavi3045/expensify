import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, remove, set, update,get,onValue,off} from 'firebase/database';
import { getDatabase,ref,set,push,get, onValue,onChildRemoved ,onChildChanged,onChildAdded} from "firebase/database";
import {  GoogleAuthProvider,getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAqF52p3GBZCt0FBuHn_cxDezMqgM7qwUk",
    authDomain: "expensify-98ac2.firebaseapp.com",
    databaseURL: process.env.DB_URL,
    projectId: "expensify-98ac2",
    storageBucket: "expensify-98ac2.appspot.com",
    messagingSenderId: "587789040764",
    appId: "1:587789040764:web:065addc8c173136f3eddf9",
    measurementId: "G-R8KTFEYBSN"
};

const app = initializeApp(firebaseConfig);
// const analytics =getAnalytics(app);
const auth=getAuth(app);
const database = getDatabase(app);
const googleAuthProvider = new GoogleAuthProvider();

export {firebaseConfig,database,googleAuthProvider,auth as default}
