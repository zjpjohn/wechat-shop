<template>
  <li class="item">
    <router-link :to="{path:'/detail',query:{id:itemData.id} }">
      <div class="imgCon" :style="{backgroundImage:'url('+itemData.image+')'}"></div>
      <p class="name">{{itemData.title}}</p>
      <p class="price">¥ {{itemData.prize}}</p>
    </router-link>
  </li>
</template>

<script>
  export default {
      name:'shop-item',
      props:{
        itemData:{}
      }
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  li.item{
    width: 50%;
    padding:0.3rem;
    display: inline-block;
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
    .imgCon{
      width: 2.3rem;
      height: 2.3rem;
      background-size: cover;
    }
  }
</style>
