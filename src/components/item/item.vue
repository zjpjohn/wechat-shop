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

</style>
