<script setup lang="ts">
import { computed, ref } from 'vue'

const value = ref('AWP')
const options = ref([
  { label: '一击毙命' , value: 'AWP' },
  { label: '一发入魂' , value: 'Deagle'} ,
  { label: '贵又难玩' , value: 'M249' },
  { label: '阿卡四七', value: 'AK-47' },
])

const getLabel = computed(() => {
  return options.value.find(option => option.value === value.value)?.label
})
</script>

<template>
  <vi-flex gap="28px" align="center">
    <vi-select 
      class="vi-select-demo"
      v-model="value" 
      :options="options" 
      disabled
    />
    <span v-show="value">"{{ getLabel }}" => "{{ value }}"</span>
  </vi-flex>
</template>