---
layout: home
title: Violet
titleTemplate: 一个快速的网站开发工具
head:
  - - meta
    - name: description
      content: 一个快速的网站开发 UI 组件库工具，帮助你快速开发。
  - - meta
    - name: keywords
      content: UI 组件库 快速开发 Vue组件库
hero:
  name: Violet
  text: 一个基于 Vue3 的 UI 组件库
  tagline: 点击 “开始” 按钮，开始预览 Violet 的组件吧！
  actions:
    - theme: brand
      text: 开始
      link: /components/button.md
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/Ce1ling/violet
---

<script setup lang="ts">
import { nextTick } from 'vue'

// 首页在加载动画时隐藏滚动条
nextTick(() => {
  const app: HTMLElement = document.querySelector('#app')!
  app.classList.add('scroll-hidden')
  setTimeout(() => app.classList.remove('scroll-hidden'), 1000)
})
</script>
