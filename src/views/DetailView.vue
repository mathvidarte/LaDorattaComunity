<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";
import ButtonOn from "../components/ButtonOn.vue";
import EditBtn from "../components/EditBtn.vue";

export default {

  components: {
    ButtonOn,
    EditBtn,
  },

  data() {
    return { currentProduct: {} };
  },
  computed: {
    ...mapStores(useProductsStore),

    productInfo () {
      return this.currentProduct = this.productsStore.getProductById(
      this.$route.params.id)
    }
  },
  mounted() {
    this.currentProduct = this.productsStore.getProductById(
      this.$route.params.id
    );
  },
};
</script>

<template>
    
    <div class="product" v-if="this.productInfo">
      <div class="product__container">
        <EditBtn></EditBtn>
        <img :currentItemUID="currentProduct.id" itemToEdit="image" :src="this.currentProduct.image.link" class="product__img"/>
          <div class="productText">
            <div class="productText__part">
              <h1 class="title title--gold productName">{{ this.currentProduct.titlee }}</h1>
              <EditBtn :currentItemUID="currentProduct.id" itemToEdit="titlee"></EditBtn>
            </div>
            <div class="productText__part">
              <p class="text productInfo"> {{ this.currentProduct.category }}</p>
              <EditBtn :currentItemUID="currentProduct.id" itemToEdit="category"></EditBtn>
            </div>
            <div class="productText__part">
              <p class="text productInfo">{{ this.currentProduct.description }}</p>
              <EditBtn :currentItemUID="currentProduct.id" itemToEdit="description"></EditBtn>
            </div>
            <div class="productText__part">
              <p class="text productInfo"> {{ this.currentProduct.price }}</p>
              <EditBtn :currentItemUID="currentProduct.id" itemToEdit="price"></EditBtn>
            </div>
            <ButtonOn class="buttonOn">Agregar al carrito</ButtonOn>
          </div>
      </div>
    </div>

</template>

<style lang="scss">
@import "src/assets/main.scss";

.product {
  margin: 0px;
  width: 100vw;
  display: flex;

  &__container {
    margin: 100px 25px;
    display: flex;
    flex-direction: row;

    .productText {
      margin-left: 20px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    
      &__part {
        display: flex;
        flex-direction: row;
      }
    }
    
  }
  .productName {
    margin: 0px 0px 20px 0px;
  }

  .productInfo {
    margin-bottom: 20px;
  }

  &__img {
    width: 500px;
  }
}


</style>