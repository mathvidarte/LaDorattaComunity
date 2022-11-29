import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
import { db, auth } from '../firebase/config';
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user: {},
        currentUser: null,
        
    }),
    actions: {
        SignIn(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("usuario creado ", user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.message);
                });
        },

        newUser(email, password) {
            let cUser;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    cUser = userCredential.user;
                    console.log("usuario creado", this.user);
                }).then(()=> {
                    this.user = {
                        email: email,
                        favorites: [],
                        id: cUser.uid,
                    }
                    setDoc(doc(db, "users", cUser.uid), this.user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.message);
                    // ..
                });

        },

        logOut() {
            signOut(auth)
                .then(() => {
                    console.log("usuario fuera")

                }).catch((error => {
                    alert.error;
                }))
        },

        deleteUser() {
            const user = auth.currentUser;
            deleteUser(user).then(() => {
                // User deleted.
              }).catch((error) => {
                // An error ocurred
                // ...
              });
              
        },
        
        getMyUser(currentUid) {
            if (currentUid != null) {
                onSnapshot(doc(db, "users", currentUid), docSnapshot => {
                    this.currentUser = docSnapshot.data();
                    //console.log("ww",this.currentUser)
                });
            } else {
                return null
            }
        },

        loadCurrentUser() {
            if (this.currentUser != null) {
                //console.log(this.currentUser.admi)
                return this.currentUser;
            } else {
                return null
            }
        },


    }
})