<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const show2 = ref(false)
const val = ref('tab1')

const onOpen = (val: boolean) => {
  console.log('open', val)
}
const onClose = (val: boolean) => {
  console.log('close', val)
}
</script>

<template>
  <div class="test">
    <span>基础：</span>
    <vi-button @click="show = true">open</vi-button>
    <vi-dialog v-model="show" title="tip" :show-close-btn="false" @open="onOpen" @close="onClose">
      <template #header> 
        <div> i am header </div>
        <vi-button @click="show = false">close</vi-button>
      </template>
      <vi-tabs v-model="val">
        <vi-tab name="tab1" label="tab1">tab1</vi-tab>
        <vi-tab name="tab2" label="tab2">tab2</vi-tab>
        <vi-tab name="tab3" label="tab3">tab3</vi-tab>
      </vi-tabs>
      <vi-dialog 
        v-model="show2" 
        title="is nest" 
        content="nested dialog contnet"
        width="30%" 
        append-to-body 
        @open="onOpen" 
        @close="onClose" 
      />
      <template #footer>
        <vi-button @click="show = false">confirm</vi-button>
        <vi-button type="info" @click="show = false">cancel</vi-button>
        <vi-button type="warning" @click="show2 = true">nested dialog</vi-button>
      </template>
    </vi-dialog>
    
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>