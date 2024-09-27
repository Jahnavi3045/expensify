import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, remove, set, update,get,onValue,off} from 'firebase/database';
import { getDatabase,ref,set,push,get, onValue,onChildRemoved ,onChildChanged,onChildAdded} from "firebase/database";
import {  GoogleAuthProvider,getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAqF52p3GBZCt0FBuHn_cxDezMqgM7qwUk",
    authDomain: "expensify-98ac2.firebaseapp.com",
    databaseURL: "https://expensify-98ac2-default-rtdb.firebaseio.com",
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
// onChildAdded(ref(database,'expenses'),(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
// const expenses=[{
//     description:'water bill',
//     amount:1000,
//     createdAt:5000
// },{
//     description:'wifi bill',
//     amount:800,
//     createdAt:0
// },{
//     description:'gas bill',
//     amount:1200,
//     createdAt:3000
// },]

// expenses.forEach(expense=>{
//     push(ref(database,'expenses'),expense)
// })

// onValue(ref(database,'expenses')),(snapshot)=>{
//     const expensesArr=[]
//     snapshot.forEach((childSnapshot)=>{
//         expensesArr.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expensesArr)
// }
// onValue(ref(database,'expenses'),((snapshot)=>{
//     const expensesArr=[]
//     snapshot.forEach((childSnapshot)=>{
//         expensesArr.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expensesArr)
// }))

// set(ref(database, '/'), {
//     name: 'jahnavi',
//     age:19,
//     isSingle:true,
//     isLiterate:true,
//     location:{
//         city:'hyderbad',
//         dreamCity:'tokyo'
//     }
// }).then(() => {
//       console.log("Data saved successfully.");
// }).catch((error) => {
//       console.error("Error saving data: ", error);
// });

// set(ref(database, 'age'), 20).then(() => {
//       console.log("Data saved successfully.");
// }).catch((error) => {
//       console.error("Error saving data: ", error);
// });

// set(ref(database, 'location/city'), 'jubillee hills').then(() => {
//       console.log("Data saved successfully.");
// }).catch((error) => {
//       console.error("Error saving data: ", error);
// });

// set(ref(database, 'attributes'), {
//     height:5,
//     weight:65
// }).then(() => {
//       console.log("Data saved successfully.");
// }).catch((error) => {
//       console.error("Error saving data: ", error);
// });

// remove(ref(database,'isSingle')).then(() => {
//     console.log("Data removed successfully.");
// }).catch((error) => {
//     console.error("Error removing data: ", error);
// });

// update(ref(database),{
//     name:'jahnavi Varaganti',
//     profession:'Student',
//     isLiterate:null,
//     'location/city':'boston'
// }).then(() => {
//     console.log("Data updated successfully.");
// }).catch((error) => {
//     console.error("Error updating data: ", error);
// });


// get(ref(database,'location')).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());  // Use snapshot.val() to access the data
//     } else {
//         console.log("No data available");
//     }
//     console.log("Data fetched successfully.");
// }).catch((error) => {
//     console.error("Error fetching data: ", error);
// });

// onValue(ref(database),(snapshot)=>{
//     if (snapshot.exists()) {
//         console.log(snapshot.val());  // Use snapshot.val() to access the data
//     } else {
//         console.log("No data available");
//     }
// })
// setTimeout(()=>{
//     set(ref(database, 'age'), 350)
// },3500)
// setTimeout(()=>{
//     off(ref(database))
// },7000)
// setTimeout(()=>{
//     set(ref(database, 'age'), 500)
// },10500)

// onValue(ref(database),(snapshot)=>{
//     const values=snapshot.val();
//     console.log(`${values.name} is ${values.age} years old and is a ${values.profession}`)
// })

// set(ref(database, 'age'), 10)