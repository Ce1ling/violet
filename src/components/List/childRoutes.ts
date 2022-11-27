export default [
  {
    path: 'button',
    name: 'button',
    component: () => import('../../views/Button/index.vue')
  },
  {
    path: 'layout',
    name: 'layout',
    component: () => import('../../views/Layout/index.vue')
  },
]