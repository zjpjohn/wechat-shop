<template>
  <nav class="nav">
    <div class="nav-item icon" key="1">
        <router-link to="/index">
            <span class="home"></span>
          <p>首页</p>

        </router-link>
    </div>
    <div class="nav-item icon" key="2">
      <router-link to="/all">
        <span class="home"></span>
        <p>全部精选</p>
    </router-link>
    </div>
    <div class="nav-item icon" key="3">
      <router-link to="/free">
        <span class="home"></span>
       <p> 使用活动</p>
    </router-link>
    </div>
    <div class="nav-item icon" key="4">
      <router-link to="/cart">
        <span class="home"></span>
        <p>购物车</p>
    </router-link>
    </div>
    <div class="nav-item icon" key="5">
      <router-link to="/user">
        <span class="home"></span>
        <p>个人中心</p>
    </router-link>
    </div>
  </nav>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
      name:'shop-nav'
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  .nav{
    position: fixed;
    width: 100%;
    height: 0.8rem;
    text-align: center;
    left:0;
    bottom: 0;
    display: flex;
    font-size: 0.1rem;
    color: #ffffff;
    background-color: #2b2233;
    .nav-item{
      flex:1;
      font-size: 0.2rem;
      justify-content: center;
    }
    .icon {
      background-size: 0.36rem 0.36rem;
      //background-image: url(../../assets/img/nav/select.png);
      .home{
        background: url(../../assets/img/nav/home.png) no-repeat center;
        display: inline-block;
        width:0.36rem;
        height:0.36rem;
      }
      .router-link-active{
        .home{
          background: url(../../assets/img/nav/home_active.png) no-repeat center;
          display: inline-block;
          width:100%;
          height:0.36rem;
        }
      }
    }
    a{
      display: flex;
      height: 0.8rem;
      width: 100%;
      color: #fff;
      flex-direction: column;
      justify-content: center;
    }

  }
</style>
