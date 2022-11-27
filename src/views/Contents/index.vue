<script setup lang="ts">
type Props = {
  list: { title: string }[]  
}
defineProps<Props>()

</script>

<template>
  <aside>
    Contents 目录
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
</style>