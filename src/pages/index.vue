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
      <p v-if="recommendData.recommend.length==0" class="tips">暂无精选商品</p>
      <ShopItems :items="recommendData.recommend" ></ShopItems>
    </div>
    <div class="list-good">
      <div class="title">全部商品</div>
      <p v-if="recommendData.recommend.length==0" class="tips">暂无全部商品</p>
      <ShopItems :items="recommendData.good" ></ShopItems>
    </div>
    <router-link to="/all" class="all-good-btn">查看全部商品</router-link>
  </div>

</template>

<script>
  import ShopHeader from "../components/header/header";
  import Swiper from "vue-awesome-swiper/swiper";
  import swiperImage1 from '../assets/img/swiper/swiper1.jpg'
  import swiperImage2 from '../assets/img/swiper/swiper2.jpg'
  import swiperImage3 from '../assets/img/swiper/swiper3.jpg'
  import SwiperSlide from "vue-awesome-swiper/slide";
  import ShopItems from '../components/item/item'
  export default {
      name:"index",
      components:{
        SwiperSlide, Swiper, ShopHeader,ShopItems
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
                {id:1,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'10'},
                {id:2,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'200'},
                {id:3,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'300'},
                {id:4,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'400'},
              ],
              good:[
                {id:1,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'10'},
                {id:2,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'200'},
                {id:3,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'300'},
                {id:4,image:'http://gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg',title:'test',prize:'400'},
              ]
            },
          }
      }
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  .index{
    height: 91%;
    overflow: scroll;
  }

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
  .list-product{
    border-bottom: 0.1rem solid #91bb35;
    .title{
      font-size: 0.32rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      border-bottom: 1px solid #d9d9d9;
    }
  }
  .list-good{
    border-bottom: 0.1rem solid #91bb35;
    .title{
      font-size: 0.32rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      border-bottom: 1px solid #d9d9d9;
    }
  }
  .all-good-btn{
    background-color: #91bb35;
    display: block;
    color: #ffffff;
    font-size: 0.3rem;
    border-radius: 4px;
    margin:0.3rem auto;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    width: 80%;
  }

</style>
