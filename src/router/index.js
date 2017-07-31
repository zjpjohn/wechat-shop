import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Free from '../pages/free.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:'/',
      redirect:"/index"
    },
    {
      path:"/free",
      component:Free
    }
  ]
})
