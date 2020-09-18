<template>
  <div>
    <!-- rutas de opcion sobre el tipo de cliente que ingresa como administrador -->
      <router-link :to="{name: 'Simple'}"></router-link>
      <router-link :to="{name: 'Avanzado'}"></router-link>


       <router-view />
  </div>
</template>

<script>
export default {

    
}
</script>

<style>

</style>