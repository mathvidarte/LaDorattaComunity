import { defineStore } from 'pinia'
//------------Firestore-------------
import { collection, addDoc, onSnapshot, updateDoc, doc, setDoc, query, orderBy } from "firebase/firestore";
import { db } from '../firebase/config';

//-----------Storage-----------------
import { ref as stRef, getDownloadURL, uploadBytes, } from "firebase/storage";
import { storage } from '../firebase/config';

//-----------RT Database-----------------
import { ref as dbRef, push, set, } from "firebase/database";
import { database } from '../firebase/config';
import { TwitterAuthProvider } from 'firebase/auth';


export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        product: {},
        imageinfo: {},
    }),
    getters: {
        //Los 3 puntos son una reestructuración, me clonan el arreglo para no afectar el arreglo principla
        getProducts: (state) => [...state.products],
    },
    //En actions estan los metodos de lo que necesito
    actions: {
        async newProduct(product) {
            console.log("Que hay)", product)
            this.imageinfo = product.image
            try {
                const docRef = await addDoc(collection(db, "product"), {
                    image: product.image,
                    titlee: product.titlee,
                    category: product.category,
                    description: product.description,
                    rating: '4',
                    price: product.price,
                    flavour: product.flavour,
                });
                console.log("SUBIO AL FIREBASE: ", docRef.id);
                // Create a storage reference from our storage service
                const storageRef = stRef(storage, "/files/" + product.image);

                getDownloadURL(storageRef)
                    .then(async (url) => {
                        try {
                            let imgName = product.image;
                            console.log("imagennnnnnn", imgName)
                            this.imageinfo = {

                                url,
                                imgName,
                            }
                            console.log(this.imageinfo),

                                updateDoc(doc(db, "product", docRef.id), {
                                    "image": this.imageinfo,

                                });
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    });
            } catch (e) {
                console.error("NO SUBIO :( ", e);
            }


        },

        loadProducts() {

            onSnapshot(collection(db, "product"), (docs) => {
                this.products = [];

                docs.forEach((document) => {

                    this.product = {
                        image: document.data().image,
                        titlee: document.data().titlee,
                        category: document.data().category,
                        description: document.data().description,
                        rating: '4',
                        price: document.data().price,
                        flavour: document.data().flavour,
                        id: document.id,
                    };
                    this.products.push(this.product);

                    updateDoc(doc(db, "product", document.id), this.product);
                })

            });
        },

        async uploadImage(image) {

            /* Get a reference to the storage service, which is used to create references in your storage bucket
            const databaseReference = dbRef(database, "files");*/

            // Create a storage reference from our storage service
            const storageRef = stRef(storage, "/files/" + image.name);

            try {
                const storageRef = stRef(storage, "/files/" + image.name);
                await uploadBytes(storageRef, image);
            } catch (e) {
                console.error("Error uploading document: ", e);
            }
        },

        getProductById(id) {
            const filteredProducts = this.products.filter((eachProduct) => id.toLowerCase().replace(/ /g, "") === eachProduct.titlee.toLowerCase().replace(/ /g, ""));
            return filteredProducts ? { ...filteredProducts[0] } : null
        },
    },
})