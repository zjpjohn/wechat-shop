<template>
  <div id="app">
    <shop-header></shop-header>
    <shop-nav></shop-nav>
  </div>
</template>

<script>
import nav from './components/nav/nav'
import header from './components/header/header'

export default {
  name: 'app',
  components:{
     "shop-nav":nav,
     "shop-header":header
  }
}
</script>

<style>
@import "assets/css/reset.css";
</style>
