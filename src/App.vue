<template>
  <div id="app">
    <div id="nav">
      <router-link class="menu" to="/">Portada</router-link> 
      <router-link class="menu" :to="{name: 'Sobremi'}">Sobre mi</router-link> 
      <router-link class="menu" :to="{name: 'Contacto'}">Contacto</router-link> 
      <router-link class="menu" to="/post/1">Último post</router-link>
    </div>
   <!-- transición de las vistas -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: "App",
  components: {
    Footer,
  },

}
</script>


<style lang="scss">
// configuracion de la transicion de las vistas
.fade-enter-active{
  transition: all 2s ease;
}
.fade-leave-active{
  transition: all 2s cubic-bezier(1,0.5,0.8,1);
}
.fade-enter, .fade-leave-to{
  transform: translateY(30px);
  opacity: 0;
}
#app {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  // color: #407088;
}

#nav {
  padding: 30px;
  background: #ffbb91;
  color: #407088;
  // configuracion del navbar
  .menu{
    font-weight: 700;
    font-size: 16px;
    color: #515070;
    padding: 20px;
  }

  &.router-link-exact-active {
      color: #e97171;
  }
}


</style>
