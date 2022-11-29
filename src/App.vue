<script>
import { RouterLink, RouterView } from "vue-router";
import ButtonOn from "../src/components/ButtonOn.vue";
import { mapStores } from "pinia";
import { useProductsStore } from "../src/stores/products";
import { useAuthenticationStore } from "../src/stores/authentication";

export default {
  components: { RouterLink, RouterView, ButtonOn },

  mounted() {
    this.productsStore.loadProducts();

    this.someoneHere = this.authenticationStore.loadCurrentUser();

    if (this.someoneHere != null) {
      if (this.someoneHere.admi) {
        this.adminIn = true;
      } else {
        this.adminIn = false;
      }
    }
  },

  computed: {
    ...mapStores(useProductsStore, useAuthenticationStore),

    userIsLogged() {
      if(this.authenticationStore.loadCurrentUser() != null) {
        return this.authenticationStore.loadCurrentUser().admi
      }
    },

    userNoAdminLogged() {
        if(this.authenticationStore.loadCurrentUser() != null) {
          return this.authenticationStore.loadCurrentUser()
        }
      }

    
  },

  el: "#navbar",
  data() {
    return {
      view: {
        topOfPage: true,
      },

      adminIn: false,
      menub: false,
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

    openMenuB() {
      this.menub = !this.menub;
    },

    logOut(e) {
      e.preventDefault();
      this.authenticationStore.logOut();
    },

    deleteUser (e) {
      console.log("prueba")
      e.preventDefault();
      this.authenticationStore.deleteUser();
    }
  },
  watch: {
    userIsLogged(newUser, oldUser) {
      console.log(".............", newUser);
      if (newUser == true) {
        this.$router.push("/");
        this.adminIn = true;
        console.log("adminnnnnn", newUser);
      } else {
        this.$router.push("/");
        console.log("basicoooooo", newUser);
        this.adminIn = false;
      }
    },

    userNoAdminLogged(newNoAdmin, oldNoAdmin) {
      if (newNoAdmin == true) {
        this.$router.push("/");
        console.log("adminnnnnn", newNoAdmin);
      } else {
        this.$router.push("/");
        console.log("basicoooooo", newNoAdmin);
      }
    }
  },
};
</script>

<template>
  <header class="header__a" id="navbar" :class="{ onScroll: !view.topOfPage }">
    <nav class="nav__a">
      <div class="logoDiv">
        <RouterLink to="/">
          <img class="logoimg" src="/imgs/logofull.svg" />
        </RouterLink>
      </div>
      <div class="linksDiv">
        <RouterLink class="aboutlink" to="/about">Sobre Nosotros</RouterLink>
        <RouterLink class="menulink" to="/menu">Menú</RouterLink>
        <RouterLink class="contactlink" to="/contact">Contáctanos</RouterLink>
      </div>
      <div class="search">
        <input type="text" placeholder="Buscar" />
        <button type="button"><img src="/imgs/icons/search.svg" /></button>
      </div>
      <div class="logging" v-if="!userIsLogged || !userNoAdminLogged">
        <RouterLink to="/logIn">
          <ButtonOn type="button" class="button_on button_on--small"
            >Iniciar sesión</ButtonOn
          >
        </RouterLink>
        <RouterLink to="/signUp">
          <ButtonOn type="button" class="button_on button_on--small"
            >Registrarse</ButtonOn
          >
        </RouterLink>
      </div>
      <div class="logging" v-else>
        <!--<RouterLink to="/">-->
        <ButtonOn
          type="button"
          class="button_on button_on--white logOutBtn"
          @click="logOut"
          >Cerrar sesión</ButtonOn
        >
        <ButtonOn
          type="button"
          class="button_on button_on--white logOutBtn"
          @click="deleteUser"
          >Eliminar cuenta</ButtonOn
        >
        <!--</RouterLink>-->
      </div>

      <div class="networks">
        <RouterLink to="/favorite">
          <img class="favP" src="/imgs/icons/favwhitel.svg" alt="" />
        </RouterLink>
        <a href="https://wa.me/573205036398"
          ><img class="whatsapppicon" src="/imgs/icons/whatsapp.svg"
        /></a>
        <a href="https://www.instagram.com/la_doratta/"
          ><img src="/imgs/icons/instagram.svg" alt="" />
        </a>
      </div>
    </nav>

    <div class="nav__b">
      <div @click="openMenuB">
        <img src="/imgs/icons/MenuB.svg" />
      </div>

      <div class="logo__b">
        <RouterLink to="/">
          <img class="logoimg" src="/imgs/logofull.svg" />
        </RouterLink>
      </div>

      <div class="search__b"><img src="/imgs/icons/search.svg" /></div>
    </div>
  </header>

  <div
    @click="openMenuB"
    class="menuResponsive"
    :class="{ openMenuRespo: !this.menub }"
  >
    <ul class="menuResponsive__list">
      <li class="links">
        <RouterLink to="/">
          <p class="text text--white">Home</p>
        </RouterLink>
      </li>
      <li class="links">
        <RouterLink to="/about">
          <p class="text text--white">Sobre nosotros</p>
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
    <img src="/imgs/logofull.svg" />
    <div class="menu__networks--respo">
      <img class="icon" src="/imgs/icons/whatsapp.svg" />
      <img class="icon" src="/imgs/icons/instagram.svg" />
    </div>
    <section class="infofooter">
      <a
        href="https://www.google.com/maps/place/Cra.+64a+%2311a-30,+Cali,+Valle+del+Cauca/@3.4007893,-76.5414533,17z/data=!3m1!4b1!4m5!3m4!1s0x8e30a152468fa0ff:0xdf424cf6a15a1382!8m2!3d3.4007839!4d-76.5392593"
        >¿Dónde estamos ubicados?</a
      >
      <p>Carrera 64a #11a-30 El limonar, Cali, Colombia</p>
      <p>+57 3205036398 / ladoratta@gmail.com</p>
      <p>Copyright 2019 <strong>la doratta</strong></p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
</style>
