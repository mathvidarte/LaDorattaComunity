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
                description: 'Delicioso cake decorado con el famoso meme',
                rating: '4',
                price: '25000'
            },
            {
                image: '/imgs/chococookies.jpg',
                titlee: 'Chococookies',
                category: 'Cake',
                description: 'Cake de chocolate con galletas de chips de chocolate y buttercream',
                rating: '3',
                price: '110000'
            },
            {
                image: '/imgs/cookies.png',
                titlee: 'Number Cookie',
                category: 'Cookies',
                description: 'Dos cookies de almendra con relleno de cheesecream y decorada con chocolates y fresas',
                rating: '4',
                price: '80000'
            },
            {
                image: '/imgs/lemoncurd.JPG',
                titlee: 'Cupcake de limon',
                category: 'Cupcakes',
                description: 'Cupcakes de limón con relleno de curd de limon y merengue italiano de limón',
                rating: '5',
                price: '30000'
            },
            {
                image: '/imgs/redvelvetlindos.JPG',
                titlee: 'Red velvet Cupcakes',
                category: 'Cupcakes',
                description: 'Cupcakes de red velvet y buttercream',
                rating: '5',
                price: '24000'
            },
            {
                image: 'imgs/pies.png',
                titlee: 'Pie de limón',
                category: 'Pies',
                description: 'Pie de galleta y relleno de limón decorado con almibar y fresas',
                rating: '5',
                price: '35000'
            },
            {
                image: '/imgs/donuts.png',
                titlee: 'Torre de Donuts',
                category: 'Donuts',
                description: 'Torre de donas con galseado de color y decorada con flores',
                rating: '4',
                price: '90000'
            },

            
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