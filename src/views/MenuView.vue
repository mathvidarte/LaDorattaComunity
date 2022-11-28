<script>
import { RouterLink, RouterView } from "vue-router";
import ProductCard from "../components/ProductCard.vue";
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";
import { useAuthenticationStore } from "../stores/authentication";
import ButtonOn from "../components/ButtonOn.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    ProductCard,
    ButtonOn,
  },

  data() {
    return {
      currentProduct: [],
      getAllProducts: [],
      arrayProductHere: [],

      orderSelected: "",
      orderNameSelected: "",
      selectedCategory: [],
      selectedFlavourSelected: [],
    };
  },

  mounted() {
    this.getAllProducts = this.productsStore.getProducts;
    this.currentProduct = JSON.parse(JSON.stringify(this.getAllProducts));
    this.arrayProductHere = this.currentProduct;
  },

  computed: {
    ...mapStores(useProductsStore, useAuthenticationStore),
    getProducts() {
      return this.productsStore.getProducts;
    },
    userIsAdmin() {
      return this.authenticationStore.user.tipo == "admin";
    },
    userIsLogged() {
      return this.authenticationStore.user !== null;
    },
  },

  watch: {
    getProducts(newProduct, oldProduct) {
      if (newProduct.length !== 0) {
        this.getEverything();
      }
    },
  },

  methods: {
    resetFilter() {
      this.arrayProductHere = this.getAllProducts;
      this.orderSelected = "";
      this.orderNameSelected = "";
      this.selectedCategory = [];
      this.selectedFlavourSelected = [];
    },

    getEverything() {
      this.getAllProducts = this.productsStore.getProducts;
      this.currentProduct = JSON.parse(JSON.stringify(this.getAllProducts));
      this.arrayProductHere = this.currentProduct;
    },

    orderPrice(e) {
      console.log(e);
      if (e == "mayormenor") {
        this.arrayProductHere.sort((b, a) => a.price - b.price);
        this.orderNameSelected == "";
      } else if (e == "menormayor") {
        this.arrayProductHere.sort((a, b) => a.price - b.price);
        this.orderNameSelected == "";
      } else if (e == "") {
        this.arrayProductHere = this.getAllProducts;
      }
    },

    orderName(e) {
      console.log(e);

      this.arrayProductHere.sort((a, b) => {
        console.log("a", a.titlee);
        console.log("b", b.titlee);
        const nameA = a.titlee.toUpperCase(); // ignore upper and lowercase
        const nameB = b.titlee.toUpperCase(); // ignore upper and lowercase
        if (e === "ZA") {
          console.log("Hola estoy en AZ");
          if (nameA > nameB) {
            return -1;
          }
          this.orderPrice = "";
        }

        if (e === "AZ") {
          console.log("Hola estoy en ZA");
          if (nameA < nameB) {
            return -1;
          }
          this.orderPrice = "";
        }

        // names must be equal
        if (e == "") {
          return 0;
        }
      });
    },

    filterFlavour(e) {
      console.log("lo que llega", e);
      //var p = [];
      if (e != "") {
        this.arrayProductHere = this.currentProduct.filter(
          (product) =>
            product.flavour[0] === e
            //(p.push(product.flavour[0]))
        );

        //console.log("lo que hay: ", p)

      } else {
        this.arrayProductHere = this.getAllProducts;
      }
    },

    filterCategory(e) {
      console.log(e);

      if (e != "") {
        this.arrayProductHere = this.currentProduct.filter(
          (product) =>
            product.category === e
        );
      }
       if (e == "todos") {
        this.arrayProductHere = this.getAllProducts;
      }
    },
  },
};
</script>

<template>
  <section class="banners"></section>
  <section class="ourProducts">
    <div class="ourProducts__header">
      <h1 class="ourProducts__title title title--gold">Nuestros productos</h1>

      <div
        @change="filterCategory(this.selectedCategory)"
        class="headerCategories"
      >
        <input
          v-model="selectedCategory"
          type="radio"
          id="all"
          name="category"
          value="todos"
        />
          <label for="all" @click="todos">Todos</label>

        <input
          v-model="selectedCategory"
          type="radio"
          id="cakes"
          name="category"
          value="Cake"
        />
          <label for="cakes" @click="cakes">Cakes</label>

        <input
          v-model="selectedCategory"
          type="radio"
          id="cupcakes"
          name="category"
          value="Cupcakes"
        />
          <label for="cupcakes" @click="cupcakes">Cupcakes</label>

        <input
          v-model="selectedCategory"
          type="radio"
          id="cookies"
          name="category"
          value="Cookies"
        />
          <label for="cookies" @click="cookies">Cookies</label>

        <input
          v-model="selectedCategory"
          type="radio"
          id="pies"
          name="category"
          value="Pies"
        />
          <label for="pies" @click="pies">Pies</label>

        <input
          v-model="selectedCategory"
          type="radio"
          id="donuts"
          name="category"
          value="Donuts"
        />
          <label for="donuts" @click="donuts">Donuts</label>
      </div>
      <RouterLink to="/addnew">
        <ButtonOn v-if="userIsLogged">Agregar nuevo producto</ButtonOn>
      </RouterLink>
    </div>
    <div class="ourProducts__body">
      <aside class="filters">
        <div class="filter">
          <div class="filtersTitle">
            <img src="../../public/imgs/icons/filter.svg" />
            <p class="text">Filtros</p>
          </div>
          <div class="filtersCategories">
            <label>Sabor</label>
            <select
              @change="filterFlavour(this.filterFlavourSelected)"
              v-model="this.filterFlavourSelected"
              class="row__month"
            >
              <option value="">Todos</option>
              <option value="Red Velvet">Red Velvet</option>
              <option value="Naranja">Narnaja con amapola</option>
              <option value="Vainilla">Vainilla</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Zanahoria">Zanahoria</option>
              <option value="Limon">Limón</option>
            </select>
          </div>
        </div>
        <div class="order">
          <div class="filtersTitle">
            <img src="/imgs/icons/filter.svg" />
            <p>Ordenar</p>
          </div>
          <div class="filtersCategories">
            <label>Precio</label>
            <select
              @change="orderPrice(this.orderSelected)"
              v-model="this.orderSelected"
              class="row__month"
            >
              <option value="">Ninguno</option>
              <option value="mayormenor">Mayor a mejor</option>
              <option value="menormayor">Menor a mayor</option>
            </select>
          </div>
          <div class="filtersCategories">
            <label>Calificación</label>
            <select class="row__month">
              <option>Ninguno</option>
              <option>Mayor a mejor</option>
              <option>Menor a mayor</option>
            </select>
          </div>
          <div class="filtersCategories">
            <label>Nombre</label>
            <select
              @change="orderName(this.orderNameSelected)"
              v-model="this.orderNameSelected"
              class="row__month"
            >
              <option value="">Ninguno</option>
              <option value="AZ">A - Z</option>
              <option value="ZA">Z -> A</option>
            </select>
          </div>
        </div>
      </aside>
      <div class="allProducts">
        <ProductCard
          class="cards"
          v-for="product in arrayProductHere"
          :key="product"
          :image="product.image"
          :titlee="product.titlee"
          :category="product.category"
          :description="product.description"
          :flavour="product.flavour"
          :rating="product.rating"
          :price="product.price"
        >
        </ProductCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";
.banners {
  background-image: url(../../public/imgs/Products/bannerProducts.png);
  background-size: cover;
  background-repeat: no-repeat !important;
  z-index: -5;
  height: 230px;
}

.ourProducts {
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .headerCategories {
      display: flex;
      color: $MainColorGold;
      gap: 40px;
      margin: 20px 0px;

      input {
        position: absolute;
        opacity: 0;
      }
      label {
        cursor: pointer;
      }
    }
  }

  &__body {
    display: flex;
    width: 100%;
    margin: 30px 0px;

    .filters {
      position: relative;
      background-color: $White;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      width: 250px;
      height: auto;

      .filtersCategories {
        display: flex;
        flex-direction: column;
        color: $MainColorGold;
        margin: 20px 20px;
      }

      .filtersTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        color: $MainColorGold;
        margin-top: 15px;
      }

      img {
        width: 30px;
      }

      select {
        border: 2px solid $MainColorGold;
        color: $MainColorGold;
        background: transparent;
        height: 30px;
      }
    }
  }
  .allProducts {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 60px;
    margin-left: 20px;
    border-left: 2px solid #cfced1;
    padding-left: 20px;

    .cards {
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 600px) {
  .ourProducts {
    margin: 0px 10px;

    &__header {
      .headerCategories {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2px;
        margin: 20px 0px 0px 0px;
      }
    }

    &__body {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>