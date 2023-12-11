import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrimerEjercicio from '../views/PrimerEjercicio.vue'
import SegundoEjercicio from '../views/SegundoEjercicio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/primer-ejercicio',
    name: 'PrimerEjercicio',
    component: PrimerEjercicio
  },
  {
    path: '/segundo-ejercicio',
    name: 'SegundoEjercicio',
    component: SegundoEjercicio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
