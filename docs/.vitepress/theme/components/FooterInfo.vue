<script setup lang="ts">
import { nanoid } from 'nanoid'

const links = [
  { id: nanoid(), title: 'GitHub 地址', link: 'https://github.com/Ce1ling/violet' },
  { id: nanoid(), title: '作者 GitHub', link: 'https://github.com/Ce1ling' },
  { id: nanoid(), title: '更新日志', link: '' },
  { id: nanoid(), title: '参与贡献', link: 'https://github.com/Ce1ling/violet' },
]
</script>

<template>
<footer class="footer-wrap">
  <ul class="footer-list">
    <h1>链接</h1>
    <li class="footer-item" v-for="item in links" :key="item.id">
      <a :href="item.link" target="_blank">{{ item.title }}</a>
    </li>
  </ul>
</footer>
</template>

<style scoped lang="scss">
.footer-wrap {
  max-height: var(--footer-height);
  padding: 50px;
  background-color: var(--vp-c-bg-alpha-with-backdrop);
  filter: brightness(0.9);
  width: calc(100vw - var(--vp-sidebar-width) - var(--scroll-bar-wh));
  position: absolute;
  left: -32px;
  bottom: 0;
  // 此处 z-inde 不可小于 10，为什么呢？你可以小于 10 然后开启 dark 模式看看就知道了
  z-index: 19;
  .footer-list {
    h1 { 
      font-size: 16px; 
      margin-bottom: 14px;
    }
    .footer-item {
      margin: 8px 0;
      a { 
        color: var(--font-color);
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>