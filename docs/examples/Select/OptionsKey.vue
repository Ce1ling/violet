<script setup lang="ts">
import { computed, ref } from 'vue'

const value = ref('')
const options = ref([
  { id: 11, label: '一击毙命' , value: 'AWP' },
  { id: 22, label: '一发入魂' , value: 'Deagle' },
  { id: 33, label: '贵又难玩' , value: 'M249' },
  { id: 44, label: '阿卡四七', value: 'AK-47' },
])

const getId = computed(() => {
  return options.value.find(option => option.value === value.value)?.id
})
</script>

<template>
  <span>此示例使用了 id 作为 key, 它目前是: {{ getId }}</span>
  <vi-select 
    v-model="value" 
    :options="options" 
    options-key="id"
  />
</template>