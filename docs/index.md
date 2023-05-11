---
layout: home
title: Violet
titleTemplate: 一款快速的网站 UI 开发工具
head:
  - - meta
    - name: description
      content: 一款快速的网站开发 UI 组件库工具，帮助你快速开发。
  - - meta
    - name: keywords
      content: UI 组件库 快速开发 Vue 组件库
hero:
  name: Violet
  text: 一款基于 Vue3 的 UI 组件库
  tagline: 点击 “开始” 按钮，预览 Violet UI 组件。
  actions:
    - theme: brand
      text: 开始
      link: /components/button.md
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/Ce1ling/violet
---

<script lang="ts" setup>
import { onMounted } from 'vue'
// 临时隐藏首页滚动条，用于播放动画
onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.setTimeout(() => document.body.style.overflow = '', 1000)
})
</script>