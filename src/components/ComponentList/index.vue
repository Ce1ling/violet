<script setup lang="ts">
import { reactive } from 'vue'

const components = reactive([
  { id: 1, type: 'title', name: '基础组件' },
  { id: 2, type: 'component', name: 'Button 按钮' },
  { id: 3, type: 'component', name: 'Layout 布局' },
  { id: 4, type: 'title', name: '表单组件' },
  { id: 5, type: 'component', name: 'Input 输入框' },
  { id: 6, type: 'component', name: 'Checkbox 复选框' },
])

</script>

<template>
  <nav class="nav-wrap">
    <ul class="nav-list">
      <li class="nav-item" v-for="item in components" :key="item.id">
        <p :class="item.type === 'title' ? 'title' : 'component'">
          {{ item.name }}
        </p>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.title {
  font-size: 18px !important;
  font-weight: 600 !important;
  &:hover {
    background-color: transparent !important;
  }
}
.component {
  padding-left: 20px !important;
}
.nav-wrap {
  .nav-list {
    padding: 20px;
    .nav-item {
      padding: 10px 0;
      &:hover {
        cursor: pointer;
        color: var(--secondary-color);
      }
    }
  }
}

</style>