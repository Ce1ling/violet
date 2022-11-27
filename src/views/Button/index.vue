<script setup lang="ts">
import { reactive } from 'vue';
import Button from '../../components/UIComponents/Button/index.vue'
import Contents from '../Contents/index.vue'

const contents = reactive([
  { title: 'button contents' }
])
</script>

<template>
  <section class="content">
    vi-button 组件页面
    <Button />
  </section>
  <Contents class="contents" :list="contents" />
</template>

<style scoped>
</style>