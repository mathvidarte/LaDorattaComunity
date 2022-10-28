import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/config';

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user:null
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
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("usuario creado", user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(error.message);
                    // ..
                });
        },

        logOut() {
            signOut(auth)
            .then(()=> {
                console.log("usuario fuera")
            }).catch((error=> {
                alert.error;
            }))
        }
    }
})