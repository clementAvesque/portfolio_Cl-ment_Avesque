import { createRouter, createWebHistory } from 'vue-router'
import homepage from './vue/homepage.vue'
import contact from './vue/contact.vue' 
import Slugpage from './vue/slugpage.vue'
import Draft from './vue/draft.vue'

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
  },
  {
    path:'/draft/:name',
    name:"slugpage",
    component: Slugpage
  },
  {
    path:"/draft",
    name:"draft",
    component: Draft
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router