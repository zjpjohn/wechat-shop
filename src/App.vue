<template>
  <div id="app">
    <shop-nav></shop-nav>
  </div>
</template>

<script>
import nav from './components/nav/nav'
export default {
  name: 'app',
  components:{
     "shop-nav":nav,
  }
}
</script>

<style>
@import "assets/css/reset.css";
</style>
