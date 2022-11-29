<script>

export default {
    
}
</script>

<template>
  <button class="button_on "> <slot></slot> </button>  
</template> 

<style lang="scss" scoped>

@import 'src/assets/main.scss';
.button_on {
  background-color: $MainColorGold;
  border: none;
  box-shadow: none;
  width: 250px;
  font-family: 'DM Sans', sans-serif;
  color: white;
  font-size: 20px;
  height: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer

    &--card {
      background-color: $White;
      border-radius: 0px;
      color: $SecondColor;
      cursor: pointer
    }
    &--small {
      width: 180px;
      margin-right: 10px;
      cursor: pointer
    }

    &--smallWhite {
      width: 180px;
      margin-right: 10px;
      background-color: $White;
      cursor: pointer
    }
    &--white {
      background-color: $White;
      color: $MainColorGold;
      width: 180px;
      cursor: pointer
    }

    &.--square {
      width: 40px;
      cursor: pointer
    }
}


</style>