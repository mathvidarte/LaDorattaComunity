<script>
import Cover from "../components/Cover.vue";
import ButtonOn from "../components/ButtonOn.vue";
import Carrusel from "../components/Carrusel.vue";

export default {

  /* $(".option").click(function(){
   $(".option").removeClass("active");
   $(this).addClass("active");
   
}),*/

  components: {
    Cover,
    ButtonOn,
    Carrusel,
  },

  
};
</script>

<template>
    <!-------------------BANNER----------------------->
  <Cover> </Cover>

  <!-------------------BESTSELLER---------------------->
  <section class="mostsold">
    <h2 class="title title--gold mostsold__title">Los más vendidos</h2>
    <div>
      <Carrusel
        class="carrusel"
        :cards="[
          {
            image: 'src/assets/imgs/redvelvet.png',
            titlee: 'Red Velvet Queen',
            category: 'Cake',
            description:
              '3 layers de cake esponjoso de red velvet con relleno de buttercream y decorado con una corona de grageas doradas',
            rating: '🤩4',  
            price: '$25.000',
          },
          {
            image: 'src/assets/imgs/mariposas.png',
            titlee: 'Mariposas Cake',
            category: 'Cake',
            description:
              '3 layers de cake esponjoso de red velvet con relleno de buttercream y decorado con una corona de grageas doradas',
              rating: '🤩5',  
              price: '$25.000',
          },
          {
            image: 'src/assets/imgs/lemoncake1.png',
            titlee: 'Lemon Cake',
            category: 'Cake',
            description:
              '3 layers de cake esponjoso de red velvet con relleno de buttercream y decorado con una corona de grageas doradas',
              rating: '🤩3',  
              price: '$35.000',
          },
          {
            image: 'src/assets/imgs/redvelvet.png',
            titlee: 'Red Velvet Queen',
            category: 'Cake',
            description:
              '3 layers de cake esponjoso de red velvet con relleno de buttercream y decorado con una corona de grageas doradas',
              rating: '🤩4',  
              price: '$25.000',
          },
          {
            image: 'src/assets/imgs/mariposas.png',
            titlee: 'Mariposas Cake',
            category: 'Cake',
            description:
              '3 layers de cake esponjoso de red velvet con relleno de buttercream y decorado con una corona de grageas doradas',
              rating: '🤩5',  
              price: '$25.000',
          },
          {
            image: 'src/assets/imgs/lemoncake1.png',
            titlee: 'Lemon Cake',
            category: 'Cake',
            description:
              '3 layers de cake esponjoso de red velvet con relleno de buttercream y decorado con una corona de grageas doradas',
              rating: '🤩3',  
              price: '$35.000',
          },
        ]"
      ></Carrusel>
    </div>
  </section>

  <!----------------------------LOVE DESSERT---------------->
  <section class="loveDesert">
      <img class="loveDesert__img"/>
    <div class="loveDesert__text">
      <h2 class="titleDessert title title--gold">Amamos el postre</h2>
      <p class="bodyTextDessert">
        Nuestro amor por el postre nos hizo iniciar con este sueño y crear
        <strong class="bold">La Doratta</strong> con el principal propósito de
        poder que todos los amantes del dulce puedan disfrutar de la calidad de
        un producto fresco y delicioso.
      </p>
      <div class="loveDesert__btn">
          <ButtonOn type="button" class="button_on text__btn">Conoce más</ButtonOn>
      </div>
    </div>
  </section>

  <!---------------------------CATEGORIES-------------------->
  <section class="categories">
    <h1 class="title title--gold">Nuestros productos</h1>
    <div class="options">
   <div class="option active" style="--optionBackground:url(src/assets/imgs/cakes.png);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <i class="fas fa-walking"></i>
         </div>
         <div class="info">
            <div class="main">Blonkisoaz</div>
            <div class="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div class="option" style="--optionBackground:url(src/assets/imgs/cupcakes.png);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <i class="fas fa-snowflake"></i>
         </div>
         <div class="info">
            <div class="main">Oretemauw</div>
            <div class="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div class="option" style="--optionBackground:url(src/assets/imgs/pies.png);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <i class="fas fa-tree"></i>
         </div>
         <div class="info">
            <div class="main">Iteresuselle</div>
            <div class="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div class="option" style="--optionBackground:url(src/assets/imgs/cookies.png);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <i class="fas fa-tint"></i>
         </div>
         <div class="info">
            <div class="main">Idiefe</div>
            <div class="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div class="option" style="--optionBackground:url(src/assets/imgs/donuts.png);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <i class="fas fa-sun"></i>
         </div>
         <div class="info">
            <div class="main">Inatethi</div>
            <div class="sub">Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
</div>
  </section>
</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";

$optionDefaultColours: #ED5565,#FC6E51,#FFCE54,#2ECC71,#5D9CEC,#AC92EC;
.mostsold {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-bottom: 20px;
  }
  .carrusel {
    height: 580px;
  }
}

.loveDesert {
    display: flex;
    flex-direction: row;
    background-image: url(src/assets/imgs/LoveDessert.png);
    background-repeat: no-repeat !important;
    background-size: 50%;
    margin-top: 50px;
    height: 500px;
    align-items: center;
    justify-content: end;

    &__text {
      display: flex;
      flex-direction: column;
      width: 45%;
      margin: 0px 25px;
    }
    .bodyTextDessert {
        margin: 20px 0px 40px 0px;
        color: $MainColorGold;
    }

    &__btn {
        display: flex;
        justify-content: center;
    }
  }

  //--------------- CATEGORIES ---------------->

  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  .options {
      display:flex;
      flex-direction:row;
      align-items:stretch;
      overflow:hidden;

      min-width:600px;
      max-width:900px;
      width:calc(100% - 100px);
      
      height:400px;
      
     
      
      .option {
         position: relative;
         overflow:hidden;

         min-width:60px;
         margin:10px;
         //border:0px solid --defaultColor;

         background:var(--optionBackground, var(--defaultBackground, #E6E9ED));
         background-size:auto 120%;
         background-position:center;

         cursor: pointer;

         transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

         @for $i from 1 through length($optionDefaultColours) {
            &:nth-child(#{$i}) {
               --defaultBackground:#{nth($optionDefaultColours, $i)};
            }
         }
         &.active {
            flex-grow:10000;
            transform:scale(1);
            
            max-width:600px;
            margin:0px;
            border-radius:40px;
            
            background-size:auto 100%;
            .shadow {
               box-shadow:inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
            }
            .label {
               bottom:20px;
               left:20px;
               .info >div {
                  left:0px;
                  opacity:1;
               }
            }
            /*&:active {
               transform:scale(0.9);
            }*/
         }
         &:not(.active) {
            flex-grow:1;
            
            border-radius:30px;
            .shadow {
               bottom:-40px;
               box-shadow:inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
            }
            .label {
               bottom:10px;
               left:10px;
               .info >div {
                  left:20px;
                  opacity:0;
               }
            }
         }
         .shadow {
            position: absolute;
            bottom:0px;
            left:0px;
            right:0px;
            
            height:120px;
            
            transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
         }
         .label {
            display:flex;
            position: absolute;
            right:0px;

            height:40px;
            transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
            .icon {
               display:flex;
               flex-direction:row;
               justify-content:center;
               align-items:center;
               
               min-width:40px;
               max-width:40px;
               height:40px;
               border-radius:100%;

               background-color:white;
               color:var(--defaultBackground);
            }
            .info {
               display:flex;
               flex-direction:column;
               justify-content:center;
               
               margin-left:10px;
               
               color:white;
               
               white-space: pre;
               >div {
                  position: relative;
                  
                  transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity .5s ease-out;
               }
               .main {
                  font-weight:bold;
                  font-size:1.2rem;
               }
               .sub {
                  transition-delay:.1s;
               }
            }
         }
      }
   }

   

   @media screen and (max-width: 600px) {
      .mostsold {
         &__title {
            font-size: $TitleTwoRespo;
         }
      }
   }
</style>