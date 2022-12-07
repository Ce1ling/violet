import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'


export const useStore = defineStore('footer', {
  state: () => ({
    links: [
      { id: nanoid(), title: 'GitHub 地址', link: 'https:github.com/Ce1ling/violet' },
      { id: nanoid(), title: '作者 GitHub', link: 'https:github.com/Ce1ling' },
      { id: nanoid(), title: '更新日志', link: '' },
      { id: nanoid(), title: '参与贡献', link: 'https:github.com/Ce1ling/violet' },
    ]
  }),
  getters: {
  },
  actions: {
  }
})