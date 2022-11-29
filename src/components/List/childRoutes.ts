export default [
  {
    path: 'button',
    name: 'button',
    component: () => import('../../views/Button/index.vue')
  },
  {
    path: 'icon',
    name: 'icon',
    component: () => import('../../views/Icon/index.vue')
  },
  {
    path: 'layout',
    name: 'layout',
    component: () => import('../../views/Layout/index.vue')
  },
]