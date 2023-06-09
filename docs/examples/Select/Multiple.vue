<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(['AWP', 'M249'])
const value2 = ref(['AWP'])
const maxCount = ref(2)
const options1 = ref([
  { label: '一击毙命' , value: 'AWP' },
  { label: '一发入魂' , value: 'Deagle' },
  { label: '贵又难玩' , value: 'M249' },
  { label: '阿卡四七', value: 'AK-47' },
])
const options2 = ref(JSON.parse(JSON.stringify(options1.value)))
</script>

<template>
  <vi-row gap="28px">
    <vi-col>
      <span>基础多选</span>
      <vi-select 
        v-model="value1" 
        :options="options1" 
        multiple
      />
    </vi-col>
    <vi-col>
      <span>设置最多选中数: {{ maxCount }}</span>
      <vi-select 
        v-model="value2" 
        :options="options2" 
        multiple
        :max="maxCount"
      />
    </vi-col>
  </vi-row>
</template>