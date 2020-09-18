<template>
  <div class="contacto">
    <section class="heroContacto">
      <div class="bannerContacto">
        <h1 class="tituloBanner">Servicio Técnico</h1>
      </div>
      <h1 class="tituloContacto">SKILL SHARE</h1>
      <h5 class="textocontacto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, amet ullam. Vel, ut. Mollitia atque, at alias obcaecati molestiae excepturi?</h5>
      <h2 class="numeroContacto">0251-2329114</h2>
    </section>
   
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bannerContacto{
  background-image: url("../assets/img/auto5.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 650px;
}
.tituloBanner{
  text-align: center;
  padding: 250px 0px;
  color: white;
  font-weight: 900;
  font-size: 100px;
  text-shadow: 1px 2px 2px black;
}
.heroContacto{
  background: #70adb5;
  width: 100%;
  height: 1050px;
}
.tituloContacto{
  text-align: center;
  font-size: 150px;
  font-weight: 900;
}
.textocontacto{
  text-align: center;
}
.numeroContacto{
  text-align: center;
}


</style>