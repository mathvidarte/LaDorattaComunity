<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";
import ButtonOn from "./ButtonOn.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { ButtonOn, RouterLink, RouterView,},

  data() {
    return {
        showEdit: false,
        info: "",
    }
  },

  props: {
    itemToEdit: "",
    currentItemUID: "",
    
  },

  computed: {
    ...mapStores(useProductsStore),
  },

  methods: {
    edit() {
        //console.log("item", this.itemToEdit, "info", this.info)
        if (this.itemToEdit != null) {
            this.productsStore.edit(this.currentItemUID, this.itemToEdit, this.info)
        }
       
    },
  },
};
</script>

<template>
  <div class="containerEditBtn">
    <img src="../../public/imgs/icons/edit.svg" @click="()=>{this.showEdit = !this.showEdit}" />
  </div>
  <div class="sectionEdit" v-if="this.showEdit">
    <input 
        class="input --gold"
        placeholder="Edita aquí"
        type= "text"
        v-model="info" />
        <RouterLink to="/menu">
    <button-on class="button_on --square" @click="edit"
        ><img class="send" src="../../public/imgs/icons/arrowSend.svg"
        /></button-on>
    </RouterLink>
  </div>
</template>


<style scoped>
.containerEditBtn {
  background-color: white;
  height: min-content;
  margin: 0px 10px;
  padding: 5px 5px 0px 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
img {
  width: 25px;
  height: 25px;
}

.send {
  width: 25px;
  padding-top: 5px;
}
</style>