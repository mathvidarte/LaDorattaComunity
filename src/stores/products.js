import { defineStore } from 'pinia'
//------------Firestore-------------
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase/config';

//-----------Storage-----------------
import { ref as stRef, getDownloadURL, uploadBytes, } from "firebase/storage";
import { storage } from '../firebase/config';

//-----------RT Database-----------------
import { ref as dbRef, push, set, } from "firebase/database";
import { database } from '../firebase/config';


export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        product: {},
    }),
    getters: {
        //Los 3 puntos son una reestructuración, me clonan el arreglo para no afectar el arreglo principla
        getProducts: (state) => [...state.products],
    },
    //En actions estan los metodos de lo que necesito
    actions: {
        async newProduct(product) {

            try {
                const docRef = await addDoc(collection(db, "product"), {
                    //image: product.image,
                    titlee: product.titlee,
                    category: product.category,
                    description: product.description,
                    rating: '4',
                    price: product.price,
                    flavour: product.flavour,
                });
                console.log("SUBIO AL DATABASE: ", docRef.id);
            } catch (e) {
                console.error("NO SUBIO :( ", e);
            }
        },

        loadProducts() {

            onSnapshot(collection(db, "product"), (docs) => {
                docs.forEach((document) => {
                    
                    this.product = {
                        //image: document.data().image,
                        titlee: document.data().titlee,
                        category: document.data().category,
                        description: document.data().description,
                        rating: '4',
                        price: document.data().price,
                        flavour: document.data().flavour,
                        id: document.id,
                    };
                    //console.log("aqui es doc",doc.data().product.titlee);
                    this.products.push(this.product);

                    updateDoc(doc(db, "product", document.id), this.product);
                })

            });
        },

        uploadImage(image) {

            // Get a reference to the storage service, which is used to create references in your storage bucket
            const databaseReference = dbRef(database, "files");

            // Create a storage reference from our storage service
            const storageRef = stRef(storage, "files/" + image.name);

            uploadBytes(storageRef, image).then((snapshot) => {
                var newFileRef = push(databaseReference);

                set(newFileRef, {
                    "name": image.name
                }),
                    console.log('Uploaded a blob or file!');

            })
        },

        downloadUrImage(image) {

            // Create a storage reference from our storage service
            const storageRef = stRef(storage, "/files/" + image.name);

            getDownloadURL(storageRef)
                .then(async (url) => {
                    try {
                        let imgName = image.name;
                        console.log("imagennnnnnn", imgName)
                        let infoImg = {
                            url,
                            imgName,
                        }
                        updateDoc(doc(db, "product", this.product.id), {
                            "image": infoImg,
                        });
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                }
                );
        },

        getProductById(id) {
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.titlee.toLowerCase());
            return filteredProducts ? { ...filteredProducts[0] } : null
        },
    },
})