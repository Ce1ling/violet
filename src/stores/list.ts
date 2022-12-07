import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useStore = defineStore('list', {
  state: () => ({
    list: [
      { id: nanoid(), type: 'title', title: '基础组件', name: 'components' },
      { id: nanoid(), type: 'component', title: 'Button 按钮', name: 'button' },
      { id: nanoid(), type: 'component', title: 'Icon 图标', name: 'icon' },
      { id: nanoid(), type: 'component', title: 'Link 链接', name: '' },
      { id: nanoid(), type: 'title', title: '布局组件', name: 'components' },
      { id: nanoid(), type: 'component', title: 'Divider 分割线', name: '' },
      { id: nanoid(), type: 'component', title: 'Grid 布局', name: '' },
      { id: nanoid(), type: 'component', title: 'Layout 布局', name: 'layout' },
      { id: nanoid(), type: 'title', title: '表单组件', name: '' },
      { id: nanoid(), type: 'component', title: 'Input 输入框', name: '' },
      { id: nanoid(), type: 'component', title: 'Radio 单选', name: '' },
      { id: nanoid(), type: 'component', title: 'Checkbox 复选框', name: '' },
      { id: nanoid(), type: 'component', title: 'Switch 切换开关', name: '' },
      { id: nanoid(), type: 'component', title: 'Select 选择器', name: '' },
      { id: nanoid(), type: 'component', title: 'Date Picker 日期选择器', name: '' },
      { id: nanoid(), type: 'component', title: 'Time Picker 时间选择器', name: '' },
      { id: nanoid(), type: 'component', title: 'DateTime Picker 日期时间选择器', name: '' },
      { id: nanoid(), type: 'title', title: 'Navigation 导航组件', name: 'components' },
      { id: nanoid(), type: 'component', title: 'Menu 菜单', name: '' },
      { id: nanoid(), type: 'component', title: 'Tabs 标签切换', name: '' },
      { id: nanoid(), type: 'component', title: 'Pagination 分页器', name: '' },
    ],
    active: Number(localStorage.getItem('componentsActive')) || 1
  }),
  getters: {
  },
  actions: {
    setActive(i: number) {
      this.active = i
      localStorage.setItem('componentsActive', i.toString())
    }
  }
})