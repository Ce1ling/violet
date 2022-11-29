import { defineStore } from 'pinia'

export const useStore = defineStore('list', {
  state: () => ({
    list: [
      { id: 1, type: 'title', title: '基础组件', name: 'components' },
      { id: 2, type: 'component', title: 'Button 按钮', name: 'button' },
      { id: 13, type: 'component', title: 'Icon 图标', name: 'icon' },
      { id: 13, type: 'component', title: 'Link 链接', name: '' },
      { id: 18, type: 'title', title: '布局组件', name: 'components' },
      { id: 19, type: 'component', title: 'Divider 分割线', name: '' },
      { id: 20, type: 'component', title: 'Grid 布局', name: '' },
      { id: 3, type: 'component', title: 'Layout 布局', name: 'layout' },
      { id: 4, type: 'title', title: '表单组件', name: '' },
      { id: 5, type: 'component', title: 'Input 输入框', name: '' },
      { id: 6, type: 'component', title: 'Radio 单选', name: '' },
      { id: 7, type: 'component', title: 'Checkbox 复选框', name: '' },
      { id: 8, type: 'component', title: 'Switch 切换开关', name: '' },
      { id: 9, type: 'component', title: 'Select 选择器', name: '' },
      { id: 10, type: 'component', title: 'Date Picker 日期选择器', name: '' },
      { id: 11, type: 'component', title: 'Time Picker 时间选择器', name: '' },
      { id: 12, type: 'component', title: 'DateTime Picker 日期时间选择器', name: '' },
      { id: 14, type: 'title', title: 'Navigation 导航组件', name: 'components' },
      { id: 15, type: 'component', title: 'Menu 菜单', name: '' },
      { id: 16, type: 'component', title: 'Tabs 标签切换', name: '' },
      { id: 17, type: 'component', title: 'Pagination 分页器', name: '' },
    ]
  }),
  getters: {
  },
  actions: {
  }
})