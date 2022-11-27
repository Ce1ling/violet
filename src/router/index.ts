import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index.vue'
import componentsRoutes from '../components/List/childRoutes'

const routes = [
  { 
    path: '/', 
    component: layout,
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