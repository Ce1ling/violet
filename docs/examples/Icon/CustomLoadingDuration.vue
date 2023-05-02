<script lang="ts" setup>
import { ref } from 'vue'

const duration = ref(2)
</script>

<template>
  <vi-row align="center">
    <vi-icon name="Loading" size="28px" loading :duration="duration" />
    <p>当前动画时间为：{{ duration }} 秒</p>
    <vi-button circle @click="duration ++"> 
      <vi-icon name="Plus" title="增加" size="18px" /> 
    </vi-button>
    <vi-button circle @click="duration --"> 
      <vi-icon name="Minus" title="减少" size="18px" /> 
    </vi-button>
  </vi-row>
</template>