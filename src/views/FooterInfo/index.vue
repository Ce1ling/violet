<script setup lang="ts">
import { useStore } from '../../stores/footer'

const store = useStore()

</script>

<template>
  <footer class="footer-wrap">
    <ul class="footer-list">
      <h1>链接</h1>
      <li class="footer-item" v-for="item in store.links" :key="item.id">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
.footer-wrap {
  padding: 50px;
  background-color: #eee;
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