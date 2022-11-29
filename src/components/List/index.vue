<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from '../../stores/list'

const router = useRouter()
const store = useStore()

const active = ref(1)

type Item = {
  id: number
  type: string
  title: string
  name: string 
}

const handleRouterPush = (item: Item, i: number) => {
  if (active.value === i) { return; } 

  if (item.type === 'title') { active.value = ++i }
  else { active.value = i }
  
  router.push({ name: item.name })
}
</script>

<template>
  <nav class="nav-wrap">
    <ul class="nav-list">
      <li class="nav-item" 
        v-for="(item, i) in store.list" :key="item.id"
        @click="handleRouterPush(item, i)">
        <p :class="{ 
          active: (active === i) && (item.type !== 'title'),
          [item.type]: item.type
        }">
          {{ item.title }}
        </p>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
$scorll-wh: 4px;

.active {
  background-color: var(--primary-color) !important;
  color: #fff;
}
.title {
  font-size: 18px !important;
  font-weight: 600 !important;
  padding: 10px 0;
  &:hover {
    color: var(--primary-color);
  }
}
.component {
  margin: 5px 0;
  padding: 10px 0;
  padding-left: 20px;
  border-radius: var(--border-radius);
  &:hover {
    background-color: #ddd;
  }
}

.nav-wrap {
  color: var(--font-color);
  border-right: 1px solid #ddd;
  .nav-list {
    padding: 20px;
    position: sticky;
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
    overflow: hidden;
    transition: none;
    user-select: none;
    &::-webkit-scrollbar { 
      width: $scorll-wh; 
      height: $scorll-wh; 
    }
    &:hover { 
      overflow: auto; 
      padding-right: calc(20px - $scorll-wh);
    }
    .nav-item { cursor: pointer; }
  }
}
</style>