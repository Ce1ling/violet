import { createRouter, createWebHistory } from 'vue-router'
import componentsRoutes from '../components/List/childRoutes'

const routes = [
  { 
    path: '/', 
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: 'components',
        name: 'components',
        redirect: 'button',
        children: componentsRoutes
      },
    ]
  },
]


export const router = createRouter({
  history: createWebHistory(),
  routes
})