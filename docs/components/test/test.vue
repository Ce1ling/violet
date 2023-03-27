<script setup lang="ts">
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
</script>

<template>
  <div class="test">
    <vi-button @click="show1 = true">左侧</vi-button>
    <vi-button @click="show2 = true">右侧</vi-button>
    <vi-button @click="show3 = true">顶部</vi-button>
    <vi-button @click="show4 = true">底部</vi-button>
    <vi-drawer v-model="show1" title="Hi title" direction="l-r" :show-close="false">
      从左出来
    </vi-drawer>
    <vi-drawer v-model="show2" title="Hi title">
      <template #header>
        <h4>header title</h4>
      </template>
      从右出来
    </vi-drawer>
    <vi-drawer v-model="show3" title="hi" direction="t-b">
      从上出来
      <template #footer>
        <vi-button>confirm</vi-button>
        <vi-button type="danger">cancel</vi-button>
      </template>
    </vi-drawer>
    <vi-drawer v-model="show4" title="Hi title" direction="b-t" :click-mask-close="false">
      从下出来
    </vi-drawer>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>