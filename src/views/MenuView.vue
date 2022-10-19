<script>
import ProductCard from "../components/ProductCard.vue";
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  data() {
    return {
      orderSelected: "",
      orderNameSelected: "",
      selectedCategory: "",

      productsHere: [],
    };
  },
  components: {
    ProductCard,
  },

  mounted() {
    this.productsHere = this.productsStore.getProducts;
  },

  methods: {
    orderPrice(e) {
      console.log(e);
      if (e == "mayormenor") {
        this.productsHere.sort((a, b) => a.price - b.price);
      } else if (e == "menormayor") {
        this.productsHere.sort((a, b) => b.price - a.price);
      }
    },

    orderName(e) {
      console.log(e);
      this.productsHere.sort((a, b) => {
        const nameA = a.titlee.toUpperCase(); // ignore upper and lowercase
        const nameB = b.titlee.toUpperCase(); // ignore upper and lowercase
        console.log(nameA);
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }

        // names must be equal
        return 0;
      });
    },

    filterCategory (e) {
      console.log(e)

      if (e != "") {
        this.productsHere.filter(
          (product) =>
            product.category.toLowerCase().replace(/ /g, "") ==
            e.toLowerCase().replace(/ /g, "")
        );
      } 
    }
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },
  },
};
</script>

<template>
  <section class="banners"></section>
  <section class="ourProducts">
    <div class="ourProducts__header">
      <h1 class="ourProducts__title title title--gold">Nuestros productos</h1>

      <div @change="filterCategory(this.selectedCategory)" class="headerCategories">
        <input v-model="selectedCategory" type="radio" id="all" name="category" value="todos">
        <label for="all">Todos</label>

        <input v-model="selectedCategory" type="radio" id="cakes" name="category" value="Cakes">
        <label for="cakes">Cakes</label>

        <input v-model="selectedCategory" type="radio" id="cupcakes" name="category" value="Cupcakes">
        <label for="cupcakes">Cupcakes</label>

        <input v-model="selectedCategory" type="radio" id="cookies" name="category" value="Cookies">
        <label for="cookies">Cookies</label>

        <input v-model="selectedCategory" type="radio" id="pies" name="category" value="Pies">
        <label for="pies">Pies</label>

        <input v-model="selectedCategory" type="radio" id="donuts" name="category" value="Donuts">
        <label for="donuts">Donuts</label>

      </div>
    </div>
    <div class="ourProducts__body">
      <aside class="filters">
        <div class="filter">
          <!--  <div class=filtersTitle>
            <img src="src/assets/icons/filter.svg"/>
            <p class="text">Filtros</p>
          </div>
          <div class="filtersCategories">
          <label>Sabor</label>
            <select class="row__month">
              <option value="">Todos</option>
              <option value="Redvelvet">Red Velvet</option>
              <option value="Naranja">Narnaja con amapola</option>
              <option value="Vainilla">Vainilla</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Zanahoria">Zanahoria</option>
              <option value="Limon">Limón</option>
            </select>
          </div>-->
        </div>
        <div class="order">
          <div class="filtersTitle">
            <img src="src/assets/icons/filter.svg" />
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
              <option value="AZ">Z - A</option>
              <option value="ZA">A -> Z</option>
            </select>
          </div>
        </div>
      </aside>
      <div class="allProducts">
        <ProductCard class="cards"
          v-for="product in allProducts"
          :key="product"
          :image="product.image"
          :titlee="product.titlee"
          :category="product.category"
          :description="product.description"
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
  background-image: url(src/assets/imgs/Products/bannerProducts.png);
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
      margin-top: 20px;

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
    margin-top: 30px;

    .filters {
      position: fixed;
      background-color: $White;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      width: 250px;

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
    margin-left: 270px;
    border-left: 2px solid #cfced1;
    padding-left: 20px;

    .cards {
      text-decoration:none;
    }
  }
}
</style>