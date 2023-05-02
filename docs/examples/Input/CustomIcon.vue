<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<template>
  <vi-flex direction="column" gap="18px">
    <vi-input 
      v-model="value1" 
      placeholder="自定义前后 icon" 
      prefix-icon="Search" 
      suffix-icon="Menu" 
    />
    <vi-input 
      v-model="value2" placeholder="自定义前后 icon（对象式）" 
      :prefix-icon="{ name: 'Apple', size: '16px', hoverColor: 'var(--vi-color-primary)' }" 
      :suffix-icon="{ name: 'Windows', size: '16px', hoverColor: 'var(--vi-color-primary)' }"  
    />
    <vi-input v-model="value3" placeholder="自定义前后 icon (插槽式)">
      <template #prefix>
        <vi-icon name="Plus" size="16px" color="var(--vi-color-primary)" />
      </template>
      <template #suffix>suffix but not Icon</template>
    </vi-input>
  </vi-flex>
</template>