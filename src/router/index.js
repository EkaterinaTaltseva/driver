import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    //path: '*',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    redirect: '/about',
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
