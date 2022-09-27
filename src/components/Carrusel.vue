<script>
import ProductCard from "../components/ProductCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {

  components: {
    ProductCard,
    Swiper,
    SwiperSlide,
  },

  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
       
<template>
  <div>
    <swiper
      :slidesPerView="3"
      :spaceBetween="20"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '@0.30': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="mySwperSlide" v-for="card in cards" :key="card">
         <ProductCard
         :image='card.image'
         :titlee='card.titlee'
         :category='card.category'
         :description='card.description'
         :rating='card.rating'
         :price='card.price'
         ></ProductCard>
        
      </swiper-slide>
    </swiper>
  </div>
</template>
       
<style lang="scss">
@import "src/assets/main.scss";

.mySwiper {
  width: 80vw;
  height: 100%;
}

.mySwperSlide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: baseline;
}
</style>