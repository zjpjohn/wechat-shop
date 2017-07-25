<template>
  <header>
    <a href="" class="like-link"><span class="icon like"></span></a>
    <div class="center">
      <p>微信商城</p>
    </div>
    <router-link to="/info" class="info-link">
      <span class="icon info"></span>
    </router-link>
  </header>
</template>

<script>
  export default {
      name:'shop-header'
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 1rem;
    background-color: #91bb35;
    .like-link{
      display: inline-block;
      width: 0.32rem;
      height: 0.32rem;
      position: absolute;
      top:50%;
      left:10%;
      transform: translate(-50%,-50%);
      span{
        width: 0.32rem;
        height: 0.32rem;
        display: inline-block;
      }
      .like{
        background: url("../../assets/img/header/like.png") no-repeat;
        background-size: 0.32rem auto;
      }
    }
    .center{
      text-align: center;
      font-size: 0.5rem;
      line-height: 1rem;
    }
    .info-link{
      position: absolute;
      top:50%;
      right:10%;
      transform: translate(-50%, -50%);
      .icon{
        width: 0.32rem;
        height: 0.32rem;
        display: inline-block;
      }
      .info{
        background: url("../../assets/img/header/info.png") no-repeat;
        background-size: 0.32rem auto;
      }
    }

  }
</style>
