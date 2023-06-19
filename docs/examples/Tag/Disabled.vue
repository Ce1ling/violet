<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { type: 'primary', content: '子弹' },
  { type: 'success', content: '炸弹' },
  { type: 'info', content: '炮弹' },
  { type: 'warning', content: '导弹' },
  { type: 'danger', content: '核弹' },
])
</script>

<template>
  <vi-flex gap="8px">
    <vi-tag v-for="{ type, content } in tags" :type="type" disabled>
      {{ content }}
    </vi-tag>
  </vi-flex>
</template>