import { defineStore } from 'pinia'

export const useStore = defineStore('content', {
  state: () => ({
    text: 'from content store',
    count: 0
  }),
  getters: {
    content: (state) => state.text + ' ' + state.count
  },
  actions: {
    add() {
      this.count ++;
    }
  }
})