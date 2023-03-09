<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('tab1')

</script>

<template>
  <div class="test">
    <vi-tabs v-model="val1">
      <vi-tab 
        v-for="i in ['tab1', 'tab2', 'tab3']"
        :label="i" 
        :name="i"
      >content {{ i }}</vi-tab>
    </vi-tabs>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>