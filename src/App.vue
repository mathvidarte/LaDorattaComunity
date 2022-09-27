<script>
import { RouterLink, RouterView } from "vue-router";
import { mapStores } from "pinia";
import { useProductsStore } from "../src/stores/products";

export default {
  components: (RouterLink, RouterView),

  mounted() {
    this.productsStore.loadProducts();
  },

  computed: {
    ...mapStores(useProductsStore),
  },

  el: "#navbar",
  data() {
    return {
      view: {
        topOfPage: true,
      },

      menub:false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > -0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },

    openMenuB () {
      this.menub = !this.menub
    },
  },
};
</script>

<template>
  <header class="header__a" id="navbar" :class="{ onScroll: !view.topOfPage }">
    <nav class="nav__a">
      <div class="logoDiv">
        <RouterLink to="/">
          <img class="logoimg" src="./assets/logofull.svg" />
        </RouterLink>
      </div>
      <div class="linksDiv">
        <RouterLink class="aboutlink" to="/about">Sobre Nosotros</RouterLink>
        <RouterLink class="menulink" to="/menu">Menú</RouterLink>
        <RouterLink class="contactlink" to="/contact">Contáctanos</RouterLink>
      </div>
      <div class="search">
        <input type="text" placeholder="Buscar" />
        <button type="button"><img src="./assets/icons/search.svg" /></button>
      </div>
      <div class="networks">
        <a href="https://wa.me/573205036398"
          ><img class="whatsapppicon" src="./assets/icons/whatsapp.svg"
        /></a>
        <a href="https://www.instagram.com/la_doratta/"
          ><img src="./assets/icons/instagram.svg" alt="" />
        </a>
      </div>
    </nav>

    <div class="nav__b">
      <div @click="openMenuB">
        <img src="src/assets/icons/MenuB.svg" />
      </div>

      <div class="logo__b">
        <RouterLink to="/">
          <img class="logoimg" src="./assets/logofull.svg" />
        </RouterLink>
      </div>

      <div class="search__b"><img src="src/assets/icons/search.svg" /></div>
    </div>
  </header>

  <div @click="openMenuB" class="menuResponsive" :class="{openMenuRespo: !this.menub}">
  <ul class="menuResponsive__list">
    <li class="links">
      <RouterLink to="/">
        <p class="text text--white">Home</p>
      </RouterLink>
    </li>
    <li class="links">
      <RouterLink to="/about">
        <p class="text text--white" > Sobre nosotros</p>
      </RouterLink>
    </li>
    <li class="links">
      <RouterLink to="/menu">
        <p class="text text--white">Menú</p>
      </RouterLink>
    </li>
    <li class="links">
      <RouterLink to="/contact">
        <p class="text text--white">Contáctanos</p>
      </RouterLink>
    </li>
  </ul>
</div>


  
     

  <RouterView />
  <footer>
    <img src="src/assets/logofull.svg">
            <div class="menu__networks--respo">
                <img class="icon" src="src/assets/icons/whatsapp.svg">
                <img class="icon" src="src/assets/icons/instagram.svg">
            </div>
            <section class="infofooter">
                <a href="https://www.google.com/maps/place/Cra.+64a+%2311a-30,+Cali,+Valle+del+Cauca/@3.4007893,-76.5414533,17z/data=!3m1!4b1!4m5!3m4!1s0x8e30a152468fa0ff:0xdf424cf6a15a1382!8m2!3d3.4007839!4d-76.5392593">¿Dónde estamos ubicados?</a>
                <p> Carrera 64a #11a-30 El limonar, Cali, Colombia</p>
                <p>+57 3205036398 / ladoratta@gmail.com</p>
                <p>Copyright 2019 <strong>la doratta</strong></p>
            </section>
  </footer>
</template>

<style lang="scss" scoped>
</style>
