import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import PaketView from '../views/PaketView.vue'

const routes = [
  {
    path: '/',
    name: 'beranda',
    component: HomeView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/paket',
    name: 'paket',
    component: PaketView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
