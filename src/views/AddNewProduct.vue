<script>
import ButtonOn from "../components/ButtonOn.vue";
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  components: {
    ButtonOn,
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },

    isUploadImage() {
      return this.myProduct.image != null;
    },
  },

  watch: {
    isUploadImage(imgAdd, imgNotAdd) {
      if (imgAdd == true) {
        console.log("HAY IMG", imgAdd);
        this.productsStore.downloadUrImage(this.myProduct.image);

      }else{
        console.log("NO HAY IMG", imgAdd);
      }
    },
  },

  data() {
    return {
      image: [],
      titlee: "",
      category: "",
      description: "",
      rating: "",
      price: "",
      flavour: [],

      myProduct: [],
    };
  },

  methods: {
    createNewProduct() {
      this.myProduct = {
        image: this.image,
        titlee: this.titlee,
        category: this.category,
        description: this.description,
        rating: "4",
        price: this.price,
        flavour: this.flavour,
      };

      //console.log(myProduct);
      //console.log(myProduct.image)
      console.log(this.myProduct.image);
      this.productsStore.uploadImage(this.myProduct.image);
      this.productsStore.newProduct(this.myProduct);
    },

    imageUpload() {
      return this.productsStore.uploadImage(this.myProduct.image);
    },

    newFile(e) {
      var files = e.target.files;
      console.log("files", files);
      this.image = files[0];
      console.log("image", files[0].name);

      /*const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.image = reader.result;
        console.log("image", this.image);
      });
      reader.readAsDataURL(files[0]);*/
    },
  },
};
</script>

<template>
  <section class="productoForm">
    <h1 class="productoForm__title">Agregar productos</h1>
    <div class="productoForm__form">
      <div class="itemForm">
        <label class="text"> Nombre</label>
        <input
          class=""
          placeholder="Nombre"
          v-model="titlee"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">Sabor:</label>
        <div class="checkContainer">
          <input
            class="checkbox"
            type="checkbox"
            value="Red Velvet"
            v-model="flavour"
            id="Red Velvet"
          />
          <label class="text" for="Red Velvet">Red Velvet</label>

          <input
            class="checkbox"
            type="checkbox"
            value="Naranja"
            v-model="flavour"
            id="Naranaja"
          />
          <label class="text" for="Naranja">Naranaja con amapola</label>

          <input
            class="checkbox"
            type="checkbox"
            value="Vainilla"
            v-model="flavour"
            id="Vainilla"
          />
          <label class="text" for="Vainilla">Vainilla</label>

          <input
            class="checkbox"
            type="checkbox"
            value="Chocolate"
            v-model="flavour"
            id="Chocolate"
          />
          <label class="text" for="Chocolate">Chocolate</label>

          <input
            class="checkbox"
            type="checkbox"
            value="Zanahoria"
            v-model="flavour"
            id="Zanahoria"
          />
          <label class="text" for="Zanahoria">Zanahoria</label>

          <input
            class="checkbox"
            type="checkbox"
            value="Limon"
            v-model="flavour"
            id="Limon"
          />
          <label class="text" for="Limon">Limon</label>
        </div>
      </div>

      <div class="itemForm">
        <label class="text">
          Categoría:
          <select class="" v-model="category" required>
            <option>Cake</option>
            <option>Cupcakes</option>
            <option>Pies</option>
            <option>Cookies</option>
            <option>Donuts</option>
          </select>
        </label>
      </div>
      <div class="itemForm">
        <label class="text"> Descripción: </label>
        <input
          class=""
          placeholder="Descripción del producto"
          v-model="description"
          type="text"
          required
        />
      </div>
      <div class="itemForm">
        <label class="text"> Precio:</label>
        <input
          class=""
          placeholder="Precio"
          v-model="price"
          type="number"
          required
        />
      </div>
      <div class="itemForm">
        <label class="text"> Imagen: </label>
        <input
          class=""
          id="myFile"
          type="file"
          accept=".jpg, .jpeg, .png"
          @change="newFile"
          required
        />
      </div>

      <div class="form__btn">
        <ButtonOn @click="createNewProduct" class="button_on">Agregar</ButtonOn>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.productoForm {
  margin: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $MainColorGold;
  width: auto;

  &__title {
    color: $White;
    font-size: $TitleTwo;
    font-family: $TitleFonts;
    font-style: italic;
    margin-top: 100px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background-color: $Background;
    padding: 20px;

    .itemForm {
      display: flex;
      flex-direction: column;
    }

    .checkContainer {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }

  select {
    border: 2px solid $MainColorGold;
    color: $MainColorGold;
    background: transparent;
    height: 30px;
    margin-bottom: 10px;
  }

  input {
    border: 2px solid $MainColorGold;
    color: $MainColorGold;
    background: transparent;
    height: 30px;
    margin-bottom: 10px;
  }
}
</style>