<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { nanoid } from 'nanoid'
import { getScrollWidth } from '../../../../packages/utils/dom/scroll'

const links = [
  { 
    id: nanoid(), 
    title: '项目地址', 
    link: 'https://github.com/Ce1ling/violet' 
  },
  { 
    id: nanoid(), 
    title: '意见反馈', 
    link: 'https://github.com/Ce1ling/violet/issues' 
  },
  { 
    id: nanoid(), 
    title: '参与贡献', 
    link: 'https://github.com/Ce1ling/violet/blob/main/.github/CONTRIBUTING.zh.md' 
  },
]

const scrollWidth = ref<string>('0px')
const getStyles = computed(() => ({
  width: `calc(100vw - var(--vp-sidebar-width) - ${scrollWidth.value}`
}))

onMounted(() => {
  scrollWidth.value = getScrollWidth('px')
})
</script>

<template>
<footer class="footer-wrap" :style="getStyles">
  <ul class="footer-list">
    <li>
      <h2>链接</h2>
    </li>
    <li class="footer-item" v-for="{ id, link, title } in links" :key="id">
      <a :href="link" target="_blank">{{ title }}</a>
    </li>
  </ul>
</footer>
</template>

<style scoped lang="scss">
.footer-wrap {
  max-height: var(--doc-footer-height);
  padding: 50px;
  background-color: var(--vp-c-bg-alpha-with-backdrop);
  filter: brightness(0.9);
  position: absolute;
  right: 0;
  bottom: 0;
  // 此处不可小于 10, 小于 10 无法盖住 .aside-curtain
  z-index: 19;
  .footer-list {
    h1 { 
      font-size: 16px; 
      margin-bottom: 14px;
    }
    .footer-item {
      margin: 8px 0;
      a { 
        color: var(--doc-font-color);
        &:hover {
          color: var(--vi-color-primary);
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .footer-wrap {
    width: 100%;
  }
}

</style>