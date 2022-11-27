import { defineStore } from 'pinia'

export const useStore = defineStore('list', {
  state: () => ({
    list: [
      { id: 1, type: 'title', title: '基础组件', name: 'components' },
      { id: 2, type: 'component', title: 'Button 按钮', name: 'button' },
      { id: 3, type: 'component', title: 'Layout 布局', name: 'layout' },
      { id: 4, type: 'title', title: '表单组件', name: '/' },
      { id: 5, type: 'component', title: 'Input 输入框', name: '/' },
      { id: 6, type: 'component', title: 'Checkbox 复选框', name: '/' },
    ]
  }),
  getters: {
  },
  actions: {
  }
})