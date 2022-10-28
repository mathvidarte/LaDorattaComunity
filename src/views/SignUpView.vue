<script>
import ButtonOn from "../components/ButtonOn.vue";
import { useAuthenticationStore } from "../stores/authentication";
import { mapStores } from "pinia";

export default {
  components: { ButtonOn },

  data() {
    return {
      email: "",
      password: "",
      cpassword: "",
    };
  },

  methods: {
    signUp(e) {
        e.preventDefault();
        if (this.password === this.cpassword) {
            this.authenticationStore.newUser(this.email, this.password);
        } else {
            alert ('Las contraseñas no coinciden');
        }
    }
  },

  mounted () {
   
  },

  computed: {
    ...mapStores(useAuthenticationStore),
  },
};
</script>

<template>
  <div class="containerLogin">
    <section class="login">
      <div class="main__error"></div>
      <h2 class="title">Regístrate</h2>
      <form action="/formResult" class="login__inputs">
        <div class="email__type">
          <label class="login__label">Correo electrónico</label>
          <input
            type="email"
            class="login__email"
            placeholder="Correo electrónico"
            name="email"
            v-model="email"
          />
        </div>

        <div class="email__type">
          <label class="login__label">Contraseña</label>
          <input
            type="password"
            class="login__password"
            placeholder="Cotraseña"
            name="password"
            v-model="password"
          />
        </div>

        <div class="email__type">
          <label class="login__label">Confirmar contraseña</label>
          <input
            type="password"
            class="login__password"
            placeholder="Cotraseña"
            name="password"
            v-model="cpassword"
          />
        </div>

        <RouterLink to="/logIn">
          <p class="goSignUp">¿Ya tienes una cuenta? Inicia sesion</p>
        </RouterLink>

        <ButtonOn class="button_on button_on--white" @click="signUp"
          >Registrarse</ButtonOn
        >
      </form>
    </section>
  </div>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.containerLogin {
  background-color: $MainColorGold;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: auto;
    padding-top: 120px;
    text-align: center;

    .main__error {
      .error__msn {
        font-family: "Work Sans", sans-serif;
        font-weight: lighter;
        color: white;
      }
    }

    .login__inputs {
      .email__type {
        .login__label {
          font-family: $BodyText;
          color: $White;
        }

        input {
          border-color: white;
          background-color: rgba(0, 0, 0, 0);
          height: 40px;
          color: white;
          border: solid 2px;
          box-sizing: border-box;
          font-size: 18px;
          font-family: $BodyText;
          margin-top: 5px;
          width: 100%;
          margin-bottom: 20px;
        }

        ::placeholder {
          color: #eed8b8;
          font-size: 16px;
          font-family: $BodyText;
        }
      }
    }
  }

  .btnLogIn {
    width: 100%;
    height: 45px;
    color: #be8d49;
    background-color: white;
    font-family: "Work Sans", sans-serif;
    font-style: italic;
    border-radius: 5px;
    font-size: 18px;
    border: solid white 2px;
    margin-bottom: 50px;
    margin-top: 30px;
  }

  .goSignUp {
    text-decoration: none;
    color: white;
    font-family: "Work Sans", sans-serif;
    font-weight: inherit;
    margin-bottom: 20px;
  }
}
</style>