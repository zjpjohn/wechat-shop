<template>
  <ul>
    <li class="item" v-for="item in items">
      <router-link :to="{path:'/detail',query:{id:item.id} }">
        <div class="imgCon" :style="{backgroundImage:'url('+item.image+')'}"></div>
        <p class="name">{{item.title}}</p>
        <p class="price">¥ {{item.prize}}</p>
      </router-link>
    </li>
  </ul>

</template>

<script>
  export default {
      name:'shop-item',
      props:{
        items:{}
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
    &:nth-child(2n+1){
      border-right:1px solid #d9d9d9;
    }
  }

</style>
