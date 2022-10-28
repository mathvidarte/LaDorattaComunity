import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from '../views/AboutView.vue'
import MenuView from '../views/MenuView.vue'
import ContactView from '../views/ContactView.vue'
import AddNewProduct from '../views/AddNewProduct.vue'
import DetailView from '../views/DetailView.vue'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'us',
      component: AboutView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/addnew',
      name: 'addnew',
      component: AddNewProduct
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: LogInView
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUpView
    }

  ]
})

export default router
