<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('')
</script>

<template>
  <div class="test">
    <vi-header>
      header content
    </vi-header>
    <vi-main>
      main content
    </vi-main>
    <vi-aside>
      aside content
    </vi-aside>
    <vi-footer>
      footer content
    </vi-footer>
    <vi-flex direction="column">
      <vi-flex style="border: 1px solid blue;">item 1</vi-flex>
      <vi-flex>
        <vi-flex style="border: 1px solid blue;">item 2</vi-flex>
        <vi-flex style="border: 1px solid blue;">item 3</vi-flex>
      </vi-flex>
    </vi-flex>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 18px;

  // test
  > * {
    border: 1px solid red;
  }
}
</style>