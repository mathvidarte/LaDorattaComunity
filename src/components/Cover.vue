<script>
import ButtonOn from "../components/ButtonOn.vue";
export default {
  components: {
    ButtonOn,
  },
};
</script>
   
   <template>
  <div class="container">
    <section class="cover">
      <img class="backgroundcover" src="../../public/imgs/backgroundCover.png" />
      <div class="coverInfo">
        <img src="../../public/imgs/CheesecakeOver.png" />
        <div class="covertext">
          <p class="firstText">Todos merecen un</p>
          <p class="maintext">delicioso postre</p>
          <p class="lastText">para disfrutar</p>
          <RouterLink to="/menu">
            <ButtonOn class="covertext__btn"> Nuestros productos </ButtonOn>
          </RouterLink>
        </div>
        <p class="cta">Desliza > > ></p>
      </div>
    </section>
  </div>
</template>
   
   <style lang="scss">
@import "src/assets/main.scss";

.container {
  .cover {
    .backgroundcover {
      width: 100vw;
      height: 100vh;
      z-index: -5;
      object-fit: cover;
    }
    .coverInfo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: absolute;
      top: 130px;
      left: 200px;

      img {
        width: 400px;
        transform: rotate(-2deg);
        object-fit: cover;
      }

      .covertext {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-left: 80px;

        p {
          font-family: $BodyText;
          font-weight: 600;
          font-style: italic;
          color: $White;
          font-size: $TitleSize;
        }

        .firstText {
          margin-left: 0px;
        }

        .lastText {
          margin-left: 150px;
          margin-top: 5px;
        }

        .maintext {
          font-family: titleFont;
          font-size: 70px;
        }

        &__btn {
          margin-top: 35px;
        }
      }
    }
    .cta {
      display: flex;
      color: white;
      font-family: $BodyText;
      font-size: 18px;
      position: absolute;
      bottom: 30px;
      right: -250px;
      transform: rotate(90deg);
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    .cover {
      .backgroundcover {
      }
      .coverInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 130px;
        left: 30px;
        img {
          width: 200px;
        }

        .covertext {
          margin: 0px;
          p {
            font-family: $BodyText;
            font-weight: 600;
            font-style: italic;
            color: $White;
            font-size: 24px;
          }

          .maintext {
            font-family: titleFont;
            font-size: 40px;
          }
        }
      }

      .cta {
        bottom: -50px;
        right: -70px;
      }
    }
  }
}
</style>