<template>
  <div class="index">
    <shop-header></shop-header>
    <swiper :option="swiperOption">
      <swiper-slide v-for="item in bannerList" :key="item">
        <img :src="item"/>
      </swiper-slide>


    </swiper>
  </div>

</template>

<script>
  import ShopHeader from "../components/header/header";
  import Swiper from "../../node_modules/vue-awesome-swiper/swiper";
  import swiperImage1 from '../assets/img/swiper/swiper1.jpg'
  import swiperImage2 from '../assets/img/swiper/swiper2.jpg'
  import swiperImage3 from '../assets/img/swiper/swiper3.jpg'
  import SwiperSlide from "../../node_modules/vue-awesome-swiper/slide";
  export default {
      name:"index",
      components:{
        SwiperSlide, Swiper, ShopHeader,
      },
      data(){
          return {
            bannerList:[swiperImage1,swiperImage2,swiperImage3],
            swiperOption:{
              pagination: '.swiper-pagination',
              paginationClickable: true
            }
          }
      }
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  .swiper-container{
    width: 100%;
    height: 3.3rem;
    overflow: hidden;
    padding-top:1rem;
    .swiper-slide {
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
