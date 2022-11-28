<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from '../../stores/list'

const router = useRouter()
const store = useStore()

const handleRouterPush = (name: string) => {
  router.push({ name })
}
</script>

<template>
  <nav class="nav-wrap">
    <ul class="nav-list">
      <li class="nav-item" 
        v-for="item in store.list" :key="item.id"
        @click="handleRouterPush(item.name)">
        <p :class="item.type === 'title' ? 'title' : 'component'">
          {{ item.title }}
        </p>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.title {
  font-size: 18px !important;
  font-weight: 600 !important;

  &:hover { background-color: transparent !important; }
}

.component {
  padding-left: 20px !important;
}

.nav-wrap {
  border-right: 1px solid #ddd;

  .nav-list {
    padding: 20px;
    position: sticky;
    top: var(--header-height);

    .nav-item {
      transition: all 0s;
      padding: 10px 0;
      cursor: pointer;

      &:hover { color: var(--secondary-color); }
    }
  }
}
</style>