<script>
    export default {};
</script>

<template>
    <section class="bannerFav"></section>
    <div class="containerfav">
        <h1 class="title title--gold">Tus favoritos</h1>
        <div class="container__favs">

        </div>
    </div>

</template>

<style lang="scss">
.bannerFav {
  background-image: url(../../public/imgs/Products/favimg.png);
  background-size: cover;
  background-repeat: no-repeat !important;
  z-index: -5;
  height: 230px;
}
.containerfav {
    margin: 0px 25px;

    &__favs {
        margin: 30px 0px;
    }
    
}
</style>