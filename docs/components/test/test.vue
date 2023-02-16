<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
const val5 = ref('')
const val6 = ref('')
const val7 = ref('')
const val8 = ref('')
const val9 = ref('')
const val10 = ref('')
const val11 = ref('')
const val12 = ref('')
</script>

<template>
  <div class="test">
    <vi-input v-model="val1" placeholder="基础 Input" />
    <vi-input v-model="val2" placeholder="禁用态" disabled />
    <vi-input v-model="val3" placeholder="可清除" clearable />
    <vi-input v-model="val4" type="password" placeholder="切换显示密码" show-pwd clearable />
    <vi-input v-model="val5" placeholder="限制输入" limit="10" show-pwd clearable show-limit />
    <vi-input v-model="val6" type="textarea" placeholder="文本域" />
    <vi-input v-model="val7" type="textarea" placeholder="文本域--限制输入" limit="10" show-limit />
    <vi-input v-model="val8" placeholder="自定义前后 icon" pre-icon="Check" suf-icon="Close" />
    <vi-input v-model="val10" placeholder="自定义前后 icon (对象式)" 
      :pre-icon="{ name: 'Apple', size: '16px' }" 
      :suf-icon="{ name: 'Mac', size: '16px' }" 
    />
    <vi-input v-model="val9" placeholder="自定义前后 icon (插槽模式)" clearable show-pwd>
      <template #prefix>
        <vi-icon name="Search" size="16px" color="var(--info-color)" />
      </template>
      <template #suffix>
        <vi-icon name="Home" size="16px" />
      </template>
    </vi-input>
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