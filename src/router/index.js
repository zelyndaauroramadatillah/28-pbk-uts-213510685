import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/about.vue';
import kegiatan from '../components/kegiatan.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },

  {
    path: '/kegiatan',
    name: 'Kegiatan',
    component: kegiatan,
   
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
