<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { type: 'primary', content: '子弹', disabled: false },
  { type: 'success', content: '炸弹', disabled: false },
  { type: 'info', content: '炮弹', disabled: false },
  { type: 'warning', content: '导弹', disabled: false },
  { type: 'danger', content: '核弹', disabled: true },
])
</script>

<template>
  <vi-row>
    <vi-tag 
      v-for="{ type, content, disabled } in tags" 
      :type="type" 
      :disabled="disabled" 
      closable
    >
      {{ content }}
    </vi-tag>
  </vi-row>
</template>

<style scoped>
</style>