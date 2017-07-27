<template>
  <div class="index">
    <shop-header></shop-header>
    <swiper :option="swiperOption">
      <swiper-slide v-for="item in bannerList" :key="item">
        <img :src="item"/>
      </swiper-slide>
    </swiper>
    <div class="list-product">
      <div class="title">精选商品</div>
      <div class="line"></div>
      <p v-if="recommendData.recommend.length==0" class="tips">暂无精选商品</p>
      <template v-for="item in recommendData.recommend">
        <ShopItem :itemData="item" :key="item"></ShopItem>
      </template>
    </div>
  </div>

</template>

<script>
  import ShopHeader from "../components/header/header";
  import Swiper from "vue-awesome-swiper/swiper";
  import swiperImage1 from '../assets/img/swiper/swiper1.jpg'
  import swiperImage2 from '../assets/img/swiper/swiper2.jpg'
  import swiperImage3 from '../assets/img/swiper/swiper3.jpg'
  import SwiperSlide from "vue-awesome-swiper/slide";
  import ShopItem from '../components/item/item'
  export default {
      name:"index",
      components:{
        SwiperSlide, Swiper, ShopHeader,ShopItem
      },
      data(){
          return {
            bannerList:[swiperImage1,swiperImage2,swiperImage3],
            swiperOption:{
              pagination: '.swiper-pagination',
              paginationClickable: true
            },
            recommendData:{
              recommend:[
                {id:1,image:'',title:'test',prize:'1'}
              ],
              good:[]
            },
          }
      }
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  .swiper-container{
    width: 100%;
    height: 3.3rem;
    overflow: hidden;
    .swiper-slide {
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
