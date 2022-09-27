import { defineStore } from 'pinia'

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [
            {
                image: '/imgs/redvelvet.png',
                titlee: 'Red velvet Queen',
                category: 'Cake',
                description: '3 layers de cake esponjoso de red velvet con relleno de buttercream y decorado con una corona de grageas doradas.',
                rating: '5',
                price: '25000'
            },
            {
                image: '/imgs/cupcakes.png',
                titlee: 'Cupcakes de oreo',
                category: 'Cupcakes',
                description: 'Cupcakes de chocolate con buttercream de vainilla decorados con chips de chocolate, ganache y galleta oreo.',
                rating: '4',
                price: '26000'
            },
            {
                image: '/imgs/ayno.jpg',
                titlee: 'Meme Cake',
                category: 'Cake',
                description: 'Cupcakes de chocolate con buttercream de vainilla decorados con chips de chocolate, ganache y galleta oreo.',
                rating: '4',
                price: '26000'
            }
            
        ],
        localStorageProducts:[],
    }),
    getters: {
        //Los 3 puntos son una reestructuración, me clonan el arreglo para no afectar el arreglo principla
        getProducts: (state) => [...state.products],
    },
    //En actions estan los metodos de lo que necesito
    actions: {
        newProduct(product) {
            this.localStorageProducts.push(product);
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts))
        },

        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'))
            this.products = this.products.concat([...this.localStorageProducts])
        },

        getProductById(id) {
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.titlee.toLowerCase());
            return filteredProducts ? {...filteredProducts[0] } : null
        },
    },
})