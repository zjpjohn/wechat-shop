<template>
  <div class="index">
    <shop-header></shop-header>
    <shop-swiper></shop-swiper>
  </div>

</template>

<script>
  import ShopHeader from "../components/header/header";
  import ShopSwiper from "../components/swiper/swiper";

  export default {
      name:"index",
      components:{
        ShopHeader,
        ShopSwiper
      }
  }
</script>

<style>
</style>
