import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../views/MSite/MSite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import Login from "../views/Login/Login";
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/mite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/mite'
    }
  ]
})
