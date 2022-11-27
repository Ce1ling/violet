<script setup lang="ts">
import { reactive } from 'vue';
import Layout from '../../components/UIComponents/Layout/index.vue'
import Contents from '../Contents/index.vue'

const contetns = reactive([
  { title: 'layout contetns' }
])
</script>

<template>
  <section class="content">
    vi-layout 组件页面
    <Layout />
  </section>
  <Contents class="contents" :list="contetns" />
</template>

<style scoped lang="scss">
</style>