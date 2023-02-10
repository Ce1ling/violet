<script setup lang="ts">
import { ref, watch } from 'vue'


const checked = ref<boolean>(false)
watch(checked, () => {
  console.log('change');
})

</script>

<template>
  <div class="vi-switch" :class="{ 'is-checked': checked }" @click="checked = !checked">
    <!-- <input type="checkbox" class="vi-switch__input" v-model="checked" /> -->
    <div class="vi-switch__active"></div>
  </div>
</template>

<style lang="scss">
.vi-switch {
  width: 40px;
  // max-width: 40px;
  height: 20px;
  background-color: var(--shadow-color);
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  .vi-switch__input {
    opacity: 0;
  }
  .vi-switch__active {
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: left .3s;
    border: 2px solid var(--shadow-color);
  }

  &.is-checked {
    background-color: var(--primary-color);
    .vi-switch__active {
      left: calc(100% - 20px);
      border-color: var(--primary-color);
    }
  }
}
</style>