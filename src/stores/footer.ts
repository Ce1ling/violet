import { defineStore } from 'pinia'


export const useStore = defineStore('footer', {
  state: () => ({
    links: [
      { id: 1, title: 'GitHub 地址', link: 'https:github.com/Ce1ling/violet' },
      { id: 2, title: '作者 GitHub', link: 'https:github.com/Ce1ling' },
      { id: 3, title: '更新日志', link: '' },
      { id: 4, title: '参与贡献', link: '' },
    ]
  }),
  getters: {

  },
  actions: {

  }
})