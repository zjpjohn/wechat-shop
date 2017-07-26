<template>
  <div class="swiperCon">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperData" :key="item" :data-background="item">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  import {mapState,mapMutations} from "vuex"
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import swiper1 from '../../assets/img/swiper/swiper1.jpg'
  import swiper2 from '../../assets/img/swiper/swiper2.jpg'
  import swiper3 from '../../assets/img/swiper/swiper3.jpg'
  export default {
      name:'wechat-swiper',
      computed:{
//        ...mapState({
//          swiperData:(state) => {
//              return [
//                  swiper1,swiper2,swiper3
//              ];
//          },
//          swiperOption:(state) => {
//            return   {
//              pagination: '.swiper-pagination',
//              paginationClickable: true,
//              lazyLoading : true,
//              initialSlide:state.swiperData.initialSlide
//            }
//          }
//        })
        swiperData:() => {
          return [
                  swiper1,swiper2,swiper3
          ];
        },
        swiperOption:() => {
          return   {
              pagination: '.swiper-pagination',
              paginationClickable: true,
              lazyLoading : true,
            }
        }
      },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  .swiperCon {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter:blur(10px);
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity .5s
    }
    &.fade-enter, &.fade-leave-active {
      opacity: 0
    }
    .swiper-container{
      height: 100%;
      .swiper-slide{
        height: 100%;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
</style>
