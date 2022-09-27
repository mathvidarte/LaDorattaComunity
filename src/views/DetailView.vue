<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";
import ButtonOn from "../components/ButtonOn.vue";

export default {

  components: {
    ButtonOn,
  },

  data() {
    return { currentProduct: {} };
  },
  computed: {
    ...mapStores(useProductsStore),
  },
  mounted() {
    this.currentProduct = this.productsStore.getProductById(
      this.$route.params.id
    );
  },
};
</script>

<template>
    
    <div class="product">
      <div class="product__container">
        <img :src="currentProduct.image" class="product__img"/>
          <div class="productText">
            <h1 class="title title--gold productName">{{ currentProduct.titlee }}</h1>
            <p class="text productInfo"> {{ currentProduct.category }}</p>
            <p class="text productInfo">{{ currentProduct.description }}</p>
            <p class="text productInfo"> {{ currentProduct.price }}</p>
            <ButtonOn class="buttonOn">Agregar al carrito</ButtonOn>
          </div>
      </div>
    </div>

</template>

<style lang="scss">
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