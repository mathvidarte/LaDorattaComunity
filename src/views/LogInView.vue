<script>
import { RouterLink, RouterView } from "vue-router";
import ButtonOn from "../components/ButtonOn.vue";
import { useAuthenticationStore } from "../stores/authentication";
import { mapStores } from "pinia";
import { auth } from '../firebase/config';

export default {
  components: { ButtonOn, RouterLink, RouterView},

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    signIn(e) {
      e.preventDefault();
      console.log(this.email, this.password);
      this.authenticationStore.SignIn(this.email, this.password);
    },

    logOut (e) {
        e.preventDefault();
        this.authenticationStore.logOut();
    }
  },

  mounted () {
    //console.log("Leer esto", this.authenticationStore.auth.currentUser);
  },

  computed: {
    ...mapStores(useAuthenticationStore),
    userIsLogged () {
        return this.authenticationStore.user !== null
    }
  },
};
</script>

<template>
  <div class="containerLogin" v-if="!userIsLogged">
    <section class="login">
      <div class="main__error"></div>
      <h2 class="title">Iniciar sesión</h2>
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

        <RouterLink to="/signUp">
            <p class="goSignUp">¿No tienes una cuenta? Registrate</p>
        </RouterLink>

        <ButtonOn class="button_on button_on--white" @click="signIn"
          >Ingresar</ButtonOn
        >
      </form>
    </section>
</div>
<!--<section class="logOut" v-else>
    <RouterLink to="/menu">
        <ButtonOn type="button" class="button_on button_on--white logOutBtn" @click="logOut">Cerrar sesión</ButtonOn>
    </RouterLink>
</section>-->

</template>

<style lang="scss" scoped>
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

.logOut {
    display: flex;
    flex-direction:column;
    align-items: center;
    background-color: $MainColorGold;
    padding: 200px 0px 100px 0px;

    .logOutBtn {
    }
}

@media screen and (max-width: 600px) {
  .containerLogin {
    padding: 0px 10px 20px 10px;
    .login {
      width: 100%;
    }
  }
 }
</style>