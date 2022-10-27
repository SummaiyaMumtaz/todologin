import app from '../config/firebaseconfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue,push } from "firebase/database";
// import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
  let { email, password, userName, contact } = obj;
  
  // === this promise will return on Signup page. ===
  return new Promise((resolve, reject) => {
    // let navigate = useNavigate();
    // === this "then" will give the status of Authentication. ===
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // user successfully registerd in authentication
        const user = userCredential.user;
        const refrence = ref(database, `users/${user.uid}`);
        set(refrence, obj)
          // === this "then" will give the status of database function
          .then(() => {
            // this "resolve" is our custom message which will show in signup page "then"

            // this "resolve" is our custom message which will show in signup page "then"
            resolve("User Created Successfully and send to database");
            // navigate("/login");

          })
          .catch((errr) => {
            reject(errr);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// let Sendtodos=(obj)=>{
  let Sendtodos=(obj,nodename,id)=>{
    //edit k case m id aegi
  // const postListRef = ref(database, 'todos/');
 let postListRef ;
  if(id){
    //agr id mojod h
    postListRef = ref(database, `${nodename}/${id}`);
    //save krwadia
  }
  else{
    //case add
    let addref = ref(database, nodename)
    //ref bnae ,,key generate kre , or nai id bnade
    obj.id= push(addref).key;
    postListRef = ref(database, `${nodename}/${obj.id}`);
  }
  const newPostRef = push(postListRef);
  //set m jo data likhty wo firbase m chala jata h
  //database m gaya h ya nh .then 
  set(newPostRef, obj );


}



let loginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const reference = ref(database, `users/${user.uid}`);
        obj.id = user.uid;
        onValue(reference, (e) => {
          let status = e.exists();
          console.log(status);
          if (status) {
            resolve(e.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        alert('invalid email and password')
        reject(errorMessage);
      });
  });

  


};


export { signUpUser, loginUser ,Sendtodos};

// import app from './firebaseconfig';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getDatabase,ref, push, set, onValue } from "firebase/database";









// const auth = getAuth(app);
// const database = getDatabase(app);


// let signUpUser = (obj) => {
//   let { email, password, contact, userName } = obj;

//   return new Promise((resolve, reject) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         //if user get authenticate anf registered in firebase it will go in success
//         const user = userCredential.user;
//         // with ref we are making refrence
//         const reference = ref(database, `users/${user.uid}`);

//         // with set with are sending things to data base and check with resolve that either data went there or not
//         set(reference, obj)
//           .then(() => {
//             resolve("user created successfully and send to database");
//           })
//           .catch((err) => {
//                   reject(err);
//           });
  
//       })

//       .catch((err) => {
//           reject(err);
//       });
  
//   });
// };














// // create log in function now.......................


// let loginUser = (obj) => {
//   let { email, password } = obj;

//   return new Promise ((resolve, reject) => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//         const reference = ref(database, `users/${user.uid}`);

//         //data is param to receive any data inside we can use any param abc etc its receving data from the object we sent from set in upper function
//         // .val() is used for the proper data shown on console or screen
//         //exist ( is firebase methods and check if data exist tor not gives the true false)
//         onValue(reference, (e)=>{
//           console.log(e.val());
//          let status =  e.exists()
//          console.log(status);
//          if (status) {
//             resolve (e.val());
//          } else {
//             reject ("Data not found")
//          }
//         });
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//      reject(errorMessage);
//       });
//   });
// };








// //send to do values to the firebase ......................

// let sendTodos =(obj)=>{
//   const postListRef = ref(database, 'todos/');
//   const newPostRef = push(postListRef);
//   set(newPostRef, obj );

// }




// //get todo list on the page get
// //to get the data make function on the page you want to get



// export { signUpUser, loginUser , sendTodos};