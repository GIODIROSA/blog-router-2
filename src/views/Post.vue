<template>
  <div>
    <div>
      <section class="herosectionPost">
        <div class="bannerPost"></div>
      <h1 class="tituloConteo" v-text="tituloEntrada"></h1>
      <router-link class="compaginar" :to="paginar(false)">Anterior</router-link>
      <router-link class="compaginar" :to="paginar(true)">Siguiente</router-link>
      </section>

      <p></p>
      <div class="sectionComentarios">

      <router-link class="comentarios" :to="{ name: 'Comentarios' }">Ver Comentarios</router-link>
      <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  methods: {
    paginar(siguiente) {
      let entrada = parseInt(this.$route.params.entrada);
      if (siguiente) {
        return entrada < 10 ? `/post/${entrada + 1}` : `/post/${entrada}`;
      } else {
        return entrada > 1 ? `/post/${entrada - 1}` : `/post/${entrada}`;
      }
    },
  }, //final de methods
  computed: {
    tituloEntrada() {
      return `Entrada ${this.$route.params.entrada} del post `;
    },
  },
};
</script>

<style lang="scss" scoped>
.herosectionPost{
  background: #ff4b5c;
  height: 100vh;
  text-align: center;

.bannerPost{
  background-image: url("../assets/img/auto7.jpg");
  width: 100%;
  height: 550px;
}
.compaginar{
 padding: 20px;
 color: white;
}
}
.tituloConteo{
  font-size: 50px;
  text-align: center;
  color: #056674;
  padding: 50px 0px;
  font-weight: 900;
}
.sectionComentarios{
  text-align: center;
  padding: 50px;
  background: #66bfbf;
  font-size: 20px;
}



</style>