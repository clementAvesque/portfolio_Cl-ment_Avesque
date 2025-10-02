import { createRouter, createWebHistory } from 'vue-router'
import homepage from './vue/homepage.vue'
import contact from './vue/contact.vue' 

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
  {
    path:'/contact',
    name:"contact",
    component: contact
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router