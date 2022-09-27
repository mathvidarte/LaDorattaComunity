<script>

   import ButtonOn from '../components/ButtonOn.vue';
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
  },
};
</script>
       
<template>
  <RouterLink :key="this.titlee" :to="`/detail/${this.titlee}`">
  <div class="card">
     <img class="card__img" :src="this.image" />
     <h3 class="card__title">{{ this.titlee }}</h3>
    <p class="card__category">{{ this.category }}</p>
    <p class="card__description"> {{ this.description }} </p>
    <p class="card__rating"> 🤩 {{ this.rating }} </p>
    <p class="card__price">${{this.price}} </p>
    <ButtonOn class="card__btn"> Agregar al carrito </ButtonOn>
  </div>
</RouterLink>
</template>
       
       <style lang="scss">
@import "src/assets/main.scss";

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $White;
  width: 319px;
  height: 426px;
  border-radius: 0px;
  color: $MainColorGold;
  margin-top: 100px;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

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
}
</style>