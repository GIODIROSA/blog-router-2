<template>
  <div class="home">
    <section class="fondoSectionAuto">
     
      <div class="banner"></div>
      <div class="titleSectionAuto">
      <h5 class="subtituloTitle">AUTO</h5>
      <h1><span class="fragmentoTitle">YOUR CAR A</span> <br> TRUE CUSTOM LOOK!</h1>
      <h5>easy wheel & tire finder</h5>
      </div>
    </section>

   
  </div>
</template>

<script>


export default {
  name: 'Home',
  
}
</script>

<style lang="scss" scoped>
.fondoSectionAuto{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 850px;
  background: #ff8e6e;
  .subtituloTitle{
    background-color: #515070;
    color: white;
    width: 100px;
    padding: 0px 10px;
  }
  .titleSectionAuto{
    margin: 0px 400px 0px 0px;
    text-align: left;
    color: #515070;
    font-weight: 300;
    .fragmentoTitle{
     font-weight: 700;
     font-size: 50px;
    }
  }
}
.banner{
  background-image: url('../assets/img/auto.jpg');
  width: 450px;
  height: 850px;
}


</style>