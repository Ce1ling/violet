<script setup lang="ts">
import { ref } from 'vue'


type Props = {
  list: string[]
}
defineProps<Props>()

const active = ref(0)

</script>

<template>
  <aside class="content-aside">
    <p>目录</p>
    <ul class="list">
      <li class="item" v-for="(item, i) in list" :key="i">
        <a :href="`#${item}`" :class="{ active: active === i }" @click="active = i">
          {{ item }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.active {
  color: var(--primary-color) !important;
}
.content-aside {
  color: #6d6d6d;
  > p { font-weight: 600; }
  .list {
    margin: 10px;
    .item {
      padding: 0 0 5px;
      a {
        font-size: 14px;
        transition: all 0s;
        color: #6d6d6d;
        &:hover { color: var(--primary-color); }
      }
    }
  }
}
</style>