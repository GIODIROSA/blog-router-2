<template>
  <div class="avisoDeError">
    <!-- mensaje para error de url y enrutamiento -->
     <h1 class="textoError"> ERROR 404. Todo esta perdido</h1>
      <router-link class="linkretornohome" to="/">Haga click aquí para volver al inicio</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* configuracion del aviso de error */
.avisoDeError{
    font-size: 150px;
    text-align: center;
}
.textoError{
  padding: 50px 0px;
}

.linkretornohome{
  font-size: 20px;
}


</style>>

