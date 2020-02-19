import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Modules from '../components/Modules.vue'
import Complete from '../components/Complete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/modules',
    name: 'Modules',
    component: Modules
  },
  {
    path: '/complete',
    name: 'Complete',
    component: Complete
  }
]

const router = new VueRouter({
  routes
})

export default router
