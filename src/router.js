import { createRouter, createWebHistory } from 'vue-router'
import homepage from './vue/homepage.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router