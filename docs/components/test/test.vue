<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
</script>

<template>
  <div class="test">
    <vi-input v-model="val1" placeholder="基础 Input" />
    <vi-input v-model="val2" placeholder="禁用态" disabled />
    <vi-input v-model="val3" placeholder="可清除" clearable />
    <vi-input v-model="val4" type="password" placeholder="切换显示密码" show-pwd />
  </div>
</template>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 18px;
}
</style>