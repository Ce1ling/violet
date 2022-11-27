<script setup lang="ts">
type Props = {
  list: Array<{
    title: string
    anchor: string
  }>
}
defineProps<Props>()

</script>

<template>
  <aside class="content-aside">
    <p>目录</p>
    <ul class="list">
      <li class="item" v-for="(item, i) in list" :key="i">
        <a :href="`#${item.anchor}`">{{ item.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.content-aside {
  color: #6d6d6d;
  > p { font-weight: 600; }
  .list {
    margin: 10px;
    .item {
      padding: 0 0 5px;
      a {
        color: #6d6d6d;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>