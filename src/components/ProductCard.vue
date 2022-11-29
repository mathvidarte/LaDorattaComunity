<script>
import ButtonOn from "../components/ButtonOn.vue";
export default {
  components: {
    ButtonOn,
  },
  props: {
    image: String,
    titlee: String,
    category: String,
    description: String,
    rating: String,
    price: String,
    flavour: String,
    notFav: Boolean,
  },

  data() {
   
  },

  methods: {
    favorito() {
      console.log("Agregue a favoritos");
    },
  },
};
</script>
       
<template>
  <div class="card">
    <RouterLink
      class="card__router"
      :key="this.titlee"
      :to="`/detail/${this.titlee}`"
    >
      <img class="card__img" :src="this.image.url" />
      <h3 class="card__title">{{ this.titlee }}</h3>
      <p class="card__category">{{ this.category }}</p>
      <p class="card__description">{{ this.description }}</p>
      <p class="card__category">{{this.flavour[0]}}</p>
      <p class="card__rating">🤩 {{ this.rating }}</p>
      <p class="card__price">${{ this.price }}</p>
    </RouterLink>
    <div class="card__bottom">
      <ButtonOn class="card__btn"> Agregar al carrito </ButtonOn>
      <img
        class="fav"
        :notFav="true"
        @click="favorito"
        src="/imgs/icons/heart_outline.svg"
      />
    </div>
  </div>
</template>
       
       <style lang="scss">
@import "src/assets/main.scss";

.card {
  width: 319px;

  &__router {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $White;
    border-radius: 0px;
    color: $MainColorGold;
    margin-top: 100px;
    justify-content: space-between;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }
  &__img {
    height: 222px;
    margin-top: -90px;
  }

  &__title {
    font-family: $TitleFonts;
    font-size: $TitleSize;
    font-style: italic;
  }

  &__category {
    font-size: $BodyTextSize;
    font-style: italic;
  }

  &__description {
    margin: 0px 30px 0px 30px;
    font-style: italic;
  }

  &__rating {
    font-size: $BodyTextSize;
  }

  &__price {
    font-size: $BodyTextSize;
    font-weight: 700;
  }
  &__btn {
    margin-bottom: 30px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    background-color: $White;
    .fav {
      width: 40px;
      margin-bottom: 30px;
    }
  }
}
</style>