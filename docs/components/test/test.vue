<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref(1)
const val2 = ref(0)
const val3 = ref(0)
const val4 = ref(0)
const val5 = ref(1)
const val6 = ref(1)
const val7 = ref(1)

</script>

<template>
  <div class="test">
    <vi-row>
      基础：<vi-stepper v-model="val1" />
    </vi-row>
    <vi-row>
      禁用：<vi-stepper v-model="val1" disabled />
    </vi-row>
    <vi-row>
      步数3：<vi-stepper v-model="val2" :step="3" />
    </vi-row>
    <vi-row>
      最小1，最大5：<vi-stepper v-model="val3" :min="1" :max="5" />
    </vi-row>
    <vi-row>
      最小1，最大10，步数2：<vi-stepper v-model="val4" :min="1" :max="10" :step="2" />
    </vi-row>
    <vi-row>
      保留2位小数：<vi-stepper v-model="val5" :to-fixed="2" :max="5" :step="0.3" />
    </vi-row>
    <vi-row>
      左边：<vi-stepper v-model="val6" :max="5" position="left" />
    </vi-row>
    <vi-row>
      右边：<vi-stepper v-model="val7" :min="1" :max="3" position="right" />
    </vi-row>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>